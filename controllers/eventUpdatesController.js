const EventUpdates = require('../models/event_updates');

exports.eventUpdatesTypeRender = async (req,res)=>{
    try {
        const eventStatusType = await EventUpdates.distinct('status'); 
        return res.render('type_tempelate',{
            title:"Farouche - Event Updates",
            array:eventStatusType,
            route:"event-updates"
        });
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

exports.eventUpdatesStatusRender = async (req,res)=>{
    try {
        const status = req.params.status;
        const eventTypes = ['Sport','Cultural']
        if(eventTypes && eventTypes.length>0){
            return res.render('type_tempelate',{
                title:"Farouche - Event Updates",
                array:eventTypes,
                route:`event-updates/${status}`
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

exports.eventUpdatesRender = async (req,res)=>{
    try {
        if((await EventUpdates.distinct('status')).includes(req.params.status)  && (await EventUpdates.distinct('type')).includes(req.params.type)){
            const events = await EventUpdates.find({status:req.params.status,type:req.params.type});
            if(events && events.length>0){
                return res.render('eventUpdates',{
                    title:"Farouche - Event Updates",
                    array:events,
                    heading:[req.params.type,req.params.status]
                })
            }
            else{
                return res.render('eventUpdates',{
                    title:"Farouche - Event Updates",
                    array:events,
                    comingSoon:true,
                    heading:[req.params.type,req.params.status]
                })
            }
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