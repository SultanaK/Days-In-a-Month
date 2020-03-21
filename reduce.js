let message = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let inputMessage = message.split();
inputMessage=inputMessage.reduce(function (accumulator,current) {
    if(current.length === 3){
        return (accumulator += " ");
         } else {
             return (accumulator += `${current.slice(-1).toUpperCase()}`); 
         }
    
}, " ");

//console.log(message);
console.log(inputMessage);