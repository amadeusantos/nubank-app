import { FlatList, Text, View } from "react-native";
import Service from "../service";

export default function Services() {
    return (
        <View style={{ marginHorizontal: 16 }}>
        <Text style={{fontSize: 17, fontWeight: "bold", marginBottom: 6}}>Acompanhe também</Text>
        <Service name="Assistente de pagamentos" icon={"support-agent"} />
        <Service name="Seguro vida" icon={"person-outline"} />
        <Service name="seguro celular" icon={"smartphone"} />
      </View>
    )
}