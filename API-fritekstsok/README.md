# API-Fritekstsok
Fritekstsok exposes the most updated addresses in Norway.  

## Code examples and tutorials
- [Getting Started](./../code_and_tutorials/getting%20started%20-%20fritekstsok)
- [React Example:](./../code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) In this demo you can see fritekstsøk used in a simple React application.

## Recommendations

### Suggest - Autocomplete 
For autocomplete it is recommended to use the /suggest/kommunecustom endpoint. This endpoint can be used to search multiple targets (depending on what you want to search for), but for most purposes this endpoint should be used with targets=gateadresse. [An example is shown below](#example-get-address-suggestions-by-query)
[More details about the kommunecustom endpoints](../code_and_tutorials/getting%20started%20-%20fritekstsok/HowTo/KOMMUNECUSTOM.md)

### Search - Gives more information + 'Fuzzy'
While /suggest/kommunecustom is great for autocomplete purposes, sometimes one wants more information than what this endpoint returns. If this is the case, the search endpoint can be used insead: /search/kommunecustom. This endpoint can be used in the same way as the suggest-endpoint but it is a bit slower and therefore not suitable for autocomplete-purposes. 

Reasons to use this endpoint instead of suggest:
1. The search endpoint returns more information
2. The search-endpoint is 'fuzzy'. Meaning: If you are searching for an adress which has the name Huleveien 13, but you set query='Hulevegen 13' you will still get respons from the API. If you do the same 'typo' on the suggest-endpoint, this adress will not be returned. Another way to put it: the search-endpoint is less strict than the suggest-endpoint.


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

The ```Url``` field in the response contains the search endpoint where you get more detailed information over the address in question.  
