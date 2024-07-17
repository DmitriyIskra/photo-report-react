import styles from './css/style.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { next } from '../../../../slices/sliceSliderEvents';

export default function ButtonNext() {
  const dispatch = useDispatch();
  const { width } = useSelector(store => store.sliderEvents)

  const handler = () => {
    console.log('next', width)
    dispatch(next({width}));
  }

  return (
    <div className={styles.button} onClick={handler}>
        <svg viewBox="0 0 47 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 40.5L9.5 81L-1.19249e-07 71L29.5 40L-8.52629e-07 9.5L9.5 4.47183e-07L47 40.5Z" fill="#fff"></path>
            </svg>
    </div>
  )
}
