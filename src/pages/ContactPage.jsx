import { useContext, useRef, useState } from 'react'
import ContactCard from '../components/Card/Contact/ContactCard'
import Title from '../components/Title/Title'
import './ContactPage.css'
import { NavigationContext } from '../contexts/NavigationContext'
import Validate from '../components/Validation/Validate'
import { useImmer } from 'use-immer';
import Loading from '../components/Loading/Loading'


export default function ContactPage() {
    const { contact } = useContext(NavigationContext);
    const [loading, setLoading] = useState(false);
    const show = useRef(null);
    const innerText = useRef(null)
    const [ form, setForm ] = useImmer({
        email: "",
        subject: "",
        message: "",
    });

    const [ error, setError ] = useImmer({
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm(draft => {
            draft[e.target.name] = e.target.value;
        });
    };

    const handleClick = (e) => {
        e.preventDefault();

        setError(draft => {
            draft.email = form.email === "" ? "the email field must not be empty" : "";
            draft.subject = form.subject === "" ? "the subject field must not be empty" : "";
            draft.message = form.message === "" ? "the message field must not be empty" : "";
        });

        if (!form.email || !form.subject || !form.message) {
            return;
        }

        show.current.style.display = "none";
        setLoading(true);
        
        fetch("https://formspree.io/f/xjkgldao", {
            method: "post",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        })
        .then(response => {
            setLoading(false);
            if (response.ok) {
                setForm(draft => {
                    draft.email = "";
                    draft.subject = "";
                    draft.message = "";
                });
                innerText.current.innerHTML = "Thank You for sharing oportunity with me"
            }
        })
        .catch(error => {
            setLoading(false);
            alert(error);
            return;
        })
    }

    return (
        <section className='contactpage' ref={contact}>
            <Title text="Get In Touch" width="223px"/>
            <p>I am open to discussions, collaborations, or career opportunities in the tech field. Feel free to connect with me via email or social media. I look forward to engaging with like minded professionals and exploring exciting opportunities together!</p>
                <div className="feedback-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="icon-contact">
                            <ContactCard content="(+62) 851-5929-6566">
                                <i className="bi bi-telephone"></i>
                            </ContactCard>
                            <ContactCard content="aaridho16@gmail.com">
                                <i className="bi bi-envelope"></i>
                            </ContactCard>
                            <ContactCard content="Jalan Raya Rajeg Rajawali, RT.2/RW.1 Kelurahan Rajeg, Rajeg, Kab Tangerang, Banten">
                                <i className="bi bi-geo-alt"></i>
                            </ContactCard>
                        </div>
                    </div>
                    <div className='formWrapper'>
                        { loading && <Loading/> }
                        <p ref={innerText} className='innerText'></p>
                        <form className='form' onSubmit={handleClick} ref={show}>
                            <h3>Email Me</h3>
                            <input type="email" name="email" id="email" placeholder='Email' autoComplete='off' onChange={handleChange} value={form.email}/>
                            { error.email && <Validate text={error.email} /> }
                            <input type='text' name="subject" id="subject" placeholder='Subject' autoComplete='off'  onChange={handleChange} value={form.subject}/>
                            { error.subject && <Validate text={error.subject} /> }
                            <textarea name="message" id='message' placeholder='Message'  onChange={handleChange} value={form.message}></textarea>
                            { error.message && <Validate text={error.message} /> }
                            <button type="submit" className='submit'>
                                Send <i className="bi bi-send"></i>
                            </button>
                        </form>
                    </div>
                    <div className="link-connect">
                        <h3>Lets Connect</h3>
                        <div className="icon">
                            <a href="https://www.instagram.com/ridhoabdull_/" target='_blank'><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ridho-abdul-aziz-509b43303/" target="_blank"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/RidhoAbaaz/" target="_blank"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
        </section>
    )
}