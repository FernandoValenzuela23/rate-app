import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryItemStats from "./RepositoryItemStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (repo) => {
    return(
        <View key={repo.id} style={styles.container}>
            <RepositoryItemHeader {...repo} />
            <RepositoryItemStats {...repo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
})

export default RepositoryItem