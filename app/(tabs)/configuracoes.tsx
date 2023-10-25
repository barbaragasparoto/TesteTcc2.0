import Card from "../componentes/Card/Card";
import { View, StyleSheet, Text} from "react-native";
import List from "../componentes/List"

export default function Configuracoes() {
    return(<>

    <View style={estilos.card}>
    <Card title="" content="" />
    </View> 

        
        <List/>
            
    

    </>);
}

const estilos = StyleSheet.create({
    card: {
        padding: 15,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        marginBottom: 100
        },
    list:{
        marginTop:10
    }
})
