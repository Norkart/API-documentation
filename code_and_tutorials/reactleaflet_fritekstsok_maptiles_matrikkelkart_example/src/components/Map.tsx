import { LatLngExpression } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Polygon , GeoJSON} from "react-leaflet"
import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { apiKey, position, selectedAddress, selectedTeig, Teig } from "../state/state"

interface Props {

}

export const Map = (props: Props) => {
    const pos = useRecoilValue(position)
    const teiger  = useRecoilValueLoadable(selectedTeig)
    const apikey = useRecoilValue(apiKey)



    const purpleOptions = { color: 'purple' }

    return (
        <div>

            {apikey &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={pos} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                />
{teiger.state === 'hasValue' && teiger.contents.map(t =>  <GeoJSON pathOptions={purpleOptions} data={JSON.parse(t.Geometri)} />)}

                
            </MapContainer>}

        </div>

    )
}


