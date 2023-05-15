const Roles = require('../models/roles');

exports.aboutUsRender = async (req,res)=>{
    const role = await Roles.distinct('role');
    swap(role,6,7);
    return res.render('type_tempelate',{
        title:"Farouche - About Us",
        array:role,
        route:"about-us"
    })
}

exports.rolesPageRender = async (req,res)=>{
    const roleType = req.params.role;
    if((await Roles.distinct('role')).includes(roleType)){
        const aboutUs = await Roles.find({role:roleType});
        return res.render('aboutus',{
            title:"Farouche - About US",
            array:aboutUs,
            heading:roleType
        });
    }
    else{
        return res.render('pageNotFound',{
            title:"Error Page- Farouche"
        });
    }
}

function swap(role,i,j){
    if(i==j){
        return;
    }
    let temp = role[i];
    role[i] = role[j];
    role[j] = temp;
}
