import { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./style";

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
}

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
