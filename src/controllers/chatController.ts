import { chatService } from "../services/chatService"
import { httpService } from "../services/httpService";


interface Details {
    category: string | undefined
    subject: string | undefined
    info: string | undefined
}

const getAnswer = async (details: Details) => {
    const info = chatService.formatDetails(details);
    try {
        const data = await httpService.post("chat",  info)
        return data
    } catch (err) {
        console.log(err);
        throw new Error(err + "");
    }

}


export const chatController = {
    getAnswer
}