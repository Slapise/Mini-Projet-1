const image = document.getElementsByClassName("image")[0];
const flecheGauche = document.getElementsByClassName("arrow")[0];
const flecheDroite = document.getElementsByClassName("arrow")[1];
const titre = document.querySelector(".title");
const description = document.querySelector(".description");
const wiki = document.querySelector(".wiki");

let compteur = 0;

const images = [
    {
        src: "assets/html/TimBerners-Lee.png",
        titre: "Tim Berners-Lee",
        description: "<strong><u>Tim Berners-Lee</u></strong>, né en 1955, est un informaticien britannique célèbre pour avoir inventé le <strong>World Wide Web</strong> en 1989 au <strong>CERN</strong>. Il a développé les technologies fondamentales du Web, telles que <strong>HTTP</strong>, <strong>HTML</strong> et les <strong>URLs</strong>, et a lancé le premier site Web en <strong>1991</strong>.",
        wiki: "https://fr.wikipedia.org/wiki/Tim_Berners-Lee",
    },
    {
        src: "assets/html/LinusTorvalds.png",
        titre: "Linus Torvalds",
        description: "<strong><u>Linus Torvalds</u></strong>, né en 1969, est un informaticien finno-américain célèbre pour avoir créé le noyau <strong>Linux</strong> en <strong>1991</strong>. Ce projet personnel, initié à l'Université d'Helsinki, visait à créer un système d'exploitation gratuit et open-source. <strong>Linux</strong> est aujourd'hui largement utilisé dans les serveurs, superordinateurs, smartphones (via <strong>Android</strong>) et systèmes embarqués. Torvalds supervise toujours le développement du noyau <strong>Linux</strong>.",
        wiki: "https://fr.wikipedia.org/wiki/Linus_Torvalds",
    },
    {
        src: "assets/html/KonradZuse.png",
        titre: "Konrad Zuse",
        description: "<strong><u>Konrad Zuse</u></strong> (1910-1995) est un ingénieur allemand, pionnier de l'informatique moderne. Dans les années 1930 et 1940, il a conçu plusieurs des premiers ordinateurs programmables, notamment la <strong>Z1</strong> (1938), la <strong>Z2</strong> (1939), la <strong>Z3</strong> (1941), considérée comme le premier ordinateur fonctionnel et programmable, et la <strong>Z4</strong> (1945), utilisée pour des calculs scientifiques.",
        wiki: "https://fr.wikipedia.org/wiki/Konrad_Zuse",
    },
];

function maj() {
    image.src = images[compteur].src;
    titre.textContent = images[compteur].titre;
    description.innerHTML = images[compteur].description;
    wiki.href = images[compteur].wiki;

    const colors = {
        0: "#85c1e9",
        1: "#82e0aa",
        2: "coral"
    };

    const color = colors[compteur] || "aliceblue";
    description.style.color = color;
    titre.style.color = color;

    console.log("Mise a jour du site");
}

flecheGauche.addEventListener("click", () => {
    if (compteur > 0) {
        compteur--;
    } else {
        compteur = images.length - 1
    }
    maj();
});

flecheDroite.addEventListener("click", () => {
    if (compteur < images.length - 1) {
        compteur++;
    } else {
        compteur = 0
    }
    maj();
});

maj()