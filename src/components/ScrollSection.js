import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = document.querySelectorAll("#panel");

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 0.6,
          pin: true,
          start: "top top",
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".scroll-section").offsetWidth
          
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" >
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner" >
          <div className="scroll-section" id="panel one">
            <Image src="/pictures/pic1.jpg" alt="Image 1" width="612" height="431" id="full-width-image" style={{height:'80vh' , width: '80vw'}}/>
          </div>
          <div className="scroll-section" id="panel two">
            <Image src="/pictures/pic1.jpg" alt="Image 1" width="612" height="431" id="full-width-image" style={{height:'80vh' , width: '80vw'}}/>
          </div>
          <div className="scroll-section" id="panel three">
            <Image src="/pictures/pic1.jpg" alt="Image 1" width="612" height="431" id="full-width-image" style={{height:'80vh' , width: '80vw'}}/>
          </div>
          <div className="scroll-section" id="panel four">
            <Image src="/pictures/pic1.jpg" alt="Image 1" width="612" height="431" id="full-width-image" style={{height:'80vh' , width: '80vw'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
