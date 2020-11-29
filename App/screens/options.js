import React from 'react';
import { SafeAreaView,StyleSheet, ScrollView, Linking } from 'react-native';

import colors from '../constants/colors'
import {Entypo} from '@expo/vector-icons'

import {RowItem, RowSeperator} from '../components/RowItem'
const style = StyleSheet.create({
    
})
const openUrl = (url) => {
  return (
    Linking.openURL(url).catch(() => {
  alert('Ops! something went wrong', 'Please try again')
})
  )  
}


export default () =>    {
  const data = {
      iconName: 'chevron-right',
      text: "Themes",
      alert: "TODO"
  }
  return(
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView>
        <RowItem 
            onPress= {() => openUrl('http://backbench.in')}
            rightIcon={
                <Entypo name={data.iconName} size={20} color={colors.blue}/>   
            }
            text={data.text}
        />    
        <RowSeperator />
        <RowItem 
            onPress= {() => alert(data.alert)}
            rightIcon={
                <Entypo name="export" size={20} color={colors.blue}/>   
            }
            text="Feed"
        />    
        <RowSeperator />
        <RowItem 
            onPress= {() => alert(data.alert)}
            rightIcon={
                <Entypo name="export" size={20} color={colors.blue}/>   
            }
            text="Home"
        />
        </ScrollView>
          
    </SafeAreaView>
    )
}