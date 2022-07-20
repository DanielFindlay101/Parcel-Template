import * as React from 'react'
import '../styles/TopNavBar'
import { ArrowLeftIcon, AdjustmentsIcon } from '@heroicons/react/solid'

export default function TopNavBar() {
  return (
    <div className='top-nav'>
      <ArrowLeftIcon className='icons' />
      <h2>Jobs Overview</h2>
      <AdjustmentsIcon className='icons' />
    </div>
  )
}
