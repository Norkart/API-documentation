import { Suspense } from "react"
import { MapContainer, ZoomControl } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey } from "../../state/state"
import { BaseLayerControl } from "./BaseLayerControl"
import { MapLayers } from "./MapLayers"
import { TopLeftMapControl as SearchControl } from "./SearchControl"


export const Map = () => {
    const apikey = useRecoilValue(apiKey);
    const center = { lat: 63.5, lng: 10.5};

    return (
        <div style={{ height: '100%' }} >
            {apikey &&
                <MapContainer style={{ height: '100%', width: '100vw' }} center={center} zoomControl={false} zoom={5} scrollWheelZoom={true}>
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


