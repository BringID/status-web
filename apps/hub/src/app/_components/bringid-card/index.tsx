'use client'

import { Button } from '@status-im/status-network/components'
import { openModal } from 'bringid-sdk'
import { useDispatch } from 'react-redux'
import { useAccount } from 'wagmi'

import { setPoints, setProofs, useBringID } from '../../store/reducers/bring'
import { ConnectButton } from '../connect-button'

import type TProps from './types'
import type { FC } from 'react'

const BringIDCard: FC<TProps> = ({ onComplete }) => {
  const dispatch = useDispatch()
  const { proofs, points } = useBringID()
  const { address } = useAccount()

  return (
    <div className="w-full overflow-hidden rounded-20 border border-neutral-20 bg-white-100">
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex w-full flex-col gap-2">
            <p className="text-15 font-400 text-neutral-50">BringID</p>
            <p className="text-27 font-600">Points: {points}</p>
            <p className="text-27 font-600">Proofs count: {proofs.length}</p>
            {address ? (
              <Button
                className="text-align-center w-full justify-center"
                onClick={() =>
                  openModal({
                    proofsGeneratedCallback: (proofs, points) => {
                      dispatch(setPoints(points))
                      dispatch(setProofs(proofs))
                      onComplete()
                    },
                  })
                }
              >
                Open Modal
              </Button>
            ) : (
              <ConnectButton size="40" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BringIDCard
