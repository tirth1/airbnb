import { View, Text, StyleSheet  } from 'react-native'
import { Link } from 'expo-router'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const categories = [
    {
      name: 'Tiny homes',
      icon: 'home',
    },
    {
      name: 'Cabins',
      icon: 'house-siding',
    },
    {
      name: 'Trending',
      icon: 'local-fire-department',
    },
    {
      name: 'Play',
      icon: 'videogame-asset',
    },
    {
      name: 'City',
      icon: 'apartment',
    },
    {
      name: 'Beachfront',
      icon: 'beach-access',
    },
    {
      name: 'Countryside',
      icon: 'nature-people',
    },
  ];

  interface Props {
    onCategoryChanged: (category: string) => void
  }

const ExploreHeader = ({ onCategoryChanged }: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const selectCategory = (index: number) => {
        const selected = itemsRef.current[index];
    setActiveIndex(index);
    onCategoryChanged(categories[index].name)
    }
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
            <Link href={'/(modals)/booking'} asChild>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='search' size={24} />
                    <View>
                        <Text style={{fontFamily: 'mon-sb'}}>Where to?</Text>
                        <Text style={{fontFamily: 'mon', color: Colors.grey}}>Anywhere ~ Any week</Text>
                    </View>
                </TouchableOpacity>
            </Link>

            <TouchableOpacity style={styles.filterBtn}>
                <Ionicons name='options-outline' size={24}/>
            </TouchableOpacity>
        </View>
        
        <ScrollView 
            ref={scrollRef}
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center',
                gap: 30,
                paddingHorizontal: 16
            }}>
        {categories.map((item, index) => (
            <TouchableOpacity key={index} 
                onPress={() => selectCategory(index)}
                ref={(el) => (itemsRef.current[index] = el)} 
                style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
            >
                <MaterialIcons 
                    name={item.icon as any} 
                    size={24}
                    color={activeIndex === index ? '#000' : Colors.grey}
                />
                <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 130
  },
  actionRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingRight: 4
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,

  },
  searchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    width: 280,
    borderRadius: 30,
    padding: 14,
    backgroundColor: '#fff',
    paddingLeft: 18
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000'
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
})


export default ExploreHeader