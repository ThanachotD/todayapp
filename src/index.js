import React, { useEffect, useState } from "react";
import { Box, Center, NativeBaseProvider, Image, Text,Button} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useDispatch, useSelector} from "react-redux";
import light from "./theme/index";
import dark from "./theme/dark"
import {store} from "./redux/store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import context from "react-redux/src/components/Context";
import {addTodo} from "./redux/todoSlice";
import md5 from "react-native-uuid/src/md5";



const Stack = createNativeStackNavigator();


const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    return(
        <NavigationContainer>
            <NativeBaseProvider theme={todos.mode==='light'?light:dark}>
                <Stack.Navigator >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'My home' }}
                        initialParams={{ mode: todos.mode }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={({ route }) => ({ title: route.params.name })}
                        initialParams={{ mode: todos.mode }}
                    />
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    )
};

function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    function tooglemode (){
        if(todos.mode==='light'){
            dispatch(addTodo('dark'))
        }else{
            dispatch(addTodo('light'))
        }
    }

    return (
        <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor={todos.mode==='light'?'white':'dark.100'}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Profile', { name: 'Custom profile header' })}>
                Go to Profile
            </Button>
            <Button mt={5} onPress={()=>{
                tooglemode()
            }}>
                Change Mode
            </Button>
        </Box>
    );
}

function ProfileScreen({ route,navigation }) {
    const { mode } = route.params;
    console.log(mode)
    return (
        <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bgColor={mode==='light'|| mode === undefined?'white':'dark.100'}>
            <Text>Profile screen</Text>
            <Button onPress={() => navigation.goBack()}  >
                Go to Home
            </Button>
        </Box>
    );
}



export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

