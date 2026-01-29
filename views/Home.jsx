import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*debut de header 2  */}
      <div className="header2" style={{
        marginTop:"300px"
      }}>
        <div className="titles">
          <h2>Powerful Features</h2>
          <p>
            Everything you need to manage your library efficiently and
            effectively.
          </p>
        </div>
      </div>
    </>
  );
}
