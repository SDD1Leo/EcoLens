
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import {  getallcoordinate } from '../appwrite/api';




const Animalsmap =  (props) => {
  let color = "yellow"
  const [loaded, setloaded] = useState(false)
const animalname =props.name
let coordinatesAnimal = []
 
    maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILERSDK;


useEffect(()=>{
    const map = new maptilersdk.Map({
        container: 'mapdiv',
        center: [ 78.14920864779964,30.026742797208023],
        zoom: 13,
        style: maptilersdk.MapStyle.STREETS,
        hash: true,
      });
      map.on('load', () => {
        setloaded(true)})

// const marker = new maptilersdk.Marker({
//         color: "purple",
//         draggable: false,
//         scale:1.2
//       })
//       .setLngLat([ 78.14920864779964,30.026742797208023])
//         .addTo(map);
//         //getting 

        getallcoordinate(animalname).then((response)=>{
          if (loaded){
            console.log(response)
            for (let i=0;i<response.length;i++){
              const latitude = response[i].latitude
              const longitude = response[i].longitude
              const health = response[i].health
              if (response[i].health == 2) {
                 color = "#B8860B"
              }
              else if (response[i].health == 3){
                color = "#006400"
              }
              else if (response[i].health == 1){
                 color = "#8B0000"
              }
              new maptilersdk.Marker({
                color: color,
                draggable: false,
                scale:1
              })
              .setLngLat([ longitude,latitude])
                .addTo(map);
        
         
            }
            
          }
         })

})



  return (
    <div className="map-wrap">
    
    {!loaded && <div className='items-center justify-center'>loading the map</div>}
    <div id='mapdiv' className="h-full w-full
       relative " />
  </div>
  )
}

export default Animalsmap