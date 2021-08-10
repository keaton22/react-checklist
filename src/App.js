import './App.css';
import List from './components/List';

const items = [
	{
		key: 'APPLE',
		value: 'apple',
	},
	{
		key: 'BANANA',
		value: 'banana',
	},
	{
		key: 'CHERRY',
		value: 'cherry',
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