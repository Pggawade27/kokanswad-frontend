import React from 'react'
import { Gradient } from '../gradient/Gradient'

const OfferCard = ({ children }) => {
    return (
        <Gradient
            colors={['#f28536', '#fd6c02']}
            direction='horizontal'
            style={{
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderRadius: 20,
            }}
        >
            {children}
        </Gradient>
    )
}

export default OfferCard
