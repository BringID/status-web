'use client'

import { type FC, useState } from 'react'

import { Button } from '@status-im/status-network/components'
import { useDispatch } from 'react-redux'

import { setScore, useBringID } from '../../store/reducers/bring'

import type TProps from './types'

const BringIDScoreCard: FC<TProps> = ({ onComplete }) => {
  const dispatch = useDispatch()
  const { score } = useBringID()
  // const { address, chainId } = useAccount()
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="w-full overflow-hidden rounded-20 border border-neutral-20 bg-white-100">
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex w-full flex-col gap-2">
            <p className="text-15 font-400 text-neutral-50">BringID</p>
            <p className="text-27 font-600">Score: {score}</p>
            <Button
              className="text-align-center w-full justify-center"
              disabled={loading}
              onClick={async () => {
                setLoading(true)
                // const { score, success } = await getScore(
                //   DROP_ADDRESS,
                //   address as string,
                //   DROP_ADDRESS,
                //   chainId as number
                // )

                // if (success) {
                //   dispatch(setScore(score))
                //   onComplete()
                // }

                await new Promise(resolve => setTimeout(resolve, 2000))

                dispatch(setScore(Math.floor(Math.random() * 10) + 1))
                onComplete()
                setLoading(false)
              }}
            >
              Check Score
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BringIDScoreCard
