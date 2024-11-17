import "./styles/Pricingsection.css";

export default function ricingsection() {
    return (
        <div className="pricingsection">
            <div className="pricingsection-upper">
                <div className="heading">Pricing Plan</div>
                <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="pricingsection-lower">
                <div className="pricing-card">
                    <div className="pricing-card-upper">
                        <div className="pricing-type">Free</div>
                        <div className="price">
                            29
                            </div>
                        <div className="usd-per-month">USD Per Month</div>
                    </div>
                    <div className="pricing-card-mid"> 
                        
                        <p><i class="ri-check-line"></i> The Philosophy Of business analytics</p>
                        <p><i class="ri-check-line"></i> Fast-Track Your business</p>
                        <p><i class="ri-check-line"></i> Lies And Damn Lies About business</p>
                        <p><i class="ri-check-line"></i> The Ultimate Deal On business</p>
                    </div>
                    <div className="pricing-card-lower">
                        <button className="btn btn-outline-secondary">PURCHASE NOW</button>
                    </div>
                </div>
                <div className="pricing-card" style={{backgroundColor:"#f9004d"}}>
                    <div className="pricing-card-upper text-light">
                        <div className="pricing-type text-light">Business</div>
                        <div className="price text-light">30</div>
                        <div className="usd-per-month text-light">USD Per Month</div>
                    </div>
                    <div className="pricing-card-mid text-light"> 
                        
                        <p><i class="ri-check-line text-light"></i> The Philosophy Of business analytics</p>
                        <p><i class="ri-check-line text-light" ></i> Fast-Track Your business</p>
                        <p><i class="ri-check-line text-light"></i> Lies And Damn Lies About business</p>
                        <p><i class="ri-check-line text-light"></i> The Ultimate Deal On business</p>
                    </div>
                    <div className="pricing-card-lower">
                        <button className="btn btn-light">PURCHASE NOW</button>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-card-upper">
                        <div className="pricing-type">Advanced</div>
                        <div className="price">29</div>
                        <div className="usd-per-month">USD Per Month</div>
                    </div>
                    <div className="pricing-card-mid"> 
                        
                        <p><i class="ri-check-line"></i> The Philosophy Of business analytics</p>
                        <p><i class="ri-check-line"></i> Fast-Track Your business</p>
                        <p><i class="ri-check-line"></i> Lies And Damn Lies About business</p>
                        <p><i class="ri-check-line"></i> The Ultimate Deal On business</p>
                    </div>
                    <div className="pricing-card-lower">
                        <button className="btn btn-outline-secondary">PURCHASE NOW</button>
                    </div>
                </div>
            </div>

        </div>
    )
}