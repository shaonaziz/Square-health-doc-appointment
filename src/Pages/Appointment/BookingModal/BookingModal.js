import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time, price } = booking;
  

  const initialInfo = {
    patientName:"" ,
    email: "",
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    //collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    //send to the server
    fetch("https://stormy-brushlands-71850.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    handleBookingClose();
    e.preventDefault();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleBookingSubmit}>
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="patientName"
               
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="email"
                
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="phone"
                defaultValue="Phone Number"
                onBlur={handleOnBlur}
                size="small"
              />
              <TextField
                disabled
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button sx={{ m: 1 }} type="submit" variant="contained">
                Book
              </Button>
            </form>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
