import {useState} from "react";
import "./App.css";
export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",

    };
  };

  

  const handleClick = (id) =>{
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

  const hadleChange = (e) => {
    setValue(e.target.value);
  }

  const hadleSubmit = (e) => {
    // form 안에 input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

      // 원래 있던 할 일에 새로운 할 일 더해주기
      setTodoData(prev => 
        [...prev, newTodo]
      );
      setValue("");
  }

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }

    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

        {todoData.map((data) => (
              <div style={getStyle(data.completed)} key={data.id}>
                <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
                  {data.title}
                  <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
              </div>
        ))}
        <form style={{display: "flex"}} onSubmit={hadleSubmit}>
          <input type="text" name="value" style={{flex:"10", padding:"5px"}}
            placeholder="해야 할 일을 입력하세요"
            value={value}
            onChange={hadleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{flex: '1'}}
          />
        </form>
        </div>
      </div>
    )
}