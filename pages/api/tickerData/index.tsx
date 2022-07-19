//1. Import coingecko-api
import CoinGecko from "coingecko-api";
import type { NextApiRequest, NextApiResponse } from "next";
import console from "console";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //2. Initiate the CoinGecko API Client
    const CoinGeckoClient: any = new CoinGecko();

    //3. Make calls
    let rows = await CoinGeckoClient.coins.fetchTickers('bitcoin');

    res.status(200).json(JSON.stringify(rows));
  } catch (err) {
    console.log(err);
  }
};
