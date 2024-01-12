import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

interface Props {
    listings: any,
    category: string
}
const Listings = ({ listings, category }: Props) => {

    useEffect(() => {
        console.log(listings.length)
    }, [category])
  return (
    <View style={{flex: 1}}>
      <Text>{category}</Text>
    </View>
  )
}

export default Listings