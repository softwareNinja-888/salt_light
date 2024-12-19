// FUNCTIONS

const util = (function (){

    function capitilizeText(text){
        return text.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    function createChurch(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }
    
    function createBusiness(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }
    function createMinistries(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }
    function createEvents(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }function createSchools(id,name,contact,location,services,mission){
        return {
            id,
            name,
            contact,
            location,
            services,
            mission,
        }
    }

    return {capitilizeText,createBusiness,createChurch,createEvents,createMinistries,createSchools}
})()


// DATA :
const listingData = (function(){
    let churches = [
        util.createChurch(0,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createChurch(1,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createChurch(2,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createChurch(3,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
    ]

    let business = [
        util.createBusiness(0,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createBusiness(1,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createBusiness(2,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createBusiness(3,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
    ]

    let ministries = [
        util.createMinistries(0,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createMinistries(1,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createMinistries(2,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createMinistries(3,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
    ]

     let schools = [
        util.createSchools(0,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createSchools(1,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createSchools(2,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createSchools(3,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
    ]

    let events = [
        util.createEvents(0,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createEvents(1,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createEvents(2,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
        util.createEvents(3,'new living waters','26878381356','London,UK','Church services and wonderfull worship','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis '),
    ]

    return {churches,business,ministries,schools,events}

})()



export {listingData,util}