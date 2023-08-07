import { Heading, SectionList, Text } from 'native-base';
import { useState } from 'react';

import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { VStack } from 'native-base';

export function History() {
   const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada Frontal", "Remada unilateral"]
    },
    {
      title: "27.08.22",
      data: ["Puxada Frontal"]
    },
   ])
    return (
      <VStack flex={1}>
        <ScreenHeader title="Histórico de Exercícios" />

        <SectionList 
          sections={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <HistoryCard />
          )}
          renderSectionHeader={({ section }) => (
            <Heading color="gray.100" fontSize="md" mt={10} mb={3}>
              {section.title}

            </Heading>
          )}
          px={8}
          contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
          ListEmptyComponent={() => (
            <Text color="gray.100" textAlign="center">
               Não há treinos registrados ainda. {'\n'}
               Vamos treinar hoje ?
            </Text>
          )}
        />
        
      </VStack>
    );
}