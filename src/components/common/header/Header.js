import React from 'react'
import { Image, View } from 'react-native'
import { Col, Row } from '../../layout/grid/Grid'
import userProfile from '../../../../assets/images/jpg/user-profile.jpg'
import Text from '../text/Text'
import Ionicons from '@expo/vector-icons/Ionicons'

const Header = () => {
    return (
        <View>
            <Row>
                <Col span={8}>
                    <Row>
                        <Col span={4}>
                            <Image
                                source={userProfile}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </Col>

                        <Col span={8}>
                            <Text
                                fontFamily="rubikSemiBold"
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                Hey, Prasad 👋
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginTop: -2,
                                }}
                            >
                                Good Morning
                            </Text>
                        </Col>
                    </Row>
                </Col>

                <Col
                    span={4}
                    style={{
                        alignItems: 'flex-end',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#fff',
                            height: 44,
                            width: 44,
                            borderRadius: 22,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Ionicons
                            name="notifications-outline"
                            size={25}
                            color="#000"
                        />
                    </View>
                </Col>
            </Row>
        </View>
    )
}

export default Header
