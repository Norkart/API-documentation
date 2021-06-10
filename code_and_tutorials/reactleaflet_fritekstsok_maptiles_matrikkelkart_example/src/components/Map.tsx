import { LatLngExpression } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey } from "../state/state"

interface Props {

}

export const Map = (props: Props) => {
    const position: LatLngExpression = [51.505, -0.09]
    const apikey = useRecoilValue(apiKey)
    console.log(apikey)

    return (
        <div>
            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>}
        </div>

    )
}

