import React from 'react'

// Props로 필요한 데이터 함수 가져오기
export default function List({todoData, setTodoData}) {
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
    };

    
    const handleCompleChange = (id) => {
    let newTodoData = todoData.map(data => {
        if(data.id === id){
        data.completed = !data.completed;
    }
        return data;
    })
        setTodoData(newTodoData);
    };
    
    return (
    <div>
        {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
                <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
                    {data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
            </div>
        ))}
    </div>
    )
}