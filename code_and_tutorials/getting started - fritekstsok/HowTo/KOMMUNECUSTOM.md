# HowTo: Customize search for municipalities.
In some cases you may need to restrict your search to one or more municipalities, which is possible through the ```suggest/kommunecustom``` endpoint.

Swagger documentation: [Kommunecustom](https://www.webatlas.no/WAAPI-FritekstSok/swagger-ui/#!/suggest/CustomKommuneSuggestionRequestkommunecustom_Get)

## Example
In this example we will search for ```street addresses``` by the letter ```N``` within ```Hemsedal```. 

#### Parameters:
* ```Query```: N 
* ```Size```: 2 
* ```Targets```: gateadresse (only street addresses) 
* ```KommuneLimit```: 3042 (Hemsedal)

### Example request
```
GET
https://www.webatlas.no/WAAPI-FritekstSok/suggest/kommunecustom?Query=Svøovegen&Size=2&Targets=gateadresse&KommuneLimit=3042&api_key={{YOUR_API_KEY}}
```

### Example response

```json
{
    "Options": [
        {
            "Id": "30420110000130000000",
            "Type": "gateadresse",
            "Text": "Nedre Fjellstøllie 13, Hemsedal",
            "Score": 2.1000087E+09,
            "Url": "https://www.webatlas.no/WAAPI-FritekstSok/data/matrikkel/adresse/gateadresse/30420110000130000000",
            "PayLoad": {
                "AdresseMatrikkelNummer": "30420007100190000000",
                "Text": "Nedre Fjellstøllie 13, Hemsedal",
                "AdresseId": "30420110000130000000",
                "VegAdresseId": "30420110000130",
                "Posisjon": {
                    "X": 8.44649094586596,
                    "Y": 60.9274579135861,
                    "SRS": 4326
                },
                "PostNummer": "3560",
                "PostSted": "HEMSEDAL"
            },
            "LevenshteinScore": 30,
            "ExactMatches": 0
        },
        {
            "Id": "30420110000170000000",
            "Type": "gateadresse",
            "Text": "Nedre Fjellstøllie 17, Hemsedal",
            "Score": 2.10000832E+09,
            "Url": "https://www.webatlas.no/WAAPI-FritekstSok/data/matrikkel/adresse/gateadresse/30420110000170000000",
            "PayLoad": {
                "AdresseMatrikkelNummer": "30420007100230000000",
                "Text": "Nedre Fjellstøllie 17, Hemsedal",
                "AdresseId": "30420110000170000000",
                "VegAdresseId": "30420110000170",
                "Posisjon": {
                    "X": 8.44670488338071,
                    "Y": 60.9273546451684,
                    "SRS": 4326
                },
                "PostNummer": "3560",
                "PostSted": "HEMSEDAL"
            },
            "LevenshteinScore": 30,
            "ExactMatches": 0
        }
    ],
    "SRS": 4326
}

```

The ```Url``` field in the response contains the search endpoint where you will get more detailed information over the address in question.  



