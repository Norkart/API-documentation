import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import MapOrchestrator from './MapOrchestrator';
import { fromBboxString } from '../utils/geomutils';
import SwitchMode from './SwitchMode';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
}));

export const Map: React.FC = () => {
  const classes = useStyles();
  const [type, setType] = useState<'leaflet' | 'cesium'>('leaflet');
  const toggleMapMode = () => setType(type === 'leaflet' ? 'cesium' : 'leaflet');
 
  return (
    <div className={classes.root}>
      <MapOrchestrator
        bounds={fromBboxString('10.361009,63.421299,10.441046,63.439919')}
        type={type}
        components={[
          {
            key: 'mode',
            position: 'topright',
            node: <SwitchMode switchMode={toggleMapMode} />,
          },
        ]}
      >
      </MapOrchestrator>
    </div>
  );
};

export default Map;
