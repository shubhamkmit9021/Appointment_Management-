import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    IconButton,
    useColorMode,
  } from "@chakra-ui/react";
 
  
  
  export default function Demo() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
  
    return (
        <Box position="relative">
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div id="parent">
          <div>
            <h2 id="myheading">Enter Details</h2>
            <form>
              <input id="name" type="text" placeholder="Enter Your Name Here" />
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email Here"
              />
              <input
                id="phone"
                type="number"
                minlength="10"
                maxlength="10"
                placeholder="Enter Your Number Here"
              />
              <input
                id="sub"
                type="text"
                placeholder="Enter Your Subject Here"
              />
              <input type="datetime-local" id="datetime" ></input>
              <input type="submit" value="SUBMIt" />

            </form>
          </div>
        </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}> Book Now </Button>
              <Button colorScheme="red" mr={3} onClick={onClose}> Cancel </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </Box>
    );
  }