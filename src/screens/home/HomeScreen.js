import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import PagerView from 'react-native-pager-view'
import AppWrapper from '../../components/layout/wrapper/AppWrapper'
import { TextInput } from '../../components/common/input/Input'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import OfferCard from '../../components/common/offer-card/OfferCard'
import { Col, Row } from '../../components/layout/grid/Grid'
import { Button } from '../../components/common/button/Button'
import mangosBasket from '../../../assets/images/fruits/mangoes-basket.png'
import cashewBasket from '../../../assets/images/fruits/cashew.png'

const HomeScreen = () => {
    const pagerRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(0)

    const offers = [
        {
            title: 'Fresh Alphonso Mangoes Everyday',
            sub_title: 'Hurry Up! Get 20% Off',
            image: mangosBasket,
        },
        {
            title: 'Get Premium Cashews Now',
            sub_title: 'Get 10% Off',
            image: cashewBasket,
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const nextPage = (currentPage + 1) % offers.length
            pagerRef.current?.setPage(nextPage)
            setCurrentPage(nextPage)
        }, 4000)
        return () => clearInterval(interval)
    }, [currentPage])

    return (
        <AppWrapper>
            <View>
                <TextInput
                    placeholder='Search...'
                    icon={<EvilIcons name='search' size={24} color='#a3a3a2' />}
                />
            </View>

            <View style={{ marginTop: 20, height: 180 }}>
                <PagerView
                    style={{ flex: 1 }}
                    initialPage={0}
                    ref={pagerRef}
                    onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
                >
                    {offers.map((item, index) => (
                        <View key={index} style={{ paddingHorizontal: 10 }}>
                            <OfferCard>
                                <Row>
                                    <Col span={8}>
                                        <View>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontSize: 13,
                                                    fontFamily: 'rubikMedium',
                                                }}
                                            >
                                                {item.sub_title}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    fontSize: 16,
                                                    fontFamily: 'rubikBold',
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                        </View>

                                        <View style={{ marginTop: 20 }}>
                                            <Button
                                                title='Shop Now'
                                                style={{ borderRadius: 50 }}
                                            />
                                        </View>
                                    </Col>

                                    <Col
                                        span={4}
                                        style={{ alignItems: 'flex-end' }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{ height: 110, width: 110 }}
                                        />
                                    </Col>
                                </Row>
                            </OfferCard>
                        </View>
                    ))}
                </PagerView>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}
                >
                    {offers.map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: currentPage === index ? 10 : 8,
                                height: currentPage === index ? 10 : 8,
                                borderRadius: 5,
                                marginHorizontal: 4,
                                backgroundColor:
                                    currentPage === index
                                        ? '#fd6c02'
                                        : '#e0e0e0',
                            }}
                        />
                    ))}
                </View>
            </View>
        </AppWrapper>
    )
}

export default HomeScreen
