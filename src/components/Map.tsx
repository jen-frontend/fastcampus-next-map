/*global kakao*/
import { Dispatch, SetStateAction } from "react";
import { StoreType } from "@/interface";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
  setCurrentStore?: Dispatch<SetStateAction<StoreType | null>>;
  lat?: string | null;
  lng?: string | null;
  zoom?: number;
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

const DEFAULT_ZOOM = 3;

export default function Map({
  setMap,
  setCurrentStore,
  lat,
  lng,
  zoom,
}: MapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          lat || DEFAULT_LAT,
          lng || DEFAULT_LNG
        ),
        level: zoom || DEFAULT_ZOOM,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      if (setCurrentStore) {
        // 지도에 클릭 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "click", () => {
          setCurrentStore(null);
        });
      }

      function relayout() {
        // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
        // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다
        // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
        map.relayout();
      }

      setMap(map);
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
