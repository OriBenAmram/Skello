import heroImg from '../assets/imgs/hero.png';

export function HomePage() {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1>
            <span>Skello</span> Lorem ipsum dolor sit amet.
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, recusandae.</p>
          <button>To Demo</button>
        </div>
        <div>
          <img src={heroImg} className="hero-img" alt="" />
        </div>
      </div>
    </section>
  );
}
