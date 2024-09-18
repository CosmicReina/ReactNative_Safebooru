import React, {useState} from "react";
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {fetchMaxPID} from './scripts/FetchSafebooru'

import s from './styles/MyStyles';

export default function App() {
    return (
        <SafeAreaView style={s.wh100}>
            <View style={[s.h10, s.w100, s.flexRow]}>
                <View style={[s.w20, s.h100]}>

                </View>
                <View style={[s.w60, s.h100, s.justifyCenter_alignCenter]}>
                    <Text style={{fontSize: 30}}>
                        Safebooru
                    </Text>
                </View>
                <View style={[s.w20, s.h100]}>
                </View>
            </View>
            <View style={[s.h60, s.justifyCenter_alignCenter]}>
                <Image
                    source={require("./myassets/Template.png")}
                    style={[s.wh90]}
                    resizeMode={"contain"}
                />
            </View>
            <View style={[s.h20, s.justifyCenter_alignCenter]}>
                <TouchableOpacity style={[s.justifyCenter_alignCenter, {width: 150, height: 150}]}>
                    <Image
                        source={require("./assets/icon.png")}
                        style={[s.wh90, {borderRadius: 75}]}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
