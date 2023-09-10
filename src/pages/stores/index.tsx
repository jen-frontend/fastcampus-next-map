import Image from "next/image";
import { StoreType } from "@/interface";

export default function StoreListPage({ stores }: { stores: StoreType[] }) {
  return (
    <div className="px-4 md:max-w-4xl mx-auto py-8">
      <ul role="list" className="divide-y divide-gray-100">
        {stores?.map((store, index) => (
          <li className="flex justify-between gap-x-6 py-5" key={index}>
            <div className="flex gap-x-4">
              <Image
                src={
                  store?.bizcnd_code_nm
                    ? `/images/markers/${store?.bizcnd_code_nm}.png`
                    : "/images/markers/default.png"
                }
                width={48}
                height={48}
                alt="아이콘 이미지"
              />
              <div>
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  {store?.upso_nm}
                </div>
                <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                  {store?.upso_nm}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="text-sm font-semibold leading-6 text-gray-900">
                {store?.rdn_code_nm}
              </div>
              <div className="mt-1 text-xs truncate font-semibold leading-5 text-gray-500">
                {store?.tel_no || "번호없음"} | {store?.crtfc_gbn_nm} |{" "}
                {store?.bizcnd_code_nm}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
  };
}
