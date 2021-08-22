// memory event

const extraMemoryCost = document.getElementById('extra-memory');

document.getElementById('8gb-memory').addEventListener('click', function(){   
    
    extraMemoryCost.innerText = '0'; 
    updateTotal();      
});

document.getElementById('16gb-memory').addEventListener('click', function(){   
    
    extraMemoryCost.innerText = '180' ; 
    updateTotal();  
});
// storage event

const extraStorageCost = document.getElementById('extra-storage');

document.getElementById('256gb-storage').addEventListener('click', function(){
    
    extraStorageCost.innerText = '0';
    updateTotal();
});

document.getElementById('512gb-storage').addEventListener('click', function(){
    
   extraStorageCost.innerText = '100';
   updateTotal();
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    
    extraStorageCost.innerText = '180';
    updateTotal();
});

// choose delivery event

const deliveryCost = document.getElementById('delivery-charge');

document.getElementById('free-shipping').addEventListener('click', function(){
   
    deliveryCost.innerText = '0';
    updateTotal();
});
 
document.getElementById('on-time-shipping').addEventListener('click', function(){
    
    deliveryCost.innerText = '20';
    updateTotal();
});

// best price

const bestPrice = document.getElementById('best-price');

// total

const total = document.getElementById('total-price') ;

const promoTotalPrice = document.getElementById('promo-total');

// update total

function updateTotal(){
    const totalExtraMemoryPrice = parseInt(extraMemoryCost.innerText);
    const fixedPrice = parseInt(bestPrice.innerText);
    const grandMemoryTotalPrice = totalExtraMemoryPrice + fixedPrice;
    total.innerText = grandMemoryTotalPrice;   

    const totalExtraStoragePrice = parseInt(extraStorageCost.innerText);
    const previousStorageTotalPrice = parseInt(total.innerText);
    const grandStorageTotalPrice = totalExtraStoragePrice + previousStorageTotalPrice;
    total.innerText = grandStorageTotalPrice;

    const totalDeliveryPrice = parseInt(deliveryCost.innerText);
    const previousDeliveryTotalPrice = parseInt(total.innerText);
    const grandDeliveryTotalPrice = totalDeliveryPrice + previousDeliveryTotalPrice;
    total.innerText = grandDeliveryTotalPrice;

    const grandPromoTotalPrice = parseInt(total.innerText);
    promoTotalPrice.innerText = grandPromoTotalPrice;
}

//  Add promo code

document.getElementById('applyBtn').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;
    promoInput.value = '';
    if(promoCode == 'stevekaku'){
        const promoMainTotal  = document.getElementById('promo-total');
        const promoPreviousTotal = parseInt(promoMainTotal.innerText);
        const discountPrice = parseFloat((promoPreviousTotal) * (20/100));
        const finalDiscountPrice = promoPreviousTotal - discountPrice;
        promoTotalPrice.innerText = finalDiscountPrice;
        applyBtn.disabled = true;
    }
});