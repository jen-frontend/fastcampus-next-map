"use client";

/* eslint-disable @next/next/no-img-element */
import Pagination from "@/components/Pagination";
import CommentList from "@/components/comments/CommentList";
import { CommentApiResponse } from "@/interface";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useQuery } from "react-query";

export default function Mypage() {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || "1";

  const fetchComments = async () => {
    const { data } = await axios(
      `/api/comments?&limit=5&page=${page}&user=${true}`
    );

    return data as CommentApiResponse;
  };

  const { data: comments, refetch } = useQuery(
    `comments-${page}`,
    fetchComments
  );

  const { data: session } = useSession();
  return (
    <div className="md:max-w-5xl mx-auto px-4 py-8">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          마이페이지
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          사용자 기본정보
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              이름
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {session?.user.name ?? "사용자"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              이메일
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {session?.user.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              이미지
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <img
                alt="프로필 이미지"
                width={48}
                height={48}
                className="rounded-full w-12 h-12"
                src={session?.user.image || "/images/markers/default.png"}
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              설정
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <button
                type="button"
                className="underline hover:text-gray-500"
                onClick={() => signOut()}
              >
                로그아웃
              </button>
            </dd>
          </div>
        </dl>
      </div>
      <div className="mt-8 px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          내가 쓴 댓글
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          댓글 리스트
        </p>
      </div>
      <CommentList comments={comments} displayStore={true} />
      <Pagination
        total={comments?.totalPage}
        page={page}
        pathname="/users/mypage"
      />
    </div>
  );
}
