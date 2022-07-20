import * as React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import TopNavBar from '../components/TopNavBar'
import '../styles/JobsOverview'

export default function JobsOverview() {
  return (
    <div className='jobs-page'>
     <TopNavBar />
     <BottomNavBar />
    </div>
  )
}
