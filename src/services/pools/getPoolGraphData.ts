import { sleep } from '@src/utils';

import { poolGraphData } from '../sampleData';

/**
 * Sample request for fetching pool data for graph
 *
 * @return {Promise<PoolGraphData>}
 */
const getPoolGraphData = async () => {
  await sleep(1200);
  return poolGraphData();
};

export default getPoolGraphData;
