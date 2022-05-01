import React, { useEffect, useState } from "react";
import {  AsyncStorage, StyleSheet } from "react-native";
import { Box, Center, NativeBaseProvider, Image, Text} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useDispatch, useSelector} from "react-redux";
import theme from "./theme/index";
import {store} from "./redux/store";
import AppStack from "./navigator/AppStack";

const ImageLogo = "./assets/image/logo.png"

const App = () => {
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);

    setTimeout(() => {
        setAlign('flex-start'), setAlignsecond(true);
    }, 3000);

    return(
        <NavigationContainer>
            <NativeBaseProvider>
                {!alignsecond ? <Box style={[styles.container, { justifyContent: align }]} background="#634570">
                    <Image source={{uri:"https://imgz.io/images/2022/05/01/Group-175.png"}} alt="Main Logo Welendar"
                           style={{ width:137, height: 28}}/>
                </Box>: <AppStack/>}
            </NativeBaseProvider>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
