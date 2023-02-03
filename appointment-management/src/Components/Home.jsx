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
  const [lawyer, setLawyer] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
 
  // var appointedLawyer = JSON.parse(localStorage.getItem("Booked_Lawyer")) || [];

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
    // var notPossible = false;

      var obj = 
      {
        lawyerName : lawyer.emp_name,
        lawyerProff : lawyer.Speciality,
        lawyerPrice : lawyer.price,
        lawyerId : lawyer.emp_id,
        clientName: document.querySelector("#name").value,
        clientEmail: document.querySelector("#email").value,
        clientPhone: document.querySelector("#phone").value,
        clientSubject: document.querySelector("#sub").value,
        clientDate : document.querySelector("#datetime").value,
       
      };
      
      var datas = obj;
      datas.slot = 1;
      var flag = true;

      myArr.map( (elem) => {
        if(elem.lawyerId === datas.lawyerId) 
        {
          elem.slot++;
          flag = false;
        }
      })
      
        if(flag)
        {
          myArr.push(datas);
         
        }
        
        localStorage.setItem("ClientData", JSON.stringify(myArr));
        alert("Your Appointment is Booked.");
       


  }
  

  const openModal = (singleData) => {
    setLawyer(singleData);
    onOpen();  
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
                <Box my="1" py="2" className="singleItem" key={employ.emp_id}>
                  <Image
                    className="imgstyle"
                    src={employ.image}
                    alt={employ.emp_id}
                  />
                  <Text as="b" fontSize="2xl">
                    {employ.emp_name}
                  </Text>
                  <Text fontSize="2xl">{employ.Speciality}</Text>
                  <Text fontSize="3xl">{employ.price}</Text>
                  <Button
                    onClick = { () => openModal(employ) }
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
