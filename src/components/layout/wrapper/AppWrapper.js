import React from 'react'
import LinearGradient from './components/LinearGradient'
import Footer from '../../common/footer/Footer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import Header from '../../common/header/Header'

const AppWrapper = ({ children }) => {
    return (
        <LinearGradient>
            <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
                <Header/>
                <View
                    style={{
                        flex: 1,
                        marginTop: 20
                    }}
                >
                    {children}
                </View>
                <Footer />
            </SafeAreaView>
        </LinearGradient>
    )
}

export default AppWrapper
