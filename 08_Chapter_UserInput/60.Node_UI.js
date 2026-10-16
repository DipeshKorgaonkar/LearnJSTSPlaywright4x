const readline = required('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl,question('Enter a number: ', (num) => {
    console.log(`You entered: ${num}`);
    rl.close();
});