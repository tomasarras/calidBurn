document.addEventListener("DOMContentLoaded", async () => {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();

    // Esta es la direccion del contrato que esta en la blockchain de ethereum
    const contractAddress = "0x1e3f3bCd18444E80A5F8942049EeAeE1C05205A0";
    const abi = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amount",
                    "type": "int256"
                }
            ],
            "name": "incrementBalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_firstName",
                    "type": "string"
                },
                {
                    "name": "_lastName",
                    "type": "string"
                },
                {
                    "name": "amount",
                    "type": "int256"
                }
            ],
            "name": "setData",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_firstName",
                    "type": "string"
                }
            ],
            "name": "setFirstName",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_lastName",
                    "type": "string"
                }
            ],
            "name": "setLastName",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "int256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getFirstName",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getLastName",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const contract = new web3.eth.Contract(abi, contractAddress);

    const btnBuy = document.querySelector("#btn-buy");
    const btnShowFirstName = document.querySelector("#btn-show-firstName");
    const btnShowLastName = document.querySelector("#btn-show-lastName")
    const btnShowBalance = document.querySelector("#btn-show-balance")
    
    btnBuy.addEventListener("click", uploadData);
    btnShowFirstName.addEventListener("click", showFirstName);
    btnShowLastName.addEventListener("click", showLastName)
    btnShowBalance.addEventListener("click", showBalance)

    async function uploadData() {
        const accountAddress = await getAccount(); // Aca le pido con la extension de metamask su direccion publica para hacer una transaccion
        setLoading(true);
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const amount = parseInt(document.querySelector("#amount").value);
        const response = await contract.methods.setData(firstName, lastName, amount).send( { from : accountAddress } );

        onValidateTransaction(response);
        setLoading(false);
    }

    async function showFirstName() {
        const firstName = await contract.methods.getFirstName().call();
        const span = document.querySelector("#span-firstName");
        span.innerHTML = firstName;
    }
    
    async function showLastName() {
        const lastName = await contract.methods.getLastName().call();
        const span = document.querySelector("#span-lastName");
        span.innerHTML = lastName;
    }

    async function showBalance() {
        const balance = await contract.methods.getBalance().call();
        const span = document.querySelector("#span-balance");
        span.innerHTML = balance;
    }

    async function getAccount() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
    }

    function setLoading(loading) {
        const loadingMessage = document.querySelector("#span-loading");
        const loader = document.querySelector("#loader");
        loadingMessage.hidden = !loading;
        loader.hidden = !loading;
    }

    function onValidateTransaction(response) {
        console.log(response);
        const transactionHash = response.transactionHash;
        const link = `https://ropsten.etherscan.io/tx/${transactionHash}`;
        const spanLink = document.querySelector("#span-finish-transaction");
        const ancor = document.querySelector("#transaction-link");
        spanLink.hidden = false;
        ancor.hidden = false;
        ancor.setAttribute("href", link);
    }
});