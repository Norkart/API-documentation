import { LatLngExpression } from "leaflet"
import React, { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polygon , GeoJSON, useMap} from "react-leaflet"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { apiKey, position, selectedAddress, selectedTeig, Teig } from "../state/state"
import { MapComps } from "./MapComps"


interface Props {

}

export const Map = (props: Props) => {
    const adress = useRecoilValue(selectedAddress)
    const pos = useRecoilValue(position)
    
    const apikey = useRecoilValue(apiKey)





    

    return (
        <div>

            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={adress.latLng} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                />
                <MapComps/>
                
            </MapContainer>}

        </div>

    )
}


