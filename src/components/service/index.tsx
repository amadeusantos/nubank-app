import { Text, View } from "react-native";
import Button from "../button";
import { MaterialIcons } from '@expo/vector-icons';

interface ServiceProps {
  name: string;
  icon:  any;
}

export default function Service({name, icon}: ServiceProps) {
    return (
        <Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 16,
              backgroundColor: "#f5f5f5",
              padding: 16,
              alignItems: "center",
            }}
          >
            <MaterialIcons name={icon} size={24} color="black" />
            <Text>{name}</Text>
            <Text style={{ fontSize: 12,backgroundColor: "#8A05BE", color: "#f5f5f5", paddingHorizontal: 2, borderRadius: 5}}>Novo</Text>
          </View>
        </Button>
    )
}