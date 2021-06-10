import {atom, selector} from 'recoil';


export const apiKey = atom<string>({
    key: 'apiKey',
    default: ''
})

