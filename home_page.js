validPin=1234;
//  add money operation
document.getElementById('add-money-btn')
   .addEventListener('click',function(event){
     event.preventDefault();
     const bankName=document.getElementById('bank-name').value;
     const accountNumber=document.getElementById('account-number').value;
     const addMoney=parseInt(document.getElementById('add-money').value);
     const pinNumber=parseInt(document.getElementById('pin_number').value);
    //  console.log(bankName,accountNumber,addMoney,pinNumber);

    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
      
    if(accountNumber.length<11)
    {
        alert('please enter a valid account number');
        return;
    }
    if(validPin!=pinNumber)
    {
        alert('please enter a valid pin number');
        return;
    }
    document.getElementById('available-balance').innerText=availableBalance+addMoney;
    document.getElementById('add-money').value='';
   })
   // cash out withdraw operation
document.getElementById('cash-out-money-btn')
  .addEventListener('click',function(event){
    event.preventDefault();
       const agentNumber=document.getElementById('agent-number').value;
     const withdrawMoney=parseInt(document.getElementById('cash-out-money').value);
     const pinNumber=parseInt(document.getElementById('pin-Number').value);
     const availableBalance=parseInt(document.getElementById('available-balance').innerText);

     if(agentNumber.length<11)
    {
        alert('please enter a valid agent number');
        return;
    }
    if(validPin!=pinNumber)
    {
        alert('please enter a valid pin number');
        return;
    }
    if(withdrawMoney>availableBalance)
    {
        alert("you can't cash out money");
        return;
    }
     document.getElementById('available-balance').innerText=availableBalance-withdrawMoney;
    document.getElementById('cash-out-money').value='';
    document.getElementById('pin-Number').value='';
  })

  // togoling cash out and add money

  document.getElementById('add-Money-btn')
     .addEventListener('click',function(){
         document.getElementById('Cash-Out').style.display='none';
         document.getElementById('add-Money').style.display='block';
     })
document.getElementById('Cash-Out-btn')
     .addEventListener('click',function(){
         document.getElementById('add-Money').style.display='none';
         document.getElementById('Cash-Out').style.display='block';
     })
