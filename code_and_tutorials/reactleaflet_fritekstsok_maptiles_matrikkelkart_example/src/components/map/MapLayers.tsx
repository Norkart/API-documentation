import { useEffect } from "react"
import { GeoJSON, Popup, useMap } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { Address, selectedAddress, selectedTeig, Teig } from "../../state/state"
import { TeigInfo } from "../teig/TeigInfo"

export const MapLayers = () => {
    const address = useRecoilValue<Address | null>(selectedAddress)
    const teig = useRecoilValue<Teig | null>(selectedTeig)
    const map = useMap()



    useEffect(() => {
        if (address) {
            map.panTo(address.latlng)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address])



    if (!teig || !teig.Geometry) return null;

    return (

        <GeoJSON key={teig.Matrikkelnummer} data={teig.Geometry}>
            <Popup>
                <TeigInfo/>
            </Popup>
        </GeoJSON>

    )
}
