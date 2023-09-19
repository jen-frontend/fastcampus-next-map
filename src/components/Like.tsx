import { StoreType } from "@/interface";
import axios from "axios";
import { useSession } from "next-auth/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface LikeProps {
  storeId: number;
  className?: string;
}

export default function Like({ storeId, className }: LikeProps) {
  const { data: session } = useSession();

  const config = {
    url: `/api/stores?id=${storeId}`,
  };

  const { data: store, refetch } = useQuery<StoreType>(
    [`like-store-${storeId}`],
    async () => {
      const { data } = await axios(config);
      return data as StoreType;
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!storeId,
    }
  );

  const toggleLike = async () => {
    if (session?.user && store) {
      try {
        const like = await axios.post("/api/likes", {
          storeId: store?.id,
        });

        if (like.status === 201) {
          toast.success("가게를 찜했습니다.");
        } else {
          toast.warn("찜을 취소했습니다.");
        }

        refetch();
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <button type="button" onClick={toggleLike} className={className}>
      {store?.likes && store?.likes?.length > 0 ? (
        <AiFillHeart className="hover:text-red-600 focus:text-red-600 text-red-500" />
      ) : (
        <AiOutlineHeart className="hover:text-red-600 focus:text-red-600" />
      )}
    </button>
  );
}
