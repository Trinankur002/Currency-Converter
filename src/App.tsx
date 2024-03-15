import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { CurrencyButton } from './components/CurrencyButton'
import Snackbar from 'react-native-snackbar'
import { currencyByRupee } from './constants'
import OutlinedTextField from './components/OutlinedTextField'

export default function App() {
  const [inputValue, setinputValue] = useState('')
  const [resultValue, setresultValue] = useState('')
  const [targetCurrency, settargetCurrency] = useState('')
  const [resultSymbol, setresultSymbol] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: '#f76363',
        textColor: '#330c0c'
      })
    }
    const inputAmount = parseFloat(inputValue)
    if (isNaN(inputAmount)) {
      return Snackbar.show({
        text: "Enter a proper value to convert",
        backgroundColor: '#f76363',
        textColor: '#330c0c'
      })
    }
    const convertedValue = inputAmount * targetValue.value
    const result = `${convertedValue.toFixed(7)}`
    const resultSym = `${targetValue.symbol}`
    setresultValue(result)
    settargetCurrency(targetValue.name)
    setresultSymbol(resultSym)
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#161726',
        flex : 1,
      }}
    >
      <StatusBar></StatusBar>
      <View
        style={{
          backgroundColor: '#161726',
        }}
      >
        <View style={styles.topCointainer}>
          <View style={styles.ruppeeCointainer}>
            <Text style={styles.inputField}>₹</Text>
            <OutlinedTextField
              maxLength={18}
              value={inputValue}
              onChangeText={setinputValue}
              keyboardType='numeric'
              placeholder='enter amount'              
            />
          </View>
          {resultValue && (
            <View style={styles.ruppeeCointainer}>
              <Text style={[styles.inputField, {
                marginHorizontal: 14,
                marginVertical: 8,
              }]}>
                {resultSymbol}
              </Text>
              <Text
                selectable={true}
                style={styles.resultValue}>
                {resultValue}
              </Text>
            </View>
          )}
        </View>
        <SafeAreaView style={[styles.buttomContainer]}>
          <FlatList
            numColumns={2}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  targetCurrency === item.name && styles.selectedCur]}
                onPress={() => { buttonPressed(item) }}
              >
                <CurrencyButton name={item.name} symbol={item.symbol} />
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topCointainer: {
    backgroundColor: '#161726',
  },
  buttomContainer: {
    margin: 8,
    backgroundColor: '#161726',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  ruppeeCointainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
  },
  inputField: {
    fontSize: 22,
    fontWeight: '700',
    color: '#b9bbed',
  },
  resultValue: {
    height: 48,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: '700',
    color: '#b9bbed',
    borderColor: '#b9bbed',
    borderWidth: 2,
    margin: 4,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  listStyle: {
    flex: 2,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    height: 60,
    minWidth: 150,
    borderRadius: 12,
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selectedCur: {},
  centeredItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
})

