import React, {ReactNode, useState} from 'react';
import { MapComponent } from '../utils/types';
import LeafletMap from './Leaflet/LeafletMap';
import CesiumMap from './Cesium/CesiumMap';
import L from 'leaflet';

export interface Props {
    bounds?: L.LatLngBounds;
    onBoundsChange?: (bounds: L.LatLngBounds) => void;
    children?: ReactNode;
    components?: MapComponent[];
}

export const MapOrchestrator: React.FC<Props & {type: 'leaflet' | 'cesium'}> = (props) => {
    const {type, ...rest} = props;
    const [bounds, setBounds] = useState(props.bounds);
    
    if (type === 'leaflet') {
      return <LeafletMap {...rest} bounds={bounds} onBoundsChange={setBounds}/>;
    }
    if (type === 'cesium') {
      return <CesiumMap {...rest} bounds={bounds} onBoundsChange={setBounds}/>;
    }
    return null;
};

export default MapOrchestrator;
