import Map from "@/components/Map";
import Markers from "@/components/Markers";

import StoreBox from "@/components/StoreBox";
import { StoreType } from "@/interface";

import axios from "axios";
import { useQuery } from "react-query";

export default function Home() {
  const fetchStore = async () => {
    const { data } = await axios("/api/stores");
    return data as StoreType[];
  };

  const { data: stores } = useQuery("stores", fetchStore, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}
