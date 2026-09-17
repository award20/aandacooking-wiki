---
title: Recipe Notes & Discovery
description: Discovering, copying, and sharing recipes with the generic Recipe Note system.
---

Recipe discovery is a core part of A & A Cooking progression. The current system uses one generic **Recipe Note** item that stores the ID of the recipe it represents.

## Discovering a recipe

Using a valid Recipe Note on a placed [Recipe Book](/recipe-book/overview/) adds that recipe to the book's discovered set when it is not already known. Successful discovery consumes the note.

The server validates that the referenced recipe exists before adding it to the book.

## Generating a Recipe Note

A player can create a note for a recipe their placed [Recipe Book](/recipe-book/overview/) already knows.

In Survival mode, copying a recipe costs **1 Paper**. In Creative mode, the copy does not consume Paper.

The server validates again:

- that the recipe exists
- that the placed book knows the recipe
- that the player is close enough to the book
- that the player can pay the Paper cost when required

The current interaction uses an 8-block distance check from the placed [Recipe Book](/recipe-book/overview/).

## Sharing recipes

Because the recipe ID is stored on the Recipe Note item, the note can be handed to another player. The receiving player can use it on their own [Recipe Book](/recipe-book/overview/) to discover the recipe without independently repeating the original discovery route.

This makes Recipe Notes both a progression mechanic and a multiplayer knowledge sharing system.

## Discovery routes

[Recipe Book](/recipe-book/overview/) recipes can use survival discovery routes organized by category. Current structure locations and the planned expansion are documented under [World Generation & Discovery](/development/world-generation-discovery/).

## Compatibility items

Older fixed per recipe note items remain registered for save compatibility. They are kept only for compatibility; new content uses the generic `aandacooking:recipe_note` item.

## Related pages

- [Recipe Book](/recipe-book/overview/)
- [Recipe Catalog](/recipes/overview/)
- [World Generation & Discovery](/development/world-generation-discovery/)
- [Documentation Coverage](/reference/documentation-status/)
