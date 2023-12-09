import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    text: {
        color: theme.appBar.secondaryText,
        marginRight: 10
    },
    scroll: {
        paddingBottom: 15,
    },
    active: {
        color: theme.appBar.primaryText
    }
})

const AppBarTab = ({ children, to}) => {
    const {pathname} = useLocation() // Hook

    const textSyle = [
        styles.text,
        pathname === to && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textSyle}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Signin</AppBarTab>
                <AppBarTab to='/register'>Register</AppBarTab>
                <AppBarTab to='/about'>About</AppBarTab>
                <AppBarTab to='/search'>Search</AppBarTab>
                <AppBarTab to='/calendar'>Calendar</AppBarTab>
                <AppBarTab to='/other'>Other</AppBarTab>
                <AppBarTab to='/favorites'>Favorites</AppBarTab>
            </ScrollView>            
        </View>
    )
}

export default AppBar