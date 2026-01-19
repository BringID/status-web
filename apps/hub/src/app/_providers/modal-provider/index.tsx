'use client'
import { useEffect, useState } from 'react'

import { BringIDModal } from 'bringid-sdk'
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Container>{children}</Container>
  }

  return (
    <Container>
      <BringIDModal
        address={address || undefined}
        iframeOnLoad={() => console.log('Loaded')}
        mode="dev"
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
