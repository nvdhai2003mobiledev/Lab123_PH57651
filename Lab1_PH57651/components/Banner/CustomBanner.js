import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyleBanner from './style';

const CustomBanner = ({ source }) => {
  return (
    <View style={StyleBanner.container}>
      <Image source={{ uri: source }} style={StyleBanner.image} />
    </View>
  );
};

export default CustomBanner;

const styles = StyleSheet.create({});
