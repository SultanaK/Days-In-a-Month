function rps(n)
{
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if (n === randomNo){
        //return 'Tie';
        console.log('Tie');
     } else if (n===1 && randomNo===2)
     {
            console.log('you loss');
     }else {
         
     }

console.log(randomNo);
}
rps(2);