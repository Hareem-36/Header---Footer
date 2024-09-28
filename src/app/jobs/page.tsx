import Header from "../component/Header";
import Image from "next/image";
import profile from "../../app/about-us/UI-UX.png"; // Make sure the path is correct for your setup
import Foot from "../component/Foot";
export default function Jobs() {
    const jobListings = [
        {
            title: "Frontend Developer",
            location: "New York, USA",
            description: "We are looking for a skilled frontend developer proficient in React.js and TypeScript.",
            salary: "Rs.70,000 - Rs.90,000",
        },
        {
            title: "Backend Developer",
            location: "London, UK",
            description: "Backend developer required with experience in Node.js and MongoDB.",
            salary: "Rs.60,000 - Rs.80,000",
        },
        {
            title: "UI/UX Designer",
            location: "Remote",
            description: "Creative UI/UX designer needed for an innovative project. Experience with Figma or Sketch is a plus.",
            salary: "Rs.50,000 - Rs.70,000",
        },
    ];

    return (
        <div className="jobs-container1">
            <Header />
        
            <div className="jobs-list">
                {jobListings.map((job, index) => (
                    <div key={index} className="job-item">
                        <h2>{job.title}</h2>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p>{job.description}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                    </div>
                ))}
            </div>
            <br></br>
                <center><Image
                    src={profile}
                    alt="profile pic"
                    width={800}
                    height={700}
                    // Optional: make it a circle if you want
                /> </center>
<br></br>
                {/* Footer section */}
                <div className="footer">
                    <Foot />
                </div>
            </div>
        );
    }