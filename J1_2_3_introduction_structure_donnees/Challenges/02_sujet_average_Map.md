
# 02 Sujet average Map 

1. En utilisant les données DataStudents et la clé average, créez un Map puis calculez la moyenne de chaque étudiant. Les valeurs seront données avec une précision de deux décimales après la virgule.

2. Mettez à jour la mention en fonction de la moyenne obtenue, voir la clé mention dans les données. Pour les différentes moyennes vous utiliserez le code d'attribution de la mentions suivant :

- TB pour 17 à 20
- B pour 14 à 16
- AB pour 12 à 13
- P pour 10 à 11
- Pour les autres cas ne mettre aucune mention.

3. Créez un script qui permet d'ajouter un étudiant avec la convention de clé suivante : sX, où X représente un nombre. Vérifiez avant l'ajout que la clé n'existe pas dans le littéral.

```js

const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
         [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

// création du Map
const dataStMap = new Map(DataStudents);
```