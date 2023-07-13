import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themes } from '../Global/Themes'

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.headerTitle}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: 200,
        backgroundColor: themes.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        color: themes.secondary
    }
})