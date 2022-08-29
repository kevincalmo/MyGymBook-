import React, { useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native';
import ThemeContext from '../../context/theme-context';

const Home = () => {

    const theme = useContext(ThemeContext);

    const HORIZONTAL_BAR = ['Entrainements', 'Profil', 'Exercices', 'Statistiques'];

    const renderTitle = (title) => {
        <Text>{title}</Text>
    }

    return (
        <SafeAreaView>
            <View>
                <Text style={{
                    textAlign: 'center',
                    backgroundColor: theme.themeColor,
                    height: 100,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>{theme.name}</Text>
            </View>
            <ScrollView horizontal={true} >
                {HORIZONTAL_BAR.map((title, index) => (
                    <Text key={index} style={{
                        padding: 30,
                        backgroundColor: 'orange',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>{title}</Text>
                ))}
            </ScrollView>
        </SafeAreaView>

    )
}

export default Home;