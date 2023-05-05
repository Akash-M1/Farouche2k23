const Cultural = require('../models/cultural');


exports.culturalTypeRender = async (req,res)=>{
    try {
        const culturalType = await Cultural.distinct('type');
        return res.render('type_tempelate',{
            title:"Farouche - Events",
            array:culturalType,
            route:"cultural"
        });
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    } 
}

exports.culturalRender = async (req,res)=>{
    try {
        const type = req.params.type;
        const cultural = await Cultural.find({type:type});
        if(cultural){
            return res.render('events',{
                title:"Farouche - Events",
                array:cultural,
                route:"cultural"
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
