
import { h, Component, render } from 'preact'
import Router from 'preact-router';
import Contact from './client/Contact.tsx'
import About from './client/About.tsx'
//
const Header = () => (
	<header>
		<nav>
			<a href="/">[ Home ]</a>
			<a href="/about">[ About ]</a>
			<a href="/contact">[ Contact ]</a>
		</nav>
    <hr class="my-2" />
	</header>
);
//
class Home extends Component {
	setText = e => {
		this.setState({ text: e.target.value });
	};
	render({ }, { text='Some Text' }) {
		return (
			<section class="home">
				<input value={text} onInput={this.setText} />
				<div>In caps: {text.toUpperCase()}</div>
			</section>
		);
	}
}
//
const App = () => (
	<div class="app">
    <Header />
		<Router>
			<Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
		</Router>
	</div>
);
render(<App />, document.getElementById('app')!);
/*
*/