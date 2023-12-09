import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value/100)/10}K` : String(value) 
}

const RepositoryItemStats = repo => {
    return (
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText fontSize='subheading' color='secondary' fontWeight='bold'>{parseThousands(repo.forksCount)}</StyledText>
                <StyledText fontSize='subheading' color='secondary' >Forks</StyledText>
            </View>
            <View>
                <StyledText fontSize='subheading' color='secondary' fontWeight='bold'>{parseThousands(repo.reviewCount)}</StyledText>
                <StyledText fontSize='subheading' color='secondary' >Reviews</StyledText>
            </View>
            <View>
                <StyledText fontSize='subheading' color='secondary' fontWeight='bold'>{parseThousands(repo.stargazersCount)}</StyledText>
                <StyledText fontSize='subheading' color='secondary' >Stars</StyledText>
            </View>
        </View>
    )
}

export default RepositoryItemStats