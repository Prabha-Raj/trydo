import "./styles/Services.css";

export default function Services(){
    return(
        <div className="services-wrapper">
            <div className="service first-service"  style={{height:"80", justifyContent:"start", padding:"0px;", marginTop:"-10px", alignItems:"start", gap:"0px"}}>
                <h1 style={{fontSize:"65px"}} className="heading">Services</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                <p className="more">Request Custom Service</p>
            </div>
            <div className="service">
                <img src="https://rainbowit.net/html/trydo/assets/images/featured/corporate-01.jpg" alt=""/>
                <div className="service-contect">
                <h1 className="heading">Request Custom Service</h1>
                <p>I throw myself down among the tall grass by the stream</p>
                <p className="more">Read More</p>
                </div>
            </div>
            <div className="service">
                <img src="https://rainbowit.net/html/trydo/assets/images/featured/corporate-02.jpg" alt=""/>
                <div className="service-contect">
                <h1 className="heading">Request Custom Service</h1>
                <p>I throw myself down among the tall grass by the stream</p>
                <p className="more">Read More</p>
                </div>
            </div>
            <div className="service">
                <img src="https://rainbowit.net/html/trydo/assets/images/featured/corporate-03.jpg" alt=""/>
                <div className="service-contect">
                <h1 className="heading">Request Custom Service</h1>
                <p>I throw myself down among the tall grass by the stream</p>
                <p className="more">Read More</p>
                </div>
            </div>
        </div>
    )
}