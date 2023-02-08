# API-Datavarehus
This API allows you to query the datavarehus-database to retrieve geospatial features which matches a query. Returns data as GeoJSON FeatureCollections. 

Swagger: [Datavarehus-Swagger](https://datavarehus.api.norkart.no/swagger/index.html)

Request API access [here](https://www.norkart.no/dataoganalyse/).

## Example: Do a intersection query on the traffic volume dataset. 
(see more examples [here](#more-examples))

Parameters explanation:
* ```Ids```: List of dataset ids you want to query. 
* ```Geometry```: Request area. 
* ```ClipBuffer```: If request area intersects with dataset. Clip at intersection, or incude a buffer to the response area. If 0, only area that intersects with the request is included. 

### Request
Request type: ```POST```

URL
```
https://datavarehus.api.norkart.no/v2/views/features/intersectionquery?api_key={{YOUR_API_KEY}}
```
BODY
```
{
    "Ids": ["sv_svv_24_aadt"],
    "Geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    10.489873,
                    63.431307
                ],
                [
                    10.490001,
                    63.431072
                ],
                [
                    10.488811,
                    63.430904
                ],
                [
                    10.488628,
                    63.43111
                ],
                [
                    10.489873,
                    63.431307
                ]
            ]
        ]
    },
    "ClipBuffer": 0
}
```

### Response

```json
{
    "sv_svv_24_aadt": {
        "type": "FeatureCollection",
        "bbox": null,
        "features": [
            {
                "type": "Feature",
                "bbox": [
                    10.488694846302817,
                    63.43103475242095,
                    10.489915589921425,
                    63.43122880778007
                ],
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            10.488694846302817,
                            63.43103475242095,
                            0
                        ],
                        [
                            10.488769920458822,
                            63.43105250905373,
                            0
                        ],
                        [
                            10.488900554841255,
                            63.431080914733116,
                            0
                        ],
                        [
                            10.489033297465012,
                            63.43110740878982,
                            0
                        ],
                        [
                            10.48907210593495,
                            63.43111465955671,
                            0
                        ],
                        [
                            10.489167377447,
                            63.43113178702709,
                            0
                        ],
                        [
                            10.489303779484398,
                            63.43115417047448,
                            0
                        ],
                        [
                            10.48941695710104,
                            63.43117105439856,
                            0
                        ],
                        [
                            10.489531544853506,
                            63.43118663406908,
                            0
                        ],
                        [
                            10.489646743672424,
                            63.43120088423304,
                            0
                        ],
                        [
                            10.489762938977504,
                            63.431213906982634,
                            0
                        ],
                        [
                            10.48987994508435,
                            63.43122560653392,
                            0
                        ],
                        [
                            10.489915589921425,
                            63.43122880778007,
                            0
                        ]
                    ]
                },
                "properties": {
                    "adtaar": 2020, //Year
                    "adttotal": 4559, //Daily traffic volume at the returned area
                    "dvh_objekttype": "aadt"
                }
            }
        ]
    }
}
```

## More-Examples
- [kumulesone intersection](./MoreExamples/kumulesone_intersection.md)