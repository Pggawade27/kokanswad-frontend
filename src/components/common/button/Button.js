import React from 'react'
import { TouchableOpacity, View, ActivityIndicator } from 'react-native'
import Text from '../text/Text'

export const Button = ({
    title = 'Button',
    onPress = () => {},
    disabled = false,
    loading = false,
    style = {},
    textStyle = {},
    backgroundColor = '#fff',
    textColor = '#FD6C02',
    borderRadius = 8,
    icon = null,
    iconPosition = 'left',
    fontFamily = 'rubikMedium',
    ...props
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            style={[
                {
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: disabled ? '#ccc' : backgroundColor,
                    borderRadius,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start'
                },
                style,
            ]}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {icon && iconPosition === 'left' && (
                        <View style={{ marginRight: 8 }}>{icon}</View>
                    )}

                    <Text
                        style={{
                            color: textColor,
                            fontFamily,
                        }}
                    >
                        {title}
                    </Text>

                    {icon && iconPosition === 'right' && (
                        <View style={{ marginLeft: 8 }}>{icon}</View>
                    )}
                </View>
            )}
        </TouchableOpacity>
    )
}