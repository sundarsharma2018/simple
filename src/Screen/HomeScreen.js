import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import AboutUs from './AboutUs';
import { listHome } from '../actions/homeAction'

export default function HomeScreen () {
  //  const dispatch = useDispatch();

  // useEffect(() => {
  //    dispatch(listHome());
  // }, [dispatch])

  return (
    <div>
      <AboutUs message="Data from first component1" />
    </div>
  );
}
