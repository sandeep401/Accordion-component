import { useState } from 'react'
import Accordion from './component/Accordion'

import './App.css'

function App() {
  

  return (
    <>
      <Accordion heading="Learning React" >
        <div>
          <h4>Hello,welcome to React</h4>
          <h4>Hello,welcome to React</h4>
          <h4>Hello,welcome to React</h4>
          <h4>Hello,welcome to React</h4>
        </div>
      </Accordion>
    </>
  )
}

export default App
