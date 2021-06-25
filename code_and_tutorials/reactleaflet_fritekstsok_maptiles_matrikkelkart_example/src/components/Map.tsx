import React, { Suspense } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKey, selectedPosition } from "../state/state"
import { MapComps } from "./MapComps"
import { Search } from "./Search"


interface Props {

}

export const Map = (props: Props) => {
    const position = useRecoilValue(selectedPosition)
    const apikey = useRecoilValue(apiKey)

    return (
        <div>
            {apikey && position &&
                <MapContainer style={{ height: '100vh', width: '100vw' }} center={position} zoom={16} scrollWheelZoom={true}>
                    <Suspense fallback={<div></div>}>
                        <TileLayer
                            url={`https://waapi.webatlas.no/maptiles/tiles/webatlas-orto-newup/wa_grid/{z}/{x}/{y}.jpeg?APITOKEN=${apikey}`}
                            attribution={`Norkart`}
                        />
                        <MapComps/>
                        <div className='leaflet-control-container'>
                            <div className='leaflet-top leaflet-right'>
                                <div className='leaflet-control' style={{flex: 1}}>
                                    <Search />
                                </div>
                            </div>
                        </div>
                    </Suspense>
                </MapContainer>}
        </div>
    )
}


