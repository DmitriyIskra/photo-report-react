import styles from './css/style.module.css';
import City from '../city/City';

export default function WrCity() {
  return (
    <div className={styles.wrapper}>
        <City />
    </div>
  )
}
