import styles from './css/style.module.css';
import { useSelector } from 'react-redux';

export default function City() {
    const { city, longitude } = useSelector( store => store.location )
    console.log(city, longitude)
    return (
        <div className={styles.city}>
            {city ? city : 'Ваш город'}
        </div>
    )
}
