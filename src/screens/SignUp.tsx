import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png'
import { Input } from "@components/Input/input";
import { Button } from "@components/Button/Button";

export function SignUp(){
  
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
   }

    return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}  px={10} >
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas Treinando"
          resizeMode="contain"
          position="absolute"
        />


    <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
            Treine Sua mente e o seu corpo
        </Text>
    </Center>


       <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
            Cria sua conta
        </Heading>

        <Input 
          placeholder="Nome"
         
        />
        <Input 
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input 
          placeholder="Senha"
          secureTextEntry
          />  
               
        <Input 
          placeholder="Confirme a senha"
          secureTextEntry
          />




          <Button title="Criar e Acessar"/>
       </Center>
        

     <Center mt={24}>
         <Button 
           title="Voltar para o login" 
           variant="outline" 
           onPress={handleGoBack}
           />
      
    </Center>
   

      </VStack>
    </ScrollView>
     
    );
}