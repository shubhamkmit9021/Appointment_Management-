import React from "react";
import { Box, Image, Text, Input, Stack } from "@chakra-ui/react";
import "./Appointment.css";

const Appointment = () => {

  function myData (e) {
    
  var arr = JSON.parse(localStorage.getItem("users")) || [];

  e.preventDefault();

  var name1 = document.querySelector("#name");
  var name = name1.value;
  name1.value = "";

  var email1 = document.querySelector("#email");
  var email = email1.value;
  email1.value = '';

  var phone1 = document.querySelector("#phone");
  var phone = phone1.value;
  phone1.value = '';

  var subject1 = document.querySelector("#sub");
  var subject = subject1.value;
  subject1.value = '';

  var message1 = document.querySelector("#message");
  var message = message1.value;
  message1.value = '';

    if(name.length <= 0) {
      alert("Please Enter Your Name")
    }
    else if(email.length <= 0 ) {
       alert("Please enter valid email id");
    }
    else if(phone.length <= 9) {
      alert("Please enter valid 10 digit mobile number");
    }
    else if(subject.length <= 4)
    {
      alert('Please enter atleast a Title in Subject');
    }    
    else 
    {

    var obj = {
        Myname : name,
        Myemail : email,
        Myphone : phone,
        Mysubject : subject,
        Mymessage : message
      }

      arr.push(obj);
      console.log(arr);
      localStorage.setItem("users", JSON.stringify(arr));
      alert("Your Data is Stored.")
       
    }

  }
  return (
    <Box display="flex" justifyContent="space-evenly" margin="auto" mt={'10vh'} >
      <Box
        w="45%"
        textAlign="center"
        marginTop="35px"
        border="1px solid black"
        borderRadius='9'
        alignItems="center"
      >
        <div id="parent">
          <div>
            <h2 id="myheading">APPOINTMENT</h2>
            <form onSubmit={myData}>
              <input id="name" type="text" placeholder="Enter Your Name Here" />
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email Here"
              />
              <input
                id="phone"
                type="number"
                placeholder="Enter Your Number Here"
              />
              <input
                id="sub"
                type="text"
                placeholder="Enter Your Subject Here"
              />

              <textarea id="message" rows="2" cols="20"> </textarea>

              <input type="submit" value="SUBMIt" />

            </form>
          </div>
        </div>
      </Box>

      <Box w="45%" boxSize="sm" marginTop="35px">
        <Image
          src="http://www.slcpartners.co.in/css/images/appoint2.jpg"
          alt="pic1"
        />
      </Box>
    </Box>
  );
};

export default Appointment;
