import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>XENSHIBA DApp</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h3 className={styles.selectBoxTitle}>Mint testnet NFT</h3>
          <p className={styles.selectBoxDescription}>
            You will only be able to mint using mXEN on Polygon Mainnet. Mint now using testnet MATIC.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h3 className={styles.selectBoxTitle}>Stake to start Mining</h3>
          <p className={styles.selectBoxDescription}>
            Stake your XSHIBA NFT to mine XSHIBA token every minute. Built by <b>XENSHIBA</b>{" "}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
