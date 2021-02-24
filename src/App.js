import {useState} from "react";
import {useEffect} from "react";


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((r) => {
          return r.json();
        })
        .then((json) => {
          setData(json);
        })
  }, [])

  return (
    <div className="App">
        {data.map(item => {
          return (
              <div className="block">
                  <div className="idBlock">{item.id}</div>
                  <div className="titleBlock">{item.title}</div>
                  <div className="completed"><button className="btn" disabled={item.completed}>{item.completed}
                      {item.completed ? "Просмотрено" : "Показать"}
                  </button></div>
              </div>
          )
        })}
    </div>
  );
}

export default App;
