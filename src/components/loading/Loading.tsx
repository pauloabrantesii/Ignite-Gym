import { Spinner, Center } from "native-base";


export function Loading (){
    return (
    <Center flex={1} bg="purple.900">
       <Spinner />
       </Center>
    );
}