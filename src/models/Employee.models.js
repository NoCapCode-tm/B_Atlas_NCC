import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    signature:{
         type:String,
      unique:true,
    },
    empid:{
      type:String,
      unique:true,
    },
    roleid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        default:null
    },
     email:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true
    },
    Emails:{
        email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
        },
     professionalmail:{
        type:String,
        lowercase:true,
        trim:true,
        default:""
    },
    },
    
    address:{
        permanent:{
            type:String,
            default:"",
        },
        state:{
             type:String,
            default:"",
        },
        city:{
             type:String,
            default:"",
        },
        country:{
             type:String,
            default:"",
        },
        communication:{
            type:String,
            default:"",
        },

    },
    emergency:{
        contactnumber:{
             type:Number,
             default:"",
        },
        contactname:{
             type:String,
             default:"",
        },
        contactemail:{
             type:String,
             default:"",
        },
        contactrelation:{
             type:String,
             default:"",
        },
        contactcountry:{
             type:String,
             default:"",
        }
    },
    password:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        default:"",
    },
    gender:{
        type:String,
        default:""
    },

    phone:{
        permanent:{
        type:Number,
        default:null,
        sparse:true
    },
     alternate:{
        type:Number,
        default:null,
        sparse:true
    },
},
    salary:{
        amount:{
           type:Number,
           default:0,
        },
        paymentstatus:{
            type:String,
            enum:["Completed","Pending","In Progess"]
        }
       
    },
    designation:{
        name:{ 
        type:String,
        enum:["Manager","Human Resource","Intern","Administrator","Employee"],
        default:"Employee"
        },
        // Managerid:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"Manager",

        // },
        // Hrid:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"HR",
            
        // }
    },
    role:{
        type:String,
        // enum:["Frontend Developer","Content Writer","Backend Developer","Full Stack Developer","QA","UI/UX Designer","Devops","Manager"],
        default:null
    },
    status:{
        type:String,
        enum:["Onboarding","Paid" , "Unpaid" ,"Full Time","Contractual"],
        default:"Onboarding"
    },
    // Projects:[
    //     {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Project",
    //     }
    // ],
    // Tasks:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Tasks"
    // }],
    // dailyreports:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Report"
    // }],

    managerAssigned:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    onboarding: {
    status: {
        type: String,
        enum: ["Completed", "Incomplete", "In Progress"],
        default: "Incomplete"
    },
    startedAt: {
        type: Date,
        default: null
    },
    completedAt: {
        type: Date,
        default: null
    }
},
scores:{
   type: mongoose.Schema.Types.ObjectId,
   ref:"PerformanceScore",
},
profilepicture:{
    type:String,
    default:"",
},
ticketsraised:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Ticket"
}],
documents:{
    govid1:{
       image:{
        type:String,
        default:"",
        },
        number:{
             type:Number,
             default:"",
        }

    },
   govid2:{
       image:{
        type:String,
         default:""
        },
        number:{
          type:String,
          default:""
        }

    },
    passportimage:{
        type:String,
        default:"",
    }
},
Qualificationdetails:{
     studentid:{
        type:String,
        default:""
     },
     highestqualification:{
        type:String,
        default:null,
        enum:["Postgraduate","Undergraduate","High School","Diploma","Phd"]
    },
    collegename:{
        type:String,
        default:"",
    },
    coursename:{
        type:String,
        default:"",
    },
    year:{
        type:String,
        default:"",
    },
    expectedgraduation:{
        type:String,
        default:""
    }
},
department:{
    type:String,
    enum:["Human Resource","Designing","Engineering","Marketing","Sales","Operations","Finance","Other"],
    default:null
},
    startedAt: {
        type: Date,
        default: null
    },
    endAt: {
        type: Date,
        default: null
    },
    workdetails:{
        mode:{
            type:String,
            enum:["Remote","OnSite","Hybrid"],
            default:"Remote"
        },
        workinghour: {
        type: String,
        default: ""
        },
    },
    professionaldetails:{
      github:{
            type: String,
            default: ""
        },
        portfolio:{
            type: String,
            default: ""
        },
        Linkedin:{
            type: String,
            default: ""
        },
        Previousexperience:[{
            companyname:{
                type: String,
                default:"",
            },
            role:{
                type: String,
                default:"",
            },
            duration:{
                type: String,
                default:"",
            },
            responsibilities:{
                type: String,
                default:"",
            },

        }],
        technical:[{
            type: String,
            default:"",
        }],
        expertise:[{
            type: String,
            default:"",
        }],

    },
    systemdetails:{
        laptopavailaibility:{
            type:Boolean,
            default:false
        },

        devicetype:{
            type:"String",
            enum:["Personal","Company Provided"],
            default:null
        },
        os:{
            type: String,
            default:"",
        },
        internet:{
              type: String,
            enum:["High","Moderate","Limited"]   
        },
        timezone:{
             type: String,
            default:"",
        },
        weeklyavailaibility:{
            type: String,
            default:"",
        },

    },
    
bankdetails:{
    Indian:{
       acholdername:{
        type:String,
        default:""
    },
    accountno:{
        type:Number,
        default:""
    },
    ifsc:{
        type:String,
        
        default:""
    },
    bankname:{
        type:String,
        default:""
    },
    branchname:{
        type:String,
        default:""
    },
    upi:{
        type:String,
        default:""
    }
    },
    International:{
       acholdername:{
        type:String,
        default:""
    },
    accountno:{
        type:Number,
        default:""
    },
    swift:{
        type:String,
        
        default:""
    },
    bankname:{
        type:String,
        default:""
    },
    platform:{
        type:String,
        default:""
    },
    },
},
notifications:[{
    title:{
        type:String,
        default:""
    },
    details:{
        type:String,
        default:""
    },
    createdAt:{
        type:Date,
        default:null
    },
    activities:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Recent",
    }
}],
recentActivity:[{
  name:{
      type:String,
      default:"",
    },
    refModel: {
      type: String,
      enum: ["Task", "Report", "Token", "Project"],
      default: null,  
    },

   
    refs: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "recentActivity.refModel",
      default: null, 
    },
    time:{
        type:Date,
        default:""
    }
}],
completioncertificate:{
    type:String,
    default:null
},
acknowledge:{
    type:String,
    default:"",
},

policyhandbook:{
    type:Boolean,
    default:false
},

deleted:{
  type:Boolean,
  default:false
}

},{timestamps:true})

UserSchema.pre("save",async function(){
    if(!this.isModified("password"))return null;
    this.password = await bcrypt.hash(this.password,10)
})

UserSchema.methods.isPasswordCorrect = async function(password){
    if(!password)return null
    return bcrypt.compare(password,this.password)
}

UserSchema.methods.Token = function(){
    return jwt.sign({
      _id:this._id,
      name:this.name,
      email:this.Emails.email
    },
    process.env.JWT_TOKEN ,
    {
        expiresIn:process.env.JWT_TOKEN_EXPIRY
    }
)
}
export const User = mongoose.model("User", UserSchema)