import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container text-center">
  {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
  <div className="row">
    <div className="col-md-8">.col-md-8</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
  <div className="row">
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
    <div className="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
  <div className="row">
    <div className="col-6">.col-6</div>
    <div className="col-6">.col-6</div>
  </div>
</div>
    </>
  )
}

export default App
