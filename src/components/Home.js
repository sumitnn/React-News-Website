import React, { useEffect,useState} from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Carosel from '../common/Carosel';
import News from './News';
import axios from 'axios';


function Home() {
    const [data, setData] = useState([]);


    const API_KEY = process.env.REACT_APP_API_KEY;

useEffect(() => {    
    axios.get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en`).then((response) => {
    setData(response.data.articles);
    });
}, []);
  return (
      <>
          <header className="container-fluid">
              <Header />
          </header>
          <div className="container p-2">  
              <section className="mb-3 mt-2"> 
                      <Carosel data={data} />            
              </section>
              <hr />
              <section className="container-fluid">
                  <div className="row">
                      <News data={ data}/>
                  </div>
              </section>
              <div className="">
                  <Footer/>
              </div>

          </div>
      </>
  )
}

export default Home