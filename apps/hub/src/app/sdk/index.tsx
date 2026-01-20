import { BringID } from 'bringid'

const getSDK = (() => {
  let sdk: null | BringID = null

  return () => {
    if (!sdk) {
      const newSDK = new BringID()
      sdk = newSDK

      return sdk
    }

    return sdk
  }
})()

export default getSDK
