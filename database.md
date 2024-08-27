# Tables

## beers

| Nom                | Type         | Description                                              |
|------------------- | ------------ | -------------------------------------------------------- |
| id                 | int          | identifiant de la bière                                  |
| name               | VARCHAR      | nom de la bière                                          |
| brewery            | VARCHAR      | Brasserie qui produit la bière                           |
| type               | VARCHAR      | Type de la bière (ex  IPA Lager Stout etc.)              |
| alcohol_percentage | DECIMAL      | Pourcentage d'alcool (%)                                 |
| country            | VARCHAR      | Pays d'origine                                           |
| countryCode        | VARCHAR      | Trigramme pays d'origine                                 |
| abv                | decimal      | Alcohol by volume (volume d'alcool)                      |
| ibu                | integer      | Indice d'amertume (IBU - International Bitterness Units) |
| description        | TEXT         | Description de la bière                                  |
| isOrganic          | Boolean      |  |
| isAlcoholic        | Boolean      |  |
| isPremium          | Boolean      |  |
| isBitter           | Boolean      |  |
| isSweet            | Boolean      |  |
| isStrong           | Boolean      |  |
| isLight            | Boolean      |  |
| rating             | DECIMAL      | Note moyenne                                             |
| cereals            | VARCHAR      | Céréales de la bière                                     |
| image_url          | VARCHAR      | Lien vers une image de la bière                          |
| created_at         | DATETIME     | Date d'ajout de la bière                                 |
| updated_at         | DATETIME     | Date de la dernière mise à jour de la bière              |

### Style de bières

- Pils
- Witbier
- Golden Ale
- Amber (Red Ale)
- Brown Ale
- IPA (India Pale Ale)
- Stout / Porter
- Triple (Belgian Strong Ale)
- Barleywine (Imperial Stout-IS)

## whiskies

| Nom                | Type         | Description                                               |
|------------------- | ------------ | --------------------------------------------------------- |
| id                 | int          | identifiant du whisky                                     |
| name               | VARCHAR      | nom du whisky                                             |
| distillery         | VARCHAR      | Distillerie qui produit le whisky                         |
| type               | VARCHAR      | Type de whisky (ex : Scotch, Bourbon, Rye, etc.)          |
| age                | INTEGER      | Âge du whisky (en années)                                 |
| alcohol_percentage | DECIMAL      | Pourcentage d'alcool (%)                                  |
| country            | VARCHAR      | Pays d'origine                                            |
| countryCode        | VARCHAR      | Trigramme du pays d'origine                               |
| region             | VARCHAR      | Région (si pertinent, pour les whiskies écossais par ex.) |
| flavor_profile     | TEXT         | Profil de saveurs (ex : fumé, tourbé, boisé, fruité)      |
| cereals            | VARCHAR      | Céréales utilisées                                        |
| cask_type          | VARCHAR      | Type de fût utilisé pour le vieillissement                |
| description        | TEXT         | Description du whisky                                     |
| rating             | DECIMAL      | Note moyenne (si l'application permet de noter)           |
| image_url          | VARCHAR      | Lien vers une image du whisky                             |
| created_at         | DATETIME     | Date d'ajout du whisky                                    |
| updated_at         | DATETIME     | Date de la dernière mise à jour du whisky                 |

## reviews

| Nom           | Type     | Description                                                |
| ------------- | -------- | ---------------------------------------------------------- |
| id            | INTEGER  | Identifiant unique de la note/commentaire                  |
| user_id       | INTEGER  | Référence à l'utilisateur qui a laissé la note             |
| beverage_id   | INTEGER  | Identifiant de la boisson (peut être beer_id ou whisky_id) |
| beverage_type | VARCHAR  | Type de boisson (beer ou whisky)                           |
| rating        | DECIMAL  | Note attribuée par l'utilisateur (ex : de 1 à 5)           |
| comment       | TEXT     | Commentaire de l'utilisateur                               |
| created_at    | DATETIME | Date de création de la note/commentaire                    |

## breweries (Brasseries) et distilleries

## users

## other
