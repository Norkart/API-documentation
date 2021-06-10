import {atom, selector} from 'recoil';


export const apiKey = atom<string>({
    key: 'apiKey',
    default: ''
})


export const selectedAddress = atom<Address>({
    key: 'selectedAddress',
    default: {latLng: {lat: 10, lng: 60}, id: "1", text: "text"}
})

type Address = {
    id: string,
    latLng: LatLng,
    text: string
  }

  type LatLng = {
    lat: number,
    lng: number
  }
