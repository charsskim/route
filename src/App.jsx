import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/main';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';

import { Route } from 'react-router-dom';
import './scss/style.scss';

export default function App() {
	return (
		<div>
			<Header />
			<Route exact path='/' component={Main} />
			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Footer />
		</div>
	);
}
