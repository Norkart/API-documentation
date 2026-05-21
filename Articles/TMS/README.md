# Tile Map Service (TMS) Developer Documentation

Tile Map Service (also called Maptiles) is a tilecache service that provides access to background maps and detailed aerial photos. The service utilizes a standard XYZ [tilescheme](https://en.wikipedia.org/wiki/Tiled_web_map) for simple, fast tile delivery.

## Tile URL Format

An example request is provided below, where {z}, {x}, {y}, and {apikey} are placeholders:

```plaintext
https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN={apikey}
```

## API Token Authentication

Norkart's TMS service requires API token authentication for all requests. The authentication system is implemented as a security layer.

### URL Parameter Authentication
For all tile requests, append the API token using the query parameter format:
```plaintext
?APITOKEN={your_api_key}
```

**Important:** Always use `?APITOKEN=` (with question mark) for tile requests. The API token system processes this parameter independently.

**Example:**
```plaintext
https://waapi.webatlas.no/maptiles/tiles/webatlas-standard-vektor/wa_grid/10/512/256.png?APITOKEN={your_api_key}
```

### Header-Based Authentication
Some applications may require header-based authentication instead of URL parameters:

**HTTP Header:**
```
x-waapi-token: {your_api_key}
```

This method is useful for applications that don't handle custom URL parameters well or for programmatic access where headers are preferred.

## Available Tilesets

The following tilesets are available through the TMS service, organized by coordinate reference system:

### Web Mercator Tilesets (wa_grid - EPSG:3857)

| Tileset ID | Title | Description | Format | DPI |
|------------|-------|-------------|--------|-----|
| `webatlas-orto-newup` | WEBATLAS Orto NewUp | High-resolution aerial/satellite imagery | JPEG | Standard |
| `webatlas-standard-vektor` | WEBATLAS Standard Vektor | Standard vector-based topographic map | PNG | Standard |
| `webatlas-standard-hybrid` | WEBATLAS Standard Hybrid | Standard map with aerial imagery overlay | JPEG | Standard |
| `webatlas-standard-vektor-240dpi` | WEBATLAS Standard Vektor 240DPI | High-DPI standard vector map for print/display | PNG | 240 DPI |
| `webatlas-standard-hybrid-240dpi` | WEBATLAS Standard Hybrid 240DPI | High-DPI hybrid map | JPEG | 240 DPI |
| `webatlas-medium-vektor` | WEBATLAS Medium Vektor | Medium detail vector map | PNG | Standard |
| `webatlas-medium-hybrid` | WEBATLAS Medium Hybrid | Medium detail map with aerial overlay | JPEG | Standard |
| `webatlas-medium-vektor-240dpi` | WEBATLAS Medium Vektor 240DPI | High-DPI medium detail vector map | PNG | 240 DPI |
| `webatlas-medium-hybrid-240dpi` | WEBATLAS Medium Hybrid 240DPI | High-DPI medium detail hybrid map | JPEG | 240 DPI |
| `webatlas-lite-vektor` | WEBATLAS Lite Vektor | Simplified vector map with reduced detail | PNG | Standard |
| `webatlas-lite-vektor-240dpi` | WEBATLAS Lite Vektor 240DPI | High-DPI simplified vector map | PNG | 240 DPI |
| `webatlas-gray-vektor` | WEBATLAS Gray Vektor | Grayscale vector map | PNG | Standard |
| `webatlas-gray-vektor-240dpi` | WEBATLAS Gray Vektor 240DPI | High-DPI grayscale vector map | PNG | 240 DPI |
| `webatlas-1881-vektor` | WEBATLAS 1881 Vektor | Historical map style (1881) | PNG | Standard |
| `webatlas-1881-hybrid` | WEBATLAS 1881 Hybrid | Historical map with modern aerial overlay | JPEG | Standard |
| `webatlas-1881-vektor-240dpi` | WEBATLAS 1881 Vektor 240DPI | High-DPI historical map | PNG | 240 DPI |
| `webatlas-1881-hybrid-240dpi` | WEBATLAS 1881 Hybrid 240DPI | High-DPI historical hybrid map | JPEG | 240 DPI |

*Note: TMS supports EPSG:3857 (Web Mercator) and EPSG:4326 (WGS84) coordinate reference systems. For UTM33N projections, use [WMTS](../WMTS/README.md) instead.*

### Tileset Usage Example

```javascript
// Example configuration for different tilesets
const tilesetConfigs = {
    // High-resolution aerial imagery
    aerial: {
        tileset: 'webatlas-orto-newup',
        ext: 'jpeg',
        tileGrid: 'wa_grid'
    },
    // Standard topographic map
    standard: {
        tileset: 'webatlas-standard-vektor', 
        ext: 'png',
        tileGrid: 'wa_grid'
    },
    // High-DPI version for print quality
    standardHiDPI: {
        tileset: 'webatlas-standard-vektor-240dpi',
        ext: 'png', 
        tileGrid: 'wa_grid'
    }
}
}
```

## TMS vs WMTS Comparison

| Feature | TMS | WMTS |
|---------|-----|------|
| Standard | De facto standard | OGC Standard |
| URL Structure | Simple XYZ pattern | Standardized with multiple interfaces |
| Capabilities | No standardized discovery | GetCapabilities document available |
| Metadata | Minimal metadata | Rich layer and service metadata |
| Coordinate Systems | EPSG:3857, EPSG:4326 | EPSG:3857, EPSG:4326, EPSG:25833 |
| Complexity | Simple REST-based | More complex but feature-rich |
| Client Support | Universal web mapping library support | Requires OGC-compliant clients |
| Performance | Fast, lightweight | Slightly more overhead |
| Use Case | General web mapping | Enterprise/GIS applications |

### When to Use TMS vs WMTS

**Use TMS when:**
- Building web applications with standard mapping libraries (Leaflet, OpenLayers, Mapbox)
- Need simple, fast tile delivery with minimal overhead
- Working with developers familiar with XYZ tile schemes
- Performance is critical and you don't need advanced metadata
- Integrating with most web mapping frameworks

**Use WMTS when:**
- Working with desktop GIS software (QGIS, ArcGIS)
- Need standardized service discovery and metadata
- Require OGC compliance for enterprise applications
- Building applications that need to dynamically discover available layers
- Working with clients that specifically support WMTS
- Need UTM33N coordinate system support for Nordic applications

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

*Note: This shows a simplified subset. See the complete tileset list above for all available options including high-DPI variants. TMS only supports Web Mercator (EPSG:3857) and WGS84 (EPSG:4326) coordinate systems.*

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

**Alternative for QGIS:** If the URL parameter method doesn't work, you can use header-based authentication:
1. In the connection setup, leave the URL without the APITOKEN parameter
2. Add a custom header: `x-waapi-token` with your API key as the value

**Note:** Remember to use `?APITOKEN=` (with question mark) in the URL and replace with your actual API token.

### Leaflet.js Plugin

We offer an open-source plugin for Leaflet.js:

- [Code: GitHub Repository](https://github.com/Norkart/L.TileLayer.Webatlas)
- [Package: NPM](https://www.npmjs.com/package/leaflet-webatlastile)
- [Demo: Example code](https://github.com/Norkart/API-documentation/blob/main/code_and_tutorials/leaflet-webatlastiles-js)

### Other Libraries/Desktop Systems

For other libraries or desktop systems, refer to the URL schemes mentioned above and the examples and tutorials provided below. TMS uses simple XYZ URLs that are supported by virtually all web mapping libraries.

**Popular Library Examples:**
- **Leaflet**: Use `L.tileLayer()` with the tile URL template
- **OpenLayers**: Use `ol/source/XYZ` source
- **Mapbox GL JS**: Add as a raster source with tile URLs
- **Google Maps**: Use as a custom tile overlay

For desktop GIS applications, consider using [WMTS](../WMTS/README.md) instead, as it provides better metadata support and is more suitable for professional GIS workflows.

## Examples and Tutorials

- [getting started - maptiles in leaflet.js](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20leaflet.js)
- [getting started - maptiles in mapbox.gl](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20mapbox.gl)
- [getting started - fritekstsok](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20wms-overlays%20in%20leaflet.js)
- [React App Demo](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example) - Demonstrating maptiles, fritekstsok, and matrikkelkart in a simple React app.
- [Leaflet-webatlastile Example](https://github.com/Norkart/API-documentation/blob/main/code_and_tutorials/leaflet-webatlastiles-js)
