import { useEffect } from "react";

import Layout from "@/components/Layout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { AiOutlineGoogle } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function LoginPage() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  return (
    <Layout>
      <div className="flex h-[60vh] flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-blue-800 text-center text-2xl font-semibold italic">
            eatmap
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-600">
            SNS 계정으로 로그인해주세요
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            계정이 없다면 자동으로 회원가입이 진행됩니다.
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="text-white relative group flex bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <AiOutlineGoogle className="w-6 h-6" />
              </span>
              Sign in with Google
            </button>
            <button
              type="button"
              onClick={() => signIn("naver")}
              className="text-white relative group flex bg-[#2db400] hover:bg-[#2db400]/90 focus:ring-4 focus:ring-[#2db400]/50 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center dark:focus:ring-[#2db400]/55 mr-2 mb-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <SiNaver className="w-4 h-4 ml-1" />
              </span>
              Sign in with Naver
            </button>
            <button
              type="button"
              onClick={() => signIn("kakao")}
              className="text-black relative group flex bg-[#fef01b] hover:bg-[#fef01b]/90 focus:ring-4 focus:ring-[#fef01b]/50 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center dark:focus:ring-[#fef01b]/55 mr-2 mb-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <RiKakaoTalkFill className="w-6 h-6" />
              </span>
              Sign in with Kakao
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
