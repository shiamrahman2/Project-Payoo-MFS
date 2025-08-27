document.getElementById('add-money-btn')
   .addEventListener('click',function(event){
     event.preventDefault();
     const bankName=document.getElementById('bank-name').value;
     const accountNumber=document.getElementById('account-number').value;
     const addMoney=parseInt(document.getElementById('add-money').value);
     const pinNumber=document.getElementById('pin_number').value;
    //  console.log(bankName,accountNumber,addMoney,pinNumber);

    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
      
    document.getElementById('available-balance').innerText=availableBalance+addMoney;
    document.getElementById('add-money').value='';
   })