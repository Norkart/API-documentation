import React from "react";
import {useCesium} from 'resium';
import {Camera} from 'cesium';
import {Rectangle, Math} from 'cesium';
import L from 'leaflet';
import {useEffect} from 'react';

interface Props {
  initialBounds?: L.LatLngBounds;
  onBoundsChange?: (bounds: L.LatLngBounds) => void;
}

const toExtent = (bounds: L.LatLngBounds) =>
  new Rectangle(
    Math.toRadians(bounds.getSouthWest().lng),
    Math.toRadians(bounds.getSouthWest().lat),
    Math.toRadians(bounds.getNorthEast().lng),
    Math.toRadians(bounds.getNorthEast().lat)
  );

const getBounds = (camera: Camera | undefined) => {
  if(camera){
    const viewRectangle = camera.computeViewRectangle();
    if(viewRectangle){
      const southWest = L.latLng(Math.toDegrees(viewRectangle.south), Math.toDegrees(viewRectangle.west));
      const northEast = L.latLng(Math.toDegrees(viewRectangle.north), Math.toDegrees(viewRectangle.east));
      return L.latLngBounds(southWest, northEast);;
    }
  }
  const defaultLatLng = L.latLng({ lat: 63.426891, lng: 10.396416 });
  return L.latLngBounds(defaultLatLng, defaultLatLng);
};

export const CameraPosition: React.FC<Props> = (props) => {
  const context = useCesium();
  const {initialBounds, onBoundsChange } = props;

  useEffect(() => {
    if (context.camera && initialBounds) {
      context.camera.setView({
        destination: toExtent(initialBounds),
        orientation: {
          heading: 0.0,
          pitch: -Math.PI_OVER_TWO,
          roll: 0.0,
        },
      });
      context.camera.moveEnd.addEventListener(() => onBoundsChange && onBoundsChange(getBounds(context.camera)));
    }
  }, []);
  return <div></div>;
};
export default CameraPosition;