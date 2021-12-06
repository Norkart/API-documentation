# Using Cesium and leaflet combined in React. 
This example shows how to use Cesium and Leaflet, and how to swich between the map views in React.

## API Key
This example uses the following of Norkart's services:
- Norkart Maptiles
- Norkart 3D tiles (for terrain, imagery and buildings in Norway).

### How to get keys?
- For Maptiles a key can be obtained at: [developer.norkart.no](https://developer.norkart.no/)
- 3D tiles are unfortunally not accessible through the key provided at [developer.norkart.no](https://developer.norkart.no/). Request access [here](https://www.norkart.no/dataoganalyse/). 
 
## Built With
- Typescript - Language.
- [React](https://reactjs.org//) - Front end library.
- [Leaflet](https://leafletjs.com/) - For rendering the interactive map.
- [React Leaflet](https://react-leaflet.js.org/) - For integrating leaflet with react.
- [Material-UI](https://material-ui.com/) - For design system and components.
- [Cesium](https://cesium.com/learn/) - For rendering the interactive map
- [Resium](https://github.com/reearth/resium) - For integrating cesium with react.
- [Webpack](https://github.com/webpack/webpack) - Javascript Bundler.

## Run Locally
- This is a React App. To run it locally you will need to use npm to install packages and run the app.
- Add ```.env``` to the root folder, and provide the follwing values:
```js
REACT_APP_TILE_MAP_SERVICE_IMAGERY_PROVIDER_URL=
REACT_APP_TERRAIN_PROVIDER_URL=
REACT_APP_3D_TILES_PROVIDER_URL=
REACT_APP_MAPTILES_PROVIDER_URL=
```

## About the code  
#### Common components
- In [`Map.tsx`](./src/components/Map.tsx), components which will rendered in both the Leaflet and Cesium view are specified.
- In this example we add the [`SwitchMode.tsx`](./src/components/SwitchMode.tsx) component, so we can toggle between the map views.
- Components are rendered, using [`MapControls.tsx`](./src/components/MapControls.tsx).

#### Switch view
- Map bounds are used to determine where to render the map in case of a map swich. 
- [`MapOrchestrator.tsx`](./src/components/MapOrchestrator.tsx) holds the bounds state, so it can be updated fromm either the Leaflet or Cesium component.
- For Leaflet, bounds are updated in [`EventHandler.tsx`](./src/components/Leaflet/EventHandler.tsx)
- For Cesium, bounds are updated in [`CameraPosition.tsx`](./src/components/Cesium/CameraPosition.tsx)

### Webpack
The following guides have been used to build the webpack.config file:
- [Resium Installation Guide](https://github.com/reearth/resium/blob/main/docs/docs/01-installation.md)
- [Official Cesium Webpack Example](https://github.com/CesiumGS/cesium-webpack-example)

## Relevant documentation and links
- [Maptiles Documentation](./../../API-maptiles)
- [React Leaflet Example](./../reactleaflet_fritekstsok_maptiles_matrikkelkart_example)