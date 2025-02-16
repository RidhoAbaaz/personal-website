import { useContext } from 'react'
import Button from '../components/Button/Button'
import ContactCard from '../components/Card/ContactCard'
import Title from '../components/Title/Title'
import './ContactPage.css'
import { NavigationContext } from '../contexts/NavigationContext'

export default function ContactPage() {
    const { contact } = useContext(NavigationContext);
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
                    <form className='form'>
                        <h3>Email Me</h3>
                        <input type="email" name="email" id="email" placeholder='Email' autoComplete='off'/>
                        <input type='text' name="subject" id="subject" placeholder='Subject' autoComplete='off'/>
                        <textarea name="message" id='message' placeholder='Message'></textarea>
                        <Button text="Send" />
                    </form>
                    <div className="link-connect">
                        <h3>Lets Connect</h3>
                        <div className="icon">
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                            <a href=""><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
        </section>
    )
}