import React from 'react';
import './EventDetail.css';
import { useParams } from 'react-router-dom';
import ScrollToTop from '../../Components/ScrollToTop'


const EventDetail = () => {
  const { id } = useParams()
  console.log(id)
  return (
      <div>{id}</div>
  )
};

export default EventDetail;