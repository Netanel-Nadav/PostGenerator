

const makeID = (length: number = 5) => {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let id = ''
    for (let i = 0; i < length; i++) {
        const randomLetter = Math.floor(Math.random() * (letters.length - 1))
        id += letters[randomLetter]
    }
    return id
}


const convertInlineStyleToObject = (inlineStyle: string[]) => {
    inlineStyle.reduce((acc: any, curr: string) => {
        const [key, value] = curr.split(':');
        acc[key.trim()] = value.trim();
        return acc;
    }, {});
}


const trimTextToDots = (str: string, length: number = 100) => {
    const trimmedStr = str.substring(0, length)
    const formattedStr = `${trimmedStr}...`
    return formattedStr
}



export const utilService = {
    makeID,
    convertInlineStyleToObject,
    trimTextToDots
}