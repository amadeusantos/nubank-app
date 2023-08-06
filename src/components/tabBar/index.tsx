import { View } from "react-native";
import Button from "../button";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./style";

export default function StatusBar() {
  return (
    <View style={styles.container}>
      <Button>
        <View style={styles.active}>
          <FontAwesome5 name="home" size={24} color="#f5f5f5" />
        </View>
      </Button>
      <Button>
        <View style={styles.disable}>
          <FontAwesome5 name="dollar-sign" size={24} color="black" />
        </View>
      </Button>
      <Button>
        <View style={styles.disable}>
          <FontAwesome5 name="shopping-bag" size={24} color="black" />
        </View>
      </Button>
    </View>
  );
}
