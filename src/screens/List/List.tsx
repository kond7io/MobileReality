import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';


export const Posts = [ { title: "My first post", description: "This is my first post", createdAt: "2000-01-14T07:00:01.879Z", id: 1 } ]


export const List: React.FC = () => {

    const [db, setDb] = useState(Posts);

   const handleDeleteItem = () => {
        Alert.alert('Delete item', 'Are You sure to delete item?' , [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ] )
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={ handleDeleteItem} style={{height: 100, width: '100%', borderWidth: 2, alignItems: 'center', justifyContent: 'center'}}><Text>{item.title}</Text></TouchableOpacity>
        )

    }

    return (
        <View style={styles.container}>
            <FlatList data={db} renderItem={renderItem} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
