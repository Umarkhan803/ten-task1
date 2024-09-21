import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import SliderComponent from "./SliderComponent";
import Modal from "./Modal";

const Home = ({ bookingText, explore, start, enroll }) => {
  const carouselRef = useRef(null); //
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
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
  const [clickedCardId, setClickedCardId] = useState(null);

  // Handle card click
  const handleCardClick = (id) => {
    setClickedCardId(id); // Set the clicked card ID
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelectorAll(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelectorAll(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const cards = [
    {
      title:
        "Rishit can observe 300+ fruits & vegetables, Lets see how he does?",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "5 month baby can identify 100+ flashcards",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "4.5 months Recognizes 100 Animals & Flowers",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title:
        "Baby just knows everything, high IQ level- 300+ cards recognition",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title: "Just 3 months old and rolling over without any help",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
    {
      title:
        "8 months baby can follow complex instructions with ease - Exceeding all Milestones",
      videoUrl: "https://www.youtube.com/embed/ku6AjmjCcH4?si=GKga_botv-EwNq8W",
    },
  ];
  const pillarsList = [
    {
      id: 1,
      title: "4 Cognitive Pillars",
      text1: "Lingustic Champion",
      text2: "Logic Master",
      text3: "Memory Powerhouse",
      text4: "Curious Explorer",
    },
    {
      id: 2,
      title: "4 Physical Pillars",
      text1: "Vitality",
      text2: "Vigour",
      text3: "Equilibrium & Agility",
      text4: "Dexterity",
    },
    {
      id: 3,
      title: "4 Moral pillars",
      text1: "Leadership Skills",
      text2: "Honest Charm",
      text3: "Empathetic Heart",
      text4: "Harmony Hues",
    },
    {
      id: 4,
      title: "4 Creativity pillars",
      text1: "Inventive Ideator",
      text2: "Artistic Champ",
      text3: "Drama & Creations",
      text4: "Rhythmic Explorations",
    },
    {
      id: 5,
      title: "Intuition & Foresight Development",
      text1: "Intuition Skills",
      text2: "Foresight Vision",
    },
  ];

  const premiumProgram = [
    {
      text1: "Super Premium Program",
      text2: "1 Year Personalised Program",
      text3:
        "(2 Mega Personalised Kits : Total 4 Sets of Kit, covering 3 Months each)",
      perMonth: "INR 3242 Per Month",
      discountPrice: "INR 38,900 ",
      deletePrice: "INR 120,900",
    },
    {
      text1: "Standard Premium Program",
      text2: "6 Months Personalised Program",
      text3:
        "(1 Mega Personalised Kits : Total 2 Sets of Kit, covering 3 Months each)",
      perMonth: "INR 3984 Per Month",
      discountPrice: " INR 70,900",
      deletePrice: "INR 23,900 ",
    },
  ];
  const babyAwardList = [
    {
      id: 1,
      img: "https://www.uptodd.com/images/newWebsite/awards/dhruvut.webp",
      title: "Dhruvut - Kalam's World Record",
      description:
        "Uptodds Little Genius identified 416 Flashcards within 10 Minutes",
    },
    {
      id: 2,
      img: "https://www.uptodd.com/images/newWebsite/awards/freya.webp",
      title: "Freya - Young Milestone Achiever",
      description:
        "UpTodd's Little Genius recorded identification of record 60+flashcards in 7 minutes",
    },
    {
      id: 3,
      img: "https://www.uptodd.com/images/newWebsite/awards/aastik.webp",
      title: "Freya - Young Milestone Achiever",
      description: " Aastik - International Book of REX Award",
    },
    {
      id: 4,
      img: "https://www.uptodd.com/images/newWebsite/awards/Tejasawi.webp",
      title: "Tejasawi - NYT Times - Little Genius",
      description:
        "  UpTodd's Little Genius recorded solving 4 sets of 16 pattern puzzles in 218 seconds",
    },
    {
      id: 5,
      img: "https://www.uptodd.com/images/newWebsite/awards/kedar.webp",
      title: "Kedar - Wall Street - Gloabal Awardee",
      description:
        "UpTodd's Little Genius stood as Rank-1 in 10 different events, among most talented global babies",
    },
    {
      id: 6,
      img: "https://www.uptodd.com/images/newWebsite/awards/manasmita.webp",
      title: "Manasmita - Kalams World Record",
      description: "500+ Different objects in 5 minutes",
    },
    {
      id: 7,
      img: "https://www.uptodd.com/images/newWebsite/awards/tejas.webp",
      title: "Tejas - New York Times World Record",
      description:
        " UpTodd's Little Genius spoke 800 different words of variety of things within 29 Minutes",
    },
  ];
  const boardMembers = [
    {
      img: "https://www.uptodd.com/images/newWebsite/board/abhishek-singh.png",
      name: "Abhishek Singh",
      position: "Co-Founder & CEO",
      description:
        "B.Tech(Hons) IIT Kharagpur, 30under30 Brainfeed | Rex Karmaveer Chakra, iCongo & United Nations",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/board/devesh-kaushik.png",
      name: "Devesh Kaushik",
      position: "Co-Founder & CTO",
      description: "B.Tech(Hons) IIT Kharagpur",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/board/dr-richa-singh.png",
      name: "Richa Singh",
      position: "Co-Founder & CPO",
      description:
        "Biomedical PhD, IIT BHU, Sangeet Prabhakar, Music, Neural Music Researcher",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/board/dr-jaideep.png",
      name: "Dr.Jaideep Sharma",
      position: "Chief Expert & Advisor",
      description: "AIIMS, 1981 Batch India's 2nd Longest Coma Survivor",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/board/arjun-malhotra.jpg",
      name: "Arjun Malhotra",
      position: "Advisor",
      description:
        "Co-Founder HCL Group, Headstrong, Techspan & others | Albert Einstein Tech. Awardee",
    },
    {
      img: "https://www.uptodd.com/images/newWebsite/board/saurabh-garg.jpeg",
      name: "Saurabh Garg",
      position: "Advisor",
      description:
        "Co-Founder, Nobroker & Four Fountains Spa | B.Tech IIT Bombay & MBA, IIM Ahmedabad ",
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
      <section className="genius-babies">
        <div className="carousel-container">
          <div className="carousel-header">
            <h1>The Proof is in the Play: Watch How Babies Thrive!</h1>
            <p>
              Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter
              Tomorrow
            </p>
          </div>

          <div className="carousel-wrapper">
            <button className="carousel-button prev" onClick={handlePrev}>
              <img
                src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
                alt="Previous"
              />
            </button>
            <div className="carousel" ref={carouselRef}>
              {cards.map((card, index) => (
                <div className="carousel-card" key={index}>
                  <iframe
                    width="300"
                    height="200"
                    src={card.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                  <h3>{card.title}</h3>
                  {card.description && <p>{card.description}</p>}
                </div>
              ))}
            </div>
            <button className="carousel-button next" onClick={handleNext}>
              <img
                src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="developmental-pillars">
        <div className="development-head">
          <h1>UpTodd Expert Personalised Program -</h1>
          <h2>Nurture your baby's genius potential</h2>
          <p>
            Holistic Approach of baby brain development on complete foundational
            Pillars - <span> Just 10 Minutes a day</span>
          </p>
        </div>
        <div className="development-container">
          <div className="development-lest">
            {pillarsList.map((value) => (
              <div
                key={value.id}
                onClick={() => handleCardClick(value.id)}
                className={`development-card ${
                  clickedCardId === value.id ? "active" : ""
                }`}>
                <h2>{value.title}</h2>
                <div className="four-pillars-list">
                  <ul>
                    <li>
                      <FaCheckCircle />
                      <span>{value.text1} </span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>{value.text2}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCheckCircle />
                      <span>{value.text3}</span>
                    </li>
                    <li>
                      <FaCheckCircle />
                      <span>{value.text4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="development-image">
            <img
              src="https://www.uptodd.com/images/newWebsite/expert-personalised-program.webp"
              alt=""
            />
          </div>
        </div>
        <div className="developmental-pillars-footer">
          <Button text={explore} />
          <p>
            Create Brain stimulating home envrionment for your baby, by best on
            the Planet. We have your back in this journey
          </p>
        </div>
      </section>
      <section className="start-now-banner">
        Stop overspending on generic and hamful toys, filled with Chlorinated
        Paraffin-{">"} <br /> Toxic for your baby brain growth
        <div>
          <Button text={start} />
        </div>
      </section>
      <section className="product-and-cost">
        <div className="product-and-cost-header">
          <h1>UpTodd™ Genius Premium Program</h1>
          <h2>
            Exclusive Parenting Program for Overall Baby Brain Development
          </h2>
          <h3>
            Exclusive Mega KIT + World's Only True Personalised APP + Brain Dev.
            Report & Support from World's Top Experts
          </h3>
        </div>
        <div className="product-and-cost-container">
          <ul className="product-and-cost-list">
            <li>
              <FaCheckCircle /> <span>Dedicated R&D Team Care</span>
            </li>
            <li>
              <FaCheckCircle /> <span>Research Backed Growth System</span>
            </li>
            <li>
              <FaCheckCircle /> <span>Personalised Organic Mega Kit</span>
            </li>
            <li>
              <FaCheckCircle /> <span>One-Stop Personalised APP</span>
            </li>
            <li>
              <FaCheckCircle /> <span>Holistic Tracking & Brain Reports</span>
            </li>
            <li>
              <FaCheckCircle /> <span>Recognitions & Certifications</span>
            </li>
          </ul>
        </div>
        <div className="product-and-cost-container-card">
          {premiumProgram.map((card, index) => (
            <div key={index} className="product-and-cost-card">
              <h1>{card.text1}</h1>
              <h2>{card.text2} </h2>
              <p>{card.text3} </p>
              <div className="card-perMonth">
                <span>{card.perMonth}</span>
              </div>
              <h3>{card.discountPrice}</h3>
              <del>{card.deletePrice} </del>
              <div className="enroll-btn">
                <Button text={enroll} />
              </div>
            </div>
          ))}
        </div>
        <div className="program-test">
          <p>
            Want to know more about program
            <span onClick={openModal}>see here</span>
          </p>
          <Modal show={showModal} onClose={closeModal} title="My Modal">
            <p>This is the content inside the modal.</p>
          </Modal>
        </div>
      </section>
      <section className="developmental-kit">
        <div className="kit-intro">
          <div>
            <h3>Curated Just for You: Mega Kit at Your Doorstep</h3>
            <p>World's only true personalised system</p>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/kit-shipment.svg"
            loading="lazy"
            alt="Personalised Baby Kit"
          />
        </div>
        <div className="kit-video">
          <iframe
            loading="lazy"
            srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/r1SwlfmvuCM?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/kit-video.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:3%;top:30%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            data-gtm-yt-inspected-4="true"
            data-gtm-yt-inspected-40611628_62="true"
            id="72071507"
            data-gtm-yt-inspected-14="true"></iframe>
          <h3>SAMPLE Personalised KIT</h3>
        </div>
      </section>
      <section className="awared-babies">
        <h1>
          Brilliant Minds: <span> Celebrating Global Baby Champions</span>
        </h1>
        <button className="carousel-button prev" onClick={handlePrev}>
          <img
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            alt="Previous"
          />
        </button>
        <div class="carousel" ref={carouselRef}>
          {babyAwardList.map((ele) => (
            <div key={ele.id} className="carousel-card">
              <img src={ele.img} alt="" />
              <h3>{ele.title} </h3>
              <p>{ele.description} </p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          <img
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            alt="Next"
          />
        </button>
      </section>
      <div className="line-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="314"
          height="15"
          viewBox="0 0 314 15"
          fill="none">
          <path
            d="M313 3.33333L302.601 9.73483C292.552 15.9212 279.732 15.2903 270.339 8.14717L269.488 7.49999C259.774 0.113225 246.325 0.113226 236.612 7.49999V7.49999C226.898 14.8868 213.449 14.8868 203.736 7.49999V7.49999C194.022 0.113222 180.573 0.113221 170.86 7.49999V7.49999C161.146 14.8868 147.697 14.8868 137.983 7.49998V7.49998C128.27 0.113216 114.821 0.113215 105.107 7.49998V7.49998C95.3935 14.8867 81.8854 14.8412 72.1715 7.45444V7.45444C62.5281 0.121297 49.1181 0.0760858 39.4747 7.40923V7.40923C29.7195 14.8274 16.1884 14.7325 6.53812 7.17834L0.999997 2.84311"
            stroke="#FF3F4E"
            stroke-width="2"></path>
        </svg>
      </div>
      <section class="happy-parents" id="happy-parents">
        <h1>
          Happy Parents, Thriving Tots:
          <span>Witnessing Their Child's Growth</span>
        </h1>
        <h5>
          Smarter Investment: Personalized Learning vs. Traditional Plastic Toys
        </h5>
        <div class="happy-parent-list-container">
          <div class="happy-parent-list">
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/LgQNwsePBBU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-1.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Audio visual technology is creating a difference and has
                  become a positive routine in my baby growth.
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/9gARbWYs_oA?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-9.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Monthly developmental reports in Uptodd’s parenting program
                  help me in identifying and resolving gaps in my baby brain
                  development.
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/_VP-LnAATCs?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-2.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Uptodd is the One place for all Parenting "Needs" and complete
                  growth of my baby.
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/OuCVjrXvQGE?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-3.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Searching for Parenting Problem for baby? One Stop solution -
                  Only UpTodd
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/Oil_sH2wQmQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-4.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Unique baby activities - Everyone must try their expert
                  parenting program
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/YI-L4Kl-zvQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-5.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Being first-time parents, UpTodd guided us, being first-time
                  parents, with their comprehensive parenting program for baby
                  development.
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/XPHIwRvVcro?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-6.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Brain boosters and Neural Music remove my baby's anxiety and
                  help in toddler’s development - genius in making
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/j-2dLZ4vdP8?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-7.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  I am happy to see the progress of my baby’s brain growth,
                  through Uptodd activities.
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/yo9kFL29yHU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-8.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Recognises all the household items through Uptodd flash cards
                  kit - Happy to see my little baby brain growing
                </p>
              </div>
            </div>
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/Hz--XOAILY4?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='images/newWebsite/happy-parents/happy-parent-10.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Proud MOM of International Record Holder at UpTodd, Dhruvut
                </p>
              </div>
            </div>
          </div>
          <img
            class="happy-parents-slider-next"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            loading="lazy"
            alt="Next Happy Parent"
          />
          <img
            class="happy-parents-slider-prev"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            loading="lazy"
            alt="Prev Happy Parent"
          />
        </div>
        <div class="happy-parents-button">
          <button
            id="homeScreenHappyParentsSection"
            onclick="showBookDemoPopup('happyParents')">
            Fuel Your Child's Development!
          </button>
        </div>
      </section>
      <section class="doctor-review" id="doctorreview">
        <h1>Recommended by Top Global Experts</h1>
        <h5>
          Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting Experts
          &amp; Professors
        </h5>

        <div class="doctor-review-list">
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/jaideep_sharma.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/jaideep_sharma.png'"
                loading="lazy"
                alt="Baby brain growth expert Dr.Jaideep Sharma"
              />
              <div>
                <h3>Jaideep Sharma</h3>
                <h6>Doctor, AIIMS, 1981 Batch</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                UpTodd’s parenting program for baby maximizes baby potential
                from the womb to 5 years, offering an impressive solution for
                early baby brain development
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/krishna_vedula.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/krishna_vedula.png'"
                loading="lazy"
                alt="Baby brain development specialist Krishna Vedula"
              />
              <div>
                <h3>Krishna Vedula</h3>
                <h6>Prof. MIT (USA)</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                This parenting program for baby addresses the global need for
                early intervention, maximizing babies; learning potential from
                prenatal to age 5
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/manoj_mondal.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/manoj_mondal.png'"
                loading="lazy"
                alt="Baby brain development expert Manoj Mondal"
              />
              <div>
                <h3>Manoj Mondal</h3>
                <h6>Prof. IIT Kharagpur</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                Home learning shapes success, and this parenting program for
                baby unleashes your baby abilities, benefiting future
                generations and informed parents
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/vaishal_sharma.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/vaishal_sharma.png'"
                loading="lazy"
                alt="Baby brain growth expert Vaishal Sharma"
              />
              <div>
                <h3>Vaishal Sharma</h3>
                <h6>Doctor, AIIMS, IVF Spec.</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                In the first 5 years, 90% of the baby's brain develops. UpTodd
                is doing great tech and research work to nurture baby
                development through their parenting program
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/sudhanshu.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/sudhanshu.png'"
                loading="lazy"
                alt="Baby brain development specialist Sudhanshu Singh"
              />
              <div>
                <h3>Sudhanshu Singh</h3>
                <h6>Doctor, MBBS &amp; MD, CMC Vellore</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                UpTodd, backed by the expertise of over 1K professionals,
                nurtures their genius during the first 5 years with a
                comprehensive parenting program for baby
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/mani_kapur.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/mani_kapur.png'"
                loading="lazy"
                alt="Baby brain growth specialist Mani Kapur"
              />
              <div>
                <h3>Mani Kapur</h3>
                <h6>Doctor, MBBS &amp; PG, Gyno</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                Pregnancy is crucial; the baby's brain grows fastest in the
                womb. Post-birth stimulation is also vital for nurturing the
                baby's genius through UpTodd's baby parenting program
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/saurabh_khanna.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/saurabh_khanna.png'"
                loading="lazy"
                alt="Baby growth specialist Saurabh Khanna"
              />
              <div>
                <h3>Saurabh Khanna</h3>
                <h6>Doctor, MBBS &amp; PG, Pedia</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                Every baby is born a genius, needing personalized care for
                optimal growth. UpTodd excels in nurturing babies' brain
                abilities and supporting parents through a tailored program
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/sarvesh_thakur.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/sarvesh_thakur.png'"
                loading="lazy"
                alt="Baby Development Specialist Sarvesh Thakur"
              />
              <div>
                <h3>Sarvesh Thakur</h3>
                <h6>Doctor, MBBS &amp; PG, Pedia</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                From birth to 3-4 years, crucial developmental growth occurs.
                UpTodd ensures perfect baby development with comprehensive care
                in their parenting program
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/vipul_sehrawat.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/vipul_sehrawat.png'"
                loading="lazy"
                alt="Baby Growth Expert Vipul Sehrawat"
              />
              <div>
                <h3>Vipul Sehrawat</h3>
                <h6>Doctor, MBBS &amp; MD, MAMC</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                With expertise in fetal ultrasound, I see the importance of
                early cognitive care. UpTodd provides the best care from womb to
                60 months, laying a solid foundation for your baby
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/aditya_sharma.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/aditya_sharma.png'"
                loading="lazy"
                alt="Infant brain growth expert Aditya Sharma"
              />
              <div>
                <h3>Aditya Sharma</h3>
                <h6>Doctor, M.Ch. &amp; MS, Apollo</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                UpTodd fosters 300% potential growth through high-quality care
                from womb to 60 months, offering the world's first one-stop
                solution in a parenting program for your baby
              </p>
            </div>
          </div>
          <div class="doctor-review-card">
            <div class="doctor-review-image-part">
              <img
                src="https://www.uptodd.com/images/newWebsite/doctors/rohit_kalani.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/doctors/rohit_kalani.png'"
                loading="lazy"
                alt="Infant growth specialist Rohit Kalani"
              />
              <div>
                <h3>Rohit Kalani</h3>
                <h6>Doctor, MBBS &amp; MD, Neonatol</h6>
              </div>
            </div>
            <div class="doctor-review-quote">
              <img
                src="https://www.uptodd.com/images/newWebsite/quote.svg"
                loading="lazy"
                alt="quote"
              />
              <p>
                At NICU, we see the impact of stimulation therapy. UpTodd's
                products support it perfectly for babies, integrated into their
                parenting program for babies
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="research-backed">
        <h1>
          Science-Backed Approach: <span>Rooted in Research</span>
        </h1>
        <h5>
          Developed using research from leading Global institutions &amp;
          Organisations
        </h5>
        <div class="insti-research">
          <div class="insti-head">
            <h4>Research analysed by institutions from</h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
            onerror="this.onerror=null; this.src='/images/newWebsite/research-insti.png'"
            loading="lazy"
            alt="IIT,IIM,MIT,Harvard Research Institutes"
          />
          <p>and 35+ other top global institutions</p>
        </div>
        <div class="insti-research-mobile">
          <div class="insti-research-mobile-head">
            <h4>Research analysed by institutions from</h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/research-insti-mobile.webp"
            onerror="this.onerror=null; this.src='/images/newWebsite/research-insti-mobile.png'"
            loading="lazy"
            alt="IIT,IIM,MIT,Harvard Research Institutes"
          />
        </div>

        <div class="theory-research">
          <div class="theory-head">
            <h4>Enriched with top research by</h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
            onerror="this.onerror=null; this.src='/images/newWebsite/researchers/all_researchers.png'"
            loading="lazy"
            alt="Research Backed Personalised Program for Baby Development"
          />
          <p>and 50+ other top global experts</p>
        </div>
        <div class="theory-research-mobile">
          <div class="theory-research-mobile-head">
            <h4>Enriched with top research by</h4>
          </div>
          <div class="theory-research-mobile-list">
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/glenn-doman.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/glenn-doman.png'"
                loading="lazy"
                alt="glenn-doman baby development expert"
              />
              <h3>Glenn Doman</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/maria-montessori.png'"
                loading="lazy"
                alt="maria-montessori baby development expert"
              />
              <h3>Maria Montessori</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/rudolf-steiner.png'"
                loading="lazy"
                alt="rudolf-steiner baby development expert"
              />
              <h3>Rudolf Steiner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/bf-skinner.png'"
                loading="lazy"
                alt="bf-skinner baby development expert"
              />
              <h3>BF Skinner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/loris-malaguzzi.png'"
                loading="lazy"
                alt="loris-malaguzzi baby development expert"
              />
              <h3>Loris Malaguzzi</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/howard-gardner.png'"
                loading="lazy"
                alt="howard-gardner baby development expert"
              />
              <h3>Howard Gardner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/diana-baumrind.png'"
                loading="lazy"
                alt="diana-baumrind baby development expert"
              />
              <h3>Diana Baumrind</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/swami-vivekanand.png'"
                loading="lazy"
                alt="swami-vivekanand"
              />
              <h3>Swami Vivekanand</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                onerror="this.onerror=null; this.src='/images/newWebsite/researchers/jean-piaget.png'"
                loading="lazy"
                alt="jean-piaget baby development expert"
              />
              <h3>Jean Piaget</h3>
            </div>
          </div>
        </div>
      </section>
      <section class="our-mentors" id="our-mentors">
        <h1>
          Meet our Mentors &amp; Curators |
          <span>100+ Curators R&amp;D Team</span>
        </h1>
        <div class="mentors-list">
          <div class="mentor-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/professors/krishna_vedula.png'"
              loading="lazy"
              alt="Uptodd mentor Prof.Krishna Vedula MIT"
            />
            <h3>
              Krishna Vedula
              <br />
              <span>Professor, MIT, United States</span>
            </h3>
          </div>
          <div class="mentor-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/professors/jaideep_sharma.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/professors/jaideep_sharma.png'"
              loading="lazy"
              alt="Uptodd mentor Dr.Jaideep Sharma AIIMS"
            />
            <h3>
              Dr. Jaideep Sharma
              <br />
              <span>MBBS &amp; MD, AIIMS, New Delhi</span>
            </h3>
          </div>
          <div class="mentor-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/professors/sudhanshu.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/professors/sudhanshu.png'"
              loading="lazy"
              alt="Uptodd mentor Dr.Sudhanshu Singh"
            />
            <h3>
              Dr. Sudhanshu
              <br />
              <span>MD, DSMA CMC Vellore</span>
            </h3>
          </div>
          <div class="mentor-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/professors/manoj_mondal.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/professors/manoj_mondal.png'"
              loading="lazy"
              alt="Uptodd mentor Prof.Manoj Mondal IIT KGP"
            />
            <h3>
              Manoj Mondal
              <br />
              <span>Professor, IIT Kharagpur</span>
            </h3>
          </div>
          <div class="mentor-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/professors/PK_Mishra.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/professors/PK_Mishra.png'"
              loading="lazy"
              alt="Uptodd mentor PK Mishra IIT BHU"
            />
            <h3>
              Prof. PK Mishra
              <br />
              <span>IIT BHU</span>
            </h3>
          </div>
        </div>
        <h1>UpTodd™ has been Featured In</h1>
        <div class="featured-in">
          <img
            src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
            onerror="this.onerror=null; this.src='/images/newWebsite/featured-in.png'"
            loading="lazy"
            alt="Media Houses Featuring UpTodd"
          />
        </div>
      </section>
      <section class="board-container happy-parents">
        <h1>Meet our Other Board Members</h1>
        <h5>On a mission to empower 10 Million+ families globally by 2026</h5>
        <div class="board-wrapper">
          <img
            id="boardGridPrevBtn"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            loading="lazy"
            alt="Previous Board Member"
          />
          <div class="board-grid">
            {boardMembers.map((ele) => (
              <div class="board-card">
                <img src={ele.img} alt="" />
                <h3>{ele.name} </h3>
                <span>{ele.position} </span>
                <p>{ele.description}</p>
              </div>
            ))}
          </div>
          <img
            id="boardGridNextBtn"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            loading="lazy"
            alt="Next Board Member"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
