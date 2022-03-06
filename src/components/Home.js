import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
function Home() {
  return (
      <>
          <div className="container">
              <header>
                  <Header/>
              </header>
              <div className="fixed-bottom">
                  <Footer/>
              </div>

          </div>
      </>
  )
}

export default Home