import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Header} from "../../containers/Header";
import {Button} from "../../components/Button/Button";
import {Images} from "../../containers/Images";
import {
    text_button,
    about_title,
    about_subtitle,
    offer_title,
    offer_subtitle,
    offer_text,
    offer_second_text,
    about_second_text,
    about_text
} from "../../constants/texts";
// @ts-ignore
import offer_item from '../../assets/img/offer/offer_item.png'

export const Panel: React.FC = () => {
    const [expanded, setExpanded] = useState({about: false, offer: false});

    const handleExpandAboutSection = () => {
        setExpanded({...expanded, about: true})
    }

    const handleExpandOfferSection = () => {
        setExpanded({...expanded, offer: true})
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header title={about_title} subtitle={about_subtitle} text={about_text} secondText={about_second_text} />
            <Button text={text_button} onPressButton={handleExpandAboutSection} />
            {expanded.about && (<Images />)}
            <Header title={offer_title} subtitle={offer_subtitle} text={offer_text} secondText={offer_second_text}/>
            <Button text={text_button} onPressButton={handleExpandOfferSection} />
            {expanded.offer && (<Image source={offer_item} style={styles.offerImage} />)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    offerImage: {
        marginTop: 40
    }
});
