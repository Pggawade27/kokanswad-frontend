import React from 'react'
import { Text as RNT } from 'react-native'


const Text = ({ children, fontFamily = 'rubikRegular', style, ...props }) => {
    return (
        <RNT style={[{ fontFamily: fontFamily }, style]} {...props}>
            {children}
        </RNT>
    )
}

export default Text