import '@aerisweather/javascript-sdk/dist/styles/styles.css';
import Weather_API_Example from "@/components/example";


export default function Home() {
    
    const api_params = ['forecasts', 'conditions', 'alerts', 'airquality'];
    const headline = 'Visualize weather data';
    const description = 'Click a button to view a sample response from the AerisWeather API. Copy the request URL to add to your web project.';
    const headline2 = 'Ride the lightning';
    const description2 = 'This is a second API query module just for the lightning endpoint.';
    const api_params2 = ['lightning'];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
