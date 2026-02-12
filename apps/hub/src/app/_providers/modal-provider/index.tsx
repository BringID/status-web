'use client'
import { useEffect, useState } from 'react'

import { BringIDModal } from 'bringid/react'
import { useAccount, useWalletClient } from 'wagmi'

import defineEthersSigner from '../../_utils/define-ethers-provider'
import { Container } from './styled-components'

import type { JsonRpcSigner } from 'ethers'

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: walletClient } = useWalletClient()
  const { address } = useAccount()
  const [signer, setSigner] = useState<null | JsonRpcSigner>()
  useEffect(() => {
    ;(async () => {
      if (!walletClient) {
        return
      }
      const { signer } = await defineEthersSigner(walletClient)

      if (signer) {
        setSigner(signer)
      }
    })()
  }, [walletClient, address])

  return (
    <Container>
      <BringIDModal
        address={address || undefined}
        highlightColor="#6B43F4"
        iframeOnLoad={() => console.log('Loaded')}
        generateSignature={
          signer
            ? async (value: string) => {
                return await signer.signMessage(value)
              }
            : undefined
        }
      />
      {children}
    </Container>
  )
}
