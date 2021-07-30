# API-Fritekstsok
Fritekstsok is the search service from Norkart, which holds the most updated addresses in Norway.  

Swagger: [Fritekstsok-Swagger](https://www.webatlas.no/WAAPI-FritekstSok/swagger-ui/)

## Code examples and tutorials
- [Getting Started](./../code_and_tutorials/getting%20started%20-%20fritekstsok)
- [React Example:](./../code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) In this demo you can see fritekstsøk used in a simple React application.

## Example of address search

The ```suggest/matrikkel/adresse``` endpoint, returns a list of address suggestions based on the ```Query``` parameter, where you can limit the size of the returned list by the ```Size``` parameter. 

### Example request

```
GET
https://www.webatlas.no/WAAPI-FritekstSok/suggest/matrikkel/adresse?Query=Oslo&Size=1&api_key={{YOUR_API_KEY}}
```

### Example response

```json
{
    "Text": "Oslo",
    "Options": [
        {
            "Id": "03011544900030000000",
            "Type": "gateadresse",
            "Text": "Oslo gate 3, Oslo",
            "Score": 2.10000973E+09,
            "Url": "https://www.webatlas.no/WAAPI-FritekstSok/data/matrikkel/adresse/gateadresse/03011544900030000000",
            "PayLoad": {
                "__type": "WAAPI.FritekstSok.ServiceModel.Types.GateAdressePayLoad, WAAPI.FritekstSok.ServiceModel",
                "AdresseMatrikkelNummer": "03010023400160000000",
                "Text": "Oslo gate 3, Oslo",
                "AdresseId": "03011544900030000000",
                "VegAdresseId": "03011544900030",
                "Posisjon": {
                    "X": 10.7674570988434,
                    "Y": 59.907481195312,
                    "SRS": 4326
                },
                "PostNummer": "0192",
                "PostSted": "OSLO"
            },
            "LevenshteinScore": 13,
            "ExactMatches": 2
        }
    ],
    "SRS": 4326
}

```

The ```Url``` field in the response contains the search endpoint where you more detailed information over the address in question.  
