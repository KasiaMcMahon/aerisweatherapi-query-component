import AirQuality from "@/components/example";
import styles from './card.module.css'

export default function Card() {
    return (
        <div className={`rounded-lg drop-shadow-xl ${styles.card}`}>
            <AirQuality headline="Try out the route action" description="Click an endpoint button to see an API response using a sample route request." />
        </div>
    )
}