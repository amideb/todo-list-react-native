import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import {useState} from "react";

export default function App(state) {

 const [task, setTask] = useState();

 const [taskItems, setTaskItems] = useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask =(index)=>{

    let itemsCopy =[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }


  return (
    <View style={styles.container}>
      {/*Today's Task */}
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      <View style={styles.items}>
         {/*This is where the tasks will go

         <Task text={'Test 1'}/>
        <Task text={'Test 2'}/>
         
         
         */}

         {
           taskItems.map((item, index)=>{
             return(
               <TouchableOpacity  key={index} onPress={()=>completeTask()}>
             <Task text={item} />

               </TouchableOpacity>
             )
             
             
             
           })
         }
        
        

      </View>

      {/*Write a task section */}
      <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding": "height"}  style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=>setTask(text)}/>

        <TouchableOpacity onPress={()=> handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

      
  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop:80,
    paddingHorizontal:20
   
  },
  sectionTitle :{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper: {
   
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
input : {
  paddingVertical:15,
  paddingHorizontal:15,
  width:250,
  backgroundColor:'#FFBF00',
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1
},
addWrapper: {
  width:60,
  height:60,
  backgroundColor:'#FFBF00',
  justifyContent:'center',
  alignContent:'center',
  borderRadius:60,
  borderWidth:1
},
addText: {},
});
