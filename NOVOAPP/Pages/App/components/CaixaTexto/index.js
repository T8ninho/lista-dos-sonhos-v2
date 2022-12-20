import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Theme from "../../../../Theme";

export default function CaixaTexto(props) {
    return(
        <>
            <TextInput 
            {...props}
            outlineColor="#fff"
            activeOutlineColor='#fff'
            textColor='#fff'
            mode='outlined'
            selectionColor="#fff"
            style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: Theme.colors.BlurColor,
        marginBottom: 10,
    }
})