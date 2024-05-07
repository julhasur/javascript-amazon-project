export  let cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
}
];


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

   export function removeFromCart(productId){
        const newCart=[];

        cart.forEach((cartItem)=> {
            if (cartItem.productId !==productId){
              newCart.push(cartItem);  
            }
        });
        cart=newCart;
    }