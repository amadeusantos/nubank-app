import { ReactNode } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
    children: ReactNode;
    onPress?: () => void;
}

export default function Button({children, onPress}: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.5} style={{padding: 4}} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}