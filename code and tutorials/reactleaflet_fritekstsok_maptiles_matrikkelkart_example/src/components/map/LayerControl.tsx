import { useMemo } from "react";
import { LayersControl } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { apiKey } from "../../state/state";
import { getBaseLayers } from "./BaseLayers";
import { getOverlayLayers } from "./OverlayLayers";

export const LayerControl = () => {
  const apikey = useRecoilValue(apiKey);
  const defaultLayer = "vector";

  const baseLayers = useMemo(
    () => (apikey ? getBaseLayers(apikey) : []),
    [apikey]
  );

  const overlayLayers = useMemo(
    () => (apikey ? getOverlayLayers(apikey) : []),
    [apikey]
  );

  return (
    <div>
      <LayersControl position="bottomleft">
        {baseLayers.map((l) => (
          <LayersControl.BaseLayer
            key={l.name}
            checked={l.name === defaultLayer}
            name={l.name}
          >
            {l.layer}
          </LayersControl.BaseLayer>
        ))}

        {overlayLayers.map((l) => (
          <LayersControl.Overlay key={l.name} name={l.name}>
            {l.layer}
          </LayersControl.Overlay>
        ))}
      </LayersControl>
    </div>
  );
};
