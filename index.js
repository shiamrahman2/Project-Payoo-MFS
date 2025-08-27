document.getElementById('loginButton')
  .addEventListener('click',function(event){
    event.preventDefault();
    // console.log('button click');
    const mobileNumber=12345678910;
    const pinNumber=1234;
    const inputMobileNumber=parseInt(document.getElementById('mobile-number').value);
    const inputPinNumber=parseInt(document.getElementById('pin-number').value);
    // console.log(inputMobileNumber,inputPinNumber);

    if(mobileNumber===inputMobileNumber && pinNumber===inputPinNumber)
    {
        window.location.href="./home_page.html"
    }
    else
    {
        alert('Invalid Input');
    }
  })