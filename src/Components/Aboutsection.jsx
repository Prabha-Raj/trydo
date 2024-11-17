import "./styles/Aboutsection.css";

export default function Aboutsection(){
    return(
        <div className="about-section">
            <div className="about-left">
                <div>
                    <div style={{fontSize:"60px", fontWeight:"600"}}>About</div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which dont look even slightly believable.
                    </p>
                </div>
                
                <div>
                    <div>Lorem ipsum dolor sit.</div>
                    <p><i class="ri-check-line"></i> The Philosophy Of business analytics</p>
                    <p><i class="ri-check-line"></i> Fast-Track Your business</p>
                    <p><i class="ri-check-line"></i> Lies And Damn Lies About business</p>
                    <p><i class="ri-check-line"></i> The Ultimate Deal On business</p>
                </div>
                <div>
                    <div>Lorem ipsum dolor sit.</div>
                    <p><i class="ri-check-line"></i> The Philosophy Of business analytics</p>
                    <p><i class="ri-check-line"></i> Fast-Track Your business</p>
                    <p><i class="ri-check-line"></i> Lies And Damn Lies About business</p>
                    <p><i class="ri-check-line"></i> The Ultimate Deal On business</p>
                </div>

            </div>
            <div className="about-right">
                <img src="https://rainbowit.net/html/trydo/assets/images/about/about-3.png" alt=""/>
            </div>
        </div>
    )
}