import { Image, Text, View } from "react-native";
import Button from "../button";

interface CardProps {
  title: string;
  information: string;
  image: string;
}

export default function Card({title, information, image}: CardProps) {
    return (
        <Button>
          <View  style={{width: 256, height: 200, borderRadius: 16, alignContent: "flex-start", backgroundColor: "#f5f5f5"}}>
            <Image style={{width: 256, height: 94, borderTopLeftRadius: 16, borderTopRightRadius: 16}} source={{uri: image}} />
            <Text>{title}</Text>
            <Text style={{marginTop: 8, marginBottom: 4 }}>{information}</Text>
            <Button>
              <Text style={{ width: 70, fontSize: 12, backgroundColor: "#8A05BE", color: "#f5f5f5", padding: 5, borderRadius: 12}}>
                Conhecer
              </Text>
            </Button>
          </View>
        </Button>
    )
}