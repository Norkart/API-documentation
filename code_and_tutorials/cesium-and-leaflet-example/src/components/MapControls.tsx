import React from 'react';
import { ReactElement } from 'react';
import { MapComponent } from '../utils/types';
import MapControl from './MapControl';

interface Props {
  components: MapComponent[];
}

interface Positions {
    bottomleft: ReactElement[],
    bottomright: ReactElement[],
    topleft: ReactElement[],
    topright: ReactElement[],
}
  
export const MapControls: React.FC<Props> = (props) => {
  const {components} = props;
  const groups = components.reduce(
    (acc : Positions, c) => {
      acc[c.position].push(<MapControl component={c} key={c.key} />);
      return acc;
    },
    {
      bottomleft: [],
      bottomright: [],
      topleft: [],
      topright: [],
    }
  );

  return (
    <div className='leaflet-control-container'>
      <div className='leaflet-top leaflet-left' style={{display: 'flex'}}>
        {groups.topleft}
      </div>
      <div className='leaflet-top leaflet-right'>{groups.topright}</div>
      <div className='leaflet-bottom leaflet-left'>
        {groups.bottomleft}
      </div>
      <div className='leaflet-bottom leaflet-right'>{groups.bottomright}</div>
    </div>
  );
};

export default MapControls;
