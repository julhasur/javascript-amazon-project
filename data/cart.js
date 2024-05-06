export  const cart=[];


export function addtocart(productId){

    //let us loop through the cart so the button knows what and how to add to the cart and if the item is already in the cart and what action to do if it is , 
    let matchingItem;
   
        cart.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });
   
        //we can just write matching here bcz its a truthy item
        if(matchingItem){
            matchingItem.quantity+=1
        }else{
            cart.push({
                productId:productId,
                quantity:1
             });
           }
    
       
    };