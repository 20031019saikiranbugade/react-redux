// import React from 'react'

// function App() {
//   const success = (position) => {
//     console.log(position)
//     const { latitude, longitude } = position.coords;
//     console.log("Latitude:" + latitude + "\n" + "Longitude:" + longitude);
//     console.log(position.timestamp)
//   }
//   const error = (error) => {
//     console.log("There is an error " + error)
//   }
//   function getLocation(e) {
//     const result = navigator.geolocation.getCurrentPosition(success, error);
//       }
//   return (
//     <>
//       <div style={{ margin: 20 }}>
//         <button onClick={getLocation}>Get Current Location</button>
//       </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './states/Store'
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </>
  )
}

export default App