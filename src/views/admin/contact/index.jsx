// ContactForm.js
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Link,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
    Textarea,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import backgroundImage from "assets/img/contact/vecteurAC2.jpg";

const ContactForm = () => {
    const textColor = useColorModeValue("black", "white");
    const btnColor = "orange";
    const backColor = "gray";
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setResponseMessage('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again.');
        }

    };

    return (
        <Card mt={{ base: "100px", md: "80px", xl: "76px", }} height={{ base: 'auto', md: '75vh', lg: '75vh' }} bg='white' transform='translate(0%, 7%)'>
            <Flex
                color='white'
                justifyContent='center'
                transform={{ base: 'translate(0%, 0%)', md: 'translate(3%, 0%)' }}
                width={{ base: '100%', md: '95%' }}
                height={{ base: 'auto', md: '75vh', lg: '75vh' }}
                boxShadow="1px 2px 3px rgba(0, 0, 0, 0.3)"
                borderRadius={{ base: '10px', md: '10px' }}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Box
                    bg='white'
                    width={{ base: '100%', md: '100%' }}
                    border='1px solid #5a5858'
                    borderLeftRadius={{ base: '10px', md: '10px' }}
                    p={{ base: '20px', md: '0' }}
                >
                    <Box height='90%' transform='translate(0%,5%)'>
                        <Heading
                            color={textColor}
                            fontSize={{ base: '2xl', md: 'xl' }}
                            mb='3px'
                            width='100%'
                            transform={{ base: 'translate(30%, 0%)', md: 'translate(20%, 14%)' }}
                            position='relative'
                        >
                            Contactez-nous
                        </Heading>
                        <FormControl
                            width='75%'
                            height={{ base: '70vh', md: '10vh', lg: '50vh' }}
                            transform={{ base: 'translate(20%, 0%)', md: 'translate(20%, 15%)' }}
                            mt={{ base: '20px', md: '0' }}
                        >
                            <FormLabel
                                display='flex'
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                mb='8px'
                            >
                                Nom complet<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired
                                variant='auth'
                                fontSize='sm'
                                type='text'
                                placeholder='Koffi Jean Yves Vianney'
                                mb='24px'
                                fontWeight='500'
                                size='lg'
                            />
                            <FormLabel
                                display='flex'
                                ms='4px'
                                fontSize='sm'
                                fontWeight='500'
                                color={textColor}
                                mb='8px'
                            >
                                Email<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired
                                variant='auth'
                                fontSize='sm'
                                type='email'
                                placeholder='jeanyves@gmail.com'
                                mb='24px'
                                fontWeight='500'
                                size='lg'
                            />
                            <Textarea
                                placeholder="Entrez votre message..."
                                size="md"
                                resize="none"
                                marginBottom='30px'
                                height='10vh'
                                color={textColor}
                                focusBorderColor="orange.400"
                                required
                            />
                            <NavLink
                                to='/auth'
                                style={() => ({
                                    width: "fit-content"
                                })}
                            >
                                <Button
                                    fontSize='sm'
                                    background={btnColor}
                                    fontWeight='bold'
                                    w='100%'
                                    h='50'
                                    mb='24px'
                                >
                                    Envoyer
                                </Button>
                            </NavLink>
                        </FormControl>
                    </Box>
                </Box>

                <Box
                    width={{ base: '100%', md: '100%' }}
                    borderRightRadius={{ base: '0px', md: '10px' }}
                    border='1px solid #a8a8a8'
                    bgImage={`url(${backgroundImage})`}
                    bgSize='cover'
                    bgPosition='center'
                    display={{ base: 'none', md: 'block' }}
                />
            </Flex>
        </Card>

    );
};

export default ContactForm;
