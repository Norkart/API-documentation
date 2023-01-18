## Example: Intersection query on the kumulesone dataset. 

Parameters explanation:
* ```shouldClip```: whether the output geom should be clipped based on input geom (true/false)
* ```Geometry```: Request area. (geojson format)

### Request
Request type: ```POST```

URL
```
https://datavarehus.api.norkart.no/v2/views/sv_norkart_2_kumuleflate/features/intersectionquery?api_key={{YOUR_API_KEY}}
```
BODY
```json
{
    "type": "FeatureCollection",
    "bbox": null,
    "features": [
        {
            "type": "Feature",
            "bbox": [
                10.520307059205086,
                63.39736820210165,
                10.52329710191037,
                63.39942685007544
            ],
            "geometry": <<Geometry of the intersection result ( many lines )>>,
            "properties": {
                "komm": "5001",
                "kumulesone": "500100736",
                "dvh_objekttype": "kumuleflate"
            }
        }
    ]
}
```

### Response

```json
{
    "type": "FeatureCollection",
    "bbox": null,
    "features": [
        {
            "type": "Feature",
            "bbox": [
                10.520307059205086,
                63.39736820210165,
                10.52329710191037,
                63.39942685007544
            ],
            "geometry": <<Geometry of the intersection result ( many lines )>>,
            "properties": {
                "komm": "5001",
                "kumulesone": "500100736",
                "dvh_objekttype": "kumuleflate"
            }
        }
    ]
}
```
