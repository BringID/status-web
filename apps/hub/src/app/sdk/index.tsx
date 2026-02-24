import { BringID } from 'bringid'

const getSDK = (() => {
  let sdk: null | BringID = null

  return () => {
    if (!sdk) {
      const newSDK = new BringID({
        appId:
          '0xc787bcb1ac362ff76303f470e7a8dc9b6c9dabadb86c72106f0455b5131ff9ed',
        mode: 'dev',
      })
      sdk = newSDK

      return sdk
    }

    return sdk
  }
})()

export default getSDK
