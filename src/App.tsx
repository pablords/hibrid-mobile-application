import React from 'react';


function App() {
  const handleLoading = () => {
    webviewBridge.setLoading("true")
    setTimeout(() => {
      webviewBridge.setLoading("false")
    }, 2000)
  }


  return (
    <>
      <span>
        LOADING
      </span>
      <br />
      <button style={{ width: "100%", height: 150, display: 'flex', justifyContent: "center", alignItems: "center" }} onClick={handleLoading}>SET-LOADING</button>
    </>
  );
}

export default App;
