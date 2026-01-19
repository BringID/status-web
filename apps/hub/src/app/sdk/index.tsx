import { BringIDSDK } from 'bringid-sdk'

const getSDK = (() => {
  let sdk: null | BringIDSDK = null

  return () => {
    if (!sdk) {
      const newSDK = new BringIDSDK()
      sdk = newSDK

      return sdk
    }

    return sdk
  }
})()

export default getSDK
