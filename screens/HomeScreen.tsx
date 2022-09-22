import { ScrollView, Text } from 'components/Themed';
import { translate } from 'languages';
import { RootTabScreenProps } from 'navigation/types';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Text style={styles.title}>{translate('home_page')}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
});
