let input=prompt("Whatever do you want")
const todos=['chicken eggs','horse eggs','human eggs']
while(input !== 'quit' && input !== 'q'){
    input=prompt("Whatever do you want")
    if(input ==='list'){
        console.log("****************")
        for(let i =0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("****************")
    }
    else if(input ==='new'){
        const newTodo=prompt("What is the new to do?")
        todos.push(newTodo)
        console.log(`${newTodo} is added to the list!`)
    }
    else if(input==='delete'){
        const index=parseInt(prompt("What do you want to delete?"))
    if(!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1)
        console.log(`OK, Deleted ${deleted}`)

    }
       
    }
}
console.log("YOU QUIT SUCCESSFULLY");