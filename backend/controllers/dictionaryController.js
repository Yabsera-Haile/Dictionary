const moment = require("moment");
const http = require('http')
const Sequelize = require("sequelize");
const {
  sequelize,
  Dictionary,
  Language

} = require("../models");
const Op = Sequelize.Op;

exports.createDictionary = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { word, defn, type,example,language } = req.body;
  try {
    const request = await Dictionary.create({
      word:word,
      defn:defn,
      type:type,
      example:example,
      language:language
    });
    
    return res.json(request);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getDictionary = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  const lang=req.query.lang
  try {
    const request = await Dictionary.findAll({
      attribute:["id","word","defn","type","example"],
      include:[
        {
          model:Language,
          attributes:["title"]
        }
      ],
      order: [
            ['word', 'ASC'],
        ],
      where:{"$Language.id$":lang,}
    });
    const result=request.map((reqs)=>{
      return {
        id: reqs.id,
        word: reqs.word,
        defn: reqs.defn,
        type: reqs.type,
        example: reqs.example,
        language: reqs.Language.title,
        
      }
    })
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.searchDictionary = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  const { search} = req.body;
  
  try {
    const request = await Dictionary.findAll({
      attribute:["id","word","defn","type","example"],
      include:[
        {
          model:Language,
          attributes:["title"]
        }
      ],
      where:{word: { [Op.like]: `${search}%` },},
      order: [
            ['word', 'ASC'],
        ],
    });
    const result=request.map((reqs)=>{
      return {
        id: reqs.id,
        word: reqs.word,
        defn: reqs.defn,
        type: reqs.type,
        example: reqs.example,
        language: reqs.Language.title,
        
      }
    })
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.updateDictionary = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { id,word, defn, type,example,language } = req.body;
  try {

    const request = await Dictionary.update(
      {word:word,
      defn:defn,
      type:type,
      example:example},{
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


exports.deleteDictionary = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = req.body.id;
  try {
    const request = await Dictionary.destroy({
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