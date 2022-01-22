import Lead from "../models/leadModel.js";
import LeadCard from "../models/leadCardModel.js";

export const postLead = async (req, res, next) => {
    const {firstName, lastName, email, phoneNo, preferDestination, startDate, officeLocation, preferCounsel, fundOption, studyLevel} = req.body;
    const leadGen = new Lead({
        firstName, lastName, email, phoneNo, preferDestination, startDate, officeLocation, preferCounsel, studyLevel, fundOption
    });

    const lead = await leadGen.save();

    res.status(201).json(lead);
};

export const getLeads = async (req, res, next) => {
    const fetchLeads = await Lead.find();
    res.status(200).json(fetchLeads);
}



export const postCard = async (req, res, next) => {
    console.log(req.body,"kkkkkk")
    const { newCard, inProgress, review, done } = req.body;
    console.log(newCard, inProgress, review, done,"jjj")
    const leadCard = new LeadCard({
        newCard, inProgress, review, done
    });

    const leadCards = await leadCard.save();
    console.log(leadCards)
    res.status(201).json(leadCards);
};


export const getLeadcard = async (req, res, next) => {
    const fetchLeads = await LeadCard.find();
    res.status(200).json(fetchLeads);
}
