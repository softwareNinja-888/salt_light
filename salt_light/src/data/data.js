const listingData = (function(){
    let churches = [
        {id:0,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:1,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:2,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:3,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:4,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:5,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:6,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:7,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:8,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:9,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:10,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'}
    ]

    let business = [
        {id:0,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:1,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:2,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:3,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:4,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:5,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:6,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:7,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:8,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:9,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:10,name:'Bliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'}
    ]

    let ministries = [
        {id:0,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:1,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:2,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:3,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:4,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:5,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:6,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:7,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:8,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:9,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:10,name:'Mliving waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'}
    ]

     let schools = [
        {id:0,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:1,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:2,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:3,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:4,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:5,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:6,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:7,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:8,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:9,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:10,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'}
    ]

    let events = [
        {id:0,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:1,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:2,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:3,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:4,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:5,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:6,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:7,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:8,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:9,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'},
        {id:10,name:'living waters',contact:'26878381356',location:'Manzini,SZ',services:'Church services and a primary and pre-schol',mission:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident dolorum autem corporis! Nulla, nobis harum numquam eos quasi repudiandae assumenda autem dolores dolorem, tempore ratione consectetur voluptas, expedita optio!'}
    ]

    return {churches,business,ministries,schools,events}

})()

const util = (function (){

    function capitilizeText(text){
        return text.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    return {capitilizeText}
})()

export {listingData,util}