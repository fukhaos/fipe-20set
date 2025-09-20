import FipeScreen from "@/components/FipeScreen";
import { Marca } from "@/models";
import fetcher from "@/services/fetcher";
import { router } from "expo-router";
import { Text } from 'react-native';
import useSWR from 'swr';

export default function Index() {

  const goNext = (codigo: string) => {
    router.push({ pathname: '/modelos', params: { codigoModelo: codigo } })
  }

  const { data, error, isLoading, mutate } = useSWR<Marca[]>('/carros/marcas', fetcher)

  if (error) {
    return <Text>Error na request, tente novamente</Text>
  }

  return (
    <FipeScreen data={data} isLoading={isLoading} update={mutate} goNext={goNext} />
  );
}
