import React from 'react'

// Props로 필요한 데이터 함수 가져오기
export default function List({todoData, setTodoData}) {
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
            <div key={data.id}>
                <div className='flex items-center justify-between w-full px-4
                py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
                    <div className='items-center'>
                        <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
                            <span className={data.completed ? undefined:'line-through'}> {data.title}</span>
                    </div>
                    <div className='items-center'>
                        <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>X</button>
                    </div>
            </div>
        </div>
        ))}
    </div>
    );
}