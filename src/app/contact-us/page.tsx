import Header from "../component/Header";
import Foot from "../component/Foot";

export default function Contact() {
    return (
        <div className="contact-container">
            <Header />
            <br />
            <h1>Contact Us</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <br />
            
            {/* Footer section */}
            <div className="footer">
                <Foot />
            </div>
        </div>
    );
}
