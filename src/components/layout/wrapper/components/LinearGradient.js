import React from 'react'
import { LinearGradient as LGradient } from 'expo-linear-gradient'

const LinearGradient = ({ children }) => {
    return (
        <LGradient
            colors={['#ffefdfff', '#EFEFEF']}
            style={{ flex: 1 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
        >
            {children}
        </LGradient>
    )
}

export default LinearGradient