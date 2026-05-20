import React from 'react';
import './PandaScene.css';

export default function PandaScene({ children }) {
  return (
    <div className="scene">
      {/* ── Room SVG Background ── */}
      <svg
        className="room-svg"
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Wall */}
        <rect x="0" y="0" width="1200" height="580" fill="#fde8f0" />
        <rect x="0" y="480" width="1200" height="8" fill="#f5c8d8" opacity="0.7" />

        {/* Wallpaper dots */}
        <circle cx="21" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="63" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="105" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="147" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="189" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="231" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="273" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="315" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="357" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="399" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="441" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="483" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="525" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="567" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="609" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="651" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="693" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="735" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="777" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="819" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="861" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="903" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="945" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="987" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1029" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1071" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1113" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1155" cy="14" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="42" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="84" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="126" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="168" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="210" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="252" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="294" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="336" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="378" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="420" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="462" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="504" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="546" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="588" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="630" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="672" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="714" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="756" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="798" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="840" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="882" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="924" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="966" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1008" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1050" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1092" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/><circle cx="1134" cy="42" r="2.2" fill="#f9b8cf" opacity="0.35"/>

        {/* Floor */}
        <rect x="0" y="580" width="1200" height="120" fill="#f7d5b8" />
        <line x1="0" y1="580" x2="1200" y2="580" stroke="#e8c4a0" strokeWidth="1.5" opacity="0.6" />
        <line x1="0" y1="610" x2="1200" y2="610" stroke="#e8c4a0" strokeWidth="1.5" opacity="0.6" />
        <line x1="0" y1="640" x2="1200" y2="640" stroke="#e8c4a0" strokeWidth="1.5" opacity="0.6" />
        <rect x="0" y="576" width="1200" height="8" fill="#e8b8c8" opacity="0.5" />

        {/* Rug */}
        <ellipse cx="600" cy="618" rx="380" ry="48" fill="#f9c6d8" opacity="0.55" />
        <ellipse cx="600" cy="618" rx="340" ry="40" fill="none" stroke="#f4a8c0" strokeWidth="2" opacity="0.5" />
        <ellipse cx="600" cy="618" rx="280" ry="32" fill="none" stroke="#f4a8c0" strokeWidth="1.5" opacity="0.35" />

        {/* Window (left) */}
        <rect x="80" y="80" width="220" height="280" rx="12" fill="#fef0f6" stroke="#f4c0d0" strokeWidth="4" />
        <rect x="88" y="88" width="204" height="264" rx="8" fill="#c8e8f8" />
        <ellipse cx="130" cy="130" rx="30" ry="16" fill="white" opacity="0.85" />
        <ellipse cx="155" cy="122" rx="22" ry="14" fill="white" opacity="0.85" />
        <ellipse cx="110" cy="122" rx="18" ry="12" fill="white" opacity="0.7" />
        <ellipse cx="230" cy="160" rx="26" ry="14" fill="white" opacity="0.75" />
        <ellipse cx="252" cy="154" rx="18" ry="11" fill="white" opacity="0.75" />
        <ellipse cx="110" cy="320" rx="32" ry="40" fill="#a8d8a0" opacity="0.7" />
        <ellipse cx="148" cy="330" rx="26" ry="36" fill="#90cc88" opacity="0.6" />
        <ellipse cx="240" cy="310" rx="34" ry="44" fill="#a8d8a0" opacity="0.65" />
        <line x1="190" y1="88" x2="190" y2="352" stroke="#f4c0d0" strokeWidth="3" />
        <line x1="88" y1="220" x2="292" y2="220" stroke="#f4c0d0" strokeWidth="3" />
        <rect x="72" y="356" width="236" height="18" rx="6" fill="#f4c0d0" />
        <rect x="158" y="336" width="28" height="24" rx="4" fill="#f9a8b8" />
        <rect x="154" y="333" width="36" height="6" rx="3" fill="#f4889a" />
        <ellipse cx="172" cy="322" rx="18" ry="14" fill="#88cc80" />
        {/* Curtains */}
        <path d="M 62 70 Q 80 180 68 360" stroke="#f9a8c0" strokeWidth="28" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M 318 70 Q 300 180 312 360" stroke="#f9a8c0" strokeWidth="28" fill="none" strokeLinecap="round" opacity="0.85" />
        <rect x="50" y="62" width="280" height="12" rx="6" fill="#e898b4" />
        <circle cx="50" cy="68" r="8" fill="#e898b4" />
        <circle cx="330" cy="68" r="8" fill="#e898b4" />

        {/* Wall clock face */}
        <circle cx="600" cy="160" r="62" fill="#fff0f6" stroke="#f4c0d0" strokeWidth="4" />
        <circle cx="600" cy="160" r="54" fill="none" stroke="#f9c6d0" strokeWidth="1.5" />
        <line x1="600" y1="100" x2="600" y2="108" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="631" y1="107" x2="628" y2="114" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="654" y1="129" x2="648" y2="133" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="662" y1="160" x2="654" y2="160" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="654" y1="191" x2="648" y2="187" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="631" y1="213" x2="628" y2="206" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="600" y1="220" x2="600" y2="212" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="569" y1="213" x2="572" y2="206" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="546" y1="191" x2="552" y2="187" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="538" y1="160" x2="546" y2="160" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="546" y1="129" x2="552" y2="133" stroke="#f4c0d0" strokeWidth="2.5" />
        <line x1="569" y1="107" x2="572" y2="114" stroke="#f4c0d0" strokeWidth="2.5" />

        {/* Bookshelf (right) */}
        <rect x="900" y="100" width="260" height="380" rx="10" fill="#f4c8b8" stroke="#e8b0a0" strokeWidth="2" />
        <rect x="900" y="220" width="260" height="10" rx="2" fill="#e8b0a0" />
        <rect x="900" y="320" width="260" height="10" rx="2" fill="#e8b0a0" />
        <rect x="900" y="420" width="260" height="10" rx="2" fill="#e8b0a0" />
        {/* Books row 1 */}
        <rect x="912" y="130" width="18" height="90" rx="2" fill="#e87a9a"/><rect x="932" y="120" width="22" height="100" rx="2" fill="#f4a8b8"/><rect x="956" y="135" width="16" height="85" rx="2" fill="#c87ab0"/><rect x="974" y="125" width="24" height="95" rx="2" fill="#f9c6d0"/><rect x="1000" y="132" width="18" height="88" rx="2" fill="#e87a9a"/><rect x="1020" y="128" width="20" height="92" rx="2" fill="#d4a0c8"/><rect x="1042" y="140" width="16" height="80" rx="2" fill="#f4a8b8"/><rect x="1060" y="122" width="22" height="98" rx="2" fill="#e87a9a"/><rect x="1084" y="134" width="18" height="86" rx="2" fill="#c87ab0"/><rect x="1104" y="126" width="24" height="94" rx="2" fill="#f9b8c8"/><rect x="1130" y="130" width="16" height="90" rx="2" fill="#e87a9a"/><rect x="1148" y="132" width="20" height="88" rx="2" fill="#d4a0c8"/>
        {/* Books row 2 */}
        <rect x="912" y="250" width="20" height="70" rx="2" fill="#d4a0c8"/><rect x="934" y="242" width="18" height="78" rx="2" fill="#f9c6d0"/><rect x="954" y="248" width="24" height="72" rx="2" fill="#e87a9a"/><rect x="980" y="252" width="16" height="68" rx="2" fill="#f4a8b8"/><rect x="998" y="245" width="22" height="75" rx="2" fill="#c87ab0"/><rect x="1022" y="250" width="18" height="70" rx="2" fill="#f9c6d0"/><rect x="1042" y="244" width="20" height="76" rx="2" fill="#e87a9a"/><rect x="1064" y="251" width="16" height="69" rx="2" fill="#d4a0c8"/><rect x="1082" y="247" width="24" height="73" rx="2" fill="#f4a8b8"/><rect x="1108" y="249" width="18" height="71" rx="2" fill="#e87a9a"/><rect x="1128" y="243" width="20" height="77" rx="2" fill="#c87ab0"/><rect x="1150" y="252" width="16" height="68" rx="2" fill="#f9b8c8"/>
        {/* Shelf 3 decor */}
        <rect x="920" y="370" width="32" height="42" rx="4" fill="#f9a8b8"/>
        <ellipse cx="936" cy="360" rx="16" ry="12" fill="#88cc80"/>
        <ellipse cx="929" cy="354" rx="9" ry="8" fill="#70b870"/>
        <ellipse cx="943" cy="356" rx="8" ry="7" fill="#88cc80"/>
        <rect x="968" y="378" width="16" height="30" rx="4" fill="#fde8a0"/>
        <ellipse cx="976" cy="376" rx="5" ry="3" fill="#f8d080"/>
        <line x1="976" y1="376" x2="976" y2="368" stroke="#8b4513" strokeWidth="1.5"/>
        <ellipse cx="976" cy="368" rx="3" ry="4" fill="#ffcc00" opacity="0.8"/>
        <polygon points="1010,360 1014,372 1026,372 1016,380 1020,392 1010,384 1000,392 1004,380 994,372 1006,372" fill="#f9d0e0" stroke="#f4a8b8" strokeWidth="1"/>
        <rect x="1040" y="360" width="18" height="60" rx="2" fill="#e87a9a"/><rect x="1060" y="355" width="22" height="65" rx="2" fill="#f4a8b8"/><rect x="1084" y="362" width="16" height="58" rx="2" fill="#d4a0c8"/><rect x="1102" y="357" width="20" height="63" rx="2" fill="#f9c6d0"/>

        {/* Study desk */}
        <rect x="350" y="460" width="560" height="130" rx="10" fill="#f4c8b8" stroke="#e8b0a0" strokeWidth="2" />
        <rect x="360" y="462" width="540" height="16" rx="4" fill="#fad8c8" opacity="0.6" />
        <rect x="370" y="590" width="28" height="50" rx="6" fill="#e8b0a0" />
        <rect x="862" y="590" width="28" height="50" rx="6" fill="#e8b0a0" />
        {/* Laptop */}
        <rect x="480" y="390" width="180" height="72" rx="6" fill="#f0e0f4" stroke="#d8b8e8" strokeWidth="2"/>
        <rect x="460" y="460" width="220" height="14" rx="4" fill="#d8b8e8"/>
        <rect x="488" y="397" width="164" height="57" rx="4" fill="#e8d4f8" opacity="0.8"/>
        <rect x="496" y="408" width="80" height="4" rx="2" fill="#c8a8e0" opacity="0.5"/><rect x="496" y="416" width="60" height="4" rx="2" fill="#c8a8e0" opacity="0.5"/><rect x="496" y="424" width="80" height="4" rx="2" fill="#c8a8e0" opacity="0.5"/><rect x="496" y="432" width="60" height="4" rx="2" fill="#c8a8e0" opacity="0.5"/><rect x="496" y="440" width="80" height="4" rx="2" fill="#c8a8e0" opacity="0.5"/>
        {/* Notebook */}
        <rect x="700" y="432" width="90" height="110" rx="4" fill="#fff0f6" stroke="#f4c0d0" strokeWidth="1.5"/>
        <rect x="700" y="432" width="12" height="110" rx="4" fill="#f9a8b8"/>
        <line x1="720" y1="448" x2="780" y2="448" stroke="#f9c6d0" strokeWidth="1"/><line x1="720" y1="460" x2="780" y2="460" stroke="#f9c6d0" strokeWidth="1"/><line x1="720" y1="472" x2="780" y2="472" stroke="#f9c6d0" strokeWidth="1"/><line x1="720" y1="484" x2="780" y2="484" stroke="#f9c6d0" strokeWidth="1"/><line x1="720" y1="496" x2="780" y2="496" stroke="#f9c6d0" strokeWidth="1"/><line x1="720" y1="508" x2="780" y2="508" stroke="#f9c6d0" strokeWidth="1"/>
        {/* Pencil cup */}
        <rect x="820" y="428" width="34" height="42" rx="6" fill="#f9c6d0" stroke="#f4a8b8" strokeWidth="1.5"/>
        <line x1="830" y1="390" x2="826" y2="430" stroke="#f9e08a" strokeWidth="4" strokeLinecap="round"/><line x1="836" y1="388" x2="834" y2="428" stroke="#c8e898" strokeWidth="4" strokeLinecap="round"/><line x1="844" y1="392" x2="843" y2="430" stroke="#f4a8b8" strokeWidth="4" strokeLinecap="round"/><line x1="850" y1="390" x2="848" y2="428" stroke="#a8c8f8" strokeWidth="4" strokeLinecap="round"/>
        {/* Lamp */}
        <rect x="378" y="438" width="10" height="30" rx="3" fill="#e8b0a0"/>
        <rect x="372" y="456" width="22" height="6" rx="3" fill="#e8b0a0"/>
        <path d="M 358 438 Q 383 420 408 438" fill="#f9e0a0" stroke="#e8c880" strokeWidth="2"/>
        <ellipse cx="383" cy="466" rx="40" ry="10" fill="#fff4b8" opacity="0.4"/>
        {/* Mug */}
        <rect x="420" y="440" width="34" height="28" rx="6" fill="#fff0f6" stroke="#f4c0d0" strokeWidth="1.5"/>
        <path d="M 454 448 Q 464 448 464 454 Q 464 460 454 460" fill="none" stroke="#f4c0d0" strokeWidth="1.5"/>
        <path d="M 430 438 Q 433 430 430 422" fill="none" stroke="#f4c0d0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <path d="M 440 438 Q 443 428 440 420" fill="none" stroke="#f4c0d0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>

        {/* Fairy lights */}
        <path d="M 0 40 Q 100 60 200 40 Q 300 20 400 40 Q 500 60 600 40 Q 700 20 800 40 Q 900 60 1000 40 Q 1100 20 1200 40" fill="none" stroke="#f4c0d0" strokeWidth="1.5"/>
        <ellipse cx="50" cy="43" rx="7" ry="10" fill="#f9b8c8" opacity="0.9"/><ellipse cx="150" cy="57" rx="7" ry="10" fill="#fde08a" opacity="0.9"/><ellipse cx="250" cy="43" rx="7" ry="10" fill="#c8e8a8" opacity="0.9"/><ellipse cx="350" cy="37" rx="7" ry="10" fill="#a8d8f8" opacity="0.9"/><ellipse cx="450" cy="50" rx="7" ry="10" fill="#e8b8f8" opacity="0.9"/><ellipse cx="550" cy="55" rx="7" ry="10" fill="#f9b8c8" opacity="0.9"/><ellipse cx="650" cy="37" rx="7" ry="10" fill="#fde08a" opacity="0.9"/><ellipse cx="750" cy="32" rx="7" ry="10" fill="#c8e8a8" opacity="0.9"/><ellipse cx="850" cy="50" rx="7" ry="10" fill="#a8d8f8" opacity="0.9"/><ellipse cx="950" cy="55" rx="7" ry="10" fill="#e8b8f8" opacity="0.9"/><ellipse cx="1050" cy="37" rx="7" ry="10" fill="#f9b8c8" opacity="0.9"/><ellipse cx="1150" cy="30" rx="7" ry="10" fill="#fde08a" opacity="0.9"/>

        {/* Stars */}
        <polygon points="440,74 443,82 452,82 445,87 448,95 440,90 432,95 435,87 428,82 437,82" fill="#f9d0e0" opacity="0.7"/>
        <polygon points="520,49 523,57 532,57 525,62 528,70 520,65 512,70 515,62 508,57 517,57" fill="#f9d0e0" opacity="0.7"/>
        <polygon points="760,64 763,72 772,72 765,77 768,85 760,80 752,85 755,77 748,72 757,72" fill="#f9d0e0" opacity="0.7"/>
        <polygon points="840,52 843,60 852,60 845,65 848,73 840,68 832,73 835,65 828,60 837,60" fill="#f9d0e0" opacity="0.7"/>

        {/* Heart stickers */}
        <path d="M850 246 Q842 238 842 244 Q842 252 850 258 Q858 252 858 244 Q858 238 850 246Z" fill="#f9b8c8" opacity="0.65"/>
        <path d="M870 220 Q862 212 862 218 Q862 226 870 232 Q878 226 878 218 Q878 212 870 220Z" fill="#f9b8c8" opacity="0.65"/>
        <path d="M400 200 Q392 192 392 198 Q392 206 400 212 Q408 206 408 198 Q408 192 400 200Z" fill="#f9b8c8" opacity="0.65"/>
        <path d="M420 225 Q412 217 412 223 Q412 231 420 237 Q428 231 428 223 Q428 217 420 225Z" fill="#f9b8c8" opacity="0.65"/>
      </svg>

      {/* ── Title ── */}
      <h1>
        <img src="/logo.svg" width="62" height="62" alt="panda" style={{ verticalAlign: 'middle', marginRight: '6px' }} />
        Study Pet
      </h1>

      {/* All other UI components go here */}
      {children}

      {/* ── Footer ── */}
      <div className="footer">Made with 🌸 by Aura, for focused studying</div>
    </div>
  );
}
