const Hero = require('../models/hero.model');



const create = (req, res)=>{

    let data = req.body;
    let hero = new Hero(data);
    hero.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            res.send(err);
        })
}

const list = (req, res)=>{
    Hero.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            res.send(err);
        })
}

const byId = (req, res)=>{
    Hero.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

const update = (req, res)=>{
    let data = req.body;
    Hero.findByIdAndUpdate(req.params.id, data)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

const deleteHero= (req, res)=>{
    Hero.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

module.exports = {
    create,
    list,
    byId,
    update,
    deleteHero
}