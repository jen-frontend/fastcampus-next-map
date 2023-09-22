/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import CommentForm from "./CommentForm";
import { useQuery } from "react-query";
import axios from "axios";
import { CommentApiResponse } from "@/interface";
import CommentList from "./CommentList";
import Pagination from "../Pagination";

interface CommentProps {
  storeId: number;
  page: string;
}

export default function Comments({ storeId, page = "1" }: CommentProps) {
  const { status } = useSession();

  const fetchComments = async () => {
    const { data } = await axios(
      `/api/comments?storeId=${storeId}&limit=5&page=${page}`
    );

    return data as CommentApiResponse;
  };

  const { data: comments, refetch } = useQuery(
    `comments-${storeId}-${page}`,
    fetchComments
  );

  return (
    <div className="md:max-w-2xl py-8 px-2 mb-20 mx-auto">
      {status === "authenticated" && (
        <CommentForm storeId={storeId} refetch={refetch} />
      )}
      <CommentList comments={comments} />
      <Pagination
        total={comments?.totalPage}
        page={page}
        pathname={`/stores/${storeId}`}
      />
    </div>
  );
}
