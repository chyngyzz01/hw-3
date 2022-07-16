import './Component.css'


function Component(props) {
    console.log(props);
	return (
    <div className='expense-item'>
        <div>{props.id}</div>
        <img src={props.img} alt="img" />
        <h1>{props.title}</h1>
    </div>
    )
}
export default Component