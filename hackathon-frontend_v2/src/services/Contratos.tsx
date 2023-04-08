import { ethers } from "ethers";

let userAddress;

//contratos
let usdtContract = "0xdd8042E472FbB218AE68C04cf8418309CD41C740";
let marketplaceContract = "0x89599F0e18f7003AF81C8b4F5b9B86929EBc5164";
let factoryContract = "0x3C97C9f44987930d940d29325A6333D1a2bFD9fA";

//funçoes

//usd
const increaseAllowanceFunction =
  "function increaseAllowance(address spender, uint256 addedValue) public returns (bool)";

//1155
const setApprovalForAllFunction =
  "function setApprovalForAll(address operator, bool approved) external";

//factory
const createEventFunction =
  "function createEvent(address owner_, string memory name_, string memory symbol_, string memory contractURI_) external returns(address)";
const viewEventInventoryFunction =
  "function viewEventInventory(address owner_) public view returns(address[] memory)";
const viewCreatorsFunction =
  "function viewCreators() public view returns(address[] memory)";

//evento
const createTicketFunction =
  "function createTicket(uint totalSupply, string memory uri, uint price, bool benificent, string memory name_)external returns(uint)";
const viewOwnerFunction = "function viewOwner() public view returns(address)";
const viewTicketStatusFunction =
  "function viewTicketStatus(uint id_) public view returns(uint totalSupply, uint ticketPrice, bool isBenificent, string memory nameTicket)";
const viewPrizePoolFunction =
  "function viewPrizePool() public view returns(uint prizePercentage, uint amountEarned,  uint totalTickets)";
const openSellFunction = "function openSell() external";
const openPrizeFunction = "function openPrize() external";
const reedemPrizeFunction = "function reedemPrize(uint id_) external";
const reedemPrizeRoyaltsFunction = "function reedemPrizeRoyalts() external";
const viewPrizeControlFunction =
  "function viewPrizeControl() public view returns(bool)";
const viewSellControlFunction =
  "function viewSellControl() public view returns(bool)";
const setContractURIFunction =
  "function setContractURI(string memory _uri) public";
const contractURIFunction =
  "function contractURI() public view returns (string memory)";
const uriFunction =
  "function uri(uint256 _id) public view override returns (string memory)";
const changeTicketPriceFunction =
  "function changeTicketPrice(uint id_, uint price_) external";

const viewLastIdFunction = "function viewLastId() public view returns(uint)";

interface CustomWindow extends Window {
  ethereum?: any;
}
const customWindow = window as CustomWindow;

//marketplcae
const buyTicketFunction =
  "function buyTicket(address collection_, uint id_, uint amount_)external";

/* export async function login() {
  let accounts = await ethereum.requires({ method: "eth_requestAccounts" });
  userAddress = accounts[0];
} */

export function getUserProvider() {
  if (!customWindow.ethereum) {
    console.log("!metamask");
  }
  const provider = new ethers.providers.Web3Provider(customWindow.ethereum);

  return provider;
}

export function getProvider() {
  let url = "https://alfajores-forno.celo-testnet.org";

  const provider = new ethers.providers.JsonRpcProvider(url);

  return provider;
}

export async function verUltimoId(contract: any) {
  const provider = getProvider();
  const contract1 = new ethers.Contract(
    contract,
    [viewLastIdFunction],
    provider
  );
  const tx = await contract1.viewLastId();
  return tx;
}

export async function permissaoUsd(spender: any, amount: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    usdtContract,
    [increaseAllowanceFunction],
    provider
  );
  const contractSigner = contract.connect(signer);
  console.log(contractSigner);
  const amount1 = ethers.utils.parseUnits(amount);
  const tx = await contractSigner.increaseAllowance(
    spender,
    amount1.toString()
  );
  await tx.wait(1);
  return tx;
}

export async function permissao1155(contract: any, spender: any, bool: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [setApprovalForAllFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.setApprovalForAll(spender, bool);
  await tx.wait(1);
  return tx;
}

//funcoes do factory

//dono dar permissao no contrato do evento para o marketplace permissao1155()
//dono dar allowance alto no usdt ao contrato do evento para podermos sacar os tokens depois
export async function criarEvento(
  owner: any,
  name: any,
  symbol: any,
  contractURI: any
) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    factoryContract,
    [createEventFunction],
    provider
  );
  const contractSigner = contract.connect(signer);
  permissaoUsd(
    factoryContract,
    Number(ethers.utils.parseUnits("10")).toString()
  );
  const tx = await contractSigner.createEvent(owner, name, symbol, contractURI);
  await tx.wait(1);
  console.log(tx, "AOSDIandosiasndoasdasDIASOASNDASDADADIOASD");
  return tx;
}

export async function verInventarioDeEventos(address: any) {
  const provider = getProvider();
  const contract = new ethers.Contract(
    factoryContract,
    [viewEventInventoryFunction],
    provider
  );

  const tx = await contract.viewEventInventory(address);
  return tx;
}

export async function verCriadores() {
  const provider = getProvider();
  const contract = new ethers.Contract(
    factoryContract,
    [viewCreatorsFunction],
    provider
  );

  const tx = await contract.viewCreators();

  console.log(tx);
  return tx;
}

//funções do evento

export async function createTicket(
  eventContract: any,
  totalSupply: any,
  uri: any,
  price: any,
  benificent: any,
  nome: any
) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    eventContract,
    [createTicketFunction],
    provider
  );
  const contractSigner = contract.connect(signer);

  const tx = await contractSigner.createTicket(
    totalSupply,
    uri,
    ethers.utils.parseUnits(price),
    benificent,
    nome
  );
  console.log(tx);
  return tx;
}

export async function mudarValorDoTicket(
  eventContract: any,
  id: any,
  price: any
) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    eventContract,
    [changeTicketPriceFunction],
    provider
  );
  const contractSigner = contract.connect(signer);

  const tx = await contractSigner.changeTicketPrice(
    id,
    ethers.utils.parseUnits(price)
  );

  console.log(tx);
  return tx;
}

export async function verDonoDaColecao(contract: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [viewOwnerFunction],
    provider
  );

  const tx = await contract1.viewOwner();

  console.log(tx);
  return tx;
}

export async function verStatusDoTicket(contract: any, nftId: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [viewTicketStatusFunction],
    provider
  );

  const tx = await contract1.viewTicketStatus(nftId);

  console.log(tx);
  return tx; // uint totalSupply, uint ticketPrice, bool isBenificent
}

export async function verPoolDeRecompensa(contract: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [viewPrizePoolFunction],
    provider
  );

  const tx = await contract1.viewPrizePool();

  console.log(tx);
  return tx; // uint prizePercentage, uint amountEarned,  uint totalTickets
}

export async function abrirParaVenda(contract: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(contract, [openSellFunction], provider);
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.openSell();

  console.log(tx);
  return tx;
}

export async function abrirSaqueDeRecompensas(contract: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [openPrizeFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.openPrize();

  console.log(tx);
  return tx;
}

export async function resgatarRecompensaUsuario(id: any, contract: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [reedemPrizeFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);
  const tx = await contractSigner.reedemPrize(id);
  return tx;
}

/* export async function resgatarRecompensaRoyalts(contract: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [reedemPrizeRoyaltsFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.reedemPrizeRoyalts(id);

  console.log(tx);
  return tx;
} */

export async function verControleDeRecompensa(contract: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [viewPrizeControlFunction],
    provider
  );

  const tx = await contract1.viewPrizeControl();

  console.log(tx);
  return tx;
}

export async function verControleDeVenda(contract: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [viewSellControlFunction],
    provider
  );

  const tx = await contract1.viewSellControl();

  console.log(tx);
  return tx;
}

export async function mudarUriDaColeção(contract: any, uri: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contract1 = new ethers.Contract(
    contract,
    [setContractURIFunction],
    provider
  );
  const contractSigner = contract1.connect(signer);

  const tx = await contractSigner.setContractURI(uri);

  console.log(tx);
  return tx;
}

export async function verUriDoContrato(contract: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(
    contract,
    [contractURIFunction],
    provider
  );

  const tx = await contract1.contractURI();
  return tx;
}

export async function verUriDoToken(contract: any, nftId: any) {
  const provider = getProvider();

  const contract1 = new ethers.Contract(contract, [uriFunction], provider);

  const tx = await contract1.uri(nftId);
  return tx;
}

export async function comprarTicket(eventContract: any, id: any, amount: any) {
  const provider = getUserProvider();
  const signer = provider.getSigner();

  const contractEvent = new ethers.Contract(
    eventContract,
    [viewTicketStatusFunction],
    provider
  );
  const nftStatus = contractEvent.viewTicketStatus(id);

  permissaoUsd(marketplaceContract, Number(nftStatus.ticketPrice) * amount);

  const contractMktp = new ethers.Contract(
    marketplaceContract,
    [buyTicketFunction],
    provider
  );
  const contractSigner = contractMktp.connect(signer);

  const tx = await contractSigner.buyTicket(eventContract, id, amount);

  console.log(tx);
  return tx;
}

export async function balanceOfUsd(adress: any) {
  const provider = getProvider();

  const function2 =
    "function balanceOf(address account) public view virtual override returns (uint256)";

  const contract1 = new ethers.Contract(usdtContract, [function2], provider);

  const tx = await contract1.balanceOf(adress);

  return ethers.utils.formatEther(tx.toString());
}

export async function balanceOf1155(adress: any, id: any, contrat: any) {
  const provider = getProvider();

  const function2 =
    "function balanceOf(address account, uint256 id) external view returns (uint256)";

  const contract1 = new ethers.Contract(contrat, [function2], provider);

  const tx = await contract1.balanceOf(adress, id);

  console.log(tx);
  return tx.toString();
}
