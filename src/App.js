import './App.css';
import List from './components/List';

const items = [
	{
		key: 'APPLE',
		value: 'apple',
		isNew: false,
	},
	{
		key: 'BANANA',
		value: 'banana',
		isNew: false,
	},
	{
		key: 'CHERRY',
		value: 'cherry',
		isNew: false,
	},
]

function App() {
	return (
		<div className="App">
			<List data={items}></List>
		</div>
	);
}

export default App;