const initState ={
    posts : [
        {id:'1', title:'naruto' ,body:'this is the story about a ninja who became Hokage' },
        {id:'2', title:'death Note' ,body:'A god who became devil' },
        {id:'3', title:'dragon ball z' ,body:'Fight of aliens and a monkey king' }
    ]
}

const rootReducer = (state = initState, action) =>{
    return state
}

export default rootReducer