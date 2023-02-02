import React, {useState} from "react";
import "../Todolist/todo.css";

const Todo = () =>{

    const [input, setInput] = useState("");
    const [storedata, setStoredata] = useState([]);

    const dataStorage = () =>{
        setStoredata((storedata)=>{
            const updateddata = [...storedata,input];
            setInput("");
            return updateddata;
            
        })
    }

    const removehandler = (i) =>{
        const updateddata = storedata.filter((num, id)=>{
            return i!==id;
        })
        setStoredata(updateddata);
    }

    const removeeverything = () =>{
        setStoredata([]);
    }
    return(
        <>
            <div className="main-container">
                <h2 className="main-title">TO-DO-LIST</h2>
                <input 
                    className="input-field"
                    type="text"
                    placeholder="Add Your Task Here"
                    value={input}
                    onChange = {(e) =>{
                        setInput(e.target.value);
                        
                    }}
                />
                <button 
                onClick={dataStorage}
                className="btn-task-add"
                >+</button>
                {
                    storedata.length > 0 ? <h3 className="second-title">Check Your List:</h3> : ""
                }
                
                    {
                        storedata!=[] && storedata.map((data, i)=>{
                            return(
                                <>
                                    <p key={i}
                                        className="task-list"
                                        >
                                       <div>{data}</div>
                                    </p>
                                    <button className="btn-remove" onClick={()=>{
                                        removehandler(i);
                                    }}>{"×"}</button>
                                </>
                            )
                        })
                    
                    }
                    {
                        storedata.length > 1? <button className="clear-btn" onClick={removeeverything}>Clear List</button> : ""
                    }
                    
                
                



            </div>
        </>
    )

}

export default Todo;