import React from 'react'
import { Text, StyleSheet } from "react-native";
import theme from '../theme'

const styles = StyleSheet.create(
    {
        text: {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.main,
            fontWeight: theme.fontWeights.normal,
            color: theme.colors.primary
        },
        bold: {
            fontWeight: theme.fontWeights.bold
        },
        colorPrimary: {
            color: theme.colors.textPrimary
        },
        colorSecondary: {
            color: theme.colors.textSecondary
        },
        subheading: {
            fontSize: theme.fonts.subheading
        },
        title: {
            fontSize: theme.fontSizes.title
        }
    })

    export default function({text, color, fontSize, fontWeight, style, children}){
        const textStyles = [
            text,
            color === 'primary' && styles.colorPrimary,
            color === 'secondary' && styles.colorSecondary,
            color === 'white' && styles.white,
            fontWeight === 'bold' && styles.bold,
            fontWeight === 'normal' && styles.normal,
            fontSize === 'subheading' && styles.subheading,
            fontSize === 'body' && styles.body,
            fontSize === 'title' && styles.title,
            style
        ]
        return(
            <Text style={textStyles}>
                {children}
            </Text>
        )
    }