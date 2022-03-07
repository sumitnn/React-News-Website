import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">

        <div className="container-fluid">

          <Link className="navbar-brand" to="">News Website</Link>


          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars text-light"></i>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-home fa-lg mb-1"></i>
                  </div>
                  Home
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-atom"></i>
                  </div>
                  Science
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-baseball-ball"></i>
                  </div>
                  Sports
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fab fa-avianex"></i>
                  </div>
                  Business
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link active" aria-current="page" href="#!">
                  <div>
                    <i className="fas fa-music fa-lg mb-1"></i>
                  </div>
                  Entertainment
                </a>
              </li>
             </ul>

            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-globe-americas fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-success">11</span>
                  </div>
                  Indian News
                </a>
              </li>
            </ul>

            <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
              <input type="search" className="form-control" placeholder="Country" aria-label="Search" />
              <button className="btn btn-primary" type="button" data-mdb-ripple-color="dark">
                Search
              </button>
            </form>
          </div>

        </div>

      </nav>

    </>
  )
}

export default Header