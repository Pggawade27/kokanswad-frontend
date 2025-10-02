import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export const Gradient = ({
    colors = ['#4c669f', '#3b5998', '#192f6a'],
    direction = 'vertical',
    style = {},
    children,
    fullSize = false,
    ...props
}) => {
    const startEnd = direction === 'horizontal'
        ? { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }
        : { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } }

    return (
        <LinearGradient
            colors={colors}
            start={startEnd.start}
            end={startEnd.end}
            style={[fullSize ? { flex: 1 } : {}, style]}
            {...props}
        >
            {children}
        </LinearGradient>
    )
}