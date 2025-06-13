//Initiating Leaflet map and set the view to coordinates (in WGS84 / EPSG:3857) and zoom level 13
var map = L.map('mapid').setView([58.14615, 7.99573], 13);

var apiKey = ''; // Request API access here: https://www.norkart.no/datatjenester.

var baseLayers = {
    'Kart': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.VECTOR,
        apikey: apiKey
    }).addTo(map),
    'Kart, Gråtone': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.GREY,
        apikey: apiKey
    }),
    'Kart, medium': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.MEDIUM,
        apikey: apiKey
    }),
    'Kart, lite': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.LITE,
        apikey: apiKey
    }),
    'Foto': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.AERIAL,
        apikey: apiKey
    }),
    'Hybrid': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.HYBRID,
        apikey: apiKey
    }),
    'Custom-Kart': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.VECTOR, //This is a constant with value 'vector'
        apikey: apiKey,
        tileset: {
            vector: {tileset: 'webatlas-1881-vektor', ext: 'png'} //We overwrite the default vector map with a custom tileset (also available on the same server)
        }
    }),
    'Custom-Hybrid': L.tileLayer.webatlas({
        mapType: L.TileLayer.Webatlas.Type.HYBRID, //This is a constant with value 'hybrid'
        apikey: apiKey,
        tileset: {
            hybrid: {tileset: 'webatlas-1881-hybrid', ext: 'jpeg'} //We overwrite the default hybrid map with a custom tileset (also available on the same server)
        }
    })
};

L.control.layers(baseLayers, {}).addTo(map);



/** All available map types
L.TileLayer.Webatlas.Type.GREY
L.TileLayer.Webatlas.Type.VECTOR
L.TileLayer.Webatlas.Type.MEDIUM
L.TileLayer.Webatlas.Type.LITE
L.TileLayer.Webatlas.Type.AERIAL
L.TileLayer.Webatlas.Type.HYBRID
*/

/****
Looking for Mapbox vector tiles for the Norwegian maps? Reach out at info@norkart.no for some amazing vector tile action
****/
