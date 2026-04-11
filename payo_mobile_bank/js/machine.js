//get value from input field
function getValueFromInput(id){
    return document.getElementById(id).value;
}

//get the balance
function getBalance(){
    return Number(document.getElementById('balance').innerText);
}

//set the new balance
function setBalance(newBalance){
    document.getElementById('balance').innerText=newBalance;
}

//show specific field
function showOnly(id){
    //get all the sections
    const addmoney=document.getElementById('add-money');
    const cashout=document.getElementById('cashout');
    const history=document.getElementById('history');

    //hide all the sections
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');

    //show the specific one
    document.getElementById(id).classList.remove('hidden');
}