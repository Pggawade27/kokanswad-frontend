import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Row component
 * Props:
 * - style: custom style for row
 * - gap: spacing between cols
 * - justify: flex-start, center, space-between, etc.
 * - align: align-items (flex-start, center, stretch, etc.)
 * - wrap: whether to wrap cols (default true)
 */
export const Row = ({
    children,
    style,
    gap = 0,
    justify = 'flex-start',
    align = 'center',
    wrap = true,
}) => {
    return (
        <View
            style={[
                styles.row,
                {
                    marginHorizontal: -gap / 2,
                    flexWrap: wrap ? 'wrap' : 'nowrap',
                    justifyContent: justify,
                    alignItems: align,
                },
                style,
            ]}
        >
            {React.Children.map(children, child =>
                React.cloneElement(child, { gap })
            )}
        </View>
    );
};

/**
 * Col component
 * Props:
 * - span: number of columns (1–12 like bootstrap)
 * - gap: provided from Row
 * - style: custom style
 */
export const Col = ({ children, span = 12, gap = 0, style }) => {
    const widthPercent = (span / 12) * 100 + '%';

    return (
        <View
            style={[
                {
                    width: widthPercent,
                    paddingHorizontal: gap / 2,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
});
