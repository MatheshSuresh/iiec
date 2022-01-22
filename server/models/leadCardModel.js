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

const leadCardSchema = mongoose.Schema({
    new: {
        type: Array,
    },
    inProgress: {
        type: Array,
    },
    review: {
        type: Array,
    },
    done: {
        type: Array,
    },
});

const LeadCard = mongoose.model("LeadCard", leadCardSchema);

export default LeadCard;
