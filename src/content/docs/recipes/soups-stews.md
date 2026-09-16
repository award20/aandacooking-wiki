---
title: Soups & Stews
description: Soup, stew, chowder, and creamy stockpot dishes currently represented in A & A Cooking.
---

Soups and stews are one of the largest established food groups in A & A Cooking. They are primarily associated with the [Stockpot](/cooking/stockpot/), which supports liquid cooking, recipe matching, freeform outcomes, serving, and finished-dish quality.

This page records the soup and stew outputs confirmed by the retained content snapshots. Exact ingredient quantities and cooking times will be added recipe by recipe as each current Recipe Book entry is verified.

## Current soup and stew outputs

| Internal ID | Display name | Type |
|---|---|---|
| `tomato_soup` | Tomato Soup | Soup |
| `onion_soup` | Onion Soup | Soup |
| `potato_soup` | Potato Soup | Soup |
| `vegetable_stew` | Vegetable Stew | Stew |
| `mysterious_stew` | Mysterious Stew | Freeform / fallback dish |
| `chicken_soup` | Chicken Soup | Soup |
| `beef_stew` | Beef Stew | Stew |
| `mushroom_soup_creamy` | Creamy Mushroom Soup | Creamy soup |
| `pumpkin_soup_creamy` | Creamy Pumpkin Soup | Creamy soup |
| `carrot_soup` | Carrot Soup | Soup |
| `beetroot_soup_hearty` | Hearty Beetroot Soup | Hearty soup |
| `salmon_chowder` | Salmon Chowder | Chowder |
| `chicken_stew_creamy` | Creamy Chicken Stew | Creamy stew |
| `tomato_soup_creamy` | Creamy Tomato Soup | Creamy soup |
| `potato_soup_creamy` | Creamy Potato Soup | Creamy soup |

The recipe catalog continues to expand during development, so this table is a documented content snapshot rather than a permanent upper limit.

## Verified example: Tomato Soup

The retained Recipe Book source contains a complete Tomato Soup entry. It uses:

- 2 diced Tomatoes
- 1 diced Onion
- 1 minced Garlic
- 2 cups Water

The preparation sequence requires the produce to be washed, the Tomatoes and Onion to be diced, and the Garlic to be peeled and minced.

The Recipe Book describes the final cooking step as a **20 minute gentle simmer** in the Stockpot. The prepared ingredients and water are added to the pot, brought to a gentle simmer, and cooked until the vegetables soften and the soup thickens.

This is a useful example of how A & A Cooking recipes can depend on several preparation chains before the final cooking stage.

## Creamy variants

Several soups and stews have creamy variants, including:

- Creamy Tomato Soup
- Creamy Potato Soup
- Creamy Mushroom Soup
- Creamy Pumpkin Soup
- Creamy Chicken Stew

Cream is an established intermediate item in the current food catalog. The wiki will document the exact cream requirement for each dish when its current Recipe Book entry is checked.

## Stockpot behavior

Soup and stew recipes benefit from the Stockpot systems documented on the [Stockpot](/cooking/stockpot/) page, including:

- liquid-based recipe matching
- ingredient temperature simulation
- serving finished dishes
- freeform cooking when no exact recipe matches
- finished-dish quality calculations where supported
- pinned Recipe Book integration

The exact recipe still determines which prepared ingredients, liquids, temperature range, and cooking duration are required.

## Mysterious Stew

`mysterious_stew` is part of the mod's freeform cooking direction. It provides an outcome for ingredient combinations that do not resolve to a more specific canonical recipe under the applicable Stockpot logic.

Freeform output should not be treated as a replacement for discovered recipes. Canonical recipes can define more specific ingredients, preparation states, temperatures, durations, and final properties.

## Documentation status

The output list above is confirmed from retained project content. Tomato Soup has a complete retained Recipe Book entry, including ingredient quantities and cooking information. The remaining dishes are currently documented by confirmed item identity and family while their latest detailed recipe definitions are verified.

## Related pages

- [Recipe Catalog](/recipes/overview/)
- [Sauces & Intermediates](/recipes/sauces-intermediates/)
- [Stockpot](/cooking/stockpot/)
- [Ingredient Preparation](/getting-started/ingredient-preparation/)
- [Recipe Book](/recipe-book/overview/)
