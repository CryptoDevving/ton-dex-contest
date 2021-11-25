import { Pool, PricedToken, WalletPool } from '@src/types';
import { popularTokens } from '@src/utils';

export const pricedTokens: PricedToken[] = popularTokens.map((t) => ({
  ...t,
  price: Math.random() * 1000,
  priceChange: {
    type: Math.random() > 0.5 ? 'rise' : 'fall',
    amount: Math.random() * 10,
  },
  tradingVolume: 100 + Math.random() * 100,
}));

export const pools: Pool[] = [
  {
    id: 'cb7286c3-f71e-4cdc-a34b-1d0bed5c4506',
    volume: 4,
    totalLocked: 324,
    pair: [pricedTokens[0]!, pricedTokens[2]!],
  },
  {
    id: '5eba28cb-0976-425f-bbcb-38e5c69b4f58',
    volume: 3.2,
    totalLocked: 12,
    pair: [pricedTokens[0]!, pricedTokens[1]!],
  },
  {
    id: 'ef4bf1aa-e695-4919-b76c-5c0ad8c1cb85',
    volume: 2.9,
    totalLocked: 12,
    pair: [pricedTokens[0]!, pricedTokens[3]!],
  },
  {
    id: '018b16f7-1715-4dbc-867e-6d11399daf8e',
    volume: 2.7,
    totalLocked: 12,
    pair: [pricedTokens[0]!, pricedTokens[3]!],
  },
];

export const walletPools: WalletPool[] = [
  {
    ...pools[0]!,
    ownerAddress: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
    fee: 0.2,
    share: 0.001,
    locked: [
      {
        ...pools[0]!.pair[0]!,
        amount: 15,
      },
      {
        ...pools[0]!.pair[1]!,
        amount: 200,
      },
    ],
  },
  {
    ...pools[1]!,
    ownerAddress: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
    fee: 0.1,
    share: 0.0012,
    locked: [
      {
        ...pools[1]!.pair[0]!,
        amount: 321,
      },
      {
        ...pools[1]!.pair[1]!,
        amount: 100,
      },
    ],
  },
];
