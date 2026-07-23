
import { tailwindIcon, githubIcon, igIcon, linkedinIcon, gmailIcon, myImg, canvaIcon, chatGptIcon, djangoIcon } from "../utils/index.js";
export const navLinks = ["home", "about us", "team", "projects", "instagram feed", "contact"];
export const socialLinks = [
    { name: "GitHub", img: githubIcon, url: "https://github.com/haider7b", tit: "haider7b" },
    { name: "Linkedin", img: linkedinIcon, url: "https://www.linkedin.com/in/haider-bassem-al-asadi-2471a728b", tit: "haider-bassem-al-asadi" },
    { name: "CodingHub", img: igIcon, url: "https://www.instagram.com/coding._hub7", tit: "@coding._hub7" },
    { name: "Personal", img: igIcon, url: "https://www.instagram.com/haider_cr07", tit: "@haider_cr07" },
    { name: "Gmail", img: gmailIcon, url: "mailto:alasadyhydr413@gmail.com", tit: "alasadyhydr413@gmail" }
];

export const version = "1.0.1";
export const vercelURL = ["https://haider-dev-2y38-git-master-haiders-projects-6efd4952.vercel.app/"]

export const webTitle = "CodingHub";


export const skills = [
    { name: "html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "tailwind", icon: tailwindIcon },
    { name: "bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    // { name: "vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "canva", icon: canvaIcon },
    { name: "django", icon: djangoIcon },
    // { name: "figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];


export const desorptionA = `نحن نؤمن بأن البرمجة هي مفتاح الإبداع والابتكار، ولهذا أنشأنا ${webTitle}
            ليكون مجتمعًا يهدف إلى تبسيط
                مفاهيم البرمجة وتقديم محتوى تعليمي قيّم للمطورين من جميع المستويات
            سواء كنت مبتدئًا تسعى لدخول عالم البرمجة أو مطورًا محترفًا تبحث عن تحديات جديدة، فنحن هنا لمساعدتك في
                رحلتك. من خلال الدروس التفاعلية، والمشاريع الواقعية، والمحتوى التقني المميز، نهدف إلى بناء بيئة تعلم
                ملهمة تتيح للمبرمجين مشاركة المعرفة والتطور معًا
        انضم إلينا، ودعنا نبرمج المستقبل سطرًا بعد سطر`;

export const quoteA = "  الكود الجيد هو الكود الذي يجعل الحياة أسهل، وليس أعقد";
export const quoteE = "The good code is the code that makes life easier, not obstacles";

export const desorptionE = `We believe that programming is the key to creativity and innovation. That's why we created ${webTitle}-a community dedicated to simplifying programming concepts and providing valuable educational content for developers of all levels.

Whether you're a beginner looking to enter the world of programming or a professional developer seeking new challenges, we're here to support you on your journey.

Through interactive lessons, real-world projects, and high-quality technical content, we aim to build an inspiring learning environment where programmers can share knowledge and grow together.

Join us, and let's code the future—line by line!`



export const aboutMe = `أنا حيدر، مطور ويب  وصانع محتوى , شغوف بتصميم وتطوير واجهات المستخدم. أعمل على تحويل الأفكار إلى تجارب رقمية رائعة. أؤمن بقوة البرمجة في إحداث فرق في العالم، وأسعى دائمًا لتعلم مهارات جديدة ومواجهة تحديات جديدة في هذا المجال المتطور.`;


export const homeDesorptionE = `Welcome to ${webTitle}, your go-to platform for all things coding,Join us on a journey of learning and innovation,Let's code the future together,Explore our resources, tutorials, and projects.`;
export const homeDesorptionA = `هلا وسهلا بكم الى ${webTitle} , المنصة الفعالة لكل شيء في البرمجة!  انضم لنا في رحلة التعلم والابتكار لنبرمج المستقبل معا! استكشف مصادرنا، دوراتنا ومشاريعنا`;



export const teamMembers = [
    {
        name: "Haider Bassem",
        title: "Web Developer And Content Creator,(Main Member)",
        description: aboutMe,
        image: myImg,
        socialLinks: socialLinks,
    },
    {
        name: "Chat GPT",
        title: "AI Assistant, (Assistant Member)",
        description: "AI assistant,assistant with writing code, development and writing post and ideas for the reels and Content.",
        image: chatGptIcon,
        socialLinks: [],
    },
    {
        name: "canva",
        title: "Web Design and Graphics, (Assistant Member)",
        description: " Assistant with web design and graphics and instagram posts,stories and reels ,and all the content design. ",
        image: canvaIcon,
        socialLinks: [],
    }
]


export const ChessPiece = [
    {
        player: "black",
        pieces: [
            { type: "pawn", id: 'B1p', positionName: "a2", position: { x: 0, y: 600 } },
            { type: "pawn", id: 'B2p', positionName: "b2", position: { x: 100, y: 600 } },
            { type: "pawn", id: 'B3p', positionName: "c2", position: { x: 200, y: 600 } },
            { type: "pawn", id: 'B4p', positionName: "d2", position: { x: 300, y: 600 } },
            { type: "pawn", id: 'B5p', positionName: "e2", position: { x: 400, y: 600 } },
            { type: "pawn", id: 'B6p', positionName: "f2", position: { x: 500, y: 600 } },
            { type: "pawn", id: 'B7p', positionName: "g2", position: { x: 600, y: 600 } },
            { type: "pawn", id: 'B8p', positionName: "h2", position: { x: 700, y: 600 } },
            { type: "rook", id: 'B1R', positionName: "a1", position: { x: 0, y: 700 } },
            { type: "knight", id: 'B1N', positionName: "b1", position: { x: 100, y:700 } },
            { type: "bishop", id: 'B1B', positionName: "c1", position: { x: 200, y: 700 } },
            { type: "queen", id: 'B1Q', positionName: "d1", position: { x: 300, y: 700 } },
            { type: "king", id: 'BK', positionName: "e1", position: { x: 400, y: 700 } },
            { type: "bishop", id: 'B2B', positionName: "f1", position: { x: 500, y: 700 } },
            { type: "knight", id: 'B2N', positionName: "g1", position: { x: 600, y: 700 } },
            { type: "rook", id: 'B2R', positionName: "h1", position: { x: 700, y: 700 } },
        ],
    },
    {
        player: "white",
        pieces: [
            { type: "pawn", id: 'W1p', positionName: "a7" ,position: { x: 0, y: 100 }},
            { type: "pawn", id: 'W2p', positionName: "b7" ,position: { x: 100, y: 100 }},
            { type: "pawn", id: 'W3p', positionName: "c7" ,position: { x: 200, y: 100 }},
            { type: "pawn", id: 'W4p', positionName: "d7" ,position: { x: 300, y: 100 }},
            { type: "pawn", id: 'W5p', positionName: "e7" ,position: { x: 400, y: 100 }},
            { type: "pawn", id: 'W6p', positionName: "f7" ,position: { x: 500, y: 100 }},
            { type: "pawn", id: 'W7p', positionName: "g7" ,position: { x: 600, y: 100 }},
            { type: "pawn", id: 'W8p', positionName: "h7" ,position: { x: 700, y: 100 }},
            
            { type: "rook", id: 'W1R', positionName: "a8" ,position: { x: 0, y: 0 } },
            { type: "knight", id: 'W1N', positionName: "b8" ,position: { x: 100, y: 0 } },
            { type: "bishop", id: 'W1B', positionName: "c8" ,position: { x: 200, y: 0 } },
            { type: "queen", id: 'W1Q', positionName: "d8" ,position: { x: 300, y: 0 } },
            { type: "king", id: 'WK', positionName: "e8" ,position: { x: 400, y: 0 } },
            { type: "bishop", id: 'W2B', positionName: "f8" ,position: { x: 500, y: 0 } },
            { type: "knight", id: 'W2N', positionName: "g8" ,position: { x: 600, y: 0 } },
            { type: "rook", id: 'W2R', positionName: "h8" ,position: { x: 700, y: 0 } },
        ],
    }
]

export const fulledPosition=[
    {id: 'B1p', positionName: "a2",position: { x: 0, y: 600 }},
    {id: 'B2p', positionName: "b2",position:{ x: 100, y: 600 } },
    {id: 'B3p', positionName: "c2",position:{ x: 200, y: 600 }},
    {id: 'B4p', positionName: "d2" ,position:{ x: 300, y: 600 }},
    {id: 'B5p', positionName: "e2" ,position:{ x: 400, y: 600 }},
    {id: 'B6p', positionName: "f2",position:{ x: 500, y: 600 }},
    {id: 'B7p', positionName: "g2" ,position:{ x: 600, y: 600 }},
    {id: 'B8p', positionName: "h2" ,position:{ x: 700, y: 600 }},
    {id: 'B1R', positionName: "a1",position:{ x: 0, y: 700 }},
    {id: 'B1N', positionName: "b1",position:{ x: 100, y: 700 }},
    {id: 'B1B', positionName: "c1",position:{ x: 200, y: 700 }},
    {id: 'B1Q', positionName: "d1",position:{ x: 300, y: 700 }},
    {id: 'BK', positionName: "e1",position:{ x: 400, y: 700 }},
    {id: 'B2B', positionName: "f1",position:{ x: 500, y: 700 }},
    {id: 'B2N', positionName: "g1",position:{ x: 600, y: 700 }},
    {id: 'B2R', positionName: "h1",position:{ x: 700, y: 700 }},

    {id: 'W1p', positionName: "a7" ,position:{ x: 0, y: 100 }},
    {id: 'W2p', positionName: "b7",position:{ x: 100, y: 100 }},
    {id: 'W3p', positionName: "c7",position:{ x: 200, y: 100 }},
    {id: 'W4p', positionName: "d7",position:{ x: 300, y: 100 }},
    {id: 'W5p', positionName: "e7",position:{ x: 400, y: 100 }},
    {id: 'W6p', positionName: "f7" ,position:{ x: 500, y: 100 }},
    {id: 'W7p', positionName: "g7" ,position:{ x: 600, y: 100 }},
    {id: 'W8p', positionName: "h7" ,position:{ x: 700, y: 100 }},
    {id: 'W1R', positionName: "a8" ,position:{ x: 0, y: 0 }},
    {id: 'W1N', positionName: "b8" ,position:{ x: 100, y: 0 }},
    {id: 'W1B', positionName: "c8" ,position:{ x: 200, y: 0 }},
    {id: 'W1Q', positionName: "d8" ,position:{ x: 300, y: 0 }},
    {id: 'WK', positionName: "e8" ,position:{ x: 400, y: 0 }},
    {id: 'W2B', positionName: "f8" ,position:{ x: 500, y: 0 }},
    {id: 'W2N', positionName: "g8" ,position:{ x: 600, y: 0 }},
    {id: 'W2R', positionName: "h8",position:{ x: 700, y: 0 }},
]