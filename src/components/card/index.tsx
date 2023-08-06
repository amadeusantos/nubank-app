import { Image, Text, View } from "react-native";
import Button from "../button";
import { styles } from "./style";

interface CardProps {
  title: string;
  information: string;
  image: string;
}

export default function Card({ title, information, image }: CardProps) {
  return (
    <Button>
      <View style={styles.container}>
        <Image style={styles.textTitle} source={{ uri: image }} />
        <Text>{title}</Text>
        <Text style={styles.textInformation}>{information}</Text>
        <Button>
          <Text style={styles.buttonKnow}>Conhecer</Text>
        </Button>
      </View>
    </Button>
  );
}
