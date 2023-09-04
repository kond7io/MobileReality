import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export const Posts = [ { title: "My first post", description: "This is my first post", createdAt: "2000-01-14T07:00:01.879Z", id: 1 } ]


export const List: React.FC = () => {
    const [db, setDb] = useState(Posts);
    const { control, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setDb([...db, data]);
        reset();
    };

    const handleDeleteItem = (id: number) => {
        Alert.alert('Delete item', `Are You sure to delete item with id ${id}?` , [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                    const newData = db.filter((item) => item.id !== id);
                    setDb(newData);
                }},
        ] )
    }

    const renderItem = ({item}) => {
       const {title, description, createdAt, id} = item;

        return (
            <TouchableOpacity
                onPress={() => handleDeleteItem(id)}
                style={{height: 100, width: '100%', borderWidth: 2, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{createdAt}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Enter text..."
                    />
                )}
                name="title"
                rules={{ required: true }}
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: {onChange, value} }) => (
                    <TextInput
                        onChangeText={value => onChange(value)}
                        value={value}
                        placeholder="Enter text..."
                    />
                )}
                name="description"
                rules={{ required: true }}
                defaultValue=""
            />


            <Button title="Add" onPress={handleSubmit(onSubmit)} />

            <FlatList
                data={db}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
