// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   "게임 분류 선택": string[];
//   "Q. 선호 하는 장르 (중복 선택 가능)": string[];
//   "Q. 인생 게임이 있습니까?": string[];
//   "Q. 좋아하는 게임을 입력하세요": undefined;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    [{ "게임 분류 선택": ["고티수상작", "게임 전체 중에서"] }],
    [
      {
        "Q. 선호 하는 장르 (중복 선택 가능)": [
          "RPG",
          "MMOPRG",
          "액션",
          "샌드박스",
          "FPS",
          "RTS",
          "딱히 없음",
        ],
      },
    ],
    [{ "Q. 인생 게임이 있습니까?": ["Y", "N"] }],
    [{ "Q. 좋아하는 게임을 입력하세요": undefined }],
  ]);
}
