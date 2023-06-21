import Image from 'next/image'
import { Inter } from 'next/font/google'
import AerisWeather from '@aerisweather/javascript-sdk';
import { useEffect } from 'react';
const aeris = new AerisWeather('fBfpXMnG93TbC9N3yRGE3', 'ziAoiSgB21bWi01hXKoB5StuohoRt9cM0OFPa0g7');
import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import {Apps} from "@aerisweather/javascript-sdk/dist/apps";
import InteractiveMapApp = Apps.InteractiveMapApp;
import Weather_API_Example from "@/components/example";

//const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  /* aeris.views().then((views) => {
    const map = new views.InteractiveMap('#map', {
      strategy: 'leaflet',
      zoom: 4,
      layers: 'satellite,radar'
    });

    map.on('ready', () => {
      map.setCenter({ lat: 47.5, lon: -121.5 });
      map.setZoom(6);
    });
  });

  useEffect(() => {
    aeris.apps().then((apps) => {
      const map = new apps.InteractiveMapApp('#ia-map', {
        map: {
          strategy: 'leaflet',
          zoom: 4,
          layers: 'satellite,radar'
        },
        panels: {
          layers: {
            buttons: [{
              id: 'radar',
              value: 'radar:80',
              title: 'Radar'
            },{
              id: 'satellite',
              value: 'satellite:75',
              title: 'Satellite'
            },{
              id: 'alerts',
              value: 'alerts',
              title: 'Alerts'
            }]
          }
        }
      });
    });
  }, [])
  */
    
    const api_params = ['forecasts', 'conditions', 'alerts', 'lightning'];
    const headline = 'Try out the route action';
    const description = 'Click an endpoint button to see an API response using a sample route request.';
    const headline2 = 'Ride the lightning';
    const description2 = 'Click an endpoint button to see an API response using a sample route request.';
    const api_params2 = ['lightning'];


    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div id='ia-map' className="h-48 w-full"></div> */}
      <Weather_API_Example
        headline={headline}
        description={description}
        api_params={api_params}
      />
        <Weather_API_Example
            headline={headline2}
            description={description2}
            api_params={api_params2}
        />
    </main>
  );
}
