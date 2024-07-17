import styles from './css/style.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
        <img src={require('../../img/loading/loading.gif')} alt="loading" />
    </div>
  )
}
