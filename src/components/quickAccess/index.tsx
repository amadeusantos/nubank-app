import { Image, ImageSourcePropType, Text, View } from "react-native";
import Button from "../button";
import { styles } from "./style";

interface Access {
  name: string;
  icon: ImageSourcePropType;
}

export default function QuickAccess({ name, icon }: Access) {
  return (
    <Button>
      <View style={styles.container}>
        <View style={styles.ellipse}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text>{name}</Text>
      </View>
    </Button>
  );
}
