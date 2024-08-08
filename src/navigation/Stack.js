import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import SignIn from '../screen/SignIn';
import AdminTab from './admin/Tab';
import UserTab from './user/Tab';
// import SignUp from '../screen/SignUp';
import TermsAndConditions from '../component/TermsAndConditions';
import ForgotPassword from '../screen/FogortPassword';
import DriverTab from './driver/Tab';
import AuthScreen from '../screen/AuthScreen';


const Stacks = createNativeStackNavigator();
const Stack = () => {
    return (
        <Stacks.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stacks.Screen name="SignIn" component={SignIn} />
            <Stacks.Screen name="SignUp" component={SignUp} /> */}
            <Stacks.Screen name="Auth" component={AuthScreen} />
            <Stacks.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stacks.Screen name="TermsAndConditions" component={TermsAndConditions} />
            <Stacks.Screen name="AdminTab" component={AdminTab} />
            <Stacks.Screen name="UserTab" component={UserTab} />
            <Stacks.Screen name="DriverTab" component={DriverTab} />
        </Stacks.Navigator>
    )
}

export default Stack