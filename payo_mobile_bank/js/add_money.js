document.getElementById('add-money-button').addEventListener('click',function(){
    // console.log('add money button clicked');

    //get the bank
    const bank=getValueFromInput('add-money-bank');
    if(bank=='Select Bank'){
        alert('Please select a bank');
        return;
    }

    //get the account no
    const accno=getValueFromInput("add-money-number");
    if(accno.length!=11){
        alert('Invalid Account Number');
        return;
    }

    //get teh amount to add
    const amount=Number(getValueFromInput('add-money-amount'));
    if(amount<0){
        alert("Amount must be greater than 0");
        return;
    }

    //get the current balance
    const balance=getBalance();
    //calculate the new balance
    const newBalance=balance+amount;
    //get the pin
    const pin=getValueFromInput('add-money-password');
    //verify
    if(pin==='1234'){
        alert(`Money added successfully from ${bank} at ${new Date()}`);
        setBalance(newBalance);


        //successful hole history te add kora 
        const history=document.getElementById('history-container');
        //create new element
        const newTransaction=document.createElement('div');
        //add innerhtml to the new div
        newTransaction.innerHTML=`
        <div class="p-5 rounded-lg bg-white" >
        Add money success from ${bank} account_no ${accno} at ${new Date()} Available balance ${newBalance}
        </div> `;
        //append to container
        history.append(newTransaction);

    }else{
        alert('Invalid Pin');
        return;
    }
    
})