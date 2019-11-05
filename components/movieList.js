import React, { useEffect, useState } from 'react';



const movieList = ({movies}) => {
	return (
		<div className="row">
			{movies.length > 0 ?
        movies.map((m) => (
          <div key={m.id} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100">
						<a href={m.image}>
							<img className="card-img-top" src={m.image} alt={m.name} />
						</a>
						<div className="card-body">
							<h4 className="card-title">
								<a href="#">{m.name}</a>
							</h4>
							<h5>Rating: {m.rating}</h5>
							<p className="card-text">{m.description.substr(0, 150) + '...'}</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">{m.rating}</small>
						</div>
					</div>
				</div>
			)):<div className="loading">...Loading</div>}
            <style jsx>
              {` 
                .loading {
                  text-align:center;
                  margin:0 auto;
                }
              `}
      </style>
		</div>
    
	);
};

export default movieList;