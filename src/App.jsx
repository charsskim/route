import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/main';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';
import './scss/style.scss';
import { Route } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<Header />
			<Route path exact='/' component={Main} />
			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Footer />
		</div>
	);
}
