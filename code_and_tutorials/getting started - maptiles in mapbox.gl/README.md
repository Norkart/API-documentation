# Getting started with Maptiles in Mapbox.gl

[Developer documentation for Maptiles](../API-maptiles)

Maptiles are raster tiles (many small images) which are different than Mapbox Vector Tiles and needs to be added as raster-tiles source in Mapbox.gl. 

See the complete code example at CodePen https://codepen.io/alexanno/pen/NWRpYER

The relevant part is extracted below:

```javascript
style: {
    'version': 8,
	'sources': {
        'raster-tiles': {
		'type': 'raster',
        'tiles': [
			'https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=' + apiKey
		],
		'tileSize': 256,
        'attribution': '© 2020 Norkart AS/Geovekst og kommunene/OpenStreetMap/NASA/EEA CLC2006/Meti/Plan- og bygningsetaten, Oslo Kommune'
	}
```

### Api Key

Request API access [here](https://www.norkart.no/dataoganalyse/).