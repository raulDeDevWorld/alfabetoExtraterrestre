const qualquierAlfabeto = 'zyxwvtsrqponmlkjinhgfedcba'
const arrayDePalabras = ['zapato', 'madre', 'auto', 'casa', 'lote']

const ordenarAlfabeto = (alfabetoExtraterrestre, array) => {
  return alfabetoExtraterrestre.split('').reduce((newArray, item)=>{
    const data = array.filter(i => item === i.split('')[0])
    return [...newArray, ...data]
  }, [])
}

console.log(ordenarAlfabeto(qualquierAlfabeto, arrayDePalabras)) 
