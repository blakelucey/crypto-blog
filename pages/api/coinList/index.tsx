//1. Import coingecko-api
import CoinGecko from "coingecko-api";
import type { NextApiRequest, NextApiResponse } from "next";
import console from "console";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const CoinGeckoClient: any = new CoinGecko();
  try {
    //3. Make calls
    let data = await CoinGeckoClient.coins.list();

    res.status(200).json(JSON.parse(JSON.stringify(data)));
  } catch (err) {
    console.log(err);
  }
};
