import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '../../components/ExploreHeader'
import Listings from '../../components/Listings'
import listingData from '../../assets/data/airbnb-listings.json'

const Index = () => {

    const [category, setCategory] = useState('Tiny homes');
    const onDataChanges = (category: string) => {
        setCategory(category);
    }

    const listings = useMemo(() => listingData, [])

  return (
    <View style={{flex: 1, marginTop: 130}}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanges}/>
      }}/>

      <Listings category={category} listings={listings}/>
    </View>
  )
}

export default Index