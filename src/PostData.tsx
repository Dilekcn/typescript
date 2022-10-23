import React, { useState, useEffect } from 'react';
import {Heading, Flex,Input,Button,Stack,Text,  FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, } from "@chakra-ui/react";


function PostData() {
    const [postId, setPostId] = useState({email:''});


fetch('https://reqres.in/api/posts',{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email: 'new email' })
})
.then(res =>{
   return res.json()
})
.then(data =>console.log(data))
.catch(err => console.log('Error'))
       
  return (
    <Flex alignItems={'center'} id='pricing' direction={'column'} bg={'#4E5462'} color='#FFFFFF' h='100vh' justifyContent={'center'}>
    <Stack w={{base:'90%',md:'50%'}} textAlign={'center'} spacing={'6'} display='flex' justifyContent={'center'} alignItems={'center'}  direction={'column'}>
<Text>Hello</Text>
   
     <Heading
        color="white"
        fontSize={{base:'28px',md:'40px'}} 
      >
       Mentor is invite-only, sign up now for early access 
      </Heading>
      <Input variant='unstyled' borderRadius={'none'} placeholder='you@email.com' fontSize='xl' p='15px' width={{base:'17em', md:'25em'}} bg={'#000000'}/>

      <Button bg='#2D9CDB' borderRadius={'none'}  fontSize='xl' p='25px'width={{base:'17em', md:'20em'}}>Request early access</Button>
     </Stack>

     <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email'  placeholder='you@email.com' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
    </Flex>
  )
}

export default PostData