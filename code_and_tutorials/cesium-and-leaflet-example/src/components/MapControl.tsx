import React from 'react';
import {useRef, useEffect} from 'react';
import L from 'leaflet';
import { MapComponent } from '../utils/types';

interface Props {
  component: MapComponent;
}

export const MapControl: React.FC<Props> = (props) => {
  const {node, render} = props.component;
  const divRef = useRef(null);

  useEffect(() => {
      if(divRef.current){
        L.DomEvent.disableClickPropagation(divRef.current);
      }
    });

  return (
    <div ref={divRef} className='leaflet-control' style={{flex: 1}}>
      {node ? node : render ? render() : null}
    </div>
  );
};

export default MapControl;
