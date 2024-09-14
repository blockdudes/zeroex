const paillierBigint = require('paillier-bigint');

const pubkey = new paillierBigint.PublicKey(
    1718030506902504727845769915524474072209n,
    1718030506902504727845769915524474072210n
);

const getAmount = async () => {
    return (await pubkey.encrypt(1n)).toString();
}

async function main() {
    const amount = await getAmount();
    console.log(amount);
}

main();