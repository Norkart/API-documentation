import { TileLayer } from "react-leaflet";

const layers = [
  {
    Name: "grey",
    Tileset: "webatlas-gray-vektor",
    Ext: "png",
  },
  {
    Name: "medium",
    Tileset: "webatlas-medium-vektor",
    Ext: "png",
  },
  {
    Name: "lite",
    Tileset: "webatlas-lite-vektor",
    Ext: "png",
  },
  {
    Name: "vector",
    Tileset: "webatlas-standard-vektor",
    Ext: "png",
  },
  {
    Name: "aerial",
    Tileset: "webatlas-orto-newup",
    Ext: "jpeg",
  },
  {
    Name: "hybrid",
    Tileset: "webatlas-standard-hybrid",
    Ext: "jpeg",
  },
];

export const getBaseLayers = (
  apiKey: string
): { layer: JSX.Element; name: string }[] =>
  layers.map((l) => ({
    name: l.Name,
    layer: (
      <TileLayer
        url={`https://waapi.webatlas.no/maptiles/tiles/${l.Tileset}/wa_grid/{z}/{x}/{y}.${l.Ext}?APITOKEN=${apiKey}`}
        attribution={`Norkart. Source code: <a href="https://github.com/Norkart/API-documentation/tree/main/code_and_tutorials/reactleaflet_fritekstsok_maptiles_matrikkelkart_example">github</a>`}
      />
    ),
  }));
