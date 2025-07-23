import Todo from "../Models/Todo.Model.js";

export async function AddTodoFunc(req,res){
  try {
     const {input}=req.body;
   if(input==""){
    return 
   }

   const data=await Todo.create({
      input:input
   })
   return res.status(200).send(data);

  } catch (err) {
    console.log("Server Error",err);
    return res.status(404).json({message:"Server Error"});
  }
}

export async function getTodoFunc(req,res){
     try {
        const data=await Todo.find();
        return res.status(200).send(data);
     } catch (err) {
        console.log("Server Error");
        return res.status(404).json({message:"Server Error"});
     }
}


export async function editTodoFunc(req,res){
    try {
        const {id}=req.params;
        const todo=await Todo.findById(id);
        if(!todo){
           return res.status(400).json({message:"Todo not found"});
        }
        return res.status(200).send(todo);
    } catch (err) {
       console.log("Server Error",err);
       return res.status(404).json({message:"Server Error"});
    }
}

export async function updateTodoFunc(req,res){
    const {input}=req.body
    try {
        const {id}=req.params;
        const todo=await Todo.findByIdAndUpdate(id,{input:input},{new:true});
        return res.status(200).send(todo);
    } catch (err) {
        console.log("Server Error",err);
        return res.status(404).json({message:"Server Error"})
    }
}

export async function deleteTodo(req,res){
   try {
     const {id}=req.params;
     const deleteItem=await Todo.findByIdAndDelete(id);
     return res.status(200).send(deleteItem);
   } catch (err) {
    console.log("Server Error",err);
    return res.status(400).json({message:"Server Error"})
   }
}


