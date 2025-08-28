validPin=1234;
//  add money operation

//  function to get int input value

 function intInputValue(id){
    const valueInt=parseInt(document.getElementById(id).value);
    return valueInt;
 }

 // function to get input value

 function inputValue(id){
     const valueInput=document.getElementById(id).value;
     return valueInput;
 }

//  function to get inner text
 
function getInnerText(id){
    const innerText=document.getElementById(id).innerText;
    return innerText;
}

// function for toggoling
function getToggle(id){
     const forms=document.getElementsByClassName('form');
         for(const form of forms)
         {
              form.style.display='none';
         }
         document.getElementById(id).style.display='block';
}
//function to toggle btn color
function btntoggle(id){
    const allOperationalbtns=document.getElementsByClassName('same-btn-class');
        for(const allOperationalbtn of allOperationalbtns)
        {
            allOperationalbtn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        allOperationalbtn.classList.add("border-gray-200")
        }
        document.getElementById(id).classList.remove('border-gray-200');
       document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
}




// operation for add money

document.getElementById('add-money-btn')
   .addEventListener('click',function(event){
     event.preventDefault();
     const bankName=inputValue('bank-name');
     const accountNumber=inputValue('account-number');
     const addMoney=intInputValue('add-money');
     const pinNumber=intInputValue('pin_number');
    //  console.log(bankName,accountNumber,addMoney,pinNumber);

    const availableBalance=parseInt(getInnerText('available-balance'));
      
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
    if (isNaN(addMoney) || addMoney === "") {
    alert("Input valid amount");
    return;
    }
     document.getElementById('available-balance').innerText=availableBalance+addMoney;
    document.getElementById('add-money').value='';
   })
   // cash out withdraw operation
document.getElementById('cash-out-money-btn')
  .addEventListener('click',function(event){
    event.preventDefault();
       const agentNumber=inputValue('agent-number');
     const withdrawMoney=intInputValue('cash-out-money');
     const pinNumber=intInputValue('pin-Number');
     const availableBalance=intInputValue('available-balance');

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
    if (isNaN(withdrawMoney) || withdrawMoney === "") {
    alert("Input valid amount");
    return;
    }
     document.getElementById('available-balance').innerText=availableBalance-withdrawMoney;
    document.getElementById('cash-out-money').value='';
    document.getElementById('pin-Number').value='';
  })


  // transfer money operation
      document.getElementById('send-money-btn')
         .addEventListener('click',function(event){
            event.preventDefault();
            const agentNumber=inputValue('user-account-number');
     const withdrawMoney=intInputValue('send-money');
     const pinNumber=intInputValue('pin-number-for-send-money');
     const availableBalance=parseInt(getInnerText('available-balance'));

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
        alert("you can't send out money");
        return;
    }
    if (isNaN(withdrawMoney) || withdrawMoney === "") {
    alert("Input valid amount");
    return;
    }
     document.getElementById('available-balance').innerText=availableBalance-withdrawMoney;
    document.getElementById('send-money').value='';
    document.getElementById('pin-number-for-send-money').value='';
         })

//  get Bonous  operation

const bonusCoupn=54321;
document.getElementById('get-bonus-btn')
   .addEventListener('click',function(event){
    event.preventDefault();
    const inputedCoupon=intInputValue('coupon-number');

    if(inputedCoupon!=bonusCoupn){
        alert('coupon number is wrong');
        return;
    }
    const availableBalance=parseInt(getInnerText('available-balance'));

      document.getElementById('available-balance').innerText=availableBalance+500;
      document.getElementById('coupon-number').value='';
   })

// pay bill operation
document.getElementById('pay-bill-btn')
.addEventListener('click',function(event){
    event.preventDefault();

    const bankName=inputValue('bank-to-pay');
     const accountNumber=inputValue('account-number-pay-bill');
     const payMoney=intInputValue('add-money-to-pay');
     const pinNumber=intInputValue('pin_number_to_pay');
    //  console.log(bankName,accountNumber,addMoney,pinNumber);

    const availableBalance=parseInt(getInnerText('available-balance'));
      
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
    if (isNaN(payMoney) || payMoney === "") {
    alert("Input valid amount");
    return;
    }
     document.getElementById('available-balance').innerText=availableBalance-payMoney;
    document.getElementById('add-money-to-pay').value='';
     document.getElementById('pin_number_to_pay').value='';
})





  // togoling 

   document.getElementById('add-Money-btn')
     .addEventListener('click',function(){
        getToggle('add-Money');
        btntoggle('add-Money-btn')
     })
     document.getElementById('Cash-Out-btn')
     .addEventListener('click',function(){
        getToggle('Cash-Out');
        btntoggle('Cash-Out-btn')
     })
    document.getElementById('transfer-Money-btn')
     .addEventListener('click',function(){
        getToggle('Transfer-Money');
        btntoggle('transfer-Money-btn')
     })
     document.getElementById('Get-Bonus-btn')
     .addEventListener('click',function(){
        getToggle('Get-Bonous');
       btntoggle('Get-Bonus-btn')
     })
     document.getElementById('pay-Bill-btn')
     .addEventListener('click',function(){
        getToggle('pay-bill');
           btntoggle('pay-Bill-btn')
     })
     document.getElementById('transaction-history-btn')
     .addEventListener('click',function(){
        getToggle('transcation-history');
         btntoggle('transaction-history-btn')
     })
    
