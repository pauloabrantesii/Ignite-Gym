import { useState } from 'react';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Biceps', 'Triceps', 'Ombro']);
  const [exercises, setexercises] = useState(['Puxador Frontal', 'Remada Curvada', 'Remada unilateral', 'Levantamento Terra']);
  const [groupSelected, setGroupSelected] = useState('Costas');


    return (
      <VStack flex={1}>
        <HomeHeader />


        <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
          name={item} 
          isActive={(groupSelected).toLocaleUpperCase() === (item).toLocaleUpperCase()}
          onPress={() => setGroupSelected(item)}
          />
         )} 
         horizontal
         showsHorizontalScrollIndicator={false}
         _contentContainerStyle={{ px: 8 }}
         my={10}
         maxHeight={10}
       />

      <VStack flex={1} px={8}>
       <HStack justifyContent="space-between" mb={5}>
        <Heading color="gray.200" fontSize="md">
          Exercícios
        </Heading>

        <Text color="gray.200" fontSize="sm">
          {exercises.length}
        </Text>
       </HStack>

      
       <FlatList 
         data={exercises}
         keyExtractor={item => item}
         renderItem={({ item }) => (
          <ExerciseCard />
         )}
         showsVerticalScrollIndicator={false}
         _contentContainerStyle={{paddingBottom: 20}}
          />
       </VStack>
      </VStack>
    );
}