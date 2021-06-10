import { LatLngExpression } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { apiKey, position, selectedAddress, selectedTeig } from "../state/state"

interface Props {

}

export const Map = (props: Props) => {
    const pos = useRecoilValue(position)
    const teig  = useRecoilValueLoadable(selectedTeig)
    const apikey = useRecoilValue(apiKey)


    return (
        <div>

            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={pos} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                />
                
            </MapContainer>}

        </div>

    )
}


