let stocks = {
    Fruits:['strawberry', 'grapes', 'banana', 'apple'],
    ligquid: ['water', 'ice'],
    holder:['cone', 'cup', 'stick'],
    toppings:['chocolate', 'peanuts']
};

let is_shop_open = false;

function time(ms){

    return new Promise( (resolve, reject)=>{

        if(is_shop_open){
            setTimeout(()=>{
                resolve()
            }, ms);
        }else{

            reject(console.log('Uh no, shop is closed!'))
        }
    } )
}

async function kitchen() {
    try {
        await time(0000)
        console.log(`which flavour would you like?`)

        await time(1000)
        console.log(`${stocks.Fruits[0]} is selected`)


        await time(1000)
        console.log('start the production')
        
        await time(1000)
        console.log('water selected.')

        await time(2000)
        console.log('ice cream served')

    } catch (error) {
        console.log('customer left.')
    } finally{
        console.log('shop closed')
    }
}

kitchen()