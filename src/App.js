import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/productsContainer';
import AddCartContainer from './containers/addCartContainer';
import MessageContainer from './containers/messageContainer';

function App() {
	return (
		<div className="App">
			<Header/>
			<main id="mainContainer">
				<div className="container">
					<ProductsContainer/>
					<MessageContainer/>
					<AddCartContainer/>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default App;
