const moment = require("moment");
const http = require('http')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const {
  sequelize,
  Language,
  Dictionary

} = require("../models");


exports.createLanguage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { title } = req.body;
  try {
    const request = await Language.create({
      title:title
    });
    
    return res.json(request);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getLanguage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Origin", "*"); 
  try {
    const request = await Language.findAll({
      attribute:["id","title"],
      order: [
            ['title', 'ASC'],
        ],
    });
    const result=request.map((reqs)=>{
      return {
        id:reqs.id,
        title: reqs.title  
      }
    })
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.searchLanguage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  const { search} = req.body;
  
  try {
    const request = await Language.findAll({
      attribute:["id","title"],
      where:{title: { [Op.like]: `${search}%` },},
      order: [
            ['title', 'ASC'],
        ],
    });
    const result=request.map((reqs)=>{
      return {
        id:reqs.id,
        title:reqs.title
        
      }
    })
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};


exports.updateLanguage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id,title } = req.body;
  try {

    const request = await Language.update(
      {title:title},
      {
        where:{
          id,
        },
      }
    );
    
    return res.json(request);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deleteLanguage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.body.id;
  try {
    const request = await Language.destroy({
    where: {
        id
    }
})
    
    return res.json(request);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};