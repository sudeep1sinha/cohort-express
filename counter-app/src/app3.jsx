import {useState} from "react";

function App(){
    const [todos , setTodos]=useState([]);

    function addTodo(){
        let newTodos=[];
        console.log(newTodos)
        for (let i=0; i<todos.length; i++){
            newTodos.push(todos[i])
        }

        newTodos.push({
            title: "asda",
            description : "asddasdas"
        })
        setTodos(todos)
    }
    return (
        <div>
        <button onClick={addTodo}>Add a random button</button>
        {todos.map(function(todo){
            return <Todo title={todo.title} description={todo.description} ></Todo>
        }
        )}
        </div>
    )
}
function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App