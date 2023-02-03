import React, { useState, useEffect } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Type } from "./Type";
import { FcCalendar } from "react-icons/fc";
import "./Home.css";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getData = () => {
      fetch(`https://easy-gold-tuna.cyclic.app/law_firms`)
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
        });
    };
    getData();
  }, []);

  function storeAppointmentData(e) {
    e.preventDefault();

    var myArr = JSON.parse(localStorage.getItem("ClientData")) || [];
  
    var name1 = document.querySelector("#name");
    var name = name1.value;
    name1.value = "";

    var email1 = document.querySelector("#email");
    var email = email1.value;
    email1.value = "";

    var phone1 = document.querySelector("#phone");
    var phone = phone1.value;
    phone1.value = "";

    var subject1 = document.querySelector("#sub");
    var subject = subject1.value;
    subject1.value = "";

    var datetime1 = document.querySelector("#datetime");
    var datetime = datetime1.value;
    datetime1.value = "";

    console.log(name, email, phone, subject, datetime)

    if (name.length <= 0) 
    {
      alert("Please Enter Your Name");
    } 
    else if (email.length <= 0) 
    {
      alert("Please enter valid email id");
    } 
    else if (phone.length <= 9) 
    {
      alert("Please enter valid 10 digit mobile number");
    } 
    else if (subject.length <= 0) 
    {
      alert("Please enter atleast a Title in Subject");
    } 
    else if (datetime.length <= 0) 
    {
      alert("Please Choose data and time");
    } 
    else 
    {
      var obj = 
      {
        Myname: name,
        Myemail: email,
        Myphone: phone,
        Mysubject: subject,
        Mydatetime : datetime,
      };

      myArr.push(obj);
      localStorage.setItem("ClientData", JSON.stringify(myArr));
      alert("Your Appointment is Booked.");
    }

  }
  

  return (
    <Box>
      <Box mb="9" mt={"15vh"}>
        <Type />
      </Box>

      <Box>
        <Modal
          blockScrollOnMount={true}
          isCentered
          motionPreset="slideInBottom"
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div id="parent">
                <div>
                  <h2 id="myheading">Enter Details</h2>
                  <form onSubmit={storeAppointmentData}>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name Here"
                    />
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
                    <input type="datetime-local" id="datetime"></input>
                    <input type="submit" value="SUBMIt" onClick={onClose} />
                  </form>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                {" "}
                Cancel{" "}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Box w="96%" m="auto">
        {allData.map((item, index) => (
          <Box textAlign="center" fontSize="4xl" key={item.id}>
            <Text as="mark" py="1" px="2">
              {item.name}
            </Text>
            <Box className="itemBox">
              {item.employees.map((employ, index) => (
                <Box my="1" py="2" className="singleItem" key={employ.id}>
                  <Image
                    className="imgstyle"
                    src={employ.image}
                    alt={employ.id}
                  />
                  <Text as="b" fontSize="2xl">
                    {employ.emp_name}
                  </Text>
                  <Text fontSize="2xl">{employ.Speciality}</Text>
                  <Text fontSize="3xl">{employ.price}</Text>
                  <Button
                    onClick={onOpen}
                    leftIcon={<FcCalendar size={26} />}
                    colorScheme="green"
                    variant="solid"
                  >
                    {" "}
                    Book Appointment{" "}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
