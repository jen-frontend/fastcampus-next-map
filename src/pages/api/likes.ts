import type { NextApiRequest, NextApiResponse } from "next";
import { LikeApiResponse, LikeInterface } from "@/interface";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LikeApiResponse | LikeInterface>
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user) {
    return res.status(401);
  }

  if (req.method === "POST") {
    const { storeId }: any = req.body;
    let like = await prisma.like.findFirst({
      where: {
        storeId,
        userId: session?.user?.id,
      },
    });

    if (like) {
      like = await prisma.like.delete({
        where: {
          id: like.id,
        },
      });
      return res.status(204).json(like);
    } else {
      like = await prisma.like.create({
        data: {
          storeId,
          userId: session?.user?.id,
        },
      });
      return res.status(201).json(like);
    }
  }
}
