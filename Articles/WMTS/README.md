# Web Map Tile Service (WMTS) Developer Documentation

Web Map Tile Service (WMTS) is an OGC standard protocol for serving pre-rendered map tiles over the web. Norkart's WMTS implementation provides standardized access to background maps and detailed aerial photos through both RESTful and KVP (Key-Value Pair) interfaces, compliant with the [OGC WMTS 1.0.0 specification](https://www.ogc.org/standards/wmts).


### GetCapabilities
Retrieves service metadata, available layers, tile matrix sets, and supported operations.

**Request Example KVP:**
```plaintext
https://waapi.webatlas.no/maptiles/service?REQUEST=GetCapabilities&SERVICE=WMTS?APITOKEN={apikey}
```

**Request Example RESTful:**
```plaintext
https://waapi.webatlas.no/maptiles/wmts/1.0.0/WMTSCapabilities.xml?APITOKEN={apikey}
```

## Service Endpoints

WMTS supports multiple request methods and formats:

### RESTful Interface
```plaintext
https://waapi.webatlas.no/maptiles/wmts/{Layer}/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.{Format}?APITOKEN={apikey}
```

### KVP (Key-Value Pair) Interface
```plaintext
https://waapi.webatlas.no/maptiles/service?REQUEST=GetCapabilities&SERVICE=WMTS?APITOKEN={apikey}
```
*Note: KVP interface is only supported for GetCapabilities requests. Tile requests use the RESTful interface.*

### Differences  between KVP and RESTful and when to use them

WMTS offers two ways to request tiles:

**KVP (Key-Value Pair) Interface:**
- Uses query parameters for service discovery: `REQUEST=GetCapabilities&SERVICE=WMTS`
- Only supports GetCapabilities operation
- Traditional OGC service approach for metadata retrieval
- **Use when:** You need to discover available layers and service capabilities

**RESTful Interface:**
- Uses clean URLs with tile info in the path: `/layer/tilematrix/z/x/y.format`
- Resource-oriented approach with predictable URL patterns
- Required for all tile requests (GetTile operations)
- Easier to cache due to simpler URL structure
- **Use when:** Retrieving map tiles (all tile requests must use RESTful format)

**Quick decision guide:** Use KVP for GetCapabilities to discover service metadata, use RESTful for all tile requests.

For detailed specifications, refer to the [OGC WMTS Implementation Standard](https://www.ogc.org/standards/wmts) Section 10 (RESTful) and Section 8 (KVP).

## API Token Authentication

Norkart's WMTS service requires API token authentication for all requests. The authentication system is implemented outside the WMTS specification as a security layer.

### URL Parameter Authentication
For all URL-based requests, append the API token using the query parameter format:
```plaintext
?APITOKEN={your_api_key}
```

**Important:** Always use `?APITOKEN=` (with question mark) even when other query parameters are present. The API token system processes this parameter independently of the WMTS specification.

**Examples:**
- GetCapabilities: `https://waapi.webatlas.no/maptiles/service?REQUEST=GetCapabilities&SERVICE=WMTS?APITOKEN={your_api_key}`
- GetTile: `https://waapi.webatlas.no/maptiles/wmts/webatlas-orto-newup/wa_grid/10/512/256.jpeg?APITOKEN={your_api_key}`

### Header-Based Authentication
Some GIS applications may require header-based authentication instead of URL parameters:

**HTTP Header:**
```
x-waapi-token: {your_api_key}
```

This method is particularly useful for:
- QGIS when URL parameter method doesn't work
- ArcGIS Pro/ArcMap integration issues
- Applications that don't handle custom URL parameters well
- Programmatic access where headers are preferred

### Desktop GIS Integration Notes
- **QGIS**: Try URL parameter first (`?APITOKEN=`). If issues occur, use the `x-waapi-token` header method
- **ArcGIS**: May require the `x-waapi-token` header for proper authentication
- **Other GIS Software**: Both methods are supported - use whichever works best with your specific application

## WMTS Operations


### GetTile
Retrieves a specific map tile using RESTful requests.

**RESTful Request Example:**
```plaintext
https://waapi.webatlas.no/maptiles/wmts/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN={apikey}
```

*Note: This service supports tile requests via RESTful interface only. KVP GetTile requests are not supported.*

## Available Layers

The following layers are available through the WMTS service, organized by tile matrix set:

### Web Mercator Layers (wa_grid - EPSG:3857)

| Layer ID | Title | Description | Format | DPI |
|----------|-------|-------------|--------|-----|
| `webatlas-orto-newup` | WEBATLAS Orto NewUp | High-resolution aerial/satellite imagery | image/jpeg | Standard |
| `webatlas-standard-vektor` | WEBATLAS Standard Vektor | Standard vector-based topographic map | image/png | Standard |
| `webatlas-standard-hybrid` | WEBATLAS Standard Hybrid | Standard map with aerial imagery overlay | image/jpeg | Standard |
| `webatlas-standard-vektor-240dpi` | WEBATLAS Standard Vektor 240DPI | High-DPI standard vector map for print/display | image/png | 240 DPI |
| `webatlas-standard-hybrid-240dpi` | WEBATLAS Standard Hybrid 240DPI | High-DPI hybrid map | image/jpeg | 240 DPI |
| `webatlas-medium-vektor` | WEBATLAS Medium Vektor | Medium detail vector map | image/png | Standard |
| `webatlas-medium-hybrid` | WEBATLAS Medium Hybrid | Medium detail map with aerial overlay | image/jpeg | Standard |
| `webatlas-medium-vektor-240dpi` | WEBATLAS Medium Vektor 240DPI | High-DPI medium detail vector map | image/png | 240 DPI |
| `webatlas-medium-hybrid-240dpi` | WEBATLAS Medium Hybrid 240DPI | High-DPI medium detail hybrid map | image/jpeg | 240 DPI |
| `webatlas-lite-vektor` | WEBATLAS Lite Vektor | Simplified vector map with reduced detail | image/png | Standard |
| `webatlas-lite-vektor-240dpi` | WEBATLAS Lite Vektor 240DPI | High-DPI simplified vector map | image/png | 240 DPI |
| `webatlas-gray-vektor` | WEBATLAS Gray Vektor | Grayscale vector map | image/png | Standard |
| `webatlas-gray-vektor-240dpi` | WEBATLAS Gray Vektor 240DPI | High-DPI grayscale vector map | image/png | 240 DPI |
| `webatlas-1881-vektor` | WEBATLAS 1881 Vektor | Historical map style (1881) | image/png | Standard |
| `webatlas-1881-hybrid` | WEBATLAS 1881 Hybrid | Historical map with modern aerial overlay | image/jpeg | Standard |
| `webatlas-1881-vektor-240dpi` | WEBATLAS 1881 Vektor 240DPI | High-DPI historical map | image/png | 240 DPI |
| `webatlas-1881-hybrid-240dpi` | WEBATLAS 1881 Hybrid 240DPI | High-DPI historical hybrid map | image/jpeg | 240 DPI |

### UTM Zone 33N Layers (utm33n - EPSG:25833)

| Layer ID | Title | Description | Format |
|----------|-------|-------------|--------|
| `webatlas-eu33-orto-newup` | WEBATLAS eu33 Orto NewUp | Aerial imagery in UTM33N projection | image/jpeg |
| `webatlas-eu33-standard-vektor` | WEBATLAS eu33 Standard Vektor | Standard vector map in UTM33N | image/png |
| `webatlas-eu33-standard-hybrid` | WEBATLAS eu33 Standard Hybrid | Hybrid map in UTM33N projection | image/jpeg |
| `webatlas-eu33-gray-vektor` | WEBATLAS eu33 Gray Vektor | Grayscale vector map in UTM33N | image/png |

### Layer Usage Example

```javascript
// Example configuration for different layers
const layerConfigs = {
    // High-resolution aerial imagery
    aerial: {
        layer: 'webatlas-orto-newup',
        format: 'image/jpeg',
        tileMatrixSet: 'wa_grid'
    },
    // Standard topographic map
    standard: {
        layer: 'webatlas-standard-vektor', 
        format: 'image/png',
        tileMatrixSet: 'wa_grid'
    },
    // High-DPI version for print quality
    standardHiDPI: {
        layer: 'webatlas-standard-vektor-240dpi',
        format: 'image/png', 
        tileMatrixSet: 'wa_grid'
    },
    // UTM33N projection for Nordic region
    standardUTM: {
        layer: 'webatlas-eu33-standard-vektor',
        format: 'image/png',
        tileMatrixSet: 'utm33n'
    }
}
```

## Tile Matrix Sets

Norkart WMTS supports two tile matrix sets for different use cases:

### wa_grid (Web Mercator - EPSG:3857)
The primary tile matrix set for global web mapping applications:

- **Coordinate Reference System**: EPSG:3857 (Web Mercator)
- **Tile Size**: 256×256 pixels
- **Origin**: Top-left corner (-20037508.342789244, 20037508.342789244)
- **Tile Matrix Set Identifier**: `wa_grid`
- **Supported Zoom Levels**: 0-21 (22 levels total)
- **Global Coverage**: Worldwide coverage suitable for web applications

### utm33n (UTM Zone 33N - EPSG:25833)
Specialized tile matrix set for Nordic/European region with higher accuracy:

- **Coordinate Reference System**: EPSG:25833 (UTM Zone 33N)
- **Tile Size**: 256×256 pixels  
- **Origin**: Top-left corner (-600000.0, 9000000.0)
- **Tile Matrix Set Identifier**: `utm33n`
- **Supported Zoom Levels**: 0-17 (18 levels total)
- **Regional Coverage**: Optimized for Norway
- **Higher Accuracy**: Better suited for precise measurements and national mapping

### Choosing the Right Tile Matrix Set

- **Use `wa_grid`** for:
  - Web applications with global coverage
  - Integration with popular web mapping libraries
  - General-purpose mapping applications
  
- **Use `utm33n`** for:
  - Norwegian/Nordic regional applications
  - Applications requiring higher positional accuracy
  - Integration with Norwegian coordinate systems

## Integration Guides

### QGIS

To add a WMTS layer in QGIS:

1. Open QGIS.
2. Navigate to the Layer menu:
   - Select Add Layer.
   - Choose Add WMS/WMTS Layer...
3. In the Data Source Manager:
   - Click "New" to create a new connection.
   - Enter a connection name, e.g., "Norkart WMTS".
   - Enter the URL: `https://waapi.webatlas.no/maptiles/service?REQUEST=GetCapabilities&SERVICE=WMTS?APITOKEN={your_api_key}`
   - Click OK.
4. Select the connection and click "Connect".
5. Choose the desired layer from the list and click "Add".

**Alternative for QGIS:** If the URL parameter method doesn't work, you can use header-based authentication:
1. In the connection setup, leave the URL without the APITOKEN parameter
2. Add a custom header: `x-waapi-token` with your API key as the value

**Note:** Replace `{your_api_key}` with your actual API token.

### ArcGIS

To add a WMTS layer in ArcGIS:

1. In ArcMap or ArcGIS Pro, go to Add Data.
2. Choose "Add WMS Server" or "Add WMTS Server".
3. Enter the GetCapabilities URL: `https://waapi.webatlas.no/maptiles/service?REQUEST=GetCapabilities&SERVICE=WMTS?APITOKEN={your_api_key}`
4. Browse available layers and add them to your map.

**Alternative for ArcGIS:** If authentication issues occur, configure the request to use the `x-waapi-token` header with your API key value instead of the URL parameter.

### Web Applications

**OpenLayers Example:**
```javascript
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {get as getProjection} from 'ol/proj';

const projection = getProjection('EPSG:3857');
const projectionExtent = projection.getExtent();
const size = ol.extent.getWidth(projectionExtent) / 256;
const resolutions = new Array(19);
const matrixIds = new Array(19);
for (let z = 0; z < 19; ++z) {
  resolutions[z] = size / Math.pow(2, z);
  matrixIds[z] = z;
}

const wmtsSource = new WMTS({
  url: 'https://waapi.webatlas.no/maptiles/service?APITOKEN=' + apiKey,
  layer: 'webatlas-standard-vektor',
  matrixSet: 'wa_grid',
  format: 'image/png',
  projection: projection,
  tileGrid: new WMTSTileGrid({
    origin: ol.extent.getTopLeft(projectionExtent),
    resolutions: resolutions,
    matrixIds: matrixIds,
  }),
  style: 'default'
});
```

**Leaflet with WMTS Plugin:**
```javascript
// Using a WMTS plugin for Leaflet - GetCapabilities URL for service discovery
const wmtsLayer = L.tileLayer.wmts('https://waapi.webatlas.no/maptiles/service?APITOKEN=' + apiKey, {
  layer: 'webatlas-standard-vektor',
  style: 'default',
  tilematrixSet: 'wa_grid',
  format: 'image/png'
});

map.addLayer(wmtsLayer);
```

### Other Libraries/Desktop Systems

For other libraries or desktop systems, use the GetCapabilities request to discover available layers and tile matrix sets, then construct appropriate GetTile requests according to the WMTS specification.

## WMTS vs TMS Comparison

| Feature | WMTS | TMS |
|---------|------|-----|
| Standard | OGC Standard | De facto standard |
| URL Structure | Standardized with multiple interfaces | Simple XYZ pattern |
| Capabilities | GetCapabilities document available | No standardized discovery |
| Metadata | Rich layer and service metadata | Minimal metadata |
| Flexibility | Multiple tile matrix sets supported | Fixed grid system |
| Compliance | OGC compliant | Simple REST-based |

## Examples and Tutorials

- [getting started - maptiles in leaflet.js](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20leaflet.js) - Basic tile integration (can be adapted for WMTS)
- [getting started - maptiles in mapbox.gl](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20mapbox.gl) - Mapbox integration examples
- [React App Demo](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) - Comprehensive React application example
- [Cesium and Leaflet Example](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/cesium-and-leaflet-example) - 3D and 2D mapping integration

## Useful Resources

- [OGC WMTS Implementation Standard](https://www.ogc.org/standards/wmts)
- [WMTS in OpenLayers](https://openlayers.org/en/latest/examples/wmts.html)
- [WMTS Best Practices](https://docs.geoserver.org/latest/en/user/services/wmts/index.html)
