import AerisWeather from '@aerisweather/javascript-sdk';
import { useState } from 'react';
const aeris = new AerisWeather('fBfpXMnG93TbC9N3yRGE3', 'ziAoiSgB21bWi01hXKoB5StuohoRt9cM0OFPa0g7');
import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import JSONPretty from 'react-json-pretty';
import Button from 'react-bootstrap/Button';
import { Open_Sans } from 'next/font/google';
import 'react-json-pretty/themes/monikai.css';

export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
})

import styles from './example.module.css'
import ClipboardCopy from "@/components/ClipboardCopy";
import {setHttpClientAndAgentOptions} from "next/dist/server/config";

export default function Weather_API_Example(props:any) {
    const headline = props.headline;
    const description = props.description;
    const api_params = props.api_params;
    const [endpoint, setEndpoint] = useState('endpoint');
    const [result_data, setResultData] = useState('result_data');

    const place = 'minneapolis,mn';
    const api_display_url ='https://api.aerisapi.com/' + endpoint + '/' + place + '?format=json&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]';

    function endpointClick(event: any) {
        setEndpoint(event.target.value);
    }

    const request = aeris.api().endpoint(endpoint).place(place).limit(1);
    request.get().then( (result) => {
            const data = result.data;
            setResultData(data)
            }
    );
    const buttonList = api_params.map((param:any) => <Button value={param} key={param} variant="light" className={`mr-1 ${styles.button}`} onClick={endpointClick}>{param}</Button>);

    return (
        <div className={`rounded-lg drop-shadow-xl max-w-3xl ${open_sans.variable} ${styles.container}`}>
            <div className='p-8'>
                <div className='pb-1'><h3>{props.headline}</h3></div>

                <p>{props.description}</p>
                <h4 className='pt-6 pb-2'>Request URL</h4>
                <div className='flex items-center pt-2 pb-4 max-w-3xl'>
                    <ClipboardCopy copyText={api_display_url}/>
                    <p className="pl-2">{api_display_url}</p>
                </div>
                <div>
                    {buttonList}
                </div>
            </div>
            <JSONPretty id="json-pretty" className='max-w-4xl' data={result_data}></JSONPretty>
        </div>
    )
}