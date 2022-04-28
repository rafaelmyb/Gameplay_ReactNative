import { useState } from "react";
import { View, Text, Image } from "react-native";

import illustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

      </View>

    </View>
  );
}
