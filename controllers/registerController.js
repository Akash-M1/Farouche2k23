const Cultural = require('../models/cultural');
const Sports = require('../models/sports');
const Register = require('../models/register');

exports.sportRegisterPageRender = async (req,res)=>{
    try {
        const sportparam = req.params.sport;
        const sport = await Sports.findOne({name:sportparam});
        if(sport){
            const spo = JSON.parse(JSON.stringify(sport));
            spo.title="Register - Cultural"
            spo.route = "sport"
            return res.render('register',spo);
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

exports.culturalRegisterPageRender = async (req,res)=>{
    try {
        const culturalparam = req.params.cultural;
        const cultural = await Cultural.findOne({name:culturalparam});
        if(cultural){
            const cul = JSON.parse(JSON.stringify(cultural));
            cul.title="Register - Cultural"
            cul.route = "cultural"
            return res.render('register',cul);
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



exports.createRegistration = async (req,res)=>{
    try {
        const regex = /^[A-Za-z0-9._%+-]+@bmsce\.ac\.in$/;
        if(!regex.test(req.body.email)){
            req.flash('error','Email Should be of BMSCE');
            return res.redirect('back');
        }
        if(req.body.team_members1){
            req.body.team_members = req.body.team_members1.split(',');
        }
        if(req.body.team_members1 && req.body.team_members.length != req.body.team_size){
            req.flash('error','Registration Error - Team Size should be same as that of Entered Players');
            return res.redirect('back');
        }
        if(req.body.team_members1 && !await teamSizeCheck(req.query.event_type,req.body)){
            req.flash('error','Registration Error - Team Size Against Rules');
            return res.redirect('back');
        }
        const register = await Register.create(req.body);
        req.flash('success','Successfull Registration');
        return res.redirect('/');
    } catch (error) {
        req.flash('error','Error in Registration');
        console.log("Error",error);
        return res.redirect('back');
    }
}


async function teamSizeCheck(event_type,rbody){
    if(event_type=='sport'){
        const sport = await Sports.findOne({name:rbody.event});
        if(sport.team_size == rbody.team_size){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        const cultural = await Cultural.findOne({name:rbody.event});
        if(isNaN(cultural.team_size)){
            const sizeRange = cultural.team_size.split('-');
            if(rbody.team_size >= sizeRange[0] && rbody.team_size<=sizeRange[1]){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            if(cultural.team_size == rbody.team_size){
                return true;
            }
            else{
                return false;
            }
        }
    }
}