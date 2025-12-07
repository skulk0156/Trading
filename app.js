

// 1) Enroll buttons -> WhatsApp Community
const WHATSAPP_COMM = "https://t.me/gscalperoffficial";

document.addEventListener("click", (e) => {
  const t = e.target;

  // Only trigger for buttons with class .enroll-btn
  if (t.closest && t.closest(".enroll-btn")) {

    // If clicking on Free One To One Sessions -> Google Form
    if (t.textContent.includes("Free 1-on-1 Trading Guidance Session")) {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfJ1GawWBXpNGwLW84obVh-VueeVGJE241u5GtoHwXFtYorOw/viewform",
        "_blank"
      );
      return;
    }

    if(t.textContent.includes("GScalper Mentorship Ecosystem")){
      window.open(
        "#gallery",
        "_blank"
      );
      return;
    }

    // Otherwise -> WhatsApp Community
    window.open(WHATSAPP_COMM, "_blank");
  }
});

// 2) Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if(navToggle){
  navToggle.addEventListener("click", ()=>{
    const expanded = navToggle.getAttribute("aria-expanded")==="true";
    navToggle.setAttribute("aria-expanded", (!expanded).toString());
    
    if(navLinks.style.display === "flex"){
      navLinks.style.display = "";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.background = "rgba(0,0,0,0.04)";
      navLinks.style.position = "absolute";
      navLinks.style.right = "18px";
      navLinks.style.top = "60px";
      navLinks.style.padding = "10px";
      navLinks.style.borderRadius = "10px";
    }
  });

  // close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      if(window.innerWidth < 900) {
        navLinks.style.display = "";
        navToggle.setAttribute("aria-expanded","false");
      }
    });
  });
}

// 3) Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});


// -------------------------------------------------------------------
// 4) GALLERY FULLSCREEN LIGHTBOX (Images + Videos)
// -------------------------------------------------------------------

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbVideo = document.getElementById("lightbox-video");
const lbInfo = document.getElementById("lightbox-info");
const lbCloseBtn = document.querySelector(".close-btn");

// Custom descriptions for each card
const courseDescriptions = {
  "course-5.jpg": `
    <h3>👉 FMM – Forex Mastery Programme (5 Weeks)</h3>
    <p>
      • Master Price Action, Liquidity & Trading Psychology <br>
      • $5000 Giveaway Funded Account included <br>
      • GScalper Journal + Goodies <br>
      • 1 Week of Strategy Learning & Execution <br>
      • Daily Discipline, Real Emotions & Real Trades <br>
      • 4 Weeks of Live Trading (London & NY Sessions) <br>
      • Ideal for traders wanting a complete transformation <br>
      ✋ <strong>Price: 13,999/-</strong>
    </p>
    <a href="https://wa.me/8421493018" target="_blank" class="join-btn">👇 Join Now</a>`,

  "course-4.jpg": `
    <h3>👉 TAB – The Alpha Batch (Premium Mentorship)</h3>
    <p>
      • Exclusive 1-on-1 & Small Group Mentorship <br>
      • 1 Week Strategy + 4 Weeks Live Trading <br>
      • $5000 Giveaway Funded Account + GScalper Kit <br>
      • Daily Psychology & Execution Guidance <br>
      • 6 Extra Months of Live Trading Access <br>
      • Only 5 Students per Batch <br>
      • Designed for serious traders wanting elite-level training <br>
      ✋ <strong>Price: 34,999/-</strong>
    </p>
    <a class="join-btn" target="_blank" href="https://wa.me/8421493018">👇 Join Now</a>`,

  "course-3.jpg": `
    <h3>👉 TSE – The Silent Edge (8 Weeks)</h3>
    <p>
      • Specially designed for Deaf & Mute Trading Community <br>
      • 8 Weeks of Learning + Live Trading <br>
      • $5000 Funded Account on Day 14 <br>
      • Daily Psychology & Mentorship Support <br>
      • 1 Extra Month of Live Trading Access <br>
      • Only 10 Students per Batch for focused learning <br>
      • A safe, inclusive mentorship environment <br>
      ✋ <strong>Price: 28,999/-</strong>
    </p>
    <a class="join-btn" target="_blank" href="https://wa.me/8421493018">👇 Join Now</a>`,

  "course-2.jpg": `
    <h3>👉 Our Community Channel</h3>
    <p>
      • Click the Join button to enter our official and trusted community channels. <br>
      • Get updates, assistance, and exclusive resources. <br>
      🤝 Stay connected with our active trading family!
    </p>
    <a class="join-btn" target="_blank" href="https://t.me/gscalperoffficial">👇 Join Now</a>`,

  "course-1.jpg": `
    <h3>👉 Free One To One Sessions</h3>
    <p>
      • Click the Join button to participate in our Free One-to-One Session. <br>
      • Fill the Google Form with your required details. <br>
      ✋ Limited slots – don't miss your opportunity!
    </p>
    <a class="join-btn" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfJ1GawWBXpNGwLW84obVh-VueeVGJE241u5GtoHwXFtYorOw/viewform">👇 Join Now</a>`
};


// Open lightbox
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {

    const img = card.querySelector("img");
    const vid = card.querySelector("video");

    // Reset visibility
    lbImg.style.display = "none";
    lbVideo.style.display = "none";

    if (img) {
      lbImg.src = img.src;
      lbImg.style.display = "block";

      // Set description based on image filename
      const fileName = img.src.split("/").pop();
      lbInfo.innerHTML = courseDescriptions[fileName] || "<p>No description available.</p>";
    }

    if (vid) {
      lbVideo.src = vid.src;
      lbVideo.style.display = "block";
    }

    lb.style.display = "flex";
  });
});

// Close button
lbCloseBtn.addEventListener("click", () => {
  lb.style.display = "none";
  lbImg.src = "";
  lbVideo.src = "";
  lbInfo.innerHTML = "";
});

// Click outside to close
lb.addEventListener("click", (e) => {
  if (e.target === lb) {
    lb.style.display = "none";
    lbImg.src = "";
    lbVideo.src = "";
    lbInfo.innerHTML = "";
  }
});


// Contact form submission (FormSubmit)
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    // Let the form submit normally
    alert("Thanks! Your message has been sent successfully.");
  });
}


/// 6) Improve accessibility
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab') document.body.classList.add('show-focus');
});

// ALL TESTIMONIALS (merged + updated + handles removed)
const items = [
  {name:"Saurabh K.", text:"Session khup changla hota sir. Tumhi mindset kasa work karto te detail madhe samjavla. Mala finally samajla ki problem strategy madhe nahi, execution madhe hoti. Thanks for opening my eyes."},

  {name:"Pooja R.", text:"Sir, tumhi psychology jevha samjavta na, te direct heart la lagta. I finally stopped overtrading because of your simple rules. Truly grateful!"},

  {name:"Nikhil M.", text:"Mala wat hota trading is complicated, pan sir cha session nantar sagla clear jhala. Risk management itka simple asu shakto he pahilyanda kalala. Highly recommended!"},

  {name:"Swapnil J.", text:"Sir, tumhi technicals + psychology jevha mix karta, te unmatched aahe. Mala years lagle aste he samjavlyala. Atta confidence aala ki mi independent trade karu shakto."},

  {name:"Vaishnavi P.", text:"I loved how sir explained setups in a calm and simple way. Marathi madhye bolun samjavla mhanun mala extra comfortable vatla. Trading feels possible now."},

  {name:"Aditya L.", text:"He session ne mala overthinking pasun baher kadla. Sir ne exact mistakes point out kele ani fix karnyasathi plan dil. I feel like a new trader now."},

  {name:"Rutuja S.", text:"Sir cha session khup personal vatla, like he really cared about my issues. Psychology, discipline, SL placement — sagla crystal clear jhala. Thank you so much!"},

  {name:"Prathamesh D.", text:"I was losing confidence before joining this. Pan sir ne jevha sangitla ki SIMPLE setups + strong psychology = consistency, te aaj real trade madhe proof hota ahe. Best mentorship!"},

  {name:"Omkar B.", text:"Sir, tumhi charts simplify kele. Mala watat hota ki markets random aahet, pan atta structure disto. Mindset sudharla, patience vadhla — exactly what I needed."},

  {name:"Siddhesh P.", text:"Ekda trade fail zala ki mi panic hota. Pan sir ne loss acceptance kasa karava te teach kelं. Aata mi calm panayene trade karto. Truly life-changing session."},

  {name:"Rohit S.", text:"The clarity I got in just one session was more than what I learned in months of YouTube videos. Vikas sir doesn’t confuse — he simplifies. My psychology issues finally make sense. Grateful!"},

  {name:"Neha P.", text:"For the first time, someone actually explained why I take impulsive trades and how to stop it. The session felt like talking to someone who really understands traders. Highly recommended!"},

  {name:"Arvind M.", text:"Sir’s guidance changed the way I look at charts. Earlier I used to chase trades — now I wait for my setup. Live examples, mindset shifts, and simple explanations — truly a game-changer."},

  {name:"Harsh V.", text:"Bohot courses kiye, but kisi ne bhi psychology itna practical way mein nahi samjhaya. Sir directly pointed out my mistakes and gave a plan I can follow daily. Confidence aa gaya."},

  {name:"Ananya G.", text:"I was struggling with overthinking and fear of losses. This session helped me understand my patterns and fix my approach. I left the Zoom call with clarity I didn’t have for years."},

  {name:"Mohit K.", text:"The best part? Sir actually listens. He broke down my strategy and rebuilt it into a simple rule-based method. For the first time, I’m not confused about entries and exits."},

  {name:"Devansh R.", text:"Live trading + real mindset coaching — deadly combo. Sir showed how to think like a trader, not a gambler. Proud to be part of the GScalper community."},

  {name:"Sakshi J.", text:"Earlier I used to panic after every red candle. After this mentorship, I finally understand risk, SL placement, and execution discipline. Sir gives more value than paid courses."},

  {name:"Yash B.", text:"1-on-1 session felt personalised — not generic. Sir analysed my trading journal and told me exactly what to fix. I now know my strengths and weaknesses clearly."},

  {name:"Faizan M.", text:"The way Vikas sir connects psychology with technicals is unique. He makes trading feel logical instead of emotional. This session was the push I needed to get serious."},

  {name:"Shreyas", text:"The sessions are interactive and help decode our way of thinking. We get solutions to improve, and they create real impact once applied. Thanks to Vikas sir."},

  {name:"Tanishka D.", text:"Really grateful for the 1-on-1 session. It boosted my trading confidence and cleared many concepts. Loved how simply you explained everything. Proud to be part of GScalper!"},

  {name:"Ashutosh M.", text:"Incredible 1-on-1 session! Sir made complex concepts easy. Covered structure, risk, and live analysis. Walked out confident with a solid plan. Highly recommended!"},

  {name:"Pratik P.", text:"The 1-on-1 session was very helpful and practical. Thanks for guiding beginners and giving time for free — truly appreciable."},

  {name:"Abhi", text:"Trading course bohot accha tha! Risk management, technicals, mindset — sab clear samjhaya. Sessions interactive the aur live trading se confidence badha. Highly recommended!"},

  {name:"Sriniwas K.", text:"I learned how to trade live, how mindset works, and why discipline matters. Now I know my mistakes and how to fix them. Thank you Gupta sir!"},

  {name:"Niranjan", text:"True genuine person but underrated. Session changed how I handle loss and calmness in trading."},
];

// Ensure minimum 20 items
while(items.length < 0){
    items.push({
        name:"Guest "+(items.length+1),
        text:"This is a sample testimonial. Add your real one here."
    });
}

const track = document.getElementById("track");

// Create card — NO avatar, NO handle
function createCard(item){
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <div class="meta">
            <div class="name">${item.name}</div>
            <div class="text">${item.text}</div>
        </div>
    `;
    return div;
}

// Add cards
items.forEach(item => track.appendChild(createCard(item)));

// Duplicate for infinite scroll
const cloneList = [...track.children];
cloneList.forEach(node => track.appendChild(node.cloneNode(true)));


