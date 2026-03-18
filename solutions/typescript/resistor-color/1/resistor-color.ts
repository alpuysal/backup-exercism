export const colorCode = (bandColor: string): number => {
  
  return COLORS.indexOf(bandColor.toLowerCase())
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
