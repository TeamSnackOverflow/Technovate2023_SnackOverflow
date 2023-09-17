import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Stack,
  NumberInput,
  NumberInputField,
  Checkbox,
  Button,
  Collapse,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Update() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phoneNumber: "",
    hasCar: false,
    carSeats: 0,
  });

  const handleInfoChange = (e) => {
    setFormData({
        ...formData, 
        [e.target.name] : e.target.value
    })
    
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "radio" ? value : null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box w={'30%'} ml={'35%'} mt={12}>    
      <Stack spacing={4}> 
        <Heading mt={-8} bgGradient='linear(to-r, green.200, blue.500)'bgClip='text'>Your Profile</Heading>
        <Divider/>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInfoChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInfoChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Gender</FormLabel>
          <RadioGroup>
            <HStack spacing={4}>
              <Radio name='gender' value="male" onChange={handleChange}>Male</Radio>
              <Radio name='gender' value="female" onChange={handleChange}>Female</Radio>
              <Radio name='gender' value="other" onChange={handleChange}>Other</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <NumberInput
            name="age"
            value={formData.age}
            onChange={(value) => setFormData({ ...formData, age: value })}
          >
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInfoChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Do you have a car?</FormLabel>
          <Checkbox
            name="hasCar"
            isChecked={formData.hasCar}
            onChange={handleChange}
            mr={4}
          >
            Yes
          </Checkbox>
          <Checkbox
            name="hasnNoCar"
            onChange={handleChange}
          >
            No
          </Checkbox>
        </FormControl>
        
        <Collapse in={formData.hasCar}>
          <FormControl isRequired>
            <FormLabel>How many seats does your car have?</FormLabel>
            <NumberInput
              name="carSeats"
              value={formData.carSeats}
              onChange={(value) => setFormData({ ...formData, carSeats: value })}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
          </Collapse>
        <Button type="submit" colorScheme="blue" mb={8}>
          <NavLink to='/location'>Submit</NavLink>
        </Button>
      </Stack>
      </Box>
    </form>
  );
}

export default Update;
