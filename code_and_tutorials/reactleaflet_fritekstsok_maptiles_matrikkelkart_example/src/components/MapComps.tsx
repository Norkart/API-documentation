import { LatLngExpression } from "leaflet"
import React, { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polygon , GeoJSON, useMap} from "react-leaflet"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { apiKey, position, selectedAddress, selectedTeig, Teig } from "../state/state"

export const MapComps = () => {
    const adress = useRecoilValue(selectedAddress)
    const teiger  = useRecoilValueLoadable(selectedTeig)
    const map = useMap()
    useEffect(() => {
        map.panTo(adress.latLng) 
    }, [adress])

    console.log(adress)
    const purpleOptions = { color: 'purple' }
    return (
        <div>
            {teiger.state === 'hasValue' && teiger.contents.map(t =>  <GeoJSON pathOptions={purpleOptions} data={JSON.parse(t.Geometri)} />)}
        </div>
    )
}
