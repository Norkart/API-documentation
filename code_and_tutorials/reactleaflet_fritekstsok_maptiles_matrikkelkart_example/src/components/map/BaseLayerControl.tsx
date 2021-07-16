
import { LayersControl, TileLayer } from 'react-leaflet'
import { useRecoilValue } from 'recoil';
import { apiKey } from '../../state/state';

const layers = [
    {
        Name: 'grey',
        Tileset: 'webatlas-gray-vektor',
        Ext: 'png'
    },
    {
        Name: 'medium',
        Tileset: 'webatlas-medium-vektor',
        Ext: 'png'
    },
    {
        Name: 'lite',
        Tileset: 'webatlas-lite-vektor',
        Ext: 'png'
    },
    {
        Name: 'vector',
        Tileset: 'webatlas-standard-vektor',
        Ext: 'png'
    },
    {
        Name: 'aerial',
        Tileset: 'webatlas-orto-newup',
        Ext: 'jpeg'
    },
    {
        Name: 'hybrid',
        Tileset: 'webatlas-standard-hybrid',
        Ext: 'jpeg'
    }
]

export const BaseLayerControl = () => {
    const apikey = useRecoilValue(apiKey);


    return (
        <div>
            <LayersControl position="bottomleft">
                {layers.map(l => (
                    <LayersControl.BaseLayer checked name={l.Name}>
                        <TileLayer
                            url={`https://waapi.webatlas.no/maptiles/tiles/${l.Tileset}/wa_grid/{z}/{x}/{y}.${l.Ext}?APITOKEN=${apikey}`}
                            attribution={`Norkart`}
                        />
                    </LayersControl.BaseLayer>))}
            </LayersControl>
        </div>
    )
}


