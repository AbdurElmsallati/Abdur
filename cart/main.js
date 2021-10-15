let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Cat 1',
        tag: 'Big Cat 1',
        price: 10,
        inCart: 0
    },

    {
        name: 'Cat 2',
        tag: 'Big Cat 2',
        price: 20,
        inCart: 0
    },

    {
        name: 'Cat 3',
        tag: 'Big Cat 3',
        price: 30,
        inCart: 0
    },

    {
        name: 'Cat 4',
        tag: 'Big Cat 4',
        price: 40,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
    
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if( productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }    
    
    setItems(product);
}

function setItems(product) {
       let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        

        if(cartItems != null){
            
            if(cartItems[product.tag] == undefined){
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart += 1;
        } else {
            product.inCart = 1;
            cartItems = {
            [product.tag]: product
        }
       
        }
        
        localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
}

function totalCost (product){ 
    // console.log("The price of the dog", products.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost );

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
 
localStorage.setItem("totalCost", product.price);

}



onLoadCartNumbers();