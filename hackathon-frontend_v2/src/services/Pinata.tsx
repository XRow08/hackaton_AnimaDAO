import axios from "axios";
const ApiKey = "41498cdd8bd4c1ccb3da";
const SecretApiKey =
  "fca35ec15a5aba6a280949c904a7794abca43a3fc3a9847625867a10668b3027";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4MjZlZTQyMC1jZDU2LTRlMmYtYjY2OC1jYzQxMTg1MTEzNGQiLCJlbWFpbCI6Im11cmlsbG9hdWd1c3RvZTA4MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNDE0OThjZGQ4YmQ0YzFjY2IzZGEiLCJzY29wZWRLZXlTZWNyZXQiOiJmY2EzNWVjMTVhNWFiYTZhMjgwOTQ5YzkwNGE3Nzk0YWJjYTQzYTNmYzNhOTg0NzYyNTg2N2ExMDY2OGIzMDI3IiwiaWF0IjoxNjgwNzI3NTQxfQ.LXJmH3tuNsjFuajfg9ESlvfl2aah31Ed5JQZoTWJl5g";

export async function PinataAPIFile(formData: any) {
  const endpoint = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  try {
    const res = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
        pinata_api_key: ApiKey,
        pinata_secret_api_key: SecretApiKey,
      },
    });
    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
  } catch (error) {
    console.log(error);
  }
}

export async function PinataAPIJSON(data: any) {
  const endpoint = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  try {
    const res = await axios.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        pinata_api_key: ApiKey,
        pinata_secret_api_key: SecretApiKey,
      },
    });
    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
  } catch (error) {
    console.log(error);
  }
}
