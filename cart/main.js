let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Cat 1',
        tag: 'Big Cat 1',
        price: 25,
        inCart: 0
    },

    {
        name: 'Cat 2',
        tag: 'Big Cat 2',
        price: 25,
        inCart: 0
    },

    {
        name: 'Cat 3',
        tag: 'Big Cat 3',
        price: 25,
        inCart: 0
    },

    {
        name: 'Cat 4',
        tag: 'Big Cat 4',
        price: 25,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
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
        console.log("Inside of SetItems functions");
        console.log("My products is", product);
        product.inCart = 1;

        let cartItems = {
            [product.tag]: product
        }
        
        localStorage.setItem("productsInCart", cartItems);
}



onLoadCartNumbers();