import React from 'react';
import { AndroidJSInterface } from "./interfaces/android-js-interface"

export function App() {

  const androidJSInterface = new AndroidJSInterface()

  const handleLoading = () => {
    androidJSInterface.setLoading(true)
    setTimeout(() => {
      androidJSInterface.setLoading(false)
    }, 1000)
  }

  const handleCamera = () => {
    const cameraIsAvaiable = androidJSInterface.checkCameraHardware()
    if (!cameraIsAvaiable) {
      console.log("Camera não disponivel no dispositivo")
      return
    }
    androidJSInterface.openCamera()
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


