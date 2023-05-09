import {
    Connection,
    PublicKey,
} from "@solana/web3.js";
import {
    getMint,
} from "@solana/spl-token";


  (async () => {
    // Create a devnet connection
    const connection = new Connection("https://api.devnet.solana.com");
  
  
    const mintAccountPublicKey = new PublicKey("DF73eGNjv8dQB7cSuembJpaSgm3PfNkoe83Bco26fp6f");

    let mintAccount = await getMint(connection, mintAccountPublicKey);

    console.log(mintAccount);  
  
  })();