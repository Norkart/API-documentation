## Maptiles developer documentation

Maptiles is a tilecache service providing access to background maps and detailed aerial photos. The service is exposed through a standard XYZ tilescheme (https://en.wikipedia.org/wiki/Tiled_web_map). 

One example request illustrating the scheme - where {z}, {x}, {y} and {apikey} are variables. 

```
https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN={apikey}
```



The different options provided is detailed here with a code snippet from the library below.

`````` javascript
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
``````

### Api Key
Log in at [developer.norkart.no](developer.norkart.no) to get a trial api-key.


### Plugin for Leaflet.js

We provide a plugin for handling attribution and URL-endpoints for Leaflet.js. You can find details and code here: 

* https://github.com/Norkart/L.TileLayer.Webatlas/



### Usage in other libraries / desktop systems

For use in other libraries or desktop systems - please refer to the url-schemes above and see the examples and tutorials below. Remember to reach out at https://developer.norkart.no/ for support. 

### Code examples and tutorials

* [getting started - maptiles in leaflet.js](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20leaflet.js)
* [getting started - maptiles in mapbox.gl](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20maptiles%20in%20mapbox.gl)
* [getting started - fritekstsok](https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/getting%20started%20-%20fritekstsok)