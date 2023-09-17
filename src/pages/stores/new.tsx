import Layout from "@/components/Layout";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  CATEGORY_ARR,
  DISTRICT_ARR,
  FOOD_CERTIFY_ARR,
  STORE_TYPE_ARR,
} from "@/data/store";
import axios from "axios";

export default function StoreNew() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <div className="px-4 md:max-w-4xl mx-auto py-8">
      <form
        onSubmit={handleSubmit(async (data) => {
          // console.log(data);
          try {
            const res = await axios.post("/api/stores", data);
            // console.log(res);
            if (res.status === 200) {
              toast.success("맛집을 등록했습니다.");
              router.replace("/stores");
            } else {
              toast.error("다시 시도해주세요");
            }
          } catch (e) {
            console.log(e);
            toast.error("데이터 생성중 문제가 생겼습니다. 다시 시도해주세요");
          }
        })}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              맛집 등록
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              아래 폼을 입력하여 맛집을 등록해주세요
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  가게명
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.name?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  카테고리
                </label>
                <div className="mt-2">
                  <select
                    {...register("category", { required: true })}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">카테고리 선택</option>
                    {CATEGORY_ARR?.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors?.category?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  연락처
                </label>
                <div className="mt-2">
                  <input
                    {...register("phone", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.phone?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  주소
                </label>
                <div className="mt-2">
                  <input
                    {...register("address", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.address?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="lat"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  위도
                </label>
                <div className="mt-2">
                  <input
                    {...register("lat", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.lat?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="lng"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  경도
                </label>
                <div className="mt-2">
                  <input
                    {...register("lng", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.lng?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="foodCertifyName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  식품인증구분
                </label>
                <div className="mt-2">
                  <select
                    {...register("foodCertifyName", { required: true })}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">식품인증구분 선택</option>
                    {FOOD_CERTIFY_ARR?.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                  {errors?.foodCertifyName?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="storeType"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  업종구분
                </label>
                <div className="mt-2">
                  <select
                    {...register("storeType", { required: true })}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">업종구분 선택</option>
                    {STORE_TYPE_ARR?.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                  {errors?.storeType?.type === "required" && (
                    <div className="pt-2 text-xs text-red-600">
                      필수 입력사항입니다.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            뒤로가기
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}
