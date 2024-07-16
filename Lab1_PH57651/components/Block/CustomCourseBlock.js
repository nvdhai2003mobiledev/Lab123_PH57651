import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlockStyle from './style'
import PropTypes from 'prop-types';

const CustomCourseBlock = ({ title, children, style }) => {
    return (
        <View style={[BlockStyle.courseContainer, style]}>
            {title && <Text style={BlockStyle.title}>{title}</Text>}
            <View>
                {children}
            </View>
        </View>
    )
}

CustomCourseBlock.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default CustomCourseBlock

