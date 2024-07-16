import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BlockStyle from './style'
import PropTypes from 'prop-types';


const CustomInfoBlock = ({ title, children, style }) => {
    return (
        <View style={[BlockStyle.infoContainer, style]}>
            {title && <Text style={BlockStyle.title}>{title}</Text>}
            <View>
                {children}
            </View>
        </View>
    )
}

CustomInfoBlock.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default CustomInfoBlock