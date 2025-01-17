import { Suspense } from "react";
import { MapContainer, ZoomControl } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { apiKey, selectedAddress } from "../../state/state";
import { LayerControl } from "./LayerControl";
import { GeoJsonLayer } from "./GeoJsonLayer";
import { TopLeftMapControl as SearchControl } from "./SearchControl";

export const Map = () => {
  const address = useRecoilValue(selectedAddress);
  const apikey = useRecoilValue(apiKey);

  const latlngOrDefault = address
    ? address.latlng
    : { lat: 63.426891, lng: 10.396416 };

  return (
    <div style={{ height: "100%" }}>
      {apikey && (
        <MapContainer
          style={{ height: "100%", width: "100vw" }}
          center={latlngOrDefault}
          zoomControl={false}
          zoom={4}
          scrollWheelZoom={true}
        >
          <Suspense fallback={<div></div>}>
            <GeoJsonLayer />
            <SearchControl />
            <ZoomControl position={"bottomright"} />
            <LayerControl />
          </Suspense>
        </MapContainer>
      )}
    </div>
  );
};
