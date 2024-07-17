import styles from './css/style.module.css';

export default function EventsSliderItem({id, path, title}) {
  return (
    <li className={styles['event-slider-item']} id={id}>
      <img src={require(`../../../../img/${path}`)} alt="title" />
    </li>
  )
}
