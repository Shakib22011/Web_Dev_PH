document.getElementById('cashout-button').addEventListener('click',function(){
    // console.log('Cashout button clicked');

    //get ath agent number
    // const agentNumber=document.getElementById('cashout-number').value;
    const agentNumber=getValueFromInput('cashout-number');//from the machine
    // console.log(agentNumber);
    if(agentNumber.length!=11){
        alert('Please enter a valid agent number');
        return;
    }
    
    //get the amount
    // const amount=document.getElementById('cashout-amount').value;
    const amount=getValueFromInput('cashout-amount');
    // console.log(amount);

    //get the balance
    // const balanceAmount=document.getElementById('balance');
    // const balance=balanceAmount.innerText;
    const balance=getBalance();
    // console.log(balance);

    //calculate the new balance
    // const newbalance=Number(balance)-Number(amount);
    const newbalance=balance-Number(amount);

    //compare the amount and the balance
    if(newbalance<0){
        alert("Insufficient balance or invalid amount!");
        return;
    }

    //get the pin 
    // const pin=document.getElementById('cashout-password').value;
    const pin=getValueFromInput('cashout-password');
    // console.log(pin);
    
    //verify
    if(pin==='1234'){
        alert('cashout successful!');
        // balanceAmount.innerText=newbalance;
        // document.getElementById('balance').innerText=newbalance;
        setBalance(newbalance);

         //successful hole history te add kora 
        const history=document.getElementById('history-container');
        //create new element
        const newTransaction=document.createElement('div');
        //add innerhtml to the new div
        newTransaction.innerHTML=`
        <div class="p-5 rounded-lg bg-white" >
        Cashout successful to ${agentNumber} amount ${amount} at ${new Date()} Available balance ${newbalance}
        </div> `;
        //append to container
        history.append(newTransaction);
    }
    else{
        alert('Invalid pin!');
        return;
    }
})