const cars=[]
const Car = require('../models/car');
const { ObjectId } = require('mongodb')

module.exports = {
    index: async(req, res) => {
        const cars =await Car.find()
        res.render('index', { title: 'Carstore', cars: cars });
    },
    
    viewCar:async (req, res) => {
        const car = await Car.findOne({_id: new ObjectId(req.params.id)})

        res.render('view-car', { car: car });
    },


    createCar: (req, res) => {
        res.render('create');
    },


    postCreate: async(req, res) => {

        await Car.create(req.body)
        res.redirect('/');
    },

    editCar: async(req, res) => {
        const car = await Car.findOne({_id: new ObjectId(req.params.id)})

        res.render('edit-car', { car: car });
    },


    putEditCar: async (req, res) => {
        // const car = await Car.findByIdAndUpdate(req.params.id, req.body);

        const updates = req.body
        const car = await Car.updateOne({ _id: new ObjectId(req.params.id) }, {$set: updates})

        res.send({
            success: true
        });
    },

    deleteCar: async(req, res) => { 
        // const car = await Car.findByIdAndDelete(req.params.id);
        
        const car = await Car.deleteOne({ _id: new ObjectId(req.params.id)})
        cars[car] = req.body; 
        cars.splice(car,1);
        res.send({
            success: true
        });


    }
   
}
