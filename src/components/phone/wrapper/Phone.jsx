import styles from './css/style.module.css';

export default function Phone({children}) {
  return (
    <div className={styles.wrapper}>
      {children}
      <a href="#" target="_blank"></a>
    </div>
  )
}
