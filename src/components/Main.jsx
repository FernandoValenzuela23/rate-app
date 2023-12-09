import React from 'react'
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import { Route, Routes } from "react-router-native";
import AppBar from './AppBar'

/* No recomended way but it is posible to do it 
const AppBar = Platform.select(
    {
        android: () => require('./AppBar.Android.jsx').default,
        default: () => require('./AppBar.jsx').default
    }
)()
*/

const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />}/>
                <Route path='/signin' element={<Text>Working on signin</Text>} />
                <Route path='/search' element={<Text>Working on search</Text>} />
                <Route path='/register' element={<Text>Working on register</Text>} />
                <Route path='/about' element={<Text>Working on about</Text>} />
                <Route path='/calendar' element={<Text>Working on calendar</Text>} />
                <Route path='/other' element={<Text>Working on other</Text>} />
                <Route path='/favorites' element={<Text>Working on favorites</Text>} />
            </Routes>
        </View>
    )
}

export default Main