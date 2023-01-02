let stocks = {
    Fruits:['strawberry', 'grapes', 'banana', 'apple'],
    ligquid: ['water', 'ice'],
    holder:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanuts']
};

let is_shop_open = false;


let order = (time, work)=>{
    
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(() => {
                resolve(work())
            }, time);
        }else{
            reject(console.log('our shop is closed.'))
        }
    } )
}

order(
    2000, () => console.log(`${stocks.Fruits[0]} was selected.`)
)
.then( ()=>{

    return order(0000, ()=>console.log('production has started.'))
} )
.then( ()=>{
    
    return order(2000, ()=>console.log('Fruits were chopped.'))
} )
.then( ()=>{

    return order(1000, ()=>console.log('Added water and ice.'))
} )
.then( ()=>{

    return order(1000, ()=>console.log('Machine started.'))
} )
.then( ()=>{

    return order (2000, ()=>console.log(`Selected ${stocks.holder[0]}.`))
} )
.then( ()=>{

    return order(3000, ()=>console.log(`added ${stocks.toppings[0]} as topping.`))
} )
.then( ()=>{

    return order(2000, ()=>console.log('here is your ice-cream!'))
} )
.catch( (err)=>{
    console.log(`customer left`)
} )
.finally( ()=>{
    console.log(`served 100 customers today`)
} )