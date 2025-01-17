/* eslint-disable no-template-curly-in-string */
import {Cesium3DTileStyle} from 'cesium';

export default new Cesium3DTileStyle({
  defines: {
    is_roof: '${BuildingRoofSurface} !== undefined',
    is_wall: '${BuildingWallSurface} !== undefined',
    is_bolig: "${Building.function} === 'Bolig' || ${Building.function} === 'Fritidsbolig'",
    is_hytte: "${Building.class} === '161'",
    is_laave: "${Building.class} === '241'",
    is_veksthus: "${Building.class} === '243'",
    is_divlarge:
      "${Building.function} === 'Garasje uthus' || ${Building.function} === 'Fabrikk naering' || ${Building.function} ==='Landbruk fiske'|| ${Building.function} === 'Samferdsel'|| ${Building.function} === 'Udefinert'|| ${Building.function} === 'Kontor'|| ${Building.function} === 'Handel'|| ${Building.function} === 'Overnatting'|| ${Building.function} === 'Restaurant'|| ${Building.function} === 'Undervisning'|| ${Building.function} === 'Kultur'|| ${Building.function} === 'Idrett'|| ${Building.function} === 'Kirke'|| ${Building.function} === 'Helse'",
    glass_color: 'rgba(255*.4, 255*.4, 255*.5, .75)',
    roof_color: 'rgb(255*.3, 255*.3, 255*.3)',
    wall_color: 'rgb(255*.6, 255*.6,  255*.6)',
    barnred_color: 'rgb(255*.5, 255*.15, 255*.15)',
    tarbrown_color: 'rgb(255*.4, 255*.18, 255*.1)',
    darkgray_color: 'rgb(255*.3, 255*.3,  255*.3)',
    medgray_color: 'rgb(255*.5, 255*.5,  255*.5)',
    lightgray_color: 'rgb(255*.8, 255*.8,  255*.8)',
  },
  show: 'true',
  color: {
    conditions: [
      ['${is_veksthus}', '${glass_color}'],
      ['${is_roof} && ${is_hytte}', '${roof_color}'],
      ['${is_wall} && ${is_hytte}', '${wall_color}'],
      ['${is_roof} && ${is_laave}', '${roof_color}'],
      ['${is_wall} && ${is_laave}', '${wall_color}'],
      ['${is_roof} && ${is_bolig}', '${roof_color}'],
      ['${is_wall} && ${is_bolig}', '${wall_color}'],
      ['${is_roof} && ${is_divlarge}', '${darkgray_color}'],
      ["${CityFurniture.class} === '6012'", 'rgba(150, 150, 150, .2)'], // Gjerde
      ["${CityFurniture.class} === '6105'", 'rgba(80, 100, 80, .8)'], // Hekk
      ['true', '${lightgray_color}'],
    ],
  },
});
