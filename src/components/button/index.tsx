import { TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ButtonProps } from "./ButtonProps";

export default function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.padding4}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
