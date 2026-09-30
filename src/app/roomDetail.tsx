import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RoomDetail() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.detailCard}>
        <Image source={require('../../assets/images/hotel.png')} style={styles.detailImage} />

        <View style={styles.detailContent}>
          <Text style={styles.detailTitle}>Detalhes da hospedagem</Text>
          <Text style={styles.detailDescription}>
            Confira informações sobre a acomodação.
          </Text>
          <Text style={styles.detailSubtitle}>Mais informações</Text>
          <Text style={styles.detailInfo}>
            Consulte disponibilidade, comodidades e horários diretamente com a hospedagem.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 16,
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    overflow: 'hidden',
  },
  detailImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#EAEAEA',
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 16,
  },
  detailSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  detailInfo: {
    fontSize: 14,
    color: '#555555',
  },
});
