
/*
This is generic actions that you can import to use in any module
these are nested arrow functions aka curried functions
this passes in the state to thats gonna be changed and the payload with the data to change it
example: set = color => return (state, newcolor) => return (state[color] = newcolor)
youre adding new data to which ever state object property passed in
drawerapp state: color, drawer, image
*/
//you state[property] and state.property mean the same thing
export const set = property => (state, newdata) => (state[property] = newdata)

export const toggle = property => state => {
    console.log(property)
    console.log(state)
    return (state[property] = !state[property])
    //console.log("im inside the toggle mutation:  "+ state.property)
} 