// src/screens/ExpenseListScreen.js
import React from 'react';
import { View, Text, FlatList, Button, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/reducer/expenseSlice';

const ExpenseListScreen = ({ navigation }) => {
  const expenses = useSelector((state) => state.expenses.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <View>
      <ScrollView>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style = {{marginHorizontal: 20}}>
            <Text style = {styles.text}>{item.title}</Text>
            <Text style = {styles.text}>{item.description}</Text>
            <Text style = {styles.text}>{item.date}</Text>
            <Text style = {styles.text}>{item.type}</Text>
            <Text style = {styles.text}>{item.amount}</Text>
            <Pressable onPress={() => handleDelete(item.id)} style = {[styles.button, {backgroundColor: '#FF4C4C'}]}>
              <Text style = {styles.textButton}>Delete</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('EditExpense', { item })} style = {[styles.button, {backgroundColor: '#88D66C'}]}>
              <Text style = {styles.textButton}>Edit</Text>
            </Pressable>
            
          </View>
        )}
      />
      <Pressable onPress={() => navigation.navigate('AddExpense')} style = {[styles.button, {marginHorizontal: 20}]}>
        <Text style = {styles.textButton}>Add Expense</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Statistics')} style = {[styles.button, {marginHorizontal: 20, backgroundColor: '#FFB22C'}]}>
        <Text style = {styles.textButton}>Statistics</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Search')} style = {[styles.button, {marginHorizontal: 20, backgroundColor: '#7469B6'}]}>
        <Text style = {styles.textButton}>Search</Text>
      </Pressable>
      </ScrollView>
     
    </View>
  );
};

export default ExpenseListScreen;

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#478CCF',
    borderRadius: 5,
    elevation: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16
  }
})
