const routes = require("express").Router();
const {createDictionary,getDictionary,updateDictionary,deleteDictionary,searchDictionary}=require('../controllers/dictionaryController')
const {createLanguage,getLanguage,updateLanguage,deleteLanguage,searchLanguage}=require('../controllers/languageController')


routes.post('/dictionary/add',createDictionary)
routes.post('/dictionary/update',updateDictionary)
routes.post('/dictionary/delete',deleteDictionary)
routes.post('/dictionary/search',searchDictionary)

routes.get('/dictionary/get',getDictionary)


routes.post('/language/create',createLanguage)
routes.post('/language/update',updateLanguage)
routes.post('/language/delete',deleteLanguage)
routes.get('/language/get',getLanguage)
routes.post('/language/search',searchLanguage)


module.exports = routes;
