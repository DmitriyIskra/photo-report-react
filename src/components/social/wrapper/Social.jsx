import styles from './css/style.module.css';

export default function Social({children}) {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}
