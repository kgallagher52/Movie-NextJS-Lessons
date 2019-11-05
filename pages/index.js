import React, { useState, useEffect } from 'react';
import Head from 'next/head';
//Data Components
import GlobalContext from '../context/globalContext';
import { getMovies } from '../actions';
//Components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import SideMenu from '../components/sideMenu';
import MovieList from '../components/movieList';

const Home = ({movies}) => (
		<GlobalContext.Provider value={{}}>
			<div>
				<Head>
					<title>Home</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossOrigin="anonymous"
					/>
					<script
						src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
						integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
						crossOrigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
						integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
						crossOrigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
						integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
						crossOrigin="anonymous"
					/>
				</Head>

				<NavBar />
				<div className="home-page">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<SideMenu />
							</div>
							<div className="col-lg-9">
								<Carousel />
							</div>
						</div>
						{movies ? <MovieList movies={movies} /> : null}
						<Footer />
					</div>
				</div>
				<style jsx>
					{`
						.home-page {
							margin-top: 80px;
						}
					`}
				</style>
			</div>
		</GlobalContext.Provider>
    
	)
  Home.getInitialProps = async () => {
    //Use this for server rendering so that the bots can get information when they crawl**
    const movies = await getMovies()
    return {movies}
};
export default Home
