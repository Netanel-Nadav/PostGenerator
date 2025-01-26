import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface IProps {
    setKindOfContent: Dispatch<SetStateAction<string | undefined>>
}

export const PostChoice: React.FC<IProps> = ({ setKindOfContent }) => {

    const handleChange = (e: ChangeEvent) => {
        const kindOfContent = e.target.id
        setKindOfContent(kindOfContent);
    }

    return (
        <section className="post-choice flex justify-center align-center">
            <div className="wrapper flex g-2">


                <label className="input-group">
                    <FontAwesomeIcon icon={faBlog} />
                    <input type="radio" name="choice" id="blog" onChange={handleChange} />
                </label>

                <label className='input-group'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <input type="radio" name="choice" id="facebook" onChange={handleChange} />
                </label>

                <label className="input-group">
                    <FontAwesomeIcon icon={faInstagram} />
                    <input type="radio" name="choice" id="instagram" onChange={handleChange} />
                </label>

                <label className="input-group">
                    <FontAwesomeIcon icon={faGoogle} />
                    <input type="radio" name="choice" id="google" onChange={handleChange} />
                </label>

            </div>
        </section >
    )
}
