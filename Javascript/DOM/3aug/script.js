const form = document.getElementById('form')
const table = document.querySelector("#table tbody");
let sr = 1;
let products = []
document.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
         form.dispatchEvent(new Event('submit'));
    }
})
class Products{
    constructor(name,category,price,quanity){
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quanity;
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name  = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quanity = form.quanity.value;

    const product = new Products(
        name , category , Number(price) , Number(quanity)
    )
    products.push(product);
    displayProduct();
    form.reset();
})
function displayProduct(){
    table.innerHTML=""
    products.forEach((product,index)=>{
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
        </tr>`;
        table.innerHTML+=row
    })
}