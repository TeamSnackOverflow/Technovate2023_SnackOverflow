import { Box, Stack , Heading ,Text, Card, CardBody , useToast} from '@chakra-ui/react'
import React, { useState } from 'react'

function Result() {
    const [isBooked , setIsBooked] = useState(false)
    const clickHandler = () => {
        setIsBooked((b)=> !b)
        if (isBooked) {
            toast({
                position:'top',
                title: 'Success.',
                description: "Your Carpool has been booked.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const toast = useToast()
    return (
    <Box width={'50vw'} ml={'25%'} my={12}>
        <Heading ml={4} mb={8} bgGradient='linear(to-r,blue.500 , green.200)'bgClip='text'>Available Carpoolers :</Heading>
        <Stack className='fadeup' spacing='8'>
            {users1.map((riders) => (
             <Card 
                key={riders.id} 
                variant={'elevated'} 
                bgColor={'gray.200'}
                shadow={'lg'}
                rounded={'lg'}
                bgGradient='linear(to-r,blue.200 , green.100)'
                _hover={{
                    cursor:'pointer'
                }}
                >

                <CardBody onClick={clickHandler}>
                    <Heading size='md' mb={4}>{riders.name}</Heading>
                    <Text>Gender : {riders.Gender}</Text>
                    <Text>Source : {riders.start}</Text>
                    <Text>Destination : {riders.destination}</Text>
                    <Text >Car Type : {riders.Car_type}</Text>
                </CardBody>
            </Card>
  ))}
</Stack>
    </Box>
  )
}
//9am
const users1 = [
    {
      id: 1,
      name: 'Aryan Jain',
      start: 'Shivaji Park',
      destination: 'Logitech Park, Andheri East',
      Gender: 'Female',
      Car_type: 'None',
    },
    {
      id: 2,
      name: 'Janhvi Sharma',
      start: 'Hiranandani',
      destination: 'Raheja Mindspace IT Park, Navi Mumbai',
      Gender: 'Male',
      Car_type: 'SUV',
    },
    {
      id: 3,
      name: 'Neha Pandey',
      start: 'Ekta BHoomi',
      destination: 'Kanakia Zillion IT Park, Bandra Kurla Complex (BKC)',
      Gender: 'Male',
      Car_type: 'Executive',
    },
    {
      id: 4,
      name: 'Harshvardhan Kumar',
      start: 'Thakur Village',
      destination: 'Crystal IT Park, Andheri East',
      Gender: 'Male',
      Car_type: 'SUV',
    },
    {
      id: 5,
      name: 'Aditya Gandhi',
      start: 'Ekta BHoomi',
      destination: 'Tata Consultancy Services (TCS) House',
      Gender: 'Female',
      Car_type: 'SUV',
    },
  ];
  

//8 am
// const users2 = [
//     {
//         id: 1,
//         name: 'Kiran Gupta',
//         start: 'Thakur Complex',
//         destination: 'WeWork, BKC (Co-working space in the business district)',
//         Gender: 'Male',
//         Car_type: 'Executive'
//     },
//     {
//         id: 2,
//         name: 'Janhvi Sharma',
//         start: 'Nahar Amrit Shakti',
//         destination: 'Paradigm IT Park, Malad West',
//         Gender: 'Male',
//         Car_type: 'Executive'
//     },
//     {
//         id: 3,
//         name: 'Janhvi Agarwal',
//         start: 'Ekta BHoomi',
//         destination: 'Kanakia Zillion IT Park, Bandra Kurla Complex (BKC)',
//         Gender: 'Male',
//         Car_type: 'Executive'
//     },
//     {
//         id: 4,
//         name: 'Priya Verma',
//         start: 'Northen Heights',
//         destination: 'Lotus Park, Andheri East',
//         Gender: 'Female',
//         Car_type: 'Executive'
//     },
//     {
//         id: 5,
//         name: 'Aaron Gupta',
//         start: 'ENL Aryavarta',
//         destination: 'Pinnacle Corporate Park, Bandra Kurla Complex (BKC)',
//         Gender: 'Male',
//         Car_type: 'SUV'
//     }
// ];


export default Result