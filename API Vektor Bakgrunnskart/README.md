# Norkart API Vektor Bakgrunnskart Documentation

Welcome to the documentation for Norkart API Vektor Bakgrunnskart. This service provides the same background map data as [API Bakgrunnskart](<../API Bakgrunnskart/README.md>), but as **vector tiles (MVT)** instead of pre-rendered raster images. Vector tiles ship the raw geometry and are styled and labelled in the client, which means:

- One tile set can be re-styled (colors, which layers are visible, label language) entirely on the client, without requesting new tiles.
- Labels and icons stay upright and de-clutter automatically as the map rotates or is zoomed, since they're drawn by the client renderer rather than baked into an image.
- Fewer/lighter requests at high zoom levels, since vector data compresses better than imagery for the same area.

The service is consumed as a [MapLibre GL / Mapbox Style Specification](https://maplibre.org/maplibre-style-spec/) document (`style.json`) whose sources point at Norkart's tile backend. Because it's a *style*, not a fixed image format, it requires a vector-tile-capable renderer — [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) — rather than a plain `<img>`-tile client.

| Tjenestenavn | Type | Description | url |
| ------------- | ------------- | ------------- | ------------- |
| **Vektor Bakgrunnskart** | MVT (Mapbox/MapLibre Vector Tiles) | Standard vector background map style — buildings, roads, land use, place names, admin boundaries, matrikkel info, building shadows, terrain hillshading, and the road network (NVDB) | `https://kvp.maps.norkart.no/mvt/norkart-basemap/{layers}.pmtiles/tile.json?api_key={{API_KEY}}` |

## How the tiles are organized

Each layer of data (buildings, roads, place names, …) is published as its own `.pmtiles` archive. A style's vector source combines the ones it needs into a single comma-separated request, which returns a [TileJSON](https://github.com/mapbox/tilejson-spec) document describing the actual `{z}/{x}/{y}.pbf` tile URL template:

```
https://kvp.maps.norkart.no/mvt/norkart-basemap/osm_buildings.pmtiles,osm_roads.pmtiles,osm_places.pmtiles,.../tile.json?api_key={{API_KEY}}
```

The standard style (`styles.json`, provided by Norkart together with your API key) combines these layers:

```javascript
const STANDARD_LAYERS = [
    'adm_grenser_norge.pmtiles',       // administrative boundaries
    'byggskygge.pmtiles',              // building shadows
    'fkb_ar5-areabruk-vann.pmtiles',   // land use / water (AR5)
    'fkb_bygnan-ledn-naturinfo.pmtiles', // pipelines & nature info
    'fkb_bygning-og-tiltak.pmtiles',   // buildings & structures
    'fkb_hoydekurver_merged.pmtiles',  // elevation contours
    'fkb_samferdsel_transport.pmtiles', // transport infrastructure
    'matrikkelinfo.pmtiles',           // cadastral (matrikkel) info
    'nseries_merged.pmtiles',          // N-series topographic data
    'nseries_tekst.pmtiles',           // N-series place name labels
    'osm-lowres.pmtiles', 'osm_amenities.pmtiles', 'osm_boundary.pmtiles',
    'osm_buildings.pmtiles', 'osm_housenumbers.pmtiles', 'osm_landusages.pmtiles',
    'osm_places.pmtiles', 'osm_roads.pmtiles', 'osm_waterareas.pmtiles',
    'osm_waterways.pmtiles',
];
```

Two more layers are published as separate sources in the standard style rather than being merged into the layer set above:

| Source | Type | Description |
| --- | --- | --- |
| `hillshade_norge.pmtiles` | raster | Terrain hillshading overlay |
| `nvdb_vegnett_pluss.pmtiles` | vector | Road network (NVDB) |

Fonts and icons used by the style's labels/symbols are served separately:

| Resource | url |
| --- | --- |
| Glyphs (fonts) | `https://kvp.maps.norkart.no/mvt/norkart-basemap/font-glyphs/standard/{fontstack}/{range}.pbf?api_key={{API_KEY}}` |
| Sprite (icons) | `https://kvp.maps.norkart.no/mvt/norkart-basemap/standard/spritesheet?api_key={{API_KEY}}` |

You don't need to construct any of the URLs above by hand — they're already wired up inside the `style.json` document Norkart provides you. Point your MapLibre client at that file and it resolves everything itself.

## Authentication / API Key

To use Norkart's map services, you will need an API key. API keys are provided on a business-to-business (B2B) basis. If you are interested in a demo or wish to request an API key and a copy of the current `style.json`, please contact us at [datatjenester@norkart.no](mailto:datatjenester@norkart.no).

Unlike the raster services (TMS/WMS, which use `?APITOKEN=`), the vector tile backend expects the key as a lowercase **`api_key`** query parameter on every request made to `kvp.maps.norkart.no` — the `tile.json` lookups, the individual `.pbf` tiles, the glyphs, and the sprite. Because MapLibre GL JS makes these requests itself (you never build the tile URLs by hand), the key is added through the client's `transformRequest` hook instead of being pasted into a URL:

```javascript
const API_KEY = '{{API_KEY}}';
const TILE_HOST = 'https://kvp.maps.norkart.no';

function transformRequest(url) {
    if (url.startsWith(TILE_HOST)) {
        const sep = url.includes('?') ? '&' : '?';
        return { url: `${url}${sep}api_key=${API_KEY}` };
    }
    return { url };
}
```

## Code example: MapLibre GL JS

MapLibre GL JS renders the vector tiles directly and is the natural client for this service:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.css">
<script src="https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>

<div id="map" style="position:absolute; inset:0;"></div>

<script>
  const API_KEY = '{{API_KEY}}';
  const TILE_HOST = 'https://kvp.maps.norkart.no';

  const map = new maplibregl.Map({
      container: 'map',
      style: 'style.json', // the style document provided by Norkart together with your API key
      center: [10.3951, 63.4305], // [lon, lat] — Trondheim
      zoom: 14,
      transformRequest: (url) => {
          if (url.startsWith(TILE_HOST)) {
              const sep = url.includes('?') ? '&' : '?';
              return { url: `${url}${sep}api_key=${API_KEY}` };
          }
          return { url };
      },
  });
  map.addControl(new maplibregl.NavigationControl(), 'top-right');
</script>
```

## Code example: Leaflet

No Leaflet vector-tile plugin (`Leaflet.VectorGrid`, `Leaflet.VectorTileLayer`, …) can interpret a MapLibre/Mapbox style document — they only take hand-written per-layer style callbacks, so they can never reproduce the production style automatically. Instead, use [`@maplibre/maplibre-gl-leaflet`](https://github.com/maplibre/maplibre-gl-leaflet) to embed the real MapLibre GL renderer *inside* the Leaflet map, loading the exact same `style.json`. Leaflet keeps handling input and any existing overlays/markers on top of it, unchanged:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.css">
<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@maplibre/maplibre-gl-leaflet@0.1.4/dist/leaflet-maplibre-gl.js"></script>

<div id="map" style="position:absolute; inset:0;"></div>

<script>
  const API_KEY = '{{API_KEY}}';
  const TILE_HOST = 'https://kvp.maps.norkart.no';

  // MapLibre GL enforces the standard Web Mercator latitude limit (~85.05°);
  // clamping Leaflet's bounds to match keeps input handling consistent.
  const map = L.map('map', {
      maxBounds: L.latLngBounds([-85, -180], [85, 180]),
      maxBoundsViscosity: 1,
      zoomSnap: 0, // MapLibre's zoom is fractional; match that instead of rounding
  }).setView([63.4305, 10.3951], 15);

  L.maplibreGL({
      style: 'style.json',
      transformRequest: (url) => {
          if (url.startsWith(TILE_HOST)) {
              const sep = url.includes('?') ? '&' : '?';
              return { url: `${url}${sep}api_key=${API_KEY}` };
          }
          return { url };
      },
  }).addTo(map);

  // Existing Leaflet layers/markers keep working unchanged on top, e.g.:
  // L.geoJSON(myRoute, { style: { color: '#e6533c', weight: 4 } }).addTo(map);
</script>
```

MapLibre GL defines zoom relative to 512px tiles while Leaflet uses 256px tiles, so the two scales are offset by one level (`leafletZoom = maplibreZoom + 1`). This only matters if you're syncing a second, standalone MapLibre map to the same view as the embedded one — a single embedded map (as above) needs no conversion.

### Introducing MVT
#### What is MVT (Mapbox/MapLibre Vector Tiles)?
Mapbox Vector Tiles (MVT) is a de-facto standard for packaging map geometry (not images) into small binary tiles, styled and rendered on the client according to a Mapbox/MapLibre style document. This gives you full client-side control over styling, labelling, and which layers are visible, at the cost of requiring a vector-tile-aware renderer such as MapLibre GL JS instead of a plain image tile layer. For the equivalent raster background maps (simple `<img>` tiles, usable with any mapping library including plain Leaflet), see [API Bakgrunnskart](<../API Bakgrunnskart/README.md>) and the [TMS](../Articles/TMS/README.md) / [WMS](../Articles/WMS/README.md) / [WMTS](../Articles/WMTS/README.md) subsections.

For additional help or support regarding API access or integration, reach out to [datatjenester@norkart.no](mailto:datatjenester@norkart.no).
