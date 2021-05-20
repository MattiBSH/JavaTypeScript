var sum=0;
for (let index = 2; index < process.argv.length; index++) {
    const element = process.argv[index];
    sum=sum+Number(element);
    
}
console.log(sum);