import { Suspense } from "react"
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey, selectedAddress} from "../../state/state"
import { MapLayers } from "./MapLayers"
import { TopLeftMapControl } from "./TopLeftMapControl"


export const Map = () => {
    const address = useRecoilValue(selectedAddress);
    const apikey = useRecoilValue(apiKey);

    const latlngOrDefault = address ? address.latlng : { lat: 63.426891, lng: 10.396416}; 

    return (
        <div>
            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={latlngOrDefault} zoomControl={false} zoom={16} scrollWheelZoom={true}>
                    <Suspense fallback={<div></div>}>
                        <TileLayer
                            url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-standard-hybrid/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                            attribution={`Norkart`}
                        />
                        <MapLayers/>

                        <TopLeftMapControl/>
                        <ZoomControl position='bottomright'/>

                    </Suspense>
                </MapContainer>}
        </div>
    )
}


