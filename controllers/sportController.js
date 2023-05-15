const Sports = require('../models/sports');


exports.sportsTypeRender = async (req,res)=>{
    try {
        const sportsType = await Sports.distinct('type');
        return res.render('type_tempelate',{
            title:"Farouche - Events",
            array:sportsType,
            route:"sports"
        });
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

exports.sportsRender = async (req,res)=>{
    try {
        const type = req.params.type;
        const sports = await Sports.find({type:type});
        if(sports.length>0){
            return res.render('events',{
                title:"Farouche - Events",
                array:sports,
                route:"sports"
            });
        }
        else{
            return res.render('pageNotFound',{
                title:"Error Page- Farouche"
            });
        }
        
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }   
}