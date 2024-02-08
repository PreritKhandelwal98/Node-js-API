const Product = require('../models/product');

const getAllDetails = async(req,resp)=>{

    const {company,name} =req.query;
    const queryObject={};

    if(company){
        queryObject.company=company;
        //console.log(queryObject.company);
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    console.log(queryObject);

    const myData = await Product.find({queryObject});
    resp.status(200).json({myData});
};

const getAllDetailsTesting = async(req,resp)=>{
    const myData = await Product.find(req.query);
    resp.status(200).json({myData});
};

module.exports = {getAllDetails,getAllDetailsTesting};