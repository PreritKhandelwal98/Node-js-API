const Product = require('../models/product');

const getAllDetails = async(req,resp)=>{
    const myData = await Product.find({});
    resp.status(200).json({myData});
};

const getAllDetailsTesting = async(req,resp)=>{
    resp.status(200).json({msg:"Get all testing details"});
};

module.exports = {getAllDetails,getAllDetailsTesting};