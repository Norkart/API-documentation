# API Eiendomsdata

API Eiendomsdata exposes geographic information about Matrikkelenheter and Teiger. (Matrikkel is the Norwegian cadaster system)

## Example: Get matrikkel information by coordinate
To get matrikkel information for the a point with coordinates: latitude: 63.4267428, longitude: 10.3981875

### Request

```
GET
https://matrikkelkart.api.norkart.no/teig/punkt?X=10.3981875&Y=63.4267428&api_key=${{YOUR_API_KEY}}&GeometryTextFormat=GeoJson
```

### Responses

```json
{
    "Teiger": [
        {
            "Kommunenummer": 5001,
            "Gaardsnummer": 400,
            "Bruksnummer": 2,
            "Festenummer": 0,
            "Seksjonsnummer": 0,
            "SeksjonsnummerTeig": 0,
            "BeregnetAreal": 34567.1,
            "ArealMerknader": "",
            "HovedTeig": true,
            "Tvist": false,
            "TeigMedFlereMatrikkelEnheter": false,
            "Matrikkelenheter": [
                {
                    "Matrikkelnummer": "50010040000020000000",
                    "Kommunenummer": 5001,
                    "Gaardsnummer": 400,
                    "Bruksnummer": 2,
                    "Festenummer": 0,
                    "Seksjonsnummer": 0
                }
            ],
            "GIDTekst": "400/2",
            "WellKnownTextGeometri": "POLYGON((10.394931871173 63.4266173201943,10.3950769119916 63.4275272726636,10.3962669005904 63.4276105375703,10.3969662574657 63.4276594498991,10.3993155031056 63.427823905461,10.3992506790034 63.4277315448725,10.399325799194 63.4275090940061,10.3996300084887 63.4274476806206,10.3998689321224 63.4274364551784,10.3998075127516 63.4267895924829,10.3994335128122 63.4262663417334,10.3970695619709 63.4260894658077,10.3969826476046 63.42632513612,10.3969833127487 63.4264005308973,10.3969036010171 63.4264013994269,10.3969087848324 63.4264996397293,10.3965147091802 63.4265014245545,10.3965153491323 63.4265310402299,10.3964568462089 63.4265312525479,10.3964562063173 63.4265016368721,10.3963782750844 63.4265020389006,10.3963782686371 63.4265183759038,10.3962802731681 63.4265182557131,10.39627926511 63.4265016593269,10.3959223831702 63.4265059517424,10.3959220529921 63.4266186080289,10.3955259635011 63.4266161011343,10.3951891220298 63.4266163362905,10.3949651940329 63.4266185210816,10.394931871173 63.4266173201943))",
            "Geometri": "{\"type\":\"Polygon\",\"coordinates\":[[[10.394931871173,63.4266173201943],[10.3950769119916,63.4275272726636],[10.3962669005904,63.4276105375703],[10.3969662574657,63.4276594498991],[10.3993155031056,63.427823905461],[10.3992506790034,63.4277315448725],[10.399325799194,63.4275090940061],[10.3996300084887,63.4274476806206],[10.3998689321224,63.4274364551784],[10.3998075127516,63.4267895924829],[10.3994335128122,63.4262663417334],[10.3970695619709,63.4260894658077],[10.3969826476046,63.42632513612],[10.3969833127487,63.4264005308973],[10.3969036010171,63.4264013994269],[10.3969087848324,63.4264996397293],[10.3965147091802,63.4265014245545],[10.3965153491323,63.4265310402299],[10.3964568462089,63.4265312525479],[10.3964562063173,63.4265016368721],[10.3963782750844,63.4265020389006],[10.3963782686371,63.4265183759038],[10.3962802731681,63.4265182557131],[10.39627926511,63.4265016593269],[10.3959223831702,63.4265059517424],[10.3959220529921,63.4266186080289],[10.3955259635011,63.4266161011343],[10.3951891220298,63.4266163362905],[10.3949651940329,63.4266185210816],[10.394931871173,63.4266173201943]]]}",
            "SRS": 4326,
            "GeometryTextFormat": "GeoJson",
            "Matrikkelnummer": "50010040000020000000",
            "Id": 279098884,
            "Anleggsprojeksjonsflate": false
        }
    ],
    "GeometryFormat": "GeoJson",
    "SRS": 4326
}
```

## Example: Get matrikkel information by matrikkel id

To query matrikkel information by matrikkel id, you can either use the 20 digit matrikkel-identifier or query by the matrikel identifier's individual parts. For example, to get the matrikkel information for the property above ("Matrikkelnummer": "50010040000020000000", "Kommunenummer": 5001, "Gaardsnummer": 400, "Bruksnummer": 2, "Festenummer": 0, "Seksjonsnummer": 0), you can send the following GET requests:

### By 20 digit matrikkel ID
```
GET https://matrikkelkart.api.norkart.no/teig/matrikkelnummer?Matrikkelnummer=50010040000020000000&api_key=${{YOUR_API_KEY}}&GeometryTextFormat=GeoJson
```
### By matrikkel ID parts
```
GET https://matrikkelkart.api.norkart.no/teig/5001/400/2?api_key=${{YOUR_API_KEY}}&GeometryTextFormat=GeoJson
```
In either case, the response will be identical to the example above that queries by coordinate (since this property overlaps with the example coordinate)

## Getting started

- [React Example:](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) In this demo you can see matrikkelkart used in combination with fritekstsok and maptiles in a simple React application.
