import { ReactNode } from "react"

export interface LatLng {
    lat: number;
    lng: number;
}
  
export interface MapComponent {
    node?: ReactNode;
    render?: () => ReactNode;
    key: string;
    position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  }