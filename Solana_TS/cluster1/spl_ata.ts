import {
    Connection,
    Keypair,
    PublicKey,
  } from "@solana/web3.js";
  import {
    createAssociatedTokenAccount,
  } from "@solana/spl-token";
  import wallet from "./wba_wallet.json"
  
  // Import keypair from the wallet file
  const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
  
  (async () => {
    // Create a devnet connection
    const connection = new Connection("https://api.devnet.solana.com");
  
    const mintAccountPublicKey = new PublicKey("J9Qip1kFuAH1nxoRbZwVJZS6yfvbR6jm9KcQT3TXwb8J");
  
    let ata = await createAssociatedTokenAccount(
        connection, // connection
        keypair, // fee payer
        mintAccountPublicKey, // mint
        new PublicKey("tiosTcRdt9TW7baDB3BLL3LY16w5pP5XsTbeQNZJKjD") // owner,
      );
    
    console.log(`ATA: ${ata.toBase58()}`);    
  
  })();
  
  