// src/components/UserRequest.tsx
import React, { FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatController } from '../controllers/chatController';
import { Loader } from './Loader';
import { RootState, AppDispatch } from '../store';
import { setPosts } from '../store/slices/postSlice';

import ContentPic from '../assets/imgs/517394-PIM7ZS-437.png'


interface IProps {
    kindOfContent: string | undefined
}


export const UserRequest: React.FC<IProps> = ({ kindOfContent }) => {

    const { user } = useSelector((state: RootState) => state.user);

    const formRef = useRef<null | HTMLFormElement>(null);
    const categoryRef = useRef<null | HTMLInputElement>(null);
    const subjectRef = useRef<null | HTMLInputElement>(null);
    const infoRef = useRef<null | HTMLTextAreaElement>(null);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const category = categoryRef.current?.value;
        const subject = subjectRef.current?.value;
        const info = infoRef.current?.value;

        const details = {
            category,
            subject,
            info,
            kindOfContent
        };

        formRef.current?.reset();

        try {
            const chatAnswer = await chatController.getAnswer(details);
            if (!chatAnswer) throw new Error("Server Cannot answer");
            dispatch(setPosts(chatAnswer)); // Correctly dispatching the action
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <Loader />;

    
    return (
        <section className="user-request">
            <h2>הגיע הזמן להרים את העסק שלכם</h2>
            <div className="wrapper">
                <div className="even-columns">
                    {kindOfContent ? 
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="input-group flex column">
                            <label htmlFor="category">תחום</label>
                            {user ?  
                            <input type="text" name="category" id="category" ref={categoryRef} pattern='^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$' value={user.category} disabled />
                            :
                            <input type="text" name="category" id="category" ref={categoryRef} pattern='^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$' />
                            }
                        </div>
                        <div className="input-group flex column">
                            <label htmlFor="subject">נושא הפוסט</label>
                            <input type="text" name="subject" id="subject" ref={subjectRef} />
                        </div>
                        <div className="input-group flex column">
                            <label htmlFor="additional-info">נושאים שיופיעו בפוסט</label>
                            <textarea name="additional-info" id="additional-info" ref={infoRef}></textarea>
                        </div>
                        <button>שלח</button>
                    </form>
                    :
                    <div className="choose-content">
                        <p>אנא בחר את סוג התוכן</p>
                    </div>
                    }
                    <div className="img-container">
                        <img src={ContentPic} alt="marketing content picture" />
                    </div>
                </div>
            </div>
        </section>
    );
};
