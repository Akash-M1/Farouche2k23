exports.homePageRender = (req,res) =>{
    return res.render('home',{
        title:"Home Page- Farouche"
    });
}

exports.allPageRender = (req,res)=>{
    return res.render('pageNotFound',{
        title:"Error Page- Farouche"
    });
}