import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const App = () => {
    const [fontsLoaded] = useFonts({
        rubikLight: require('./assets/fonts/rubik/Rubik-Light.ttf'),
        rubikLightItalic: require('./assets/fonts/rubik/Rubik-LightItalic.ttf'),
        rubikRegular: require('./assets/fonts/rubik/Rubik-Regular.ttf'),
        rubikRegularItalic: require('./assets/fonts/rubik/Rubik-Italic.ttf'),
        rubikMedium: require('./assets/fonts/rubik/Rubik-Medium.ttf'),
        rubikMediumItalic: require('./assets/fonts/rubik/Rubik-MediumItalic.ttf'),
        rubikSemiBold: require('./assets/fonts/rubik/Rubik-SemiBold.ttf'),
        rubikSemiBoldItalic: require('./assets/fonts/rubik/Rubik-SemiBoldItalic.ttf'),
        rubikBold: require('./assets/fonts/rubik/Rubik-Bold.ttf'),
        rubikBoldItalic: require('./assets/fonts/rubik/Rubik-BoldItalic.ttf'),
        rubikExtraBold: require('./assets/fonts/rubik/Rubik-ExtraBold.ttf'),
        rubikExtraBoldItalic: require('./assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf'),
        rubikBlack: require('./assets/fonts/rubik/Rubik-Black.ttf'),
        rubikBlackItalic: require('./assets/fonts/rubik/Rubik-BlackItalic.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}

export default App
