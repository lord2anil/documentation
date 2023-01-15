---
myst:
  html_meta:
    "description": "Workflows are used in Plone to keep track of metadata, chiefly an object's state, create content review cycles and model other types of processes, and to manage object security."
    "property=og:description": "Workflows are used in Plone to keep track of metadata, chiefly an object's state, create content review cycles and model other types of processes, and to manage object security."
    "property=og:title": "Workflows"
    "keywords": "Workflows"
---

(backend-workflows-label)=

# Workflows

```{seealso}
See the training {ref}`training:workflow-label`.
```

```{todo}
Contribute to this documentation!
See issue [Backend > Workflows needs content](https://github.com/plone/documentation/issues/1308).
```

A workflow is a system that manages the state of content objects and the actions that are allowed on those objects based on their current state.
Workflows in Plone are defined as a set of states, transitions, and permissions.
Each state defines the permissions that are granted to roles when the object is in that state.
Transitions define the possible state changes, and the permissions required to perform those changes.
For example, a simple workflow for a document might have states such as "private", "pending review", and "published" and transitions such as "submit for review" and "publish".
The permissions required to submit a document for review might be different from those required to publish a document.

## Using workflows

## Default workflows in Plone

Plone provides default workflows that can be used as is or as a starting point and can be customized to suit specific needs.

TODO: explain default workflows

# Creating or modifying a workflow

In Plone, workflows are implemented using the "DCWorkflow" Workflow Engine and can be found in the portal_workflow tool.

They can be defined, inspected, and customized using the Zope Management Interface (ZMI) and can be assigned to specific content types to manage their states and allowed actions.

todo

## Using the ZMI

todo

## How to define workflows using XML

Workflows in Plone are most commonly defined using XML files which are part of the GenericSetup profile.
These files are imported and applied when the profile is installed.
However, it is also possible to use Python code to define and customize workflows, although this method is less commonly used.

These XML files contain definitions for the states, transitions, and permissions associated with a particular workflow.
The XML files can be created and edited manually, or by exporting the current profiles Workflow Tool.

They typically include the following elements:

`<permission>`
    defines a permission that is managed by the workflow.
`<state>`
    defines a state in the workflow, including the ID of the state and the permissions that are granted to users when the object is in that state.
`<transition>`
    defines a transition between two states, including the ID of the transition, the state that the object is in before and after the transition, and the guard - like permissions or conditions - required to perform the transition.

