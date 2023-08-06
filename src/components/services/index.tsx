import { FlatList, Text, View } from "react-native";
import Service from "../service";
import { styles } from "./style";

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhe também</Text>
      <Service name="Assistente de pagamentos" icon={"support-agent"} />
      <Service name="Seguro vida" icon={"person-outline"} />
      <Service name="seguro celular" icon={"smartphone"} />
    </View>
  );
}
