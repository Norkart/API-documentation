import L from 'leaflet';
import { useEffect, useRef } from 'react'
import { Search } from '../Search'

export const TopLeftMapControl = () => {
    
    const divRef = useRef(null);

    useEffect(() => {
        if(!divRef) return;
        if(!divRef.current) return;
        
        L.DomEvent.disableClickPropagation(divRef.current!);
        L.DomEvent.disableScrollPropagation(divRef.current!);
        
      },[]);
      
    return (
        <div ref={divRef} className='leaflet-control-container'>
        <div className='leaflet-top leaflet-left'>
            <div className='leaflet-control' style={{flex: 1}}>
                <Search />
            </div>
        </div>
    </div>
    )
}
