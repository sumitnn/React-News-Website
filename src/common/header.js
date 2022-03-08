import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Header({ setSearchData }) {
  const [search, setSearch] = useState('');
  const [titles, setTitle] = useState('World');
  
  const Submitfun = (e) => {
    e.preventDefault();
    setSearchData(search);
    setSearch('');
    setTitle(search);
  }
  
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
                <Link className="nav-link active" aria-current="page" to="/">
                  <div>
                    <i className="fas fa-home fa-lg mb-1"></i>
                  </div>
                  Home
                </Link>
              </li>
               </ul>

            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              
              <li className="nav-item text-center mx-2 mx-lg-1">
                <span className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-globe-americas fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-success">11</span>
                  </div>
                  {titles.toUpperCase()} NEWS
                </span>
              </li>
            </ul>

            <form className="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0" onSubmit={Submitfun}>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Search here..." aria-label="Search" />
              <button className="btn btn-primary" type="submit" data-mdb-ripple-color="dark">
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