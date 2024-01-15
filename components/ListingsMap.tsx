import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { defaultStyles } from '../constants/Styles';
import { useRouter } from 'expo-router';

interface Props {
    listings: any;
}


const ListingsMap = ({ listings }: Props) => {
    const router = useRouter();
    const onMarkerSelected = (item: any) => {
        router.push(`/listing/${item.properties.id}`)
    }
    return (
    <View style={defaultStyles.container}>
      <MapView 
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        >
            {listings.features.map((item: any) => (
                <Marker 
                    key={item.properties.id}
                    onPress={() => onMarkerSelected(item)}
                    coordinate={{
                        latitude: +item.properties.latitude,
                        longitude: +item.properties.longitude,
                    }}
                >
                    <View style={styles.marker}>
                        <Text style={styles.markerText}>$ {item.properties.price}</Text>
                    </View>
                </Marker>
            ))}
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 12
  },
  markerText: {
    fontFamily: 'mon-sb',
    fontSize: 14
  }
})


export default ListingsMap