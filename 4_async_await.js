let stocks = {
    Fruits:['strawberry', 'grapes', 'banana', 'apple'],
    ligquid: ['water', 'ice'],
    holder:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanuts']
};

let is_shop_open = true;

// let order = ()=>{

//     return new Promise( (resolve, reject)=>{
//         if(is_shop_open){

//             resolve();
//         }else{

//             reject();
//         }
//     } )
// }

async function order () {
    try {
        await abc()
    } catch (error) {
        console.log(`abc doesn't exist, ${error}`)
    } finally{
        console.log('runs code anyway')
    }
}

// chaining can also be done using async await!
order()
.then( ()=>console.log('write anything here') )

