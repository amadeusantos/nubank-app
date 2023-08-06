import { View, Text } from "react-native";
import Button from "../button";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

interface CreditCardProps {
  value: string;
  limite: string;
  active?: boolean;
}

export default function CreditCard({ value, limite, active }: CreditCardProps) {
  return (
    <Button>
      <View style={styles.container}>
        <View>
          <Text style={styles.textTitle}>Cartão de crédito</Text>
          <Text style={styles.textSubTitle}>Fatura atual:</Text>
          <Text style={styles.textValue}>{value}</Text>
          <Text style={styles.textSubInfo}>
            limite disponivel de R$ {limite}
          </Text>
          <Text style={styles.textSubInfo}>
            Débito automatico {active ? "ativado" : "desativo"}
          </Text>
        </View>
        <AntDesign name="right" size={20} color="black" />
      </View>
    </Button>
  );
}
