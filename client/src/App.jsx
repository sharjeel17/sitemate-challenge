import React from 'react'
import Issues from './components/Issues'
import Header from './components/Header'
import { useState } from 'react'


const App = () => {

    //this is used to run useEffect to re-render the list of issues
    //if any issues are changed in any way (created, updated or deleted)
    const [updateToData, setUpdateToData] = useState(false);

    return (
      <div className='w-full h-full flex justify-center'>
          <div className='w-full sm:w-2/3'>
            <Header />
            <Issues updateToData={updateToData}/>
          </div>   
      </div>
    )
}


export default App

