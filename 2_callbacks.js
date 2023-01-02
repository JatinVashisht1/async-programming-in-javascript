// we can define/form relationship between two functions using callbacks


function one(call_two){
    console.log('Step 1 complete. Please call step 2')
    call_two()
}

function two(){
    console.log('Step 2')
}

// two()
one(two)
