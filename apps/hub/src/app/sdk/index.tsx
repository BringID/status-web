import { BringID } from 'bringid'

const getSDK = (() => {
  let sdk: null | BringID = null

  return () => {
    if (!sdk) {
      const newSDK = new BringID({
        appId: '1',
        mode: 'dev',
      })
      sdk = newSDK

      return sdk
    }

    return sdk
  }
})()

export default getSDK
