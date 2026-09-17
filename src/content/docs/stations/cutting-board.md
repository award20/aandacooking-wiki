---
title: Cutting Board
description: Cutting, peeling, shredding, cracking, and retrieving prepared ingredients.
---

The **Oak Cutting Board** is an in world preparation station that holds one ingredient at a time. It is used for registered cutting and preparation paths before ingredients move into cooking or processing stations.

<div class="page-summary">
    <p><strong>Status: Implemented</strong></p>
    <p>The interaction flow below covers the current Cutting Board behavior. Individual preparation paths remain centralized on the [Ingredient Preparation](/getting-started/ingredient-preparation/) page.</p>
</div>

## Placing an ingredient

Use a supported washed ingredient on an empty Cutting Board. The board takes one item from the held stack and stores it as the active ingredient. Creative mode does not decrement the held stack.

If the ingredient is not washed when washing is required, the board refuses normal preparation and displays the wash first message.

The board automatically selects the first registered cut style available for the placed ingredient.

## Choosing a cut

While holding a kitchen knife, **sneak use** the Cutting Board to cycle through the registered cut styles available for the current ingredient.

The selected style is shown through the Cutting Board HUD. Only preparation paths registered for that exact ingredient can be selected.

## Cutting

Use a kitchen knife normally on the board to advance the selected cutting preparation.

Each successful knife action:

- advances preparation progress by one interaction
- damages the knife by one durability point
- plays the cutting feedback for the station

When the required number of interactions is reached, the held ingredient is replaced with the prepared output while preserving the relevant ingredient state.

## Peeling and other preparation actions

Some ingredients use a non knife preparation before cutting. For example, a registered peeling path can be performed with an empty hand interaction.

Normal empty hand behavior is context sensitive:

- if the held ingredient has a registered peeling action, normal empty hand use advances that preparation
- sneak use with an empty hand retrieves the ingredient
- when no contextual preparation applies, empty hand use retrieves the ingredient

Other registered preparation actions, such as cracking or shredding, are represented by the preparation system and documented with their applicable ingredient path.

## Breaking the board

If the Cutting Board is broken while it still contains an ingredient, the held item is scattered into the world instead of being silently deleted.

## Preparation paths

The complete currently documented path table, including Tomato, Onion, Garlic, Egg, and [Fresh Cheese](/recipes/details/fresh-cheese/) transformations, is kept on [Ingredient Preparation](/getting-started/ingredient-preparation/).

## Recipe Book integration

The recipe planning system can trace a prepared recipe requirement back through its registered ingredient preparation path. A pinned recipe can therefore show chains such as:

`Tomato → Sink → Cutting Board → Diced Tomato`

The exact chain depends on the executable recipe requirement rather than a separate manually written prerequisite list.

## Related pages

- [Kitchen Sink](/stations/kitchen-sink/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Recipe Book](/recipe-book/overview/)
