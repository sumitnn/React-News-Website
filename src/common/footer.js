import React from 'react'
import './footer.css';
function Footer() {
    const d = new Date();
    
  return (
      <>
          <footer className="bg-dark text-center text-white mt-5">
              
              <div className="text-center p-3" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                  © {d.getFullYear()} Copyright:
                
              </div>
             
          </footer>
    </>
  )
}

export default Footer