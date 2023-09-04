import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
// @ts-ignore
import about_item from '../assets/img/about/about_item.png'
// @ts-ignore
import about_item2 from '../assets/img/about/about_item2.png'
// @ts-ignore
import about_item3 from '../assets/img/about/about_item3.png'
// @ts-ignore
import about_item4 from '../assets/img/about/about_item4.png'

const data = [
    { id: '1', img: about_item},
    { id: '2', img: about_item2},
    { id: '3', img: about_item3 },
    { id: '4', img: about_item4 }
];
export const Images: React.FC = ({  }) => {
    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                return (<Image
                    key={index}
                    source={item.img}
                    style={styles.image}
                />)
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
    },
    image: {
        height: 400,
        width: '100%'
    }
});

