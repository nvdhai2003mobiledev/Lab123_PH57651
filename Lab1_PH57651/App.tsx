import { View, Text, StyleSheet, ScrollView, Button, Pressable } from 'react-native';
import React, { useState } from 'react';
import CustomBanner from './components/Banner/CustomBanner';
import CustomInfoBlock from './components/Block/CustomInfoBlock';
import CustomTextInput from './components/TextInput/CustomTextInput';
import CustomCourseBlock from './components/Block/CustomCourseBlock';
import CustomButton from './components/Button/CustomButton';
import { CustomTheme, useTheme } from './components/Theme/CustomTheme';

const App = () => {
 
  return (
      <View style={[styles.container]}>
      <CustomTheme>
        <BodyApp />
      </CustomTheme>
        
      </View>
   
  );
};

const BodyApp = () => {
  const [hoTen, sethoTen] = useState('')
  const [email, setemail] = useState('')
  const [soDienThoai, setsoDienThoai] = useState('')
  const [tenKhoaHoc, settenKhoaHoc] = useState('')
  const [thoiGian, setthoiGian] = useState('')
  const [giaTien, setgiaTien] = useState('')
  // sử dụng hook để thao tác với theme
  const { theme, toggleTheme } = useTheme();
  return (
    <View style={[styles.khung, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <CustomBanner source="https://cdn.dribbble.com/userupload/12625078/file/original-2bc9bee762eb386952ab4142287536df.jpg?resize=400x300&vertical=center" />
        </View>
        <View>
          <CustomCourseBlock title='Thông tin khóa học' >
            <CustomTextInput onChangeText={settenKhoaHoc}
              placeholder='Nhập tên khóa học'
            />
            <CustomTextInput onChangeText={setthoiGian}
              placeholder='Nhập thời gian học'
              keyboardType='email-address'
            />
            <CustomTextInput onChangeText={setgiaTien}
              placeholder='Nhập giá tiền'
              keyboardType='phone-pad'
            />
          </CustomCourseBlock>
          <CustomInfoBlock title='Thông tin liên hệ' >
            <CustomTextInput onChangeText={sethoTen}
              placeholder='Nhập Họ tên'
            />
            <CustomTextInput onChangeText={setemail}
              placeholder='Nhập email'
              keyboardType='email-address'
            />
            <CustomTextInput onChangeText={setsoDienThoai}
              placeholder='Nhập số điện thoại'
              keyboardType='phone-pad'
            />
          </CustomInfoBlock>
          <CustomButton>
            <Text style={{ color: 'white' }}>Đăng ký</Text>
          </CustomButton>
        </View>
        <Pressable style={styles.button} onPress={toggleTheme}>
          <Text style={{ color: 'white' }}>Đổi giao diện</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  khung: {
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: '#000',
  },
  button: {
    width: '90%',
    height: 46,
    margin: 20,
    backgroundColor: '#49A5B8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    marginBottom: 16,
  }
});
