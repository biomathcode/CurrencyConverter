import React, { useEffect, useState } from 'react';
import { View,Text, StyleSheet, StatusBar, Image, Dimensions, ScrollView, Keyboard   } from 'react-native';
import { ConversionInput } from '../components/ConversionInput';

import { format} from 'date-fns';

//constants
import colors from '../constants/colors'
import {Button} from '../components/Button'
//Dimensions of the screen to make the screen responsive
const window = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
    },
    content: {

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logoBackground: {
        width: window.width * 0.25,
        height: window.height * 0.25,
    },
    logo: {
        position: 'absolute',
        width: window.width * 0.15,
        height: window.height * 0.15,
    },
    textheader: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
        textAlign: 'center'
    },
    text: {
        color: colors.white,
        alignSelf: 'center'
    }
})

export default () => {
    const baseCurrency = 'INR'
    const quoteCurrency = 'USD'

    const conversionRate = '70.00'
    const date = new Date();

    const [scrollEnabled, setScrollEnabled] = useState(false)

    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', () => {
            setScrollEnabled(true);
        })
        //to disbale scrollview when the keyboard is not active
        const hideListner = Keyboard.addListener('keyboardDidHide', function (){
            setScrollEnabled(false);
        })
        return () => {
            showListener.remove();
            hideListner.remove();
        }
    }, [])
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
        <View style={styles.logoContainer}>
            <Image
            source={require('../assets/images/background.png')}
            style={styles.logoBackground}
            resizeMode="contain"
            />
            <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
        </View>
        <Text style={styles.textheader}>Currency Converter</Text>
        <View style={styles.inputContainer}>
        <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert('hello')}
            onChangeText={text => console.log('text')}
            keyboardType="number-pad"
        />
        <ConversionInput
            text="USD" 
            value="123"
            onButtonPress={() => alert('hello')}
            keyboardType="number-pad"
            editable={false}
        />

        </View>
        
        <Text style={styles.text}>
            {
                `1 ${baseCurrency}= ${conversionRate} ${quoteCurrency} as of ${format(date,'MMMM do, yyyy')}`
            }
        </Text>
        <Button text="Reverse Currencies" onPress={() => alert('todo!')}/>
        <View style={{height: window.height}} />
        </View>
        </ScrollView>
    </View>
    )
}