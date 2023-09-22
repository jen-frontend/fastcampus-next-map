import { StoreType } from "@/interface";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import { event } from "@/lib/gtag";

import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface LikeProps {
  storeId: number;
}

export default function Like({ storeId }: LikeProps) {
  const { data: session, status } = useSession();

  const fetchStore = async () => {
    const { data } = await axios(`/api/stores?id=${storeId}`);
    return data as StoreType;
  };

  const { data: store, refetch } = useQuery<StoreType>(
    `like-store-${storeId}`,
    fetchStore,
    {
      enabled: !!storeId,
      refetchOnWindowFocus: false,
    }
  );

  const toggleLike = async () => {
    // 찜하기/찜취소 로직
    if (session?.user && store) {
      try {
        const like = await axios.post("/api/likes", {
          storeId: store.id,
        });

        if (like.status === 201) {
          toast.success("가게를 찜했습니다.");
        } else {
          toast.warn("찜을 취소했습니다.");
        }

        event({
          action: "click_like",
          category: "like",
          label: like.status === 201 ? "create_like" : "delete_like",
          value: storeId,
        });

        refetch();
      } catch (e) {
        console.log(e);
      }
    } else if (status === "unauthenticated") {
      toast.warn("로그인 후 이용해주세요.");
      event({
        action: "click_like",
        category: "like",
        label: "need_login_like",
        value: storeId,
      });
    }
  };

  return (
    <button type="button" onClick={toggleLike}>
      {/* 로그인된 사용자가 좋아요를 눌렀다면? */}
      {status === "authenticated" && store?.likes?.length ? (
        <AiFillHeart className="hover:text-red-600 focus:text-red-600 text-red-500" />
      ) : (
        <AiOutlineHeart className="hover:text-red-600 focus:text-red-600" />
      )}
    </button>
  );
}
