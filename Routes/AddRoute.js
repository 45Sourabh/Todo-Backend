import {AddTodoFunc} from "../Controller/AddTodoFunc.Controller.js";
import { getTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { editTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { updateTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { deleteTodo } from "../Controller/AddTodoFunc.Controller.js";

function AddRoutes(app){
    app.get("/", getTodoFunc);                      
    app.post("/add", AddTodoFunc);                  
    app.get("/favicon.ico", (req, res) => res.status(204));
    app.get("/:id", editTodoFunc);                 
    app.put("/:id", updateTodoFunc);               
    app.delete("/:id", deleteTodo);                
}

export default AddRoutes;