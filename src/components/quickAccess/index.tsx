import { Image, Text, View } from "react-native";
import Button from "../button";
import { styles } from "./style";
import { QuickAccessProps } from "./QuickAccessProps";

export default function QuickAccess({ name, icon }: QuickAccessProps) {
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
