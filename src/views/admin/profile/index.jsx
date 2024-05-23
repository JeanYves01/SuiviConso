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
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import backgroundImage from "assets/img/profile/vecteurAC2.jpg";

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
        <Flex
            color='white'
            justifyContent='center'
            transform={{ base: 'translate(0%, 20%)', md: 'translate(0%, 15%)' }}
            width={{ base: '100%', md: '100%' }}
            height={{ base: 'auto', md: '74vh', lg: '74vh' }}
            
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Box
                bg='white'
                width={{ base: '100%', md: '40%' }}
                border='1px solid #5a5858'
                borderLeftRadius={{ base: '10px', md: '10px' }}
                p={{ base: '20px', md: '0' }}
            >
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
                    height={{ base: '70vh', md: '10vh', lg: '50vh'}}
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
                        resize="vertical"
                        marginBottom='30px'
                        height='20vh'
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
            <Box
                width={{ base: '100%', md: '40%' }}
                borderRightRadius={{ base: '0px', md: '10px' }}
                border='1px solid #a8a8a8'
                bgImage={`url(${backgroundImage})`}
                bgSize='cover'
                bgPosition='center'
                display={{ base: 'none', md: 'block' }}
            />
        </Flex>
    );
};

export default ContactForm;
