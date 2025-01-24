# Tile Map Service Developer Documentation

Tile Map Service (also kalled Maptiles) is a tilecache service that provides access to background maps and detailed aerial photos. The service utilizes a standard XYZ [tilescheme](https://en.wikipedia.org/wiki/Tiled_web_map).

## Tile URL Format

An example request is provided below, where {z}, {x}, {y}, and {apikey} are placeholders:

```plaintext
https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN={apikey}
```

## Available Tilesets

The available tilesets and their respective options are detailed below:

```javascript
options: {
    url: '//waapi.webatlas.no/maptiles/tiles/{tileset}/wa_grid/{z}/{x}/{y}.{ext}?APITOKEN={apikey}',
    tileset: {
        vector: {tileset: 'webatlas-standard-vektor', ext: 'png'},
        aerial: {tileset: 'webatlas-orto-newup', ext: 'jpeg'},
        hybrid: {tileset: 'webatlas-standard-hybrid', ext: 'jpeg'},
        grey: {tileset: 'webatlas-gray-vektor', ext: 'png'},
        medium: {tileset: 'webatlas-medium-vektor', ext: 'png'},
        lite: {tileset: 'webatlas-lite-vektor', ext: 'png'}
    },
}
```

## API Key

To access the API, request your key [here](https://www.norkart.no/dataoganalyse/).

## Integration Guides

### QGIS

To add a custom tile URL in QGIS:

1. Open QGIS.
2. Navigate to the Layer menu:
   - Select Add Layer.
   - Choose Add XYZ Layer...
3. In the XYZ Connection dialog:
   - Input a name, e.g., "WebAtlas".
   - Paste the URL in the URL field.
   - Click OK.
4. The "WebAtlas" layer will appear in the XYZ Tiles section. If it's not visible, go to View → Panels → Browser.
5. To add the layer to your project, double-click on it or drag it to the Layers Panel.

**Note:** Remember to append your API token to the `APITOKEN=` parameter in the URL.

### Leaflet.js Plugin

We offer an open-source plugin for Leaflet.js:

- [Code: GitHub Repository](https://github.com/Norkart/L.TileLayer.Webatlas)
- [Package: NPM](https://www.npmjs.com/package/leaflet-webatlastile)
- [Demo: Example code](https://github.com/Norkart/API-documentation/blob/main/code_and_tutorials/leaflet-webatlastiles-js)

### Other Libraries/Desktop Systems

For other libraries or desktop systems, refer to the URL schemes mentioned above and the examples and tutorials provided below.

## Examples and Tutorials

- [getting started - maptiles in leaflet.js](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20leaflet.js)
- [getting started - maptiles in mapbox.gl](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20mapbox.gl)
- [getting started - fritekstsok](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20wms-overlays%20in%20leaflet.js)
- [React App Demo](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) - Demonstrating maptiles, fritekstsok, and matrikkelkart in a simple React app.
- [Leaflet-webatlastile Example](https://github.com/Norkart/API-documentation/blob/main/code_and_tutorials/leaflet-webatlastiles-js)
