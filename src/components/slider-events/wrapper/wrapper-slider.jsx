import styles from './css/style.module.css';

import EventsSliderList from '../slider/list/events-slider-list';
import ButtonNext from '../slider/buttonNext/ButtonNext';
import ButtonPrev from '../slider/buttonPrev/ButtonPrev';

export default function WrapperSlider() {
  return (
    <div className={styles.wrapper}>
        <EventsSliderList />
        <ButtonPrev />
        <ButtonNext />
    </div>
  )
}
