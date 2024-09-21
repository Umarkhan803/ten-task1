import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import SliderComponent from "./SliderComponent";

const Home = ({ bookingText, explore, start, enroll }) => {
  const carouselRef = useRef(null); //

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
          <p>Want to know more about program see here</p>
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
    </>
  );
};

export default Home;
