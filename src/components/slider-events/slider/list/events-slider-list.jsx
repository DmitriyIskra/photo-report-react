import styles from './css/style.module.css';

import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import EventsSliderItem from '../item/events-slider-item';
import store from '../../../../store/store';

import { startData, changeActiveSlide, resetOffset } from '../../../../slices/sliceSliderEvents';

export default function EventsSliderList() {
  const { events } = useSelector( store => store.events );
  const {width, offset, timingF, duration, activeSlide} = useSelector(store => store.sliderEvents)

  const dispatch = useDispatch();

  const slider = events ? events.slider : false;

  const listStyle = {
    transition: `transform ${duration}s ${timingF}`,
    transform: `translateX(-${offset}px)`,
  }

  const listSlides = useRef();

  useEffect(() => {
    const width = listSlides.current.offsetWidth;

    dispatch(startData({width}))

    // создать свойство индикатор за которым будет следить useEffect и там навешивать слушать окончания анимации

    listSlides.current.addEventListener('transitionend', () => {
      listSlides.current.style.transition = '';
      listSlides.current.append(listSlides.current.children[0]);
      dispatch(resetOffset());

      const id = listSlides.current.children[0].id;
      dispatch(changeActiveSlide({id}));

      setTimeout(() => {
        listSlides.current.style.transition = `transform ${duration}s ${timingF}`;
        listSlides.current.style.transform = `translateX(-${offset}px)`
      })
    }, {once: true})
  }, [])

  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide])

  return (
    <ul className={styles['event-slider-list']} style={listStyle} ref={listSlides}>
      {slider && slider.map(item => {
        return <EventsSliderItem key={v4()} id={item.id} path={item.img} title={item.title}/>
      })}
    </ul>
  )
}
