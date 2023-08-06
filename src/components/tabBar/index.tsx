import { View } from "react-native";
import Button from "../button";
import { FontAwesome5 } from "@expo/vector-icons";

export default function StatusBar() {
    return (
        <View style={{ flexDirection: "row", position:"absolute", bottom: 36, backgroundColor: "#dedede", borderRadius: 30, alignSelf: "center" }}>
            <Button>
                <View style={{backgroundColor: "#8A05BE", width: 56, height: 48, justifyContent: "center", alignItems: "center", borderRadius: 30}}>
                <FontAwesome5 name="home" size={24} color="#f5f5f5" />
                </View>
            </Button>
            <Button>
                <View style={{backgroundColor: "#dedede", width: 56, height: 48, justifyContent: "center", alignItems: "center", borderRadius: 30}}>
                <FontAwesome5 name="dollar-sign" size={24} color="black" />
                </View>
            </Button>
            <Button>
                <View style={{backgroundColor: "#dedede", width: 56, height: 48, justifyContent: "center", alignItems: "center", borderRadius: 30}}>
                <FontAwesome5 name="shopping-bag" size={24} color="black" />
                </View>
            </Button>
        </View>
    )
}