import { View, Text, StatusBar, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utils, colors } from '../../contants';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const financialAid = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />

         <TouchableOpacity activeOpacity={0.3}
                          style={{
                              marginLeft: Utils.ScreenWidth(3),
                              marginTop: Utils.ScreenHeight(3),
                              alignItems: 'center',
                              elevation: 7,
                              backgroundColor: '#fff',
                              borderRadius: 8,
                              justifyContent: 'center',
                              top: Utils.ScreenHeight(-3),
                              width: Utils.ScreenWidth(12),
                              height: Utils.ScreenHeight(6),}}
                          onPress={() => {
                              navigation.goBack()
                          }}>
                          <Image source={ImagesPath.signUp.backIcon} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(4.8),
                          width: Utils.ScreenWidth(5.8),}} />
                      </TouchableOpacity>

        <View style = {{justifyContent: 'center', alignItems: 'center', top: Utils.ScreenHeight(-3), height: Utils.ScreenHeight(6), flexDirection: 'row', marginBottom: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(-2) }}>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>Financial Support</Text>
        </View>
    
<ScrollView style = {{marginHorizontal: Utils.ScreenWidth(4)}}>

<View style = {{height: Utils.ScreenHeight(8), width: '100%', resizeMode: 'contain'}}>
    <Image source={ImagesPath.home.loan} style = {{height: Utils.ScreenHeight(60), width: '100%'}}/>
    </View>
  <View>
    <TouchableOpacity style={{ marginTop: Utils.ScreenHeight(0), borderWidth: 1, width: '100%', justifyContent: "space-between", height: Utils.ScreenHeight(12), borderColor: colors.grey2, borderRadius: 10, flexDirection: "row", alignItems: "center" }} onPress={() => { navigation.navigate('') }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginLeft: Utils.ScreenWidth(2) }}>
        <Image source={ImagesPath.home.dollar_icon} style={{ height: Utils.ScreenHeight(6), width: Utils.ScreenWidth(14), resizeMode: "contain" }} />
        <View style={{ marginTop: Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(4), maxWidth: '80%' }}>
          <Text style={{ fontSize: 17, fontWeight: "400", color: colors.black }}>The XYZ Scholarship</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: colors.grey2 }}>Lorem ipsum dolor sit amet,kjdsbcousdbosbvob'DCSDNCNEKCNKISDNKLCN exercitation</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: Utils.ScreenWidth(1) }}>
        <Image source={ImagesPath.home.right_arrow} style={{ height: Utils.ScreenHeight(2), tintColor: colors.grey2, width: Utils.ScreenWidth(14), resizeMode: "contain" }} />
      </View>
    </TouchableOpacity>
    </View>
  </ScrollView>
    </SafeAreaView>
  )
}

export default financialAid