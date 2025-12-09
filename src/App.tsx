import React, { useState, useEffect } from 'react';
import { Header, Footer } from "./Layout";
import { Icon } from '@iconify/react';
import CountdownTimer from "./CountdownTimer";
import {
  Play,
  Star,
  Users,
  TrendingUp,
  MessageCircle,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  DollarSign,
  Award,
  Target,
  Phone,
  Mail,
  ArrowRight,
  X,
  UserPlus,
  BookOpen,
  User,
  Check,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';

function App() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  // NOX-style 1-Hour Countdown (for FOMO Section)
  function CountdownBoxes() {
    const target = React.useMemo(() => new Date(Date.now() + 60 * 60 * 1000), []);
    const [timeLeft, setTimeLeft] = React.useState({ m: 0, s: 0 });

    React.useEffect(() => {
      const tick = () => {
        const diff = Math.max(0, target - new Date());
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft({ m, s });
      };
      tick();
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, [target]);

    const Box = ({ label, value }) => (
      <div className="min-w-[80px] md:min-w-[100px]">
        <div className="relative rounded-xl p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              boxShadow:
                "0 0 20px rgba(199,160,85,0.25), inset 0 0 12px rgba(199,160,85,0.10)",
            }}
          />
          <div className="text-3xl md:text-5xl font-extrabold tracking-widest text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#EFD9B0] mt-1">
            {label}
          </div>
        </div>
      </div>
    );

    useEffect(() => {
      const btns = document.querySelectorAll(".track-subscribe-btn");

      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (window.fbq) {
            window.fbq("track", "Subscribe");
          }
        });
      });

      return () => {
        btns.forEach((btn) => {
          btn.removeEventListener("click", () => { });
        });
      };
    }, []);


    return (
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <Box label="Minutes" value={timeLeft.m} />
        <span className="text-[#EFD9B0]/70 font-bold text-3xl">:</span>
        <Box label="Seconds" value={timeLeft.s} />
      </div>
    );
  }




  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppPopup(true);
    }, 30000); // Show popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);



  return (
    <>

      <div
        className="min-h-screen bg-[#F8F8F8]"
        style={{
          '--color-primary': '#C7A055',
          '--color-primary1': '#EFD9B0',
          '--color-secondary': '#182432',
          '--color-accent': '#421B20',
          '--color-bg': '#F8F8F8',
          '--color-bg1': '#012B85',
          '--color-text': '#182432',
          '--color-body-text': '#000000'
        } as React.CSSProperties & Record<string, string>}
      >

        <Header />
        {/* Hero Section – Rajani Bagh */}
        <section
          id="about"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/30 text-[#182432] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] opacity-10 bg-cover bg-center pointer-events-none" />

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Side - Content */}
              <div className="space-y-10">
                {/* Headline */}
                <div className="space-y-5">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                    Hi, I’m
                    <span className="text-[#C7A055]"> Rajani Bagh</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Chhattisgarh ki ek <span className="font-semibold text-[#C7A055]">simple housewife</span> hote hue bhi,
                    maine ghar-parivar sambhalte-sambhalte{" "}
                    <span className="font-semibold text-[#C7A055]">digital skills</span> seekhna shuru kiya—aur
                    dheere-dheere apni zindagi ko ek nayi direction di.
                    <br /><br />
                    StraviX ke support se, bina office jaaye aur bina technical background ke, maine kuch hi mahino me
                    apni earning ko <span className="font-bold text-[#C7A055]">multi-fold grow</span> kiya—woh bhi
                    sirf ghar par baith kar.
                    <br /><br />
                    Aaj main un sab housewives ko guide karna chahti hoon jo apni{" "}
                    <span className="font-semibold text-[#C7A055]">digital income journey</span> shuru karna chahti hain,
                    apni pehchaan banana chahti hain, aur apne sapnon ko ek mauka dena chahti hain.
                  </p>
                </div>

                {/* FOMO Line */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-red-700 font-bold text-base md:text-lg">
                      Only <span className="text-red-600">6/10 mentorship seats</span> left this month —
                      first come, first guided.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <a
                    href="https://wa.aisensy.com/aaasev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-6 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl gap-3"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    <span>Message Me on WhatsApp Now</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Picture */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="relative w-64 md:w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#E9E4D8] bg-white transition-all duration-500 group-hover:shadow-[0_15px_60px_rgba(0,0,0,0.20)] group-hover:-translate-y-1">
                    <img
                      src="/assets/images/rajani-bagh.jpeg" // replace with Rajani Bagh's image when available
                      alt="Rajani Bagh – StraviX Mentor"
                      className="w-full h-full object-cover"
                    />

                    {/* Bottom Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-lg md:text-xl font-bold text-white">Rajani Bagh</h3>
                      <p className="text-sm md:text-base text-[#C7A055] font-semibold">
                        StraviX Homemaker Mentor
                      </p>
                    </div>

                    {/* Vertical Badge */}
                    <div className="absolute top-4 right-0 bg-[#182432] text-white font-bold px-3 py-2 rounded-l-lg shadow-md flex flex-col items-center space-y-1">
                      <img
                        src="/assets/images/stravix.png"
                        alt="StraviX Logo"
                        className="w-14 md:w-20"
                      />
                      <p className="text-sm md:text-md">Affiliate</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feedback Highlight Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#FFF7EC] via-white to-[#FDFBF7] relative overflow-hidden">

          {/* Soft Decorative Glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#C7A055]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EFD9B0]/15 rounded-full blur-3xl"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Headline */}
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#182432] mb-6 leading-snug">
              Real People. Real Growth.
              <br className="hidden md:block" />
              <span className="text-[#C7A055]">StraviX Transformation Stories</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
              Rashmi jaise kaayi homemakers, students aur professionals ne StraviX ke through
              apni digital earning journey shuru ki — aur is video me unki real stories,
              real struggles aur real results aap sunenge. ✨
            </p>

            {/* Video Wrapper */}
            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.10)] group">

              {/* Hover Shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>

              <iframe
                src="https://www.youtube.com/embed/ypC2S3WExWc?rel=0"
                title="StraviX Success Meet 2025 Feedback"
                className="w-full h-full aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>

        {/* Social Proof Section – Rajani Bagh */}
        <section className="py-16 bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF8F0] relative overflow-hidden">

          {/* Soft Glows */}
          <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#EFD9B0]/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C7A055]/15 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Headings */}
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#C7A055] tracking-wide uppercase">
                  Real Results
                </h2>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#182432] leading-snug">
                  Milestones That Defined My Journey
                </h3>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Har achievement ek reminder tha ki jab aap sahi guidance aur consistent action ke
                  saath chalte ho, <span className="text-[#C7A055] font-semibold">life truly transforms.</span>
                  <br />
                  Yeh kuch moments hain jinhone meri digital journey ko ek naye level par laa diya.
                </p>
              </div>

              {/* Image Slider */}
              <div className="relative mb-14">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>

                    {/* Slide 1 – StraviX Growth Icon */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/stravix-growth-icon.jpeg"
                          alt="StraviX Growth Icon"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          Honoured as the <span className="text-[#C7A055] font-bold">StraviX Growth Icon</span> —
                          proof that consistent efforts always shine.
                        </p>
                      </div>
                    </div>

                    {/* Slide 2 – Single Day Income ₹7,255 */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/income-7225.jpg"
                          alt="First Day Income – ₹7225"
                          className="w-full h-64 md:h-96 object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          First major breakthrough —
                          <span className="text-[#C7A055] font-bold">₹7,225 in a single day.</span>
                          A moment that changed everything.
                        </p>
                      </div>
                    </div>

                    {/* Slide 3 – 60K+ Earnings */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/50k.jpeg"
                          alt="60K Milestone"
                          className="w-full h-64 md:h-96 object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          Achieved <span className="text-[#C7A055] font-bold">₹50,000+</span> digitally —
                          a milestone that changed my confidence forever.
                        </p>
                      </div>
                    </div>
                    {/* Slide 3 – 60K+ Earnings */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/60k-income.jpg"
                          alt="60K Milestone"
                          className="w-full h-64 md:h-96 object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          Crossed <span className="text-[#C7A055] font-bold">₹60,000+</span> in digital income —
                          a milestone that boosted my confidence like never before.
                        </p>
                      </div>
                    </div>

                    {/* Slide 4 – Found Family in StraviX */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/my-comunity.jpeg"
                          alt="StraviX Community Family"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          Found friends who feel like <span className="text-[#C7A055] font-bold">family</span> —
                          a community that grows, learns & celebrates together.
                        </p>
                      </div>
                    </div>

                    {/* Slide 5 – StraviX Star Performer */}
                    <div className="w-64 md:w-80 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                      <div className="relative">
                        <img
                          src="/assets/images/60K.jpeg"
                          alt="StraviX Star Performer"
                          className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <div className="p-5 bg-[#182432] text-white h-full">
                        <p className="font-semibold leading-relaxed">
                          Awarded the <span className="text-[#C7A055] font-bold">StraviX Star Performer</span> milestone —
                          a reminder that dedication always gets recognised.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="flex justify-center mt-4 md:hidden">
                  <p className="text-sm text-gray-500">← Swipe to see more →</p>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Seats filling fast — only 6/10 mentorship seats left this month.
                  </p>
                  <a
                    href="https://wa.aisensy.com/aaasev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-6 py-3 rounded-full text-lg gap-2 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                    Message Me on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Real People. Real Growth - Community Section */}
        <section
          id="testimonials"
          className="bg-gradient-to-br from-white via-[#F8F8F8] to-[#EFD9B0]/10 pb-14 relative overflow-hidden"
        >
          {/* Soft Glow Effects */}
          <div className="absolute -top-12 left-0 w-48 h-48 bg-[#C7A055]/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#EFD9B0]/25 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Heading Section */}
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-bold my-3 text-[#C7A055]">
                  Real People. Real Progress.
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  StraviX ne sirf earning nahi badhayi — balki mindset, confidence
                  aur khud par belief ko bhi firse rebuild kiya.
                  Yahan har journey yeh dikhati hai ki jo seekhne aur action lene ko taiyar hota hai,
                  uska growth hona guaranteed hota hai. ✨
                </p>
              </div>

              {/* ========================= */}
              {/* Image Testimonials */}
              {/* ========================= */}
              <div className="mb-20">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Stories That Speak For Themselves
                </h3>

                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-5 pb-4" style={{ width: "max-content" }}>

                      {/* Images – SAME, only UI upgraded */}
                      {[
                        "jyoti.webp",
                        "sumyya.webp",
                        "sikha.webp",
                        "vishnu.webp",
                        "seema.webp",
                        "poonam.webp",
                      ].map((img, index) => (
                        <div key={index} className="relative w-64 md:w-64 flex-shrink-0">
                          <div className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                              src={`/assets/screenshots/${img}`}
                              alt={`Community testimonial ${index + 1}`}
                              className="w-full h-102 md:h-96 object-contain bg-gray-100"
                            />
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to explore →</p>
                  </div>
                </div>

                <p className="text-center text-gray-600 italic">
                  Yeh real stories prove karti hain ki sahi guidance + sahi system
                  ordinary logon ko extraordinary results tak le ja sakta hai.
                </p>
              </div>

              {/* ========================= */}
              {/* Video Testimonials */}
              {/* ========================= */}
              <div className="mb-14">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#182432] text-center">
                  Real Journeys. Real Breakthroughs.
                </h3>

                <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
                  In videos mein aap dekhenge ki kaise students, professionals aur homemakers ne
                  StraviX ke through apna pehla income, nayi confidence
                  aur ek stable digital identity create ki.
                </p>

                <div className="relative mb-6">
                  <div className="overflow-x-auto scrollbar-hide flex md:justify-center">
                    <div className="flex space-x-5 pb-4" style={{ width: "max-content" }}>

                      {/* Videos – SAME, UI upgraded */}
                      {[
                        "UPXNydsWT4Y",
                        "fILErfe0N-s",
                        "wqGQegetLTg",
                        "E5cu5SZPI80",
                      ].map((id, index) => (
                        <div key={index} className="relative w-54 md:w-64 flex-shrink-0">
                          <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${id}`}
                              title={`Success Story ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="rounded-xl"
                            ></iframe>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className="flex justify-center mt-4 md:hidden">
                    <p className="text-sm text-gray-500">← Swipe to watch more →</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <p className="text-red-700 font-bold text-lg mb-4">
                    ⚡ Your transformation could be next! Only 6/10 mentorship seats open.
                  </p>
                  <a
                    href="https://wa.aisensy.com/aaasev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] text-white px-4 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white mr-1" />
                    Message Me on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Registered & Legal Section - NEW PREMIUM DESIGN */}
        <section className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-white relative overflow-hidden">

          {/* Soft Background Glows */}
          <div className="absolute top-8 -left-8 w-44 h-44 bg-[#C7A055]/25 blur-3xl rounded-full"></div>
          <div className="absolute bottom-8 -right-8 w-56 h-56 bg-[#EFD9B0]/30 blur-3xl rounded-full"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">

              {/* Title */}
              <h2 className="text-[#C7A055] text-3xl md:text-5xl font-extrabold mb-4 tracking-wide leading-snug">
                100% Registered & Legal
              </h2>

              <p className="text-lg md:text-xl text-[#182432] mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
                StraviX is a fully verified and compliant organization — trusted by thousands across India.
              </p>

              {/* -------------------------------------- */}
              {/* NEW DESIGN: Premium Document Grid */}
              {/* -------------------------------------- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

                {/* MSME Certificate */}
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E3D8]/70 overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition duration-500">
                  <div className="aspect-[3/4] bg-white relative overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0001_kzkph1.jpg"
                      alt="MSME Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">MSME Certificate</h3>
                  </div>
                </div>

                {/* PAN Card (Old Aspect Handling Restored) */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E8E3D8] overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-auto md:aspect-[3/4] overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486593/StraviX_Official_Docs_2__pages-to-jpg-0002_dtnmph.jpg"
                      alt="PAN Card"
                      className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">
                      PAN Card
                    </h3>
                  </div>
                </div>


                {/* ISO Certificate */}
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-[#E8E3D8]/70 overflow-hidden 
                        hover:shadow-2xl hover:-translate-y-1 transition duration-500">
                  <div className="aspect-[3/4] bg-white relative overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dqqfy0u4u/image/upload/v1757486594/StraviX_Official_Docs_2__pages-to-jpg-0003_ahwvng.jpg"
                      alt="ISO Certificate"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                    />
                  </div>
                  <div className="p-5 bg-white/40 backdrop-blur-sm border-t border-[#E8E3D8]/50">
                    <h3 className="font-semibold text-[#182432] text-lg tracking-wide">ISO Certificate</h3>
                  </div>
                </div>

              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowWhatsAppPopup(true)}
                  className="bg-[#25D366] hover:bg-[#20C157] text-white px-6 py-3 rounded-full 
          text-[16px] font-bold transition-all duration-300 transform hover:scale-105 
          shadow-lg hover:shadow-[#25D366]/40 flex items-center gap-2 mx-auto"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Secure Your Seat Now on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Growth & Impact Section – Premium Reimagined */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/40 overflow-hidden">

          {/* Soft Floral Background */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#182432]">
                  Step Into the
                  <span className="text-[#C7A055]"> StraviX Growth Movement</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-5 leading-relaxed">
                  1000+ students, creators & working professionals apni skills, income
                  aur confidence ko upgrade kar rahe hain
                  <span className="text-[#C7A055] font-semibold"> StraviX </span> ke through —
                  ek community jahan learning + action = real transformation.
                </p>
              </div>

              {/* ================================ */}
              {/* NEW PREMIUM CARD GRID */}
              {/* ================================ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">

                {[
                  {
                    title: "A Community That Lifts You Up",
                    text: "Yahan log sirf seekhte nahi — ek-dusre ko support, guidance aur push bhi dete hain.",
                    icon: <Users className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Trust That Truly Delivers",
                    text: "Registered, legal & transparent — StraviX real mentorship ke saath real progress ka promise rakhta hai.",
                    icon: <Award className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Every Win Matters Here",
                    text: "Chhoti earnings ya bada milestone — har progress ko appreciate karna humari culture ka hissa hai.",
                    icon: <Star className="w-8 h-8 text-white" />,
                  },
                  {
                    title: "Your Effort. Your Spotlight.",
                    text: "Consistency ka reward milta hai — features, recognition aur mentorship opportunities.",
                    icon: <Target className="w-8 h-8 text-white" />,
                  }
                ].map((card, i) => (
                  <div
                    key={i}
                    className="group relative bg-white/60 backdrop-blur-xl border border-[#EFD9B0]/40 
            p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    {/* Gold Glow on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EFD9B0]/40 to-white/40 
                opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                      <div className="w-16 h-16 bg-[#C7A055] rounded-2xl flex items-center justify-center shadow-lg 
                  transform group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>

                      <h3 className="text-[20px] font-bold text-[#182432] leading-snug">{card.title}</h3>

                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

              {/* ======================================= */}
              {/* CTA BLOCK – Premium Redesign */}
              {/* ======================================= */}
              <div className="bg-gradient-to-r from-[#FFF4EA] via-[#FFF1F1] to-[#FFEFD8] 
           border-l-4 border-[#C7A055] p-10 rounded-2xl shadow-xl text-center">

                <p className="text-[#182432] font-semibold text-lg md:text-xl mb-6 leading-relaxed">
                  🚀 Join India’s fastest-growing tribe of
                  <span className="text-[#C7A055] font-bold"> creators, professionals </span>
                  & <span className="text-[#C7A055] font-bold">action-takers</span>.
                  Yahan learning, earning aur growth — sab ek saath hoti hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaasev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
          text-white px-7 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 
          shadow-lg hover:shadow-[#25D366]/40 gap-2"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Connect with Me
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works - Premium Reimagined */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/25 overflow-hidden">

          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-waves.svg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>

          <div className="relative container mx-auto px-6">

            {/* Header */}
            <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                Your <span className="text-[#C7A055]">Path to Digital Success</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
                Sirf 3 simple steps — aur aap clarity, mentorship aur support ke saath
                apni digital earning journey confidently start kar sakte ho.
              </p>
            </div>

            {/* Steps Flow */}
            <div className="relative flex flex-col md:flex-row justify-center items-start gap-16 mb-20">

              {/* Improved Connector Line */}
              <div className="hidden md:block absolute top-32 left-0 right-0 h-[3px] 
          bg-gradient-to-r from-[#EFD9B0] to-[#C7A055]/80 rounded-full -z-10"></div>

              {/* STEP TEMPLATE */}
              {[
                {
                  step: "1",
                  icon: <UserPlus className="w-10 h-10 text-white" />,
                  title: "Join Mentorship",
                  text: "StraviX mentorship join karo aur ek structured start ke saath apni digital journey begin karo — jahan har phase me proper guidance milti hai.",
                },
                {
                  step: "2",
                  icon: <BookOpen className="w-10 h-10 text-white" />,
                  title: "Learn Practically",
                  text: "Step-by-step trainings, live mentorship aur proven frameworks ke saath affiliate marketing ko bilkul practical tarike se master karo.",
                },
                {
                  step: "3",
                  icon: <DollarSign className="w-10 h-10 text-white" />,
                  title: "Earn Consistently",
                  text: "Weeks me apna pehla payout unlock karo, aur ek solid system ke saath income ko month-on-month grow karte jao.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/50 p-10 rounded-2xl 
          shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-full md:w-1/3 text-center"
                >

                  {/* Step Badge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 
              rounded-full bg-[#182432] text-white flex items-center justify-center 
              font-bold text-2xl shadow-xl">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-[#C7A055] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg 
              group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#182432] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-r from-[#FFF3E0] to-[#FDE9C9] border border-[#EFD9B0]/50 rounded-2xl p-10 text-center 
          shadow-xl hover:shadow-2xl transition-all duration-500">

              <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                🚀 Ready to start your digital transformation?
                This month only <span className="text-red-600 font-bold">6/10 mentorship seats</span> available.
              </p>

              <a
                href="https://wa.aisensy.com/aaasev"
                target="_blank"
                rel="noopener noreferrer"
                className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
        text-white font-bold py-3 px-7 rounded-full text-[16px] transition-all duration-300 
        shadow-lg hover:shadow-[#25D366]/40 transform hover:scale-105 gap-2"
              >
                <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                Message Me on WhatsApp
              </a>
            </div>

          </div>
        </section>

        {/* What You'll Get – Ultra Premium Experience Section */}
        <section className="relative py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F0] to-[#EFD9B0]/25 overflow-hidden">

          {/* Soft Floral Texture */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]"></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] leading-snug">
                What You’ll <span className="text-[#C7A055]">Experience Inside</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
                Practical learning, step-by-step mentorship aur ek
                <span className="text-[#C7A055] font-semibold"> action-driven community</span> —
                jahan aapko clarity, consistent support aur real progress ka environment milta hai.
              </p>
            </div>

            {/* Feature Cards – New Premium UI */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">

              {[
                {
                  icon: <User className="w-7 h-7 text-white" />,
                  title: "Personal Step-by-Step Mentorship",
                  text: "Har phase par clear direction — taaki aap kabhi confused na ho aur weekly growth visible ho.",
                },
                {
                  icon: <BookOpen className="w-7 h-7 text-white" />,
                  title: "Digital Skills + Sales Training",
                  text: "Content, communication, sales & branding — woh core skills jo digital income ko possible banati hain.",
                },
                {
                  icon: <Users className="w-7 h-7 text-white" />,
                  title: "Supportive Learning Community",
                  text: "India ke students, homemakers & professionals ke saath grow — ek jagah jahan sab ek goal par kaam karte hain.",
                },
                {
                  icon: <Target className="w-7 h-7 text-white" />,
                  title: "A Proven Success Framework",
                  text: "1000+ members ne isi structured system se apna pehla earning unlock kiya — ab next turn aapka ho sakta hai.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative cursor-pointer bg-white/80 backdrop-blur-xl border border-[#EFD9B0]/40 
          rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 
          flex items-start gap-6"
                >
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-[#C7A055] to-[#DCC08A] rounded-2xl p-4 shadow-md 
            group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold text-[#182432] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Long Highlight Card */}
              <div className="group relative cursor-pointer bg-white/80 backdrop-blur-xl border border-[#EFD9B0]/40 
        rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 
        md:col-span-2 flex items-start gap-6">

                <div className="bg-gradient-to-br from-[#C7A055] to-[#DCC08A] rounded-2xl p-4 shadow-md 
          group-hover:scale-110 transition-all duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#182432] mb-2">Rewards, Recognition & Monthly Spotlights</h3>
                  <p className="text-gray-600">
                    Consistency ka reward milta hi milta hai — features, shoutouts, awards aur StraviX spotlight
                    moments jo aapki progress ko celebrate karte hain.
                  </p>
                </div>
              </div>

            </div>

            {/* Comparison – New Clean UI */}
            <div className="rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-[#EFD9B0]/50 mb-20 p-10 relative overflow-hidden">

              {/* Soft Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFEAEA]/40 via-transparent to-[#E9FFE9]/40 pointer-events-none"></div>

              <div className="relative grid md:grid-cols-2 gap-10 text-center">

                {/* Without StraviX */}
                <div className="group p-6 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <div className="bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
                    <X className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Without StraviX</h3>
                  <p className="text-red-600 leading-relaxed">
                    Confusion, guessing, trial & error — bina roadmap growth slow hoti hai aur motivation drop ho jata hai.
                  </p>
                </div>

                {/* With StraviX */}
                <div className="group p-6 rounded-xl hover:bg-green-50 transition-all duration-300">
                  <div className="bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">With StraviX</h3>
                  <p className="text-green-700 leading-relaxed">
                    Clear roadmap, daily support, expert mentorship — aur ek system jo consistently results deliver karta hai.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FDE9C9] rounded-3xl shadow-lg p-8 border border-[#EFD9B0]/50">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                  🎯 Ye saare benefits limited mentorship seats ke saath available hain.
                  Aaj hi apni digital earning journey start karne ka perfect time hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaasev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
          text-white font-bold py-3 px-7 rounded-full text-[16px] transition-all shadow-lg 
          hover:shadow-[#25D366]/40 transform hover:scale-105 gap-2"
                >
                  <Icon icon="mdi:whatsapp" className="w-6 h-6 text-white" />
                  Message Me on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* My Real Journey – Ultra Premium Reimagined Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F0] to-[#F4E6C9]/40 overflow-hidden">

          {/* Soft Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/assets/patterns/soft-floral-bg.png')] bg-cover bg-center opacity-[0.06]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>

          <div className="relative max-w-6xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4 leading-snug">
                My <span className="text-[#C7A055]">Transformation Journey</span> —
                From <span className="text-[#C7A055]">Routine</span> to
                <span className="text-[#C7A055]"> Real Freedom</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Roz ki daud, responsibilities aur limited choices ke beech
                jab maine digital world ko explore kiya —
                tabhi meri life ka biggest shift start hua.
                Aaj main un logon ko guide karti hoon jo apni life me
                <span className="text-[#C7A055] font-semibold">real change</span> lana chahte hain.
              </p>
            </div>

            {/* Journey Timeline – New UI */}
            <div className="relative flex flex-col md:flex-row items-center justify-center mb-28 gap-16">

              {/* Connector Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[5px] 
        bg-gradient-to-r from-[#FFC7C7] via-[#EFD9B0] to-[#B9F5C2] rounded-full -z-10 opacity-70">
              </div>

              {/* Step 1 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-red-200 rounded-full shadow-xl 
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Routine Without Growth</h3>
                <p className="text-gray-600 text-sm mt-1">Long hours, stress & zero flexibility.</p>
              </div>

              {/* Step 2 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-yellow-200 rounded-full shadow-xl
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Digital Breakthrough</h3>
                <p className="text-gray-600 text-sm mt-1">Skills build ki, mindset shift hua, clarity mili.</p>
              </div>

              {/* Step 3 */}
              <div className="group text-center relative z-10">
                <div className="w-24 h-24 bg-white border border-green-200 rounded-full shadow-xl
          flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">🌟</span>
                </div>
                <h3 className="font-bold text-xl text-[#182432] mt-5">Freedom & Impact</h3>
                <p className="text-gray-600 text-sm mt-1">Income growth + hundreds of learners guided.</p>
              </div>

            </div>

            {/* Images Grid – New Modern UI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src="/assets/images/Stravix-success-meet.jpeg"
                  className="w-full h-full aspect-[3/4] object-cover"
                  alt="Journey"
                />
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src="/assets/images/pic-with-ceo.jpeg"
                  className="w-full h-full aspect-[3/4] object-cover"
                  alt="Journey"
                />
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src="/assets/images/stravix-growth-icon.jpeg"
                  className="w-full h-full aspect-[3/4] object-cover"
                  alt="Journey"
                />
              </div>
            </div>

            {/* Emotional Quote */}
            <div className="text-center mb-24">
              <p className="text-lg md:text-2xl text-[#182432] font-medium italic max-w-4xl mx-auto leading-relaxed">
                “Meri journey ka sabse powerful step tha —
                <span className="text-[#C7A055] font-semibold">khud ko ek mauka dena.</span>
                Aaj main StraviX ke through un logon ko wohi freedom dilane me help kar rahi hoon
                jo apni zindagi me naye possibilities create karna chahte hain.”
              </p>
            </div>

            {/* Video Highlights – SAME VIDEOS, ONLY UI UPDATED */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-24">

              {[
                // {
                //   title: "StraviX Growth Icon Award 2025",
                //   src: "https://www.youtube.com/embed/FMRsA3LPKdc"
                // },
                // {
                //   title: "First Achievement At MT",
                //   src: "https://www.youtube.com/embed/2Ym-14x6VqE"
                // },
                // {
                //   title: "Millionaire Retreat 2025",
                //   src: "https://www.youtube.com/embed/iEHcofYv6h0"
                // },
                // {
                //   title: "Gifted Phone To Mom",
                //   src: "https://www.youtube.com/embed/GEurN5IpTlo"
                // }
              ].map((v, idx) => (
                <div key={idx} className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-xl font-bold text-[#182432] mb-4 text-center">{v.title}</h3>
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                    <iframe
                      src={v.src}
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#FFF4E0] to-[#FFE9E9] border border-[#EFD9B0]/60 p-8 rounded-3xl shadow-xl">
                <p className="text-lg md:text-xl font-semibold text-[#182432] mb-6 leading-relaxed">
                  🌟 Agar aap bhi routine se nikal kar freedom chahte ho,
                  to meri tarah apni digital journey shuru kar sakte ho —
                  bas ek strong decision ki zarurat hoti hai.
                </p>

                <a
                  href="https://wa.aisensy.com/aaasev"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20C157] 
          text-white font-bold py-4 px-6 rounded-full text-[16px] shadow-lg hover:shadow-[#25D366]/40 
          transform hover:scale-105 transition-all duration-300"
                >
                  <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
                  Message on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* Final CTA – Premium Redesign */}
        <section className="relative py-24 bg-[#070B14] overflow-hidden">

          {/* Background Glow Mesh */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-[#C7A055]/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#EFD9B0]/10 blur-[120px] rounded-full" />
            <div className="absolute top-20 left-10 w-[18rem] h-[18rem] bg-[#C7A055]/20 blur-[90px] rounded-full opacity-30" />
          </div>

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Your Digital Income Journey
              <span className="block text-[#C7A055]">Starts Today</span>
            </h2>

            {/* Sub Text */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Main <span className="text-[#C7A055] font-semibold">Pooja Sharma</span>,
              ek working professional se digital earner bani —
              aur ab main aapko wohi system sikhaungi jisne meri life change ki.
              Clear roadmap, real guidance & result-driven mentorship.
            </p>

            {/* Trust Badges - Premium UI */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 mb-12">

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">Registered & Verified</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Users className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">1000+ Learners Mentored</span>
              </div>

              <div className="flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 shadow-inner">
                <Award className="w-5 h-5 text-[#C7A055]" />
                <span className="text-sm text-gray-300 tracking-wide">Proven Results</span>
              </div>
            </div>

            {/* FOMO Line */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-[#C7A055]/30 backdrop-blur-xl shadow-md">
                <span className="text-xl">⚡</span>
                <span className="text-[#EFD9B0] font-semibold text-base md:text-lg">
                  This month only: <span className="font-bold">6/10 mentorship seats</span> remaining — secure your spot now
                </span>
              </div>
            </div>

            {/* Countdown (unchanged) */}
            <div className="mb-12">
              <CountdownBoxes />
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.aisensy.com/aaasev"
              target="_blank"
              rel="noopener noreferrer"
              className="track-subscribe-btn inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20C157] 
                 text-white font-bold py-4 px-6 rounded-full text-[16px] transition-all duration-300 
                 shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:scale-[1.06] gap-1 mx-auto"
            >
              <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
              Start Your Journey on WhatsApp
            </a>
          </div>

          {/* Floating WhatsApp Button (Mobile) */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <a
              href="https://wa.aisensy.com/aaasev"
              className="w-full bg-[#25D366] hover:bg-[#20C157] text-white font-bold py-4 px-6 
                 rounded-full text-lg shadow-2xl flex items-center justify-center gap-3 
                 animate-bounce relative"
            >
              <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
              <span className="absolute w-6 h-6 flex justify-center items-center -top-0 -right-0 
                       bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse">
                1
              </span>
              Message Me on WhatsApp
            </a>
          </div>

        </section>

        {/* FAQ Section – Premium Redesign */}
        <section
          id="faq"
          className="relative py-24 bg-[#FDFBF6] overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#C7A055]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-[#EFD9B0]/20 blur-[100px] rounded-full" />
          </div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.06] bg-[url('/assets/patterns/grid.svg')] bg-cover"></div>

          <div className="relative max-w-5xl mx-auto px-6">

            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#182432] mb-4">
                Your Questions,
                <span className="text-[#C7A055]"> Answered Clearly</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                StraviX mentorship ke baare me sabse common doubts — honest,
                simple, aur practical answers yahan milenge.
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-6 mb-20">

              {[
                {
                  q: "Kya mujhe pehle se digital marketing ya sales ka knowledge chahiye?",
                  a: "Bilkul nahi 🌟. Training zero se start hoti hai — beginner ho ya working professional, sab kuch step-by-step sikhaya jaata hai."
                },
                {
                  q: "Mujhe daily kitna time dena hoga?",
                  a: "Agar aap consistently 2–3 hours daily de sakte ho, toh aap easily results dekh paoge. Yahan smart work > hard work."
                },
                {
                  q: "Ye platform genuine hai?",
                  a: "100% genuine & registered. StraviX ek legal, verified aur transparent earning ecosystem hai — real system + real mentorship."
                },
                {
                  q: "Is mentorship me mujhe exactly kya milega?",
                  a: "Aapko milega personal mentorship, live support, digital skills training, aur ek powerful community jo aapko daily push karti hai."
                },
                {
                  q: "Kya investment karni padegi?",
                  a: "Haan, ek small one-time investment hoti hai jo aapke training resources, tools aur mentorship ke liye required hoti hai."
                },
                {
                  q: "Kya mujhe live support milta hai?",
                  a: "Haan 💬. Aapko WhatsApp mentorship, weekly sessions, Q&A support aur regular updates sab milte hain."
                }
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white/70 backdrop-blur-xl border border-[#EFD9B0]/40 
                     rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 
                     overflow-hidden"
                >
                  <summary className="flex justify-between items-center cursor-pointer 
                             px-6 py-5 text-left text-lg font-semibold text-[#182432] 
                             list-none select-none group-open:text-[#C7A055] transition-all">
                    <span>{item.q}</span>

                    {/* Icon */}
                    <div className="w-8 h-8 flex items-center justify-center rounded-full 
                            bg-[#C7A055]/10 text-[#C7A055] group-open:rotate-180 
                            transition-all duration-300">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </summary>

                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t 
                          border-[#EFD9B0]/40 bg-gradient-to-r from-white via-[#FFFDF9] 
                          to-[#FFF5E4] animate-fadeIn">
                    {item.a}
                  </div>
                </details>
              ))}

            </div>

            {/* CTA Box */}
            <div className="relative bg-gradient-to-r from-[#C7A055] to-[#D8B464] 
                    rounded-3xl p-6 text-center shadow-2xl border border-[#EFD9B0]/40 
                    overflow-hidden">

              {/* Texture */}
              <div className="absolute inset-0 bg-[url('/assets/patterns/gold-wave.svg')] 
                      bg-cover opacity-15"></div>

              <p className="relative text-md md:text-2xl md:font-semibold mb-6 text-white z-10">
                ✨ Agar aapke doubts clear ho gaye —
                ab time hai action ka. Digital freedom journey start karein mere saath.
              </p>

              <a
                href="https://wa.aisensy.com/aaasev"
                target="_blank"
                rel="noopener noreferrer"
                className="relative track-subscribe-btn inline-flex items-center justify-center 
                   bg-[#25D366] hover:bg-[#20BA5A] max-w-fit text-white font-bold py-3 px-4 
                   rounded-full text-[16px] md:text-xl transition-all duration-300 
                   transform hover:scale-105 shadow-xl hover:shadow-green-400/30 gap-1 z-10"
              >
                <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>


        {/* Floating WhatsApp Button – Premium Edition */}
        <div className="fixed bottom-6 right-6 z-50 hidden md:block">
          <button
            onClick={() => setShowWhatsAppPopup(true)}
            aria-label="Open WhatsApp Chat"
            className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-xl 
               hover:shadow-green-400/40 transform hover:scale-110 transition-all duration-300"
          >
            {/* Official WhatsApp Icon */}
            <Icon icon="ic:baseline-whatsapp" className='w-8 h-8' />

            {/* Notification Badge */}
            <span
              className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold 
                 px-1.5 py-[1px] rounded-full animate-pulse shadow-md"
            >
              1
            </span>
          </button>
        </div>


        {/* WhatsApp Popup */}
        {showWhatsAppPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-[#EFD9B0]/50 
                    shadow-[0_0_60px_rgba(199,160,85,0.25)] max-w-md w-full p-8 animate-slideUp">

              {/* Close Icon */}
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#C7A055] transition-all"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Icon Glow */}
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 bg-[#25D366]/25 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 text-white bg-[#25D366] rounded-3xl flex items-center justify-center shadow-xl">
                  <Icon icon="ic:baseline-whatsapp" className='w-12 h-12' />
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-3xl font-extrabold text-[#182432] mb-3 text-center leading-snug">
                Start Your <span className="text-[#C7A055]">Digital Journey</span>
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed text-center text-base md:text-lg">
                Message on WhatsApp and get <span className="font-semibold text-[#C7A055]">step-by-step mentorship</span>
                to build your online income — with clarity & confidence.
              </p>

              {/* CTA Button */}
              <a
                href="https://wa.aisensy.com/aaasev"
                target="_blank"
                rel="noopener noreferrer"
                className="track-subscribe-btn flex items-center justify-center gap-3 bg-[#25D366] 
                   hover:bg-[#20C157] text-white font-bold max-w-fit py-2 px-4 rounded-full text-lg 
                   transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/30 mx-auto"
              >
                <Icon icon="ic:baseline-whatsapp" className='w-6 h-6' />

                Chat on WhatsApp
              </a>

              {/* Trust Line */}
              <p className="text-sm text-gray-500 mt-6 italic text-center">
                Direct mentorship • No spam • Real support 💬
              </p>
            </div>
          </div>
        )}


        <Footer />
      </div>
    </>
  );
}

export default App;
