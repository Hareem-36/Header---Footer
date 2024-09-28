import Header from "@/app/component/Header";
import Foot from "@/app/component/Foot";
import Image from "next/image";
import profile from "../app/about-us/globe.jpg";


export default function Home() {
    return (
        <div className="home-container">
            <Header />
            
            <div className="content">
            <h3 style={{ color: '#4A90E2', textAlign: 'center', fontSize: '30px', }}>
    Welcome to Our Website
</h3>
                <p>
                    This is the home page of our website. Here you will find information about 
                    our services, recent updates, and much more. Feel free to explore!
                </p>
            </div>
           <br></br> <center><Image
                        src={profile}
                        alt="profile pic"
                        width={500}
                        height={700}
                       
                    />
               <br></br>     
            </center><Foot />
        </div>
    );
}


