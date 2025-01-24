# API-Adresse- og eiendomssøk 

### Introduction
API-Adresse- og eiendomssøk is a REST API designed for accurate and rapid searches across multiple data sources in Norway. The service provides updated information from Norkart's synchronized copy of the land register and property register, with a maximum delay of one day.

![Implementation of the api together with a map](images\Sok_Produktbeskrivelse-D8mOVPYT.png) <br clear="left"/>
Implementation of the Adresse- og eiendomssøk API to enable interactive address and property search with a map.

### Main Functionality
- **Autocomplete Search**: Provides immediate responses based on the entered search text. Not designed to handle typos.
- **Fuzzy Search**: Allows simple typos, offering greater flexibility.
- **Geocoding**: Validates addresses and provides details about the accuracy of the results.
- **Reverse Geocoding**: Searches for data sources based on geographical coordinates.

### Data Sources
Searches can be performed against several data sources:
- **Norkart's synchronized copy of the land register and property register (Kartverket)**:
  - Street addresses and streets
  - Properties (Land units): Current and expired
  - Owners: Organizations and individuals
- **Central Place Name Register (SSR)**: Place names
- **Other copies of data from Kartverket**: Postal zones

### Handling Geographical Information
The service returns data in JSON format. For geographical information, the GeoJSON standard is used with coordinates in WGS4 (EPSG:4326). Users can specify other input and output coordinate systems.

### Technical Documentation
The service is documented through Norkart's documentation portal, ensuring user-friendliness and efficient integration by testing various endpoints. Swagger/Open API documentation is available upon request.

### Subscription Requirement
Please note that this service requires a subscription. For inquiries, you can contact us here: [Norkart Customer Support](https://www.norkart.no/kundestotte).

### API Examples
- **Autocomplete**: It is recommended to use the `/suggest/kommunecustom` endpoint for addresses.
- **Search for more information**: Use the `/search/kommunecustom` endpoint for more detailed information, with support for fuzzy searches.

#### Example Request
```http
GET https://fritekstsok.api.norkart.no/suggest/kommunecustom?targets=gateadresse&Query=Oslo&Size=1&api_key={{YOUR_API_KEY}}
Example Response
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
The URL field in the response provides access to more detailed information about the address.