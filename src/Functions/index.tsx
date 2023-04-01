/* import { ethers } from "ethers";

const contractAddress = "ENDERECO_DO_CONTRATO";
const contractABI = [
  "function balanceOf(address _endereco) public view returns (uint256)",
  "function transfer(address _destinatario, uint256 _quantidade) public returns (bool)",
];

const provider = new ethers.BrowserProvider.JsonRpcProvider(
  "https://rinkeby.infura.io/v3/SEU_TOKEN_DE_API_INFURA"
);
const contractInstance = new ethers.Contract(
  contractAddress,
  contractABI,
  provider
);

const meuEndereco = "0xMEU_ENDERECO";
const destinatario = "0xENDEREÇO_DO_DESTINATARIO";
const quantidade = ethers.parseEther("1");

const meuSaldo = await contractInstance.balanceOf(meuEndereco);
console.log(meuSaldo.toString());

const transacao = await contractInstance.transfer(destinatario, quantidade);
console.log(transacao);

await transacao.wait(1);
 */