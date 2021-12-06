import React, {Suspense} from 'react';
import { MapContainer, TileLayer } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey } from "../../state/state"
import MapControls from '../MapControls';
import { Props } from "../MapOrchestrator"
import EventHandler from './EventHandler';

const maptilesUrl = process.env.REACT_APP_MAPTILES_PROVIDER_URL || "";

export const LeafletMap: React.FC<Props> = (props) => {
    const {components, onBoundsChange, bounds } = props
    const token = useRecoilValue<string | null>(apiKey);
    const mapCenter = bounds?.getCenter(); 
    return (
        <div style={{ height: '100%' }} >
            {token  &&
                <MapContainer style={{ height: '100%', width: '100vw' }} center={mapCenter} zoomControl={false} bounds={bounds} scrollWheelZoom={true}>
                    {components && <MapControls components={components} />}
                    <EventHandler onBoundsChange={onBoundsChange}/>
                    <Suspense fallback={<div></div>}>
                      <TileLayer
                          url={`${maptilesUrl}${token}`}
                          attribution={`Norkart.`}
                      />
                    </Suspense>
                </MapContainer>}
        </div>
    )
}
export default LeafletMap;
