import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Example() {

    gsap.registerPlugin(ScrollTrigger);

    

    useEffect(() => {

        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        });
    }, []); // Empty dependency array ensures that this effect runs only once after mounting

    return (
        <>
            <div class="firstContainer">
                <h1>Testing horizontal scrolling w/ three sections</h1>
                <h2>First Container</h2>
            </div>
            <div className="container">
                <div className="description panel blue">
                    <div>
                        SCROLL DOWN
                        <div className="scroll-down">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>

                <section className="panel red">
                    ONE
                </section>
                <section className="panel orange">
                    TWO
                </section>
                <section className="panel purple">
                    THREE
                </section>
            </div>
            <div className="lastContainer">
                Last Container
            </div>
        </>
    );
}
