import { utilService } from "./utils"


const remakeAnswer = (chatAnswer: string) => {
    const x = chatAnswer.split("\n");
    const y = x.map((sentence: string) => {
        if (sentence.startsWith("#")) {
            return `<h3>${sentence}</h3>`
        } else {
            return `<p>${sentence}</p>`
        }
    })
    console.log(y);
    
}


const formatDetails = (details: any) => {
    const {category, subject, info, kindOfContent} = details
    const formattedDetails = {
        id: utilService.makeID(10),
        category,
        subject,
        info,
        createdAt: Date.now(),
        kindOfContent
    }
    return formattedDetails
}

export const chatService = {
    formatDetails,
    remakeAnswer
}