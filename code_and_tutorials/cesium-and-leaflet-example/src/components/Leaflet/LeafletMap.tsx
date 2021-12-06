import React, {Suspense} from 'react';
import { MapContainer, TileLayer } from "react-leaflet"
import MapControls from '../MapControls';
import EventHandler from './EventHandler';
import { Props } from "../MapOrchestrator"

const maptilesUrl = process.env.REACT_APP_MAPTILES_PROVIDER_URL || "";

export const LeafletMap: React.FC<Props> = (props) => {
    const {components, onBoundsChange, bounds } = props
    const mapCenter = bounds?.getCenter(); 
    return (
        <div style={{ height: '100%' }} >
            <MapContainer style={{ height: '100%', width: '100vw' }} center={mapCenter} zoomControl={false} bounds={bounds} scrollWheelZoom={true}>
                {components && <MapControls components={components} />}
                <EventHandler onBoundsChange={onBoundsChange}/>
                <Suspense fallback={<div></div>}>
                    <TileLayer
                        url={maptilesUrl}
                        attribution={`Norkart.`}
                    />
                </Suspense>
            </MapContainer>
        </div>
    )
}
export default LeafletMap;
