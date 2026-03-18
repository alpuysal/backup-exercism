export function decodedValue(colorBands: Array<string> = []): number {



  const value = `${COLORS.indexOf(colorBands[0].toLowerCase())}${COLORS.indexOf(colorBands[1].toLowerCase())}`

    
  return parseInt(value)

}


export const COLORS: Array<string> = [
  "black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"
  ]