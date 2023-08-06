import { Text, View } from "react-native";
import Button from "../button";
import { styles } from "./style";

export interface AnnouncementProps {
  title: string;
  information: string;
}

export default function Announcement({
  title,
  information,
}: AnnouncementProps) {
  return (
    <Button>
      <View style={styles.container}>
        <Text style={styles.textPurple}>
          {title}
          <Text style={styles.textBlack}> {information}</Text>
        </Text>
      </View>
    </Button>
  );
}
