import { throttle } from "lodash"
import { Suspense, useEffect, useState } from "react"
import { MapContainer, ZoomControl } from "react-leaflet"
import { useRecoilValue } from "recoil"
import { apiKeyState } from "../../state/state"
import { BaseLayerControl } from "./BaseLayerControl"
import { MapLayers } from "./MapLayers"
import { TopLeftMapControl as SearchControl } from "./SearchControl"


export const Map = () => {
    const apikey = useRecoilValue(apiKeyState);
    const center = { lat: 63.5, lng: 10.5}; 
    //hack for full height in mobile browsers.
    const [mapHeight, setmapHeight] = useState<'100vh' | number>('100vh') 

    const onResize = throttle(() => {
        console.log('call')
        setmapHeight(window.innerHeight);
    }, 200)

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [onResize])

    console.log(apikey)

    return (
        <div >
            {apikey &&
                <MapContainer style={{ height: mapHeight, width: '100vw' }} center={center} zoomControl={false} zoom={5} scrollWheelZoom={true}>
                    <Suspense fallback={<div></div>}>
                        <MapLayers />
                        <SearchControl />
                        <ZoomControl position={'bottomright'} />
                        <BaseLayerControl />
                    </Suspense>
                </MapContainer>}
        </div>
    )
}


