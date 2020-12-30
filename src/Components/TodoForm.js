import React,{useState} from "react"
import {Container,Form,FormGroup,Input,InputGroup,InputGroupAddon,Button} from "reactstrap"
import { v4 as uuidv4 } from 'uuid';






const TodoForm=({addTodo})=>{   // even a method can be passed as parameter
    const[todoString,setTodoString]=useState("")
    
    const HandleSubmit=()=>{

        if(todoString==="")
        return alert("empty")

        const Todo={
            todoString,
            id:uuidv4()
        }

        

        addTodo(Todo)
        setTodoString("")



    }
    return(
         
            <Form onSubmit={HandleSubmit}>
        <FormGroup >
            <InputGroup  className="op1">
                 <Input placeholder="Your Next Todo"
                        value={todoString}
                        onChange={(e)=>{
                            setTodoString(e.target.value)
                        }}/>
                    <InputGroupAddon addonType="append">
                     <Button color="primary">Submit</Button>

                    </InputGroupAddon>
                  
            </InputGroup>
         </FormGroup>
      </Form>
       


    )
}
export default TodoForm