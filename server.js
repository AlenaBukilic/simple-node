function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    console.log(`Priniting env var favorite food - ${process.env.FAVORITE_FOOD}`);
    await sleep(5000);
  }
}

main();
