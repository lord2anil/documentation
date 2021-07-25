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
