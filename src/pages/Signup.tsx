import React, { FormEvent, useRef, useState } from 'react'
import chatBackground from '../assets/imgs/background-chat.png'
import { userService } from '../services/userService'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'


export const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(true);

    const formRef = useRef<HTMLFormElement | null>(null)
    const firstNameRef = useRef<HTMLInputElement | null >(null)
    const lastNameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const businessCategoryeRef = useRef<HTMLSelectElement | null>(null)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const user = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            password: passwordRef.current?.value,
            email: emailRef.current?.value,
            category: businessCategoryeRef.current?.value
        }
        const sinedUser = await userService.signup(user);
        dispatch(setUser(sinedUser));
        formRef.current?.reset();
        navigate('/')
    }

    const hadleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const credentials = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }

        const user = await userService.login(credentials);
        
        dispatch(setUser(user));
        navigate('/')
    }


    return (
        <div className="signup main-layout full">
            <div className="wrapper even-columns full">
                {isLogin ? 
                <form ref={formRef} onSubmit={hadleLogin}>
                    <div className="input-group flex column full">
                        <label htmlFor="">אימייל</label>
                        <input type="email" placeholder='Example@example.com' ref={emailRef} />
                    </div>
                    <div className="input-group flex column full">
                        <label htmlFor="">סיסמה</label>
                        <input type="password" placeholder='xDbse234DF!gd$' ref={passwordRef} />
                    </div>
                    <button>התחבר</button>
                    <button onClick={() => setIsLogin(!isLogin)}>עדיין לא רשום? הירשם עכשיו!</button>
                </form>
                :
                <form onSubmit={handleSubmit} ref={formRef}>
                    <h2 className='full'>הצטרפו אלינו ותהנו <br /><span>מאין סוף תכנים לעסק שלכם</span></h2>
                    <div className="input-group flex column">
                        <label htmlFor="">שם פרטי</label>
                        <input type="text" placeholder='ישראל' ref={firstNameRef} />
                    </div>
                    <div className="input-group flex column">
                        <label htmlFor="">שם משפחה</label>
                        <input type="text" placeholder='ישראלי' ref={lastNameRef} />
                    </div>
                    <div className="input-group flex column">
                        <label htmlFor="">סיסמה</label>
                        <input type="password" placeholder='xDbse234DF!gd$' ref={passwordRef} />
                    </div>
                    <div className="input-group flex column">
                        <label htmlFor="">אימייל</label>
                        <input type="email" placeholder='Example@example.com' ref={emailRef} />
                    </div>
                    <div className="input-group flex column full">
                        <label htmlFor="">תחום העסק</label>
                        <select name="business-category" ref={businessCategoryeRef}>
                            <option value="" disabled selected >בחר מהרשימה</option>
                            <option value="ספורט">אימון וכושר</option>
                            <option value="עורך דין">עריכת דין</option>
                            <option value="ביוטי">קוסמטיקה</option>
                            <option value="ראיית חשבון">ראיית חשבון</option>
                            <option value="מסעדה">מסעדה</option>
                            <option value="תזונה">תזונה</option>
                        </select>
                    </div>
                    <button>הירשם עכשיו!</button>
                </form>}
                <div className="img-container">
                    <img src={chatBackground} alt="" />
                </div>
            </div>
        </div>
    )
}
