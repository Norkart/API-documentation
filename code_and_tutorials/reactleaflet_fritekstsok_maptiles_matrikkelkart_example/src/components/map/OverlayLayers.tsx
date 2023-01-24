import { WmsLayer } from "./WmsLayer";

const layers = [
  {
    Name: "Takhelning",
    url: "https://waapi.webatlas.no/WMS-Takhelning",
    layers: "wms-takhelning:takhelning",
  },
];

export const getOverlayLayers = (
  apiKey: string
): { layer: JSX.Element; name: string }[] =>
  layers.map((l) => ({
    name: l.Name,
    layer: <WmsLayer apiKey={apiKey} url={l.url} layers={l.layers} />,
  }));
