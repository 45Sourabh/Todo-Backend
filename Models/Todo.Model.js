import mongoose from "mongoose";

const TodoSchema=mongoose.Schema({
    input:String,
})

const Todo=mongoose.model("Todo",TodoSchema);

export default Todo;