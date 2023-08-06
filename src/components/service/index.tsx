import { Text, View } from "react-native";
import Button from "../button";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

interface ServiceProps {
  name: string;
  icon: any;
}

export default function Service({ name, icon }: ServiceProps) {
  return (
    <Button>
      <View style={styles.container}>
        <MaterialIcons name={icon} size={24} color="black" />
        <Text>{name}</Text>
        <Text style={styles.tag}>Novo</Text>
      </View>
    </Button>
  );
}
