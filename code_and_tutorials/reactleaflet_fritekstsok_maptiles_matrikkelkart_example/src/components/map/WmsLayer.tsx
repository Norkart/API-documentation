import { WMSTileLayer } from "react-leaflet";
interface Props {
  apiKey: string;
  url: string;
  layers: string;
}

export const WmsLayer = ({ apiKey, url, layers }: Props) => (
  <WMSTileLayer
    transparent={true}
    format="image/png"
    layers={layers}
    url={`${url}?api_key=${apiKey}`}
  />
);
