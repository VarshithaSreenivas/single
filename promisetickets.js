console.log('Person1 shows ticket');
console.log('person2 shows ticket');

const promisetickets=new promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn=promisetickets.then((t)=>{
    console.log('wife:iam hungry');
    return new promise((resolve,reject)=>
        resolve(`${t}popcorn`)
    );

});

const getButter=getPopcorn.then((t)=>{
    console.log('husband:ibought popcorn');
    console.log('wife:i need butter');
    return new promise((resolve,reject)=>
        resolve(`${t}butter`)
    );

});

getButter.then((t)=> console.log(t));
console.log('Person4 shows ticket');
console.log('Person5 shows ticket');
console.log('Person3 shows ticket');
