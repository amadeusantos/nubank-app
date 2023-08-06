import { View, Text } from "react-native";
import Button from "../button";
import { AntDesign } from "@expo/vector-icons";

interface CreditCardProps {
  value: string;
  limite: string;
  active?: boolean;
}

export default function CreditCard({value, limite, active}: CreditCardProps) {
    return (
        <Button>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16
          }}
        >
          <View>
            <Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 8}}>Cartão de crédito</Text>
            <Text style={{fontSize: 18}}>Fatura atual:</Text>
            <Text style={{fontSize: 18, marginBottom: 6}}>{value}</Text>
            <Text style={{ fontSize: 12}}>limite disponivel de R$ {limite}</Text>
            <Text style={{ fontSize: 12}}>Débito automatico {active? "ativado": "desativo"}</Text>
          </View>
          <AntDesign name="right" size={20} color="black" />
        </View>
      </Button>
    )
}