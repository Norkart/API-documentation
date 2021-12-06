import React from "react";
import MapControls from "../MapControls";
import { Props } from '../MapOrchestrator';
import CameraPosition from "./CameraPosition";
import { CesiumViewer } from './CesiumViewer';

export const CesiumMap: React.FC<Props> = (props) => {
  const {components, bounds, onBoundsChange} = props;

  return (
    <CesiumViewer>
      {components && <MapControls components={components} />}
      <CameraPosition
        initialBounds={bounds}
        onBoundsChange={onBoundsChange}
      />
    </CesiumViewer>
  );
};
export default CesiumMap;
