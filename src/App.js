import React, { useState } from 'react';
import './App.css';
import Car from './Car/Car';

function App() {
  const [carDate, setData] = useState(
    [
      { name: 'Ford Focus', year: '2017', id: 1 },
      { name: 'Audi A8', year: 2015, id: 2 },
      { name: 'Mazda 3', year: 2010, id: 3 }
    ]
  );
  const [title, setTitle] = useState({ pageTitle: 'React app' });
  const [showCars, setShowCars] = useState({show:false})

  function changeTitleHandler(e, index) {
    let new_name = Number(e.currentTarget.getAttribute('data-id'))
    let input = document.getElementById(`${new_name}`)
    new_name = new_name - 1;
    let arr = [...carDate]
    arr[new_name].name = input.value;
    setData(arr)
  }
  
  function toggleCarsHandler(){
    setShowCars({
      show: !showCars.show
    })
  }

  function deleteHandler(index){
    let cars = carDate.concat()
    cars.splice(index,1)
    setData(cars)
  }

  return (
    <div>
      <h1 id={title.id}>{title.pageTitle}</h1>
      <button onClick={toggleCarsHandler}>Toggle cars</button>
      <div>
        {showCars.show 
        ? carDate.map((item, index) => {
                    return (
                      <Car
                        name={item.name}
                        year={item.year}
                        onChangeTitle={index=>{changeTitleHandler(index)}}
                        id={item.id}
                        key={index}
                        onDelete={index=>{deleteHandler(index)}}
                      />
                    )
                  })
                  : null
        }

      </div>

    </div>
  );
}

export default App;
