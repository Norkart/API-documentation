import { CesiumTerrainProvider } from 'cesium';

const terrainProvider = new CesiumTerrainProvider({
  url: `${process.env.REACT_APP_TERRAIN_PROVIDER_URL}`,
  requestVertexNormals: true,
  credit: undefined,
});

export default terrainProvider;