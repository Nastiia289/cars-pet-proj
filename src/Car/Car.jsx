import '../App.css';

function Car (props){
    return(
        <div className='car'>
          <h3 data-key={props.id}>{props.name}</h3>
          <p>Year: <strong>{props.year}</strong></p>
          <input id={props.id}></input>
          <button onClick={props.onChangeTitle} data-id={props.id}>Click</button>
          <button onClick={props.onDelete}>Delete</button>

        </div>
      )
}

export default Car;