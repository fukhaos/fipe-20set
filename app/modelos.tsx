import FipeScreen from "@/components/FipeScreen";
import { Modelos } from "@/models";
import fetcher from "@/services/fetcher";
import { useLocalSearchParams } from "expo-router";
import { Text } from 'react-native';
import useSWR from 'swr';

export default function ModeloScreen() {

  const { codigoModelo } = useLocalSearchParams();

  const goNext = (codigo: string) => {

  }

  const { data, error, isLoading, mutate } = useSWR<{ modelos: Modelos[] }>(`/carros/marcas/${codigoModelo}/modelos`, fetcher)

  if (error) {
    return <Text>Error na request, tente novamente</Text>
  }

  return (
    <FipeScreen data={data?.modelos} isLoading={isLoading} update={mutate} goNext={goNext} />
  );
}
