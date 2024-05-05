function vary(reg)
{
    var variable=[]
    for (let index = 0; index < reg.length; index++) {
        if (reg[index].match(/^[a-zA-Z]+$/)) {
            variable.push(reg[index])
        }
        
    }
    return variable
}
export default vary