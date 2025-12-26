type TGetScoreResponse = Promise<{
  success: boolean
  score: number
  next_claim_in: number | null
  is_claimable: boolean
}>

type TGetScore = (
  drop: string,
  address: string,
  scoringId: string,
  networkId: number
) => Promise<TGetScoreResponse>

export type { TGetScore, TGetScoreResponse }
