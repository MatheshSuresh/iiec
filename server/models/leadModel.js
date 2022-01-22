import mongoose from "mongoose";


//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNo: string,
//   preferDestination: string,
//   startDate: string,
//   officeLocation: string,
//   preferCounsel: string,
//   fundOption: string,
//   studyLevel: string,

const leadSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo: {
    type: String,

  },
  preferDestination: {
    type: String,
  },
  startDate: {
    type: String,
  },
  officeLocation: {
    type: String,
  },
  preferCounsel: {
    type: String,
  },
  fundOption: {
    type: String,
    default: 'Self'
    
  },
  studyLevel: {
    type: String,
    
  },
  listed: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
