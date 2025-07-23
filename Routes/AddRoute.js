import {AddTodoFunc} from "../Controller/AddTodoFunc.Controller.js";
import { getTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { editTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { updateTodoFunc } from "../Controller/AddTodoFunc.Controller.js";
import { deleteTodo } from "../Controller/AddTodoFunc.Controller.js";

function AddRoutes(app){
    app.post("/add",AddTodoFunc);
    app.get("/",getTodoFunc);
    app.get("/:id",editTodoFunc);
    app.put("/:id",updateTodoFunc);
    app.delete("/:id",deleteTodo);
}

export default AddRoutes;