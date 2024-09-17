import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    flex: {flex: 1},
    flexColumn: {flexDirection: 'column'},
    flexRow: {flexDirection: 'row'},

    alignCenter: {alignItems: 'center'},
    alignStart: {alignItems: 'flex-start'},
    alignEnd: {alignItems: 'flex-end'},

    justifyCenter: {justifyContent: 'center'},
    justifyStart: {justifyContent: 'flex-start'},
    justifyEnd: {justifyContent: 'flex-end'},

    justifyCenter_alignCenter: {justifyContent: 'center', alignItems: 'center'},
    justifyCenter_alignStart: {justifyContent: 'center', alignItems: 'flex-start'},
    justifyCenter_alignEnd: {justifyContent: 'center', alignItems: 'flex-end'},

    justifyStart_alignCenter: {justifyContent: 'flex-start', alignItems: 'center'},
    justifyStart_alignStart: {justifyContent: 'flex-start', alignItems: 'flex-start'},
    justifyStart_alignEnd: {justifyContent: 'flex-start', alignItems: 'flex-end'},

    justifyEnd_alignCenter: {justifyContent: 'flex-end', alignItems: 'center'},
    justifyEnd_alignStart: {justifyContent: 'flex-end', alignItems: 'flex-start'},
    justifyEnd_alignEnd: {justifyContent: 'flex-end', alignItems: 'flex-end'},

    textCenter: {textAlign: 'center'},
    textLeft: {textAlign: 'left'},
    textRight: {textAlign: 'right'},

    p0: {padding: 0},
    p6: {padding: 6},
    p12: {padding: 12},
    p18: {padding: 18},
    p24: {padding: 24},
    p30: {padding: 30},

    m0: {margin: 0},
    m6: {margin: 6},
    m12: {margin: 12},
    m18: {margin: 18},
    m24: {margin: 24},
    m30: {margin: 30},

    wh100: {width: '100%', height: '100%'},
    wh90: {width: '90%', height: '90%'},
    wh80: {width: '80%', height: '80%'},
    wh70: {width: '70%', height: '70%'},
    wh60: {width: '60%', height: '60%'},
    wh50: {width: '50%', height: '50%'},
    wh40: {width: '40%', height: '40%'},
    wh30: {width: '30%', height: '30%'},
    wh20: {width: '20%', height: '20%'},
    wh10: {width: '10%', height: '10%'},

    h100: {height: '100%'},
    h90: {height: '90%'},
    h80: {height: '80%'},
    h70: {height: '70%'},
    h60: {height: '60%'},
    h50: {height: '50%'},
    h40: {height: '40%'},
    h30: {height: '30%'},
    h20: {height: '20%'},
    h10: {height: '10%'},

    w100: {width: '100%'},
    w90: {width: '90%'},
    w80: {width: '80%'},
    w70: {width: '70%'},
    w60: {width: '60%'},
    w50: {width: '50%'},
    w40: {width: '40%'},
    w30: {width: '30%'},
    w20: {width: '20%'},
    w10: {width: '10%'},

    textRed: {color: 'red'},
    textBlue: {color: 'blue'},
    textGreen: {color: 'green'},
    textWhite: {color: 'white'},
    textBlack: {color: 'black'},

    bgRed: {backgroundColor: 'red'},
    bgBlue: {backgroundColor: 'blue'},
    bgGreen: {backgroundColor: 'green'},
    bgWhite: {backgroundColor: 'white'},
    bgBlack: {backgroundColor: 'black'},
});

export default styles;