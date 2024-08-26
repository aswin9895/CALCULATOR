const displayData = (content) => {
    result.value += content
}

const clearCalcScreen = () => {
    result.value = ""
}

const evaluateExpr = () => {
    try {
        result.value = eval(result.value)
    } catch (error) {
        result.value = "invalid expression"
    }
}

const deleteLeft=()=>{
    result.value=result.value.slice(0,-1)
}