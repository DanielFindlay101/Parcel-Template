import * as React from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Metric from '../components/Metric'

export default function DashBoard() {
  return (
    <div>
        <Navbar />
       <div className='app-layout'>
          <div className='sidebar-nav'>
              <Sidebar />
          </div>
            {/* <aside></aside> */}
        
          <div className='content-section'>
              <h2 className='content-section-title'>Dashboard</h2>

              <hr className='line-break' />

                <div className="scroll-section">
                    <div className='new-list-area'>
                      <h3>New</h3>
                    </div>

                      <div className='new-list-area'>
                        <h3>Today</h3>
                          <div className="metric-list">
                            <Metric />
                            <Metric />
                            <Metric />
                          </div>
                      </div>

                    <div className='new-list-area'>
                        <h3>This Month</h3>
                        <div className="metric-list">
                            <Metric />
                            <Metric />
                            <Metric />
                          </div>
                    </div>

                    <div className='new-list-area'>
                        <h3>This Year</h3>
                        <div className="metric-list">
                            <Metric />
                            <Metric />
                            <Metric />
                          </div>
                    </div>
                    
                </div>
           </div>
        </div> 
    </div>
  )
}


//App layout
//Nav
//Content