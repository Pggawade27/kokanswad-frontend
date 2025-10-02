import React from 'react'
import { TextInput as TInput, View } from 'react-native'

export const TextInput = ({
    style,
    fontFamily = 'rubikRegular',
    placeholder = 'Placeholder here',
    placeholderColor = '#999',
    icon = null,
    iconPosition = 'start',
    ...props
}) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#e8e8e8',
                    paddingHorizontal: 15,
                },
                style,
            ]}
        >
            {/* Start Icon */}
            {icon && iconPosition === 'start' && (
                <View style={{ marginRight: 3 }}>{icon}</View>
            )}

            <TInput
                style={{
                    flex: 1,
                    fontFamily,
                    color: '#000',
                }}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                {...props}
            />

            {/* End Icon */}
            {icon && iconPosition === 'end' && (
                <View style={{ marginLeft: 8 }}>{icon}</View>
            )}
        </View>
    )
}
