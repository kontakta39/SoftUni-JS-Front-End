function solve() {
   const textarea = document.querySelector('textarea');
   const buttons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');
   let list = [];
   let sum = 0;

   for(let button of buttons) {
       button.addEventListener('click', function () {
           const product = this.parentElement.parentElement;
           const productName = product.querySelector('.product-title').textContent;
           const productPrice = Number(product.querySelector('.product-line-price').textContent);
           
           if (!list.includes(productName)) {
            list.push(productName);
           }

           textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
           sum += productPrice;
       });
   };

   checkoutButton.addEventListener('click', function () {
       checkoutButton.disabled = true;

       for (const button of buttons) {
         button.disabled = true;
       }

       document.querySelector('textarea').value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`;
   });
}