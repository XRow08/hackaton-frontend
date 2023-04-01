import Web3 from "web3";
import { newKit, newKitFromWeb3 } from "@celo/contractkit";

export async function addNetwork() {
  interface CustomWindow extends Window {
    ethereum?: any;
  }
  const customWindow = window as CustomWindow;

  if (customWindow.ethereum) {
    try {
      const accounts = await customWindow.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
    } catch (err) {
      console.log(err);
    }
    try {
      await customWindow.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0xAEF3",
            chainName: "Celo native asset",
            nativeCurrency: {
              name: "Celo native asset",
              symbol: "CELO",
              decimals: 18,
            },
            blockExplorerUrls: ["https://testnet.bscscan.com"],
            rpcUrl: "wss://alfajores-forno.celo-testnet.org/ws",
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      await customWindow.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xAEF3",
            chainName: "Celo native asset",
            nativeCurrency: {
              name: "Celo native asset",
              symbol: "CELO",
              decimals: 18,
            },
            blockExplorerUrls: ["https://testnet.bscscan.com"],
            rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
          },
        ],
      });
    } catch (addError) {
      console.log(addError);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    alert("MetaMask is not installed.");
  }
}