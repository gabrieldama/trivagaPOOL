import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RoomCard from '../components/RoomCard';

interface Hotel {
  id: string;
  title: string;
  description: string;
  imageSource: any;
}

const HOTELS_DATA: Hotel[] = [
  {
    id: '1',
    title: 'Pousada do Mar',
    description: 'Quartos simples a poucos passos da praia.',
    imageSource: require('../../assets/images/pousada.png'), 
  },
  {
    id: '2',
    title: 'Hotel Centro',
    description: 'No coração da cidade, perto de tudo.',
    imageSource: require('../../assets/images/hotel.png'), 
  },
  {
    id: '3',
    title: 'Casa da Serra',
    description: 'Chalés tranquilos cercados de verde.',
    imageSource: require('../../assets/images/casa.png'), 
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <FlatList
          data={HOTELS_DATA}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Text style={styles.headerTitle}>Hospedagem Trivaga</Text>}
          renderItem={({ item }) => (
            <Link
              href={{
                  pathname: '/roomDetail',
                  params: {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                  },
              }}
              asChild
            >
              <TouchableOpacity activeOpacity={0.7} accessibilityRole="link">
                <RoomCard
                  title={item.title}
                  description={item.description}
                  imageSource={item.imageSource}
                />
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  leftColumn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#174A6E',
    backgroundColor: '#DCEEFF',
    textAlign: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  rightColumn: {
    flex: 1,
  },
});
