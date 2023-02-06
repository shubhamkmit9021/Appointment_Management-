import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const History = () => {

  let data = JSON.parse(localStorage.getItem("ClientData")) || [];

  return (
    <Box mt='80px' p={10}>
      {
        data.map( (item) =>
          <Box w="96%" m="auto">
            <Text as="mark" py="1" px="2"> {item.lawyerName} </Text>
          </Box>

                
      
       
        )
      }
    </Box>
  )
}

export default History

  {/* {
                    allData.map((item, index) => (
                    <Box textAlign="center" fontSize="4xl" key={item.id}>
                    
                  
                  </Box>
                ))} */}

{/* <Box className="itemBox">
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
    
  </Box>
))}
</Box> */}

{/* <h1>{item.lawyerName}</h1>
           <h2>{item.lawyerId}</h2>
           <h2>{item.lawyerProff}</h2>
          <h2>{item.clientDate}</h2>
          <h2>{item.clientEmail}</h2>
          <h2>{item.clientName}</h2>
          <h2>{item.clientPhone}</h2>
          <h2>{item.clientSubject}</h2>
           <hr /> */}

