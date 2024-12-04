const express= require('express');
const router= express.Router();
const {create, list,byId,update,deleteHero}=require('../controllers/hero.controller');

router.post('/ajout',create)
router.get('/list',list)
router.get('/byId/:id',byId)
router.put('/update/:id',update)
router.delete('/delete/:id',deleteHero)







module.exports=router;