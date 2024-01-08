import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Bookings</Link>
      <Link href={'/listing/144'}>Listing</Link>
    </View>
  )
}

export default Index