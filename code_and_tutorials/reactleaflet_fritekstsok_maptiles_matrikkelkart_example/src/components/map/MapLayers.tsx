import { LatLngBoundsExpression } from "leaflet"
import { useEffect, useRef } from "react"
import { GeoJSON, Popup, useMap } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { selectedTeig, Teig } from "../../state/state"
import { TeigInfo } from "../teig/TeigInfo"

export const MapLayers = () => {
    const teig = useRecoilValue<Teig | null>(selectedTeig)
    const map = useMap()
    const geomRef: any = useRef();

    useEffect(() => {
        if (!geomRef || !geomRef.current) return;
        const bounds = geomRef.current.getBounds() as LatLngBoundsExpression

        bounds && map.fitBounds(bounds)

    }, [geomRef, map, teig])


    if (!teig || !teig.Geometry) return null;


    return (
        <GeoJSON ref={geomRef} key={teig.Matrikkelnummer} data={teig.Geometry}  >
            <Popup>
                <TeigInfo />
            </Popup>
        </GeoJSON>)
}
