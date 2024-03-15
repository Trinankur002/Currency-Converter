import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

type CurrencyButtonProps = PropsWithChildren<{
    name: string
    symbol : string
}>

export const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonCointainer}>
            <Text style={styles.buttonSymbol}>{ props.symbol}</Text>
            <Text style={styles.buttonText}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCointainer: {
        flexDirection: 'row',
        height: 40,
        minWidth: 150,
        borderRadius: 16,
        backgroundColor: '#9798c2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    buttonText: {
        marginLeft: 4,
        color: '#181938', 
        fontSize: 18,
        marginRight: 4,
        fontFamily: 'Roboto',
    },
    buttonSymbol: {
        marginLeft: 4,
        color: '#181938',
        fontSize: 22,
        fontWeight: 'bold',
    },
})