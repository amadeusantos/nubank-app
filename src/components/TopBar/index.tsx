import { Image, Text, View } from "react-native";
import Button from "../button";
import { AntDesign } from "@expo/vector-icons";
import Perfil from "../../assets/images/perfil.png";
import { styles } from "./style";

export default function TopBar({ setHidden }: TopBarProps) {
  return (
    <View style={styles.container}>
      <Button>
        <Image source={Perfil} style={styles.perfilImage} />
      </Button>

      <View style={styles.itensRight}>
        <Button onPress={setHidden}>
          <AntDesign name="eyeo" size={32} color="#F5F5F5" />
        </Button>
        <Button>
          <AntDesign name="questioncircleo" size={24} color="#F5F5F5" />
        </Button>
        <Button>
          <AntDesign name="adduser" size={24} color="#F5F5F5" />
        </Button>
      </View>
    </View>
  );
}
