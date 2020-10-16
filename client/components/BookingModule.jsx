import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


import BookingApp from './BookingApp.jsx';
import GuestsApp from './GuestsApp.jsx';


const CheckRates = styled.div`
  position: relative;
  flex-basis: auto;
  width: 419px;
  flex: none;
  font: 400 13.3333px Arial;
  height: 475px;
`;

const MetaInner = styled.div`
  padding: 4px 16px 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  min-height: 160px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
  position: relative;
  z-index: 201;
  height: 100%;
`;

const TripSearch = styled.div`

`;

const ReactContainer = styled.div`
  font-size: 16px;
  white-space: nowrap;
  text-align: center;
  display: block;
  height: auto;
  padding: 0;
  max-width: 974px;
  margin: 0 auto;
`;

const Deals = styled.img `
  width: 359px;
  margin: 15px;
  top: 25px;
  position: relative;
  left: 2px;
`;

const BookingModule = () => {
  const [checkInPicker, setCheckInPicker] = useState(false);
  const [checkOutPicker, setCheckOutPicker] = useState(false);
  const [guestsPicker, setGuestsPicker] = useState(false);

  useEffect(() => {
    if (checkInPicker || checkOutPicker) {
      setGuestsPicker(false);
    }
  }, [checkInPicker, checkOutPicker]);

  useEffect(() => {
    if (guestsPicker) {
      setCheckInPicker(false);
      setCheckOutPicker(false);
    }
  }, [guestsPicker]);

  return (
    <CheckRates>
      <MetaInner>
        <TripSearch>
          <ReactContainer>
            <BookingApp setCheckInPicker={setCheckInPicker} setCheckOutPicker={setCheckOutPicker} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker}/>
            <GuestsApp guestsPicker={guestsPicker} setGuestsPicker={setGuestsPicker}/>
          </ReactContainer>
          <Deals src="https://s3.us-east-2.amazonaws.com/images.for.hrr/Screen+Shot+2020-10-09+at+4.29.31+PM.png"/>
        </TripSearch>
      </MetaInner>
    </CheckRates>
  )
}

export default BookingModule;