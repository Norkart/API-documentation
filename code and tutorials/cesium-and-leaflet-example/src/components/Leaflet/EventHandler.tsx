import React from "react";
import {useMapEvents} from 'react-leaflet';

interface Props {
  onBoundsChange?: (bounds: L.LatLngBounds) => void;
}

export const EventHandler: React.FC<Props> = (props) => {
  const {onBoundsChange} = props;
  const map = useMapEvents({
    zoomend: () => {
      if (onBoundsChange) {
        onBoundsChange(map.getBounds());
      }
    },
    moveend: () => {
      if (onBoundsChange) {
        onBoundsChange(map.getBounds());
      }
    }
  });
  return null;
};
export default EventHandler;
