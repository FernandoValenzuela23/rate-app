import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return(        
        <SafeAreaView>            
            <FlatList data={repositories} 
                ItemSeparatorComponent={<Text> </Text>}
                renderItem={({item: repo}) => (
                <RepositoryItem {...repo} />
            )} />
        </SafeAreaView>
    )
}

export default RepositoryList