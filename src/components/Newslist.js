import React from 'react';

const Newslist = ({ value }) => {
    return (  
        <> { value.map((cur,i) => {
                    return (
                        <div className="col-md-4" key={i}>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={cur.image } className="card-img-top" alt={cur.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{ cur.title}</h5>
                                        <p className="card-text">
                                            {cur.description}--<span className="text-warning"><a href={cur.url}> Read More..</a></span>
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{cur.publishedAt} ago</small>
                                    </div>
                                </div>
                            </div>
                           
                        
                        </div>
                    )
                })
            }
          
      </>
  )
}

export default Newslist