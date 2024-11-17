import "./styles/Latestnews.css";

export default function Latestnews() {
    return (
        <div className="latestnews-section">
            <div className="latestnews-upper">
                <div className="heading">Latest News</div>
                <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
                </p>
            </div>
            <div className="latestnews-lower">
                <div className="latestnews-card">
                    <div className="latestnews">
                        <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/blog/blog-01.jpg" alt="" />
                        <div className="latestnews-inner">
                            <div className="news-title">Dovelopment</div>
                            <div className="news-text">Getting tickets to the big show</div>
                            <div className="btn-div"><button className="btn btn-outline-danger">READ MORE</button></div>
                        </div>
                    </div>
                    
                </div>
                <div className="latestnews-card">
                    <div className="latestnews">
                    <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/blog/blog-02.jpg" alt="" />
                        <div className="latestnews-inner">
                            <div className="news-title">Dovelopment</div>
                            <div className="news-text">Getting tickets to the big show</div>
                            <div className="btn-div"><button className="btn btn-outline-danger">READ MORE</button></div>
                        </div>
                    </div>
                                    </div>
                <div className="latestnews-card">
                    <div className="latestnews">
                    <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/blog/blog-03.jpg" alt="" />
                        <div className="latestnews-inner">
                            <div className="news-title">Dovelopment</div>
                            <div className="news-text">Getting tickets to the big show</div>
                            <div className="btn-div"><button className="btn btn-outline-danger">READ MORE</button></div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}