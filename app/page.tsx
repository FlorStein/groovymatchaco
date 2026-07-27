const benefits = [
  { n: "01", title: "Energía que fluye", text: "Matcha de calidad con cafeína natural para un impulso parejo, sin el bajón del café." },
  { n: "02", title: "Listo cuando vos", text: "Abrí, agitá y disfrutá. Frío, cremoso y listo para acompañarte a donde vayas." },
  { n: "03", title: "Sabor de verdad", text: "Ingredientes simples, textura suave y sabores que hacen del matcha un plan, no una obligación." },
];

const reviews = [
  { quote: "La energía justa y el sabor más rico. Ya reemplazó mi café de la tarde.", name: "Mica · Buenos Aires" },
  { quote: "Original Vibes es cremoso, fresco y cero empalagoso. Mi nueva obsesión.", name: "Juli · Rosario" },
  { quote: "Lo llevo a la facu y llego con foco hasta el final. El pack mixto es un golazo.", name: "Nico · Córdoba" },
];

const packs = [
  { name: "Probalo", qty: "Pack x 4", price: "$15.900", note: "$3.975 por lata", badge: "" },
  { name: "Tu semana groovy", qty: "Pack x 8", price: "$28.900", note: "$3.613 por lata", badge: "MÁS ELEGIDO" },
  { name: "Full matcha mode", qty: "Pack x 12", price: "$39.900", note: "$3.325 por lata", badge: "MEJOR PRECIO" },
];

const faqs = [
  ["¿Qué tiene Groovy Matcha?", "Matcha, bebida vegetal y sabores naturales. La fórmula exacta puede variar según el sabor; encontrás el detalle en cada lata."],
  ["¿Cuánta cafeína tiene?", "Aporta la energía natural del matcha. Está pensada para sentirse sostenida y más amable que un café intenso."],
  ["¿Cómo se toma?", "Bien fría. Agitá la lata antes de abrir y disfrutala sola o con hielo."],
  ["¿Hacen envíos?", "Sí, enviamos a todo el país. El costo y el plazo se calculan al ingresar tu código postal en el checkout."],
  ["¿Puedo mezclar sabores?", "Sí. En los packs mixtos podés armar tu combinación favorita entre los sabores disponibles."],
];

const flavorImages = [
  ["1783991010562.png", "Original Vibes"],
  ["1783991033509.png", "Berry Bliss"],
  ["1783991045193.png", "Vanilla Dream"],
  ["1783991154078.png", "Lavender Haze"],
  ["1783991253147.png", "Chai Spice Up"],
  ["1783992406101.png", "Mango Groove"],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Groovy Matcha Co., inicio">
          GROOVY<br />MATCHA CO.
        </a>
        <nav aria-label="Navegación principal">
          <a href="#beneficios">Por qué matcha</a>
          <a href="#sabores">Sabores</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="navCta" href="#packs">COMPRAR <Arrow /></a>
        <details className="mobileMenu">
          <summary aria-label="Abrir menú de navegación"><span></span><span></span><span></span></summary>
          <div>
            <a href="#beneficios">Por qué matcha</a>
            <a href="#sabores">Sabores</a>
            <a href="#faq">FAQ</a>
            <a href="#packs">Comprar <Arrow /></a>
          </div>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">MATCHA LATTE · LISTO PARA TOMAR</p>
          <h1>GOOD ENERGY.<br /><em>GROOVY</em> VIBES.</h1>
          <p className="heroText">Matcha cremoso en lata para levantar tu energía, sostener tu foco y hacer más rico cualquier momento.</p>
          <div className="heroActions">
            <a className="button dark" href="#packs">ENCONTRÁ TU SABOR <Arrow /></a>
            <span>DESDE $3.325<br />POR LATA</span>
          </div>
          <div className="matchaParallax" aria-hidden="true">
            <img src={asset("/media/matcha-ice-parallax.png")} alt="" />
          </div>
        </div>
        <div className="heroMedia">
          <video autoPlay muted loop playsInline poster={asset("/media/video-project-poster.png")} aria-label="Latas de Groovy Matcha en movimiento">
            <source src={asset("/media/video-project-final.mp4")} type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>ENERGÍA NATURAL ✦ SABOR REAL ✦ BUENAS VIBRAS ✦ ENERGÍA NATURAL ✦ SABOR REAL ✦ BUENAS VIBRAS ✦</div>
      </div>

      <section className="benefits section" id="beneficios">
        <div className="sectionIntro">
          <p className="eyebrow">TU NUEVO RITUAL</p>
          <h2>Todo lo que querés<br />de tu energía diaria.</h2>
        </div>
        <div className="benefitGrid">
          {benefits.map((item) => (
            <article key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flavors" id="sabores">
        <div className="flavorImage">
          <img src={asset("/media/1783991429653.png")} alt="Tres sabores de Groovy Matcha Co." />
        </div>
        <div className="flavorCopy">
          <p className="eyebrow">ELEGÍ TU MOOD</p>
          <h2>Un sabor para<br />cada versión de vos.</h2>
          <p>Original Vibes, Berry Bliss, Chai Spice Up y más. Todos suaves, refrescantes y con esa energía limpia que te sigue el ritmo.</p>
          <a className="textLink" href="#packs">VER TODOS LOS PACKS <Arrow /></a>
          <div className="flavorDots" aria-label="Sabores disponibles">
            <span className="green">ORIGINAL</span><span className="pink">BERRY</span><span className="orange">CHAI</span>
            <span>VANILLA</span><span>LAVENDER</span><span>MANGO</span>
          </div>
        </div>
        <div className="flavorGallery" aria-label="Galería de todos los sabores">
          {flavorImages.map(([image, flavor]) => (
            <figure key={image}>
              <img src={asset(`/media/${image}`)} alt={`Groovy Matcha ${flavor}`} loading="lazy" />
              <figcaption>{flavor}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="social section">
        <div className="socialHead">
          <p className="eyebrow">LO DICEN ELLOS</p>
          <h2>Mucho más que<br />una cara linda.</h2>
          <div className="rating">★★★★★ <span>4.9 / 5 · 327 reseñas</span></div>
        </div>
        <div className="reviewGrid">
          {reviews.map((review, index) => (
            <article key={review.name}>
              <span className="quote">“</span>
              <p>{review.quote}</p>
              <footer>{review.name}</footer>
              <span className="reviewNo">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="packs section" id="packs">
        <div className="packVisual">
          <img src={asset("/media/1783991539763.png")} alt="Latas Groovy Matcha Mango Groove y Vanilla Dream en hielo" />
          <div className="roundLabel">MIX<br />& MATCH</div>
        </div>
        <div className="packContent">
          <p className="eyebrow">MÁS LATAS, MÁS GROOVE</p>
          <h2>Armá tu stock.</h2>
          <p className="packLead">Elegí tu pack y combiná sabores como quieras. Envío gratis desde 8 latas.</p>
          <div className="priceList">
            {packs.map((pack) => (
              <article key={pack.qty} className={pack.badge === "MÁS ELEGIDO" ? "featured" : ""}>
                <div>
                  {pack.badge && <span className="badge">{pack.badge}</span>}
                  <h3>{pack.name}</h3><p>{pack.qty} · {pack.note}</p>
                </div>
                <strong>{pack.price}</strong>
                <a href="#final" aria-label={`Elegir ${pack.name}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div>
          <p className="eyebrow">SIN VUELTAS</p>
          <h2>Preguntas<br />frecuentes.</h2>
          <p>¿Te quedó alguna duda?</p>
          <a href="mailto:hola@groovymatcha.co">hola@groovymatcha.co</a>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta" id="final">
        <img src={asset("/media/1783991010562.png")} alt="" />
        <div>
          <p className="eyebrow">TU DÍA PIDE OTRA ENERGÍA</p>
          <h2>GET IN THE<br /><em>GROOVE.</em></h2>
          <a className="button light" href="#packs">QUIERO MI MATCHA <Arrow /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerBrand">GROOVY<br />MATCHA CO.</div>
        <p>Matcha en lata.<br />Energía en movimiento.</p>
        <div><a href="#top">INSTAGRAM</a><a href="#top">TIKTOK</a><a href="mailto:hola@groovymatcha.co">CONTACTO</a></div>
        <small>© 2026 GROOVY MATCHA CO. · HECHO CON BUENAS VIBRAS</small>
      </footer>
    </main>
  );
}
