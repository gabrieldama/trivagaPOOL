import { Image, StyleSheet, Text, View } from 'react-native';

interface RoomCardProps {
  title: string;
  description: string;
  imageSource: any;
}

export default function RoomCard({ title, description, imageSource }: RoomCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    backgroundColor: '#EAEAEA',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginTop: 2,
  },
});
