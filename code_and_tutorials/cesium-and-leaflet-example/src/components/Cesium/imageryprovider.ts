import { TileMapServiceImageryProvider, WebMercatorTilingScheme } from 'cesium';

const imageryProvider = new TileMapServiceImageryProvider({
  url: `${process.env.REACT_APP_TILE_MAP_SERVICE_IMAGERY_PROVIDER_URL}`,
  fileExtension: 'jpg',
  tilingScheme: new WebMercatorTilingScheme({}),
  maximumLevel: 20,
  credit:
    'Norkart AS, Sentinel-2 cloudless – https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2016 & 2017), Geovekst og kommunene',
});
export default imageryProvider;