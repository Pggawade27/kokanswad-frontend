import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Text from '../text/Text'

const Footer = () => {
    const [activeTab, setActiveTab] = useState('Home')

    const tabs = [
        { name: 'Home', icon: <AntDesign name="home" size={20} /> },
        {
            name: 'Cart',
            icon: <MaterialCommunityIcons name="cart-outline" size={24} />,
        },
        { name: 'Wishlist', icon: <Entypo name="heart-outlined" size={24} /> },
        {
            name: 'Profile',
            icon: <FontAwesome5 name="user-circle" size={24} />,
        },
    ]

    return (
        <View
            style={{
                padding: 15,
                backgroundColor: '#fff',
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 50,
            }}
        >
            {tabs.map(tab => {
                const isActive = activeTab === tab.name

                return (
                    <TouchableOpacity
                        key={tab.name}
                        onPress={() => setActiveTab(tab.name)}
                        activeOpacity={0.7}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingRight: 10,
                            borderRadius: 30,
                            backgroundColor: isActive
                                ? '#FEF2E5'
                                : 'transparent',
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 50,
                                padding: 8,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: isActive
                                    ? '#f28536'
                                    : 'transparent',
                                borderWidth: isActive ? 0 : 1,
                                borderColor: isActive
                                    ? 'transparent'
                                    : '#e8e8e8',
                            }}
                        >
                            {React.cloneElement(tab.icon, {
                                color: isActive ? '#fff' : '#000',
                            })}
                        </View>
                        {isActive && (
                            <Text
                                fontFamily="rubikMedium"
                                style={{
                                    marginLeft: 8,
                                    fontSize: 14,
                                    color: '#000',
                                }}
                            >
                                {tab.name}
                            </Text>
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Footer
