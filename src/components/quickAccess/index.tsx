import { Image, ImageSourcePropType, Text, View } from "react-native";
import Button from "../button";

interface Access {
    name: string
    icon: ImageSourcePropType
}


export default function QuickAccess({name, icon}: Access) {
    return (
        <Button>
            <View style={{justifyContent: "center", alignItems: "center", width: 68}}>
            <View style={{justifyContent: "center", alignItems: "center", width: 64, height: 64, backgroundColor: "#F5F5F5", borderRadius: 30}}>
            <Image source={icon} style={{width: 36, height: 36}} />
            </View>
            <Text>{name}</Text>
            </View>
        </Button>
    )
}