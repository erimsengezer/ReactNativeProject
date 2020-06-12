import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet,Dimensions } from 'react-native';


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

function viewPressed() {
    console.log("viewPressed")
}


const ListItem = ({title}) => {
    return (
        <TouchableOpacity onPress={viewPressed} style={styles.touchableView}>
            <View  style={styles.listItemContainer}>
                <Text  style={styles.itemHeader}>{title}</Text>
            </View>
        </TouchableOpacity>
        
    )
}


export default ListItem;

const styles = StyleSheet.create({
    
    touchableView: {
        backgroundColor: 'gray',
    },

    listItemContainer: {
        width: width,
        height: 50,
        marginTop: 10,
        backgroundColor: '#E64730',
        
        justifyContent: "center",

    },
    
    itemHeader: {
        width: width,
        textAlign: "center"
    },



})