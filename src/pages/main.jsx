import styles from './style.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../slices/sliceEvents';

import Loading from '../components/loading/Loading';
import WrapperSlider from '../components/slider-events/wrapper/wrapper-slider';

export default function Main() {
  const dispatch = useDispatch();
  const {events, loading, error} = useSelector( store => store.events );

  const api = async () => {
    console.log('work api')
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    
    console.log(result)
  }

  useEffect(() => {
    dispatch(fetchEvents());
  }, [])

  // useEffect(() => {
  //   console.log(events)
  // }, [events])

  return (
    <main className={styles.main}> 
      <div className={styles.events}>
        {loading && <Loading />}
        <WrapperSlider />
      </div>
    </main>
   
  )
}
