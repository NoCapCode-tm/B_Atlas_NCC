import mongoose from "mongoose"


const TaskSchema = mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        default:null
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    assignedto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    priority:{
        type:String,
        enum:["Urgent","Low","Medium","High"]
    },
    status:{
        type:String,
         enum: [
        "To Do",
        "In Progress",
        "In Review",
        "Completed"
    ],
    default: "To Do",
    },
    dueAt:{
        type:Date,
        default:null
    },
    tags:[{
        type:String,
        default:""
    }],
    dependencies:{
        files:[{
            img:{
            type:String,
            default:"",
           },
        name:{
            type:String,
        }
    }],
        links:[{
            link:{
            type:String,
            default:"",
           },
        name:{
           type:String,
        }
    }],
    },
    weightage:{
        type:Number,
        default:0,
    },
    deleted:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Date,
        default:null
    },
    comments:[{
       commentby:{
        type:String,
        default:""
       },
       text:{
        type:String,
        default:"",
       },
       timeat:{
        type:Date,
        default:null
       }
    }],
    history:[{
        actionby:{
            type:String,
            default:""
        },
        title:{
            type:String,
            default:"",
        },
        timeat:{
            type:Date,
            default:null
        }
    }],
    subtasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subtask"
    }]
},{timestamps:true})

export const Task = mongoose.model("Task",TaskSchema)