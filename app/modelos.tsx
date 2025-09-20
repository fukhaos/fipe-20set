import FipeScreen from "@/components/FipeScreen";
import { Modelos } from "@/models";
import fetcher from "@/services/fetcher";
import { router, useLocalSearchParams } from "expo-router";
import { Text } from 'react-native';
import useSWR from 'swr';

export default function ModeloScreen() {

  const { codigoMarca } = useLocalSearchParams();

  const goNext = (codigoModelo: string) => {
    router.push({ pathname: "/anos", params: { codigoMarca, codigoModelo } })
  }

  const { data, error, isLoading, mutate } = useSWR<{ modelos: Modelos[] }>(`/carros/marcas/${codigoMarca}/modelos`, fetcher)

  if (error) {
    return <Text>{`Error na request, tente novamente: ${error.message}`}</Text>
  }

  return (
    <FipeScreen data={data?.modelos} isLoading={isLoading} update={mutate} goNext={goNext} />
  );
}
