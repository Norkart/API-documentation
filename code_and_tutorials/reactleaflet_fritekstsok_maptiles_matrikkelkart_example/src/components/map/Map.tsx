import { Suspense } from "react"
import { MapContainer, ZoomControl } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey, selectedAddress } from "../../state/state"
import { BaseLayerControl } from "./BaseLayerControl"
import { MapLayers } from "./MapLayers"
import { TopLeftMapControl as SearchControl } from "./SearchControl"
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const address = useRecoilValue(selectedAddress);
    const apikey = useRecoilValue(apiKey);

    const latlngOrDefault = address ? address.latlng : { lat: 63.426891, lng: 10.396416 };

    return (
        <div style={{ height: '100%' }} >
            {apikey &&
                <MapContainer style={{ height: '100%', width: '100vw' }} center={latlngOrDefault} zoomControl={false} zoom={5} scrollWheelZoom={true}>
                    <Suspense fallback={<div></div>}>
                        <MapLayers />
                        <SearchControl />
                        <ZoomControl position={'bottomright'} />
                        <BaseLayerControl />
                    </Suspense>
                </MapContainer>}
        </div>
    )
}


