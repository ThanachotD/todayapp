import * as React from "react";
import {Button, Box, Center, NativeBaseProvider, Input, Text} from "native-base";

import {Provider, useDispatch, useSelector} from "react-redux";

import {store} from "./redux/store";

import {useState} from "react";

import {addTodo,toggleTodo} from "./redux/todoSlice";
import theme from "./theme/index";
import dark from "./theme/dark";

const Example = () => {
    const [text,setText] = useState();

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos)



    function  change (){
        if(todos.mode==='light'){
            dispatch(addTodo('dark'))
        }else{
            dispatch(addTodo('light'))
        }
    }

    return <NativeBaseProvider theme={todos.mode ==='light'? theme : dark}>
        <Center flex={1} px="3">
    <Box alignItems="center" bgColor={todos.mode === 'light' ? 'warmGray.100' : 'dark.100'}>
        <Input
            mx="3" placeholder="Todo"
            w="75%" maxWidth="300px"
            value ={text} onChangeText={setText} />
        <Button  mt={5} onPress={()=>{
        change()}
        }> Change Colors </Button>
    </Box>;
        </Center>
    </NativeBaseProvider>
};

export default () => {
    return (
        <Provider store={store}>
                    <Example />
        </Provider>
    );
};
