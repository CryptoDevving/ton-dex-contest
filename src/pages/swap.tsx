import React from 'react';

import { NextPage } from 'next';

import Layout from '@components/Layout';
import TokenPicker from '@components/TokenPicker';
import { PickedTokens } from '@components/TokenPicker/TokenPicker.types';

const Swap: NextPage = () => {
  const [tokens, setTokens] = React.useState<PickedTokens>([null, null]);

  // console.log(tokens);

  // Convertion rate are hardcoded for now
  const convertionRate = 1.51;

  const handleTokensChange = (t: PickedTokens) => {
    const newTokens = [...t];
    const sourceToken = newTokens[0];

    console.log(t, 'from pickers');

    const isSourceTokenChanged =
      tokens[0]?.address !== sourceToken?.address ||
      tokens[0]?.amount !== sourceToken?.amount;

    if (isSourceTokenChanged) {
      const changedTokens = newTokens
        .splice(1)
        .map((_t) =>
          _t !== null
            ? { ..._t, amount: (sourceToken?.amount ?? 0) * convertionRate }
            : null
        );
      console.log(changedTokens);
      return setTokens([sourceToken, ...changedTokens] as PickedTokens);
    }
    // In future it can be > 2, we have no warranty that is a changed item
    const otherItem = newTokens[1];
    newTokens.splice(0, 1, {
      ...sourceToken!,
      amount: (otherItem?.amount ?? 0) / convertionRate,
    });

    return setTokens(newTokens as PickedTokens);
  };

  return (
    <Layout>
      <div className="flex h-auto my-auto flex-col gap-4 items-center justify-center w-full">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-black text-violet">Exchange tokens</h1>
          <TokenPicker
            details={
              <div className="bg-control flex flex-col gap-1 text-dark w-[15em] py-2 px-4 rounded-md">
                <span className="text-violet leading-none mb-1 font-bold">
                  Details
                </span>
                <span className="text-sm text-violet-60 leading-none">
                  <b>1.51 {tokens[1]?.symbol}</b> per <b>{tokens[0]?.symbol}</b>
                </span>
                <span className="text-sm font-bold text-violet-60 leading-none">
                  0.2% fees
                </span>
              </div>
            }
            tokens={tokens}
            onChange={handleTokensChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Swap;
