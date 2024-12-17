import React from 'react'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'


const Homepage = () => {
  return (
    <div className='homepage flex flex-row'>
        <div className='homepage__nav flex-[0.2]'>
            <Sidenav/>
        </div>

        <div className='homepage__timeline flex-[0.8]'>
            <Timeline/>
        </div>

    </div>
  )
}

export default Homepage