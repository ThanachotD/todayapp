import * as React from "react";
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    NativeBaseProvider,
    useToast,
    Image
} from "native-base";
import auth from '@react-native-firebase/auth';
import {useEffect, useState} from "react";


const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const toast = useToast();
    const handleSignIn = () =>{
        if(email&&password!==''){
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User signed in!');
                    navigation.navigate('Auth');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        }else{
            toast.show({
                title: "Please Entry Email and Password",
                placement: "bottom"
            })
        }

    }
    return <Center w="100%" bgColor={'white'} >
        <Box safeArea p="2"  w="100%" maxW="370" h="100%">
            <Box alignItems={'center'} mt={5}>
                <Image alt={"a"}source={{uri:'https://imgz.io/images/2022/05/01/logo.png'}} alt="Main Logo Welendar"
                       style={{ width:127, height: 25}} mb={3}/>
                <Image  alt={"b"} source={{uri:'https://imgz.io/images/2022/05/01/2480558.jpg'}} style={{width: 350, height:260
                }}/>
            </Box>
            <Heading size="2xl" fontWeight="bold"  color={'#3A3D42'} >
                Welcome!
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Login to you existed anccount!
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input variant="filled" value={email} onChangeText={setEmail} placeholder="name@email.com" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input variant="filled" type="password" placeholder=" Must be atleast 6 characters." value={password} onChangeText={setPassword}/>
                </FormControl>
                <FormControl alignItems={'flex-end'} mb={0}>
                    <Button variant={'unstyled'} _text={{
                        color: "#634570",
                        fontWeight: "medium",
                        fontSize: "sm",
                    }} onPress={()=>navigation.navigate('Forgot')}>
                        <Text  color={"#634570"} bold >
                            Forgot Password ?
                        </Text>
                    </Button>
                </FormControl>
                <Button  bgColor={'#634570'} size={'md'} onPress={()=>{
                handleSignIn()}
                }>
                    Login
                </Button>
            </VStack>
            <Box>
                <HStack mt={3} justifyContent="center">
                    <Text mt={3} fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        Don't have an account ?
                    </Text>
                    <Button variant={'unstyled'} _text={{
                        color: "#634570",
                        fontWeight: "medium",
                        fontSize: "sm",
                    }} onPress={()=>navigation.navigate('Register')}>
                        <Text  color={"#634570"} bold >
                            Sign Up
                        </Text>
                    </Button>
                </HStack>
            </Box>
        </Box>
    </Center>;
};

export default Login;
