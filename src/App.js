import './App.css'
import Component from './components/Component'

const expense = [
	{
		albumId: 1,
		id: 1,
		title: 'audi rs6',
		url: 'https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret',
		thumbnailUrl: 'https://via.placeholder.com/150/92c952',
	},
	{
		albumId: 2,
		id: 2,
		title: 'audi rs7',
		url: 'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2019/09/10/07/3554678/e3d5ae61bd30258670e5596223492fe60302b4f7.jpg',
		thumbnailUrl: 'https://via.placeholder.com/150/92c952',
	},
	{
		albumId: 3,
		id: 3,
		title: 'audi rs8',
		url: 'https://wallpaperaccess.com/full/1537318.jpg',
		thumbnailUrl: 'https://via.placeholder.com/150/92c952',
	},
]

function App() {
	return (
		<div className='App'>
			<Component
				id={expense[0].id}
				img={expense[0].url}
				title={expense[0].title}
			/>
			<Component
				id={expense[1].id}
				img={expense[1].url}
				title={expense[1].title}
			/>
			<Component
				id={expense[2].id}
				img={expense[2].url}
				title={expense[2].title}
			/>
		</div>
	)
}

export default App
