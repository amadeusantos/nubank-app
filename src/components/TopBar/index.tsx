import { Image, Text, View,  } from "react-native";
import Button from "../button";
import { AntDesign } from "@expo/vector-icons";
import Perfil from "../../assets/images/perfil.png";
interface TopBarProps {
  setHidden: () => void
}

export default function TopBar({setHidden}: TopBarProps) {
  return (
    <View
      style={{
        width: "100%",
        height: 128,
        paddingHorizontal: 16,
        backgroundColor: "#8A05BE",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Button>
        <Image source={Perfil} style={{ width: 36, height: 36, borderRadius: 30}} />
      </Button>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
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
