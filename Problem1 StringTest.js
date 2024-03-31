function stringGame (input){
let stringToChange = input.shift()
for(let i=0; i<input.length; i++){
    let command = input[i].split(` `);
    if (command[0]===`Change`){
        let toReplace= command[1]
        let replacer = command[2]
        stringToChange=stringToChange.replaceAll(toReplace, replacer)
        console.log(stringToChange);
    }else if (command[0]===`Includes`){
        if(stringToChange.includes(command[1])){
            console.log(`True`);
        }else if(!stringToChange.includes(command[1])){
            console.log(`False`);
        }
    }else if(command[0]===`End`){
        let length = command[1].length
        let symbolsToFind = command[0].substring(command[0].length-length)
        if(symbolsToFind===command[1]){
            console.log(`True`)
        }else if(symbolsToFind!==command[1]){
            console.log(`False`)
        }
    }else if (command[0]===`Uppercase`){
        stringToChange=stringToChange.toUpperCase()
        console.log(stringToChange);
    }else if(command[0]===`FindIndex`){
        let letterToFind = command[1];
        let idx = stringToChange.indexOf(letterToFind);
        console.log(idx);
    }else if(command[0]===`Cut`){
        let startIdx=Number(command[1]);
        let endIdx=Number(command[2])
        //let toPrint = stringToChange.substring(startIdx,(startIdx+endIdx));
        let toPrint = stringToChange.substring(startIdx, (startIdx+endIdx))
        console.log(toPrint);
    }else if(command[0]===`Done`){
        break;
    }
}
console.log();
}
stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
;