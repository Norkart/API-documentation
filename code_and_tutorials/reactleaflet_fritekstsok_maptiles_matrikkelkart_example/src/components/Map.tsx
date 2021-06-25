import React, { Suspense } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey, selectedAddress} from "../state/state"
import { MapLayers } from "./MapLayers"
import { Search } from "./Search"


interface Props {

}

export const Map = (props: Props) => {
    const address = useRecoilValue(selectedAddress);
    const apikey = useRecoilValue(apiKey);

    const latlngOrDefault = address ? address.latLng : { lat: 63.426891, lng: 10.396416}; 

    return (
        <div>
            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={latlngOrDefault} zoom={16} scrollWheelZoom={true}>
                    <Suspense fallback={<div></div>}>
                        <TileLayer
                            url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-standard-hybrid/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                            attribution={`Norkart`}
                        />
                        <MapLayers/>
                        <div className='leaflet-control-container'>
                            <div className='leaflet-top leaflet-right'>
                                <div className='leaflet-control' style={{flex: 1}}>
                                    <Search />
                                </div>
                            </div>
                        </div>
                    </Suspense>
                </MapContainer>}
        </div>
    )
}


