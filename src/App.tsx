import React, { useEffect } from 'react';
import { AndroidJSInterface } from "./interfaces/android-js-interface"
import { iOSJSInterface } from './interfaces/ios-js-interface';

export function App() {

  const androidJSInterface = new AndroidJSInterface()
  const iosJSInterface = new iOSJSInterface()

  const handleLoading = () => {
    if (androidJSInterface.activePlatform()) {
      androidJSInterface.setLoading(true)
      setTimeout(() => {
        androidJSInterface.setLoading(false)
      }, 1000)
    } else if (iosJSInterface.activePlatform()) {
      iosJSInterface.setLoading(true)
      setTimeout(() => {
        iosJSInterface.setLoading(false)
      }, 1000)
    }

  }

  const handleCamera = () => {
    if (androidJSInterface.activePlatform()) {
      const cameraIsAvaiable = androidJSInterface.checkCameraHardware()
      if (!cameraIsAvaiable) {
        return
      }
      androidJSInterface.openCamera()
    } else if (iosJSInterface.activePlatform()) {
      iosJSInterface.openCamera()
    }
  }



  return (
    <>
      <br />
      <button style={
        {
          width: "100%",
          height: 50,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }
      }
        onClick={handleLoading}>SET-LOADING</button>

      <br />
      <button style={
        {
          width: "100%",
          height: 50,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }
      }
        onClick={handleCamera}>CAMERA</button>
    </>


  );
}


