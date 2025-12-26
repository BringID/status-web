import api from '../../_utils/api'
import createQueryString from '../../_utils/create-query-string'

import type { TGetScore, TGetScoreResponse } from './types'

const NEXT_PUBLIC_ZUPLO_KEY = ''
const NEXT_PUBLIC_ZUPLO_API_URL = 'https://api.bringid.org'

const getScore: TGetScore = (drop, address, scoringId, networkId) => {
  const queryString = createQueryString({
    address,
    scoring_id: scoringId,
    chain_id: networkId,
    drop_address: drop,
  })
  return api<TGetScoreResponse>(
    `${NEXT_PUBLIC_ZUPLO_API_URL}/v1/faucet/score?${queryString}`,
    'GET',
    {
      Authorization: `Bearer ${NEXT_PUBLIC_ZUPLO_KEY}`,
    }
  )
}

export { getScore }
