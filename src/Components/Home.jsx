import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import SliderComponent from "./SliderComponent";

const Home = ({ bookingText, explore }) => {
  const list = [
    {
      img: "https://www.uptodd.com/images/newWebsite/possibility1.webp",
      heading:
        "Seeking a holistic program for your child's early brain development?",
      text: "UpTodd offers a one-stop solution with personalized physical kits and an expert-guided program to support your child's brain development.",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/possibility2.webp",
      heading:
        "Need help identifying and nurturing your child's unique talents early on?",
      text: "We create a brain-stimulating environment to support the development of special skills as part of our comprehensive parenting program for baby.",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/possibility3.webp",
      heading:
        "Concerned about screen time affecting your child’s development?",
      text: "UpTodd's special tech-driven product reduces screen time and boosts your baby's neural connections, thus stimulating brain development.",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/possibility4.webp",
      heading: "Looking for effective ways to boost your child's IQ and EQ?",
      text: "Our scientifically-backed methods enhance IQ and EQ with a specially curated program focuessed on infant conginitve growth, just for your baby.",
    },
  ];
  const Proof = [
    {
      video: "",
      text: "",
    },
  ];
  return (
    <>
      <section className="Home-page">
        <div className="banner-text">
          <h1>Give Your Baby the</h1>
          <h1>Best Possible Start!</h1>
          <h2>Nurture your baby's developing Brain</h2>
          <p>Expert Guided Personalised Program - Just For Your Baby</p>
          <ul>
            <li>
              <FaCheckCircle /> <span> No Pressure - No testing </span>
            </li>
            <li>
              <FaCheckCircle /> <span>No screen Time</span>
            </li>
            <li>
              <FaCheckCircle /> <span>10 Minutes Daily</span>
            </li>
            <li>
              <FaCheckCircle /> <span>Loved by babies</span>
            </li>
            <li>
              <FaCheckCircle /> <span>One Stop Parenting Solution</span>
            </li>
          </ul>
          <Button text={bookingText} />
        </div>
        <div className="banner-image">
          <img
            src="https://www.uptodd.com/images/newWebsite/home-page-banner.webp"
            alt=""
          />
        </div>
      </section>
      <section>
        <SliderComponent />
      </section>
      <section className="Possibilities">
        <div className="Possibilities-heading">
          <h1>Explore the Possibilities with UpTodd</h1>
          <p>
            We have your back in this Journey - Top experts support you in your
            baby’s brain development journey.
          </p>
        </div>
        <div className="Possibilities-container">
          <div className="Possibilities-image">
            <img
              src="https://www.uptodd.com/images/newWebsite/possibilites.webp"
              alt=""
            />
          </div>
          <div className="Possibilities-list">
            {list.map((value, index) => (
              <div key={index} className="Possibilities-card">
                <img src={value.img} alt="" />
                <div className="card-text">
                  <h2>{value.heading}</h2>
                  <p>{value.text} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Solution-page">
        <div className="solution-heading">
          <h1>One Stop Solution for your Baby's Brightest Possible Future</h1>
          <p>Research-Backed Baby Brain Development Journey</p>
        </div>
        <div className="solution-container">
          <ul>
            <li>
              <FaCheckCircle />
              <span>Parenting made easy: One App, all you need</span>
            </li>
            <li>
              <FaCheckCircle />
              <span>Holistic Development & Baby Brain Reports</span>
            </li>
            <li>
              <FaCheckCircle />
              <span> 10,000+ Research Studies, 100+ Top Experts </span>
            </li>
            <li>
              <FaCheckCircle />
              <span>Expert Customised Mega Toy based developmental Kits </span>
            </li>
          </ul>
          <div className="solution-image">
            <img
              src="https://www.uptodd.com/images/newWebsite/one-stop-solution.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="genius-section">
          <div className="genius-header">
            <h1>Inside Your Baby's Genius - Building Baby Brain</h1>
            <h2>Every Baby is born with infinite Potential</h2>
          </div>
          <div className="genius-container">
            <ul className="genius-text">
              <li>
                <span>100 Bn</span>Every baby is born with 100 Billion of
                Neurons
              </li>
              <li>
                <span>1 Mn</span>One million neural connections are formed every
                second in the early years
              </li>
              <li>
                <span>90%</span>Ninety percentage of our brain develops by age 5
              </li>
              <li>
                <span>60%</span>
                60% of baby's energy goes in brain development
              </li>
            </ul>

            <div class="building">
              <iframe
                loading="lazy"
                width="853"
                height="480"
                srcdoc="<style>body,.full {width:80%;height:80%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/VNNsN9IJkws?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'> <img src='https://www.uptodd.com/images/newWebsite/inside-baby-genius.webp' class='full' /> <svg version='1.1' viewBox='0 0 68 48' width='68px' style='position: relative;'><path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg> </a>"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                data-gtm-yt-inspected-4="true"
                data-gtm-yt-inspected-40611628_62="true"
                id="275573034"
                data-gtm-yt-inspected-14="true"></iframe>
              <p>Ref. Harvard University | developingchild.harvard.edu</p>
            </div>
          </div>
          <div>
            <Button text={explore} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
