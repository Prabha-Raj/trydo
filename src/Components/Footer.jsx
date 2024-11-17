import "./styles/Footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-left">
                <img src="https://www.trydo.rainbowit.net/assets/images/logo/logo-all-dark.png" alt="trydo_logo"/>
            </div>
            <div className="footer-mid">
                <div><i class="ri-facebook-fill"></i></div>
                <div><i class="ri-linkedin-line"></i></div>
                <div><i class="ri-twitter-fill"></i></div>
                <div><i class="ri-skype-fill"></i></div>
            </div>
            <div className="footer-right">
                <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
            </div>
            <div className="change-mode"><i class="ri-moon-fill"></i></div>
            <div className="go-top"><i class="ri-arrow-up-s-line"></i></div>
        </div>
    )
}