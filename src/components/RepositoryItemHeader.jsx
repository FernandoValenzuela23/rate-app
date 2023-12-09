import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";


const RepositoryItemHeader = repo => {
    return(
        <View style={{flexDirection:'row', alignContent:'space-around'}}>
            <View style={{alignContent: 'center', flex:0}}>
                <Image style={styles.image} source={{uri: repo.ownerAvatarUrl}} />
            </View>
            <View style={{marginLeft: 10, flex:1}}>
                <StyledText fontWeight='bold' fontSize='title' color='primary'>{repo.fullName}</StyledText>
                <StyledText fontSize='body'>{repo.description}</StyledText>
                <StyledText style={styles.language}>{repo.language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({    
    language: {
        padding: 4,
        marginVertical: 4,
        color: theme.colors.white,
        //backgroundColor: Platform.OS === 'android' ? theme.colors.primary : theme.colors.secondaryColor,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: theme.colors.secondaryColor,
            web: 'orange',
            default: '#098652'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,

    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItemHeader