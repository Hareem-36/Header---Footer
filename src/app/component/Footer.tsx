import Link from "next/link"

export default function Foot (){
    return(
        <div className="footer">
            <ul className="footer-buttons">

                <Link href={"/"}><li>Contact-Us</li>
                </Link>
                
                <Link href={"/jobs"}><li>abc@gmail.com</li>
                </Link>

            </ul>
        </div>
    )
}