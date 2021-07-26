# Blocks

Volto features the Pastanaga Editor Engine, allowing you to visually compose a page using blocks.
The editor allows you to add, modify, reorder and delete blocks given your requirements.
Blocks provide the user the ability to display content in an specific way, although they can also define behavior and have specific features.
Blocks are composed of two basic (and required) components: the block edit and view components.

By default, Volto ships with the most basic set of blocks: Title, Text, Image, Video, Maps, etc...

::: warning Note
Volto Blocks are not enabled by default in Plone content types, in order to enable this feature, you should enable provided behavior in a per content type basis.
The programmatic name of the behavior is `volto.blocks`, or `Blocks` in the Behavior tab of the Dexterity Content Types control panel.


If you are using the `kitconcept.volto` package, it sets it up for you for the `Document` content type.
:::


## How to manually enable Blocks on a content type

You can enable them on any content type by enabling `Blocks` behavior provided by `plone.restapi`.

1. Go to `ControlPanel` -> `Dexterity Content Types`, select the content type.
2. Go to `Behaviors`
3. Select the `Blocks` behavior
4. Save

You can also add the behavior programatically via GenericSetup:

```xml
<?xml version="1.0"?>
<object name="LRF" meta_type="Dexterity FTI" i18n:domain="plone"
   xmlns:i18n="http://xml.zope.org/namespaces/i18n">
 <property name="behaviors" purge="false">
  <element value="plone.restapi.behaviors.IBlocks" />
 </property>
</object>
```

Test that the content type you've just enabled `Blocks` behavior is working, by creating a new object of that type from Volto.

## Anatomy

Every blocks is composed of an edit (`Edit.jsx`) and a view (`View.jsx`) component.

This components can be as simple as a dummy component, no boilerplate is required.
This is an example of the `Edit.jsx`:

```jsx
import React from 'react';

const Edit = props => {
  return <div>I'm the Block edit component!</div>;
};

export default Edit;
```

and the `View.jsx`.

```jsx
import React from 'react';

const View = props => {
  return <div>I'm the Block view component!</div>;
};

export default View;
```

## Block view component props

The view component of a block receives these props from the Blocks Engine:

- `id` - the unique ID for the current block
- `properties` - the current content
- `data` - the data of the block (stored in the block itself)
- `blocksConfig` - a (potentially customized) copy of the
  `config.blocks.blocksConfig` configuration object, useful for blocks that
  need to render other blocks

You can use them to render the view component.

## Block edit component props

The edit component of a block receives these props from the Blocks Engine:

- `type` - the type of the block
- `id` - the unique ID for the current block
- `data` - the data of the block (stored in the block itself)
- `selected` - (Bool) true if the block is currently selected
- `index` - the block index order in the list of blocks
- `pathname` - the current URL pathname
- `onAddBlock` - handler for adding a block in the block list
- `onMutateBlock` - handler for mutating a block type into another
- `onChangeBlock` - handler for changing the data of that block
- `onSelectBlock` - handler for selecting the block
- `onDeleteBlock` - handler for deleting the block
- `onFocusPreviousBlock` - handler for focusing the previous block in the block list
- `onFocusNextBlock` - handler for focusing the next block in the block list
- `handleKeyDown` - handler for managing press keys while the block is selected
- `onMoveBlock` - handler for moving blocks
- `blocksConfig` - a (potentially customized) copy of the
  `config.blocks.blocksConfig` configuration object, useful for blocks that
  need to render other blocks

You can use all these props to render your edit block and model its behavior.

## Block extensions mechanism

A common pattern in blocks is "variations" - slightly different versions of
a block that can be toggled on demand by the editors. Choosing the
listing template (gallery, summary listing, etc) for the Listing block is
one example of the typical use cases for this feature.

A block can define variations in the block configuration. These variations can
be used to enhance or complement the default behavior of a block without having
to shadow its stock components. These enhancements can be at a settings level
(add or remove block settings) via schema enhancers or, if the code of your
block allows it, even use alternative renderers (eg. in view mode) showing the
enhanced fields or modifying the block look and feel or behavior.

::: warning Note
The Listing block already supports several of them (only in the "template" or
the component to show on view mode), and can be extended, although it still
do not use the final specification on how to define them in the
configuration, (that will change in next Volto versions). The rest of the
stock Volto blocks will also follow to support variations by default.
:::


While it is up to each specific block implementations on how they actually use
this machinery, Volto provides the infrastructure to help define block
extensions and variations.

### Block variations

Volto ships with a default extension mechanism for blocks, named "variation".
It is advisable to use this extension point for the typical use case of
"alternative view template for the block".

A block can define variations in the block configuration. These variations can
be used to enhance or complement the default behavior of a block without having
to shadow its stock components. These enhancements can be at a settings level
(add or remove block settings) via schema enhancers or, if the code of your
block allows it, even use alternative renderers (eg. in view mode) showing the
enhanced fields or modifying the block look and feel or behavior.

If you use schema-based forms to edit the block's data, use the `BlockDataForm`
component instead of the `InlineForm`. The BlockDataForm component will automatically
inject a "variation" select dropdown into the form (if any defined), allowing editors
to choose the desired block variation.

This is how the configuration would like for an imaginary block:

```jsx
export default (config) => {
  config.blocks.blocksConfig.teaserBlock.variations = [
    {
      id: 'default',
      title: 'Default',
      isDefault: true,
      render: SimpleTeaserView
    },
    {
      id: 'card',
      label: 'Card',
      render: CardTeaserView,
      schemaEnhancer: ({schema, formData, intl}) => {
        schema.properties.cardSize = '...'; // fill in your implementation
        return schema;
      }
    }
  ];
}
```

Notice the `schemaEnhancer` field, which allows customization of the schema for
schema-based blocks, when a particular variation is chosen.

To get the same behavior for any other custom extension, you can wrap
InlineForm in the `withBlockSchemaEnhancer` HOC:

```jsx
import { defineMessages } from 'react-intl';

const GalleryBlockForm = withBlockSchemaEnhancer(InlineForm, 'galleryTemplates');
```

You can even wrap BlockDataForm with it and "stack" multiple block extensions
selection dropdowns.

### Schema enhancers

In addition to the select dropdown, the `withBlockSchemaEnhancer` also provides
a schema enhancement mechanism. Any registered extension plugin can provide
a `schemaEnhancer` function that can tweak the schema to be used by the
`InlinForm` component. This function receives an object with `formData`, which
is the block data, `schema` - the original schema that we want to tweak and the
injected `intl`, to aid with internationalization.

For example:

```jsx

const messages = defineMessages({
  title: {
    id: 'Column renderer',
    defaultMessage: 'Column renderer',
  },
});

export default (config) => {
  config.blocks.blocksConfig.dataTable.extensions = {
    ...config.blocks.blocksConfig.dataTable.extensions,
    columnRenderers: {
      title: messages.title,
      items: [
        {
          id: 'default',
          title: 'Default',
          isDefault: true,
          render: DefaultColumnRenderer
        },
        {
          id: 'number',
          title: 'Number',
          render: NumberColumnRenderer,
        },
        {
          id: 'colored',
          title: 'Colored',
          renderer: ColoredColumnRenderer,
          schemaEnhancer: ({formData, schema, intl}) => {
            schema.properties.color = {
              widget: 'color',
              title: 'Color',
            };
            schema.fieldsets[0].fields.push('color');
            return schema;
          }
        }
      ]
    }
  }
}
```

::: warning Note
The schemaEnhancer is a generic extension mechanism provided by
`withBlockSchemaEnhancer`. The `BlockDataForm` component already integrates
it for the `variation` extension.
:::

### Consuming the extensions

It is completely up to the block implementation on what exactly is an
"extension". The typical use case is to make parts of view renderer
"replaceable". If used with the withBlockSchemaEnhancer-derived forms, the
chosen extension is saved in the block data, but in the rendering we'll
actually need the "resolved" extension object from the blocksConfig
configuration. To help with this We have another HOC, the
`withBlockExtensions`, which injects the resolved extensions object as props.
To use it, wrap your relevant components, for example the block View component.

```
const TableBlockView = (props) => {
  const variation = props.variation;
  const Renderer = variation.view;

  return <Renderer {...props} />;
};

export default withBlockExtensions(TableBlockView);
```
