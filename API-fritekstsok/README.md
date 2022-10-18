# API-Fritekstsok
Fritekstsok exposes the most updated addresses in Norway.  

Swagger: [Fritekstsok-Swagger](https://fritekstsok.api.norkart.no/swagger-ui/)

## Code examples and tutorials
- [Getting Started](./../code_and_tutorials/getting%20started%20-%20fritekstsok)
- [React Example:](./../code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) In this demo you can see fritekstsøk used in a simple React application.

## Example: Get address suggestions by query

The ```suggest/kommunecustom``` endpoint with ```?targets=gateadresse```, returns a list of address suggestions based on the ```Query``` parameter, where you can limit the size of the returned list by the ```Size``` parameter. 

### Request

```
GET
https://fritekstsok.api.norkart.no/suggest/kommunecustom?targets=gateadresse&Query=Oslo&Size=1&api_key={{YOUR_API_KEY}}
```

### Response

```json
{
    "Options": [
        {
            "Id": "0301154490001000A000",
            "Type": "gateadresse",
            "Text": "Oslo gate 1A, Oslo",
            "Score": 2.10001e+09,
            "Url": "https://fritekstsok.api.norkart.no/data/matrikkel/adresse/gateadresse/0301154490001000A000",
            "PayLoad": {
                "__type": "WAAPI.FritekstSok.ServiceModel.Types.GateAdressePayLoad, WAAPI.FritekstSok.ServiceModel",
                "AdresseMatrikkelNummer": "03010023400470000000",
                "Text": "Oslo gate 1A, Oslo",
                "AdresseId": "0301154490001000A000",
                "VegAdresseId": "0301154490001A",
                "Posisjon": {
                    "X": 10.767611078632482,
                    "Y": 59.90835931871215,
                    "SRS": 4326
                },
                "PostNummer": "0192",
                "PostSted": "OSLO"
            },
            "LevenshteinScore": 14,
            "ExactMatches": 2
        }
    ],
    "TotalHits": 46,
    "SRS": 4326
}

```

The ```Url``` field in the response contains the search endpoint where you more detailed information over the address in question.  
