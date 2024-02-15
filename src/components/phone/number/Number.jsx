import styles from './css/style.module.css';

export default function NumberPhone({atr, num}) {
  return (
    <div className={styles[atr]}>{num}</div>
  )
}
 