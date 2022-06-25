module.exports= {
    index:(req,res) =>{
        const users =[
            {
                name:'John',
                last_name:'Don',
                ssn:87756445478
            },
            {
                name:'Vanessa',
                last_name:'Patrick',
                ssn:26345675578
            },
            {
                name:'Brad',
                last_name:'Willis',
                ssn:25623463378
            },
            {
                name:'Mellisa',
                last_name:'Paul',
                ssn:35357727789
            },
        ];

        res.render('users',{title:'Hello', users:users})
    },

    
}