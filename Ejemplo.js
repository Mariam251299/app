/*import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlatListPicker from 'react-native-flatlist-picker';
 

const dataPicker = [
  { value: 'Value 1', key: 'key1' },
  { value: 'Value 2', key: 'key2' },
  { value: 'Value 3', key: 'key3' },
  { value: 'Value 4', key: 'key4' }
]
 
class Ejemplo extends Component {
  constructor(props) {
    super(props);
  }
 
  componentDidMount = () => {
    // To show or hide your picker component
    // this.PickerFlatlist.showPickerList()
  }
 
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => {
          this.FlatListPicker.showPickerList()
          // this.FlatListPicker.hidePickerList()
        }}
        >
          <Text style={{ textDecorationLine: 'underline' }}> Press To Show FlatListPicker</Text>
        </TouchableOpacity>
        <FlatListPicker
          ref={ref => { this.FlatListPicker = ref }}
          data={dataPicker}
          containerStyle={styles.container}
          dropdownStyle={{ width: 180 }}
          dropdownTextStyle={{ fontSize: 15 }}
          pickedTextStyle={{ color: 'black', fontWeight: 'bold' }}
          animated="slide"
          defaultValue="FlatListPicker...."
          renderDropdownIcon={() => (<AntDesign name="caretdown" color="blue" size={15} style={{ padding: 15 }} />)}
          onValueChange={(value, index) => alert(`Selected ${value}`)}
        />
      </View>
    );
  }
}
 
export default TestPicker;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#CECECE',
    width: 250,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 5,
  }
});
*/
import React from 'react';
import{ StyleSheet,
		Text,
		View,
		FlatList,
	} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const DATA = [
{
	id:"1",
	title:"Data Structures"
},
{
	id:"2",
	title:"STL"
},
{
	id:"3",
	title:"C++"
},
{
	id:"4",
	title:"Java"
},
{
	id:"5",
	title:"Python"
},
{
	id:"6",
	title:"CP"
},
{
	id:"7",
	title:"ReactJs"
},
{
	id:"8",
	title:"NodeJs"
},
{
	id:"9",
	title:"MongoDb"
},
{
	id:"10",
	title:"ExpressJs"
},
{
	id:"11",
	title:"PHP"
},
{
	id:"12",
	title:"MySql"
},
];

const Item = ({title}) => {
return(
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
}

export default function Ejemplo() {
	

const renderItem = ({item})=>(
    <Item title={item.title}/>
);
return (
<View style={styles.container}>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>

    <Picker style={{width:'45%'}}>
    <Picker.Item label = "No" value = "No" />
    <Picker.Item label = "Si" value = "Si" />
    </Picker>
    
</View>
);
}



const styles = StyleSheet.create({
container: {
	marginTop:30,
	padding:2,
},
item: {
	backgroundColor: '#f5f520',
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
},
});
