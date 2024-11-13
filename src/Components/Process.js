import React, { useState } from "react";
import "./styles/Process.css";

export default function Process() {
    // State to keep track of which accordion item is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        // Toggle the currently open index
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="process-container">
            <div className="process-left">
                <img
                    src="https://rainbowit.net/html/trydo/assets/images/about/about-4.png"
                    alt=""
                />
            </div>
            <div className="process-right">
                <div className="process">
                    <h1>Working Process</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem impedit iure quia quo recusandae?</p>
                    </div>
                </div>
                <div className="accordion">
                    {[
                        {
                            key: "Your Business Skills But Never Stop Improving.",
                            value: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat"
                        },
                        {
                            key: "Tactics That Can Help Your Business Grow.",
                            value: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat."
                        },
                        {
                            key: "The Secret of Successful Business.",
                            value: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat."
                        },
                        {
                            key: "How To Start A Business With Business.",
                            value: "Facilis fugiat hic ipsam iusto laudantium libero maiores minima molestiae mollitiarepellat rerum sunt ullam voluptates? Perferendis, suscipit."
                        }]
                        .map((section, index) => (
                            <div className="accordion-item" key={index}>
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {section.key}
                                    {/* <hr/> */}
                                </div>
                                <div
                                    className="accordion-content"
                                    style={{ display: openIndex === index ? "block" : "none" }}
                                >
                                    {section.value}
                                </div>
                            </div>
                        ))}
                </div>
                <button className="btn ">SEE HOW IT WORKS</button>
            </div>
        </div>
    );
}
