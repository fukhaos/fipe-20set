import FipeScreen from "@/components/FipeScreen";
import { Marca } from "@/models";
import fetcher from "@/services/fetcher";
import useSWR from 'swr';

export default function Index() {

  const { data, error, isLoading } = useSWR<Marca[]>('/carros/marcas', fetcher)

  return (
    <FipeScreen data={data} />
  );
}
