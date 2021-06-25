import React, { useEffect } from "react"
import { GeoJSON, useMap} from "react-leaflet"
import { useRecoilValue } from "recoil"
import { Address, selectedAddress, selectedTeig, Teig } from "../state/state"

export const MapLayers = () => {
    const address = useRecoilValue<Address | null>(selectedAddress)
    const teiger  = useRecoilValue<Teig[] | null>(selectedTeig)
    const map = useMap()
    
    useEffect(() => {
        if(address){
            map.panTo(address.latLng) 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address])

    const purpleOptions = { color: 'purple' }
    return (
        <div>
            {teiger && teiger.map((teig)=> <GeoJSON key={teig.Matrikkelnummer} pathOptions={purpleOptions} data={JSON.parse(teig.Geometri)} />)}
        </div>
    )
}
