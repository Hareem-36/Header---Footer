import Header from "../component/Header";
import './About.css'; // Import the external CSS file
import Image from "next/image";
import profile from "../../app/about-us/l.jpg"; // Make sure the path is correct for your setup
import Foot from "../component/Foot";

export default function About() {
    return (
        <div className="about-container2">
            <Header />
            <h1>I am Hareem Jaweid</h1>
            <p>
                I am a passionate individual with a love for technology and innovation. 
                I enjoy learning about new advancements in software development and 
                continuously improving my skills in coding.
            </p>
            <section>
                <h2>Education</h2>
                <p>I am currently pursuing my education with a focus on computer science and programming.</p>
            </section>
            <section>
                <h2>Hobbies</h2>
                <ul>
                    <li>Coding and building projects</li>
                    <li>Reading tech blogs</li>
                    <li>Exploring new software tools</li>
                </ul>
                <br />
                <center>
                    <Image
                        src={profile}
                        alt="profile pic"
                        width={400}
                        height={400}
                        className="rounded-full" // Optional: make it a circle if you want
                    />
                </center>
            </section>
            <br />

            {/* Footer section */}
            <div className="footer">
                <Foot />
            </div>
        </div>
    );
}
