import React, { ReactNode } from "react";
import { Cesium3DTileset as CCesium3DTileset } from "cesium";
import { Viewer, Cesium3DTileset } from "resium";
import tilesetStyle from "./tilesetStyle";
import terrainProvider from "./terrainprovider";
import imageryProvider from "./imageryprovider";

const houseTilesetUrl = process.env.REACT_APP_3D_TILES_PROVIDER_URL || "";

export interface CleanViewerProps {
  children?: ReactNode | ReactNode[];
}

export const CesiumViewer: React.FC<CleanViewerProps> = (props) => {  
  const handleTilesReady = (tileset: CCesium3DTileset) => {
    tileset.luminanceAtZenith = 0.5;
    tileset.style = tilesetStyle
  };

  return (
    <>
    <div id='none' style={{display: 'none'}}></div>
    <Viewer full
        terrainProvider={terrainProvider}
        imageryProvider={imageryProvider}
        timeline={false}
        animation={false}
        homeButton={false}
        vrButton={false}
        fullscreenButton={false}
        navigationHelpButton={false}
        selectionIndicator={false}
        baseLayerPicker={false}
        geocoder={false}
        infoBox={false}
        scene3DOnly
    >
      {props.children}
      <Cesium3DTileset
          url={houseTilesetUrl}
          show={true}
          onReady={handleTilesReady}
          dynamicScreenSpaceError
          maximumScreenSpaceError={32}
          dynamicScreenSpaceErrorFactor={16}
          preferLeaves
        />
    </Viewer>
    </>
  );
}