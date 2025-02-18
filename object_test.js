class Account {
    balance = 0;
    overdraft = 0;
    totalDeposits = 0;
    totalWithdrawals = 0;
    transactions = [];

    constructor(name, address){
        this.name = name;
        this.address = address;
    }

}

function newAccountCreator(name, address) {
    const accountCreated = new Account(name, address);
    console.log(JSON.stringify(accountCreated));
    return accountCreated;
}

async function createAccountInDatabase(accountCreated){
    const url = "https://localhost:5000/products.json";
    const serverResponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify(accountCreated),
      });
    const json = await serverResponse.json();
    console.log(json);
}

// [], "Mathieu Poirier", "3157 Oakwood", 0, 0, 0, 0