"use strict";

const translations = {
    en: {
        pageTitle: "NAIFU Knife Sharpening",
        navServices: "Services",
        navPricing: "Pricing",
        navNotOffered: "Not Offered",
        navContact: "Contact",
        navAbout: "About",

        heroEyebrow: "Professional Knife Sharpener",
        heroTitle: "Your friendly neighbourhood knifesharpener",
        heroSubtitle: "Professional knife sharpening for your kitchen and specialty blades — restored by hand to a keen, lasting edge.",
        heroCtaPricing: "See Pricing",
        heroCtaContact: "Get in Touch",
        heroCtaTiktok: "Watch on TikTok",

        aboutTitle: "About Me",
        aboutText1: "I'm Phong — better known online as NAIFU ナイフ. Ever since I was a kid I'd grab any rock I could find to sharpen my tools. It never really worked — until 2019, when my first cheap whetstone made everything click.",
        aboutText2: "By 2020 I had turned that obsession into a real business. Many know me as one of the owners of Tomatosharp, sharpening for professional chefs and home cooks and selling knives and kitchen tools from 2020 to 2025.",
        aboutText3: "That journey came to an end in 2025, when I chose to take the next step and focus on my own career — first in engineering, with a Master's and Bachelor's in Geography, Geomatics & Spatial Planning from NTNU Trondheim, and then on social media as \u201cNAIFU\u201d, sharing the quiet focus of the craft with my community on TikTok.",
        aboutQuote: "\u201cEvery knife tells a story. My job is to listen to it through the steel.\u201d",
        aboutQuoteAuthor: "— Phong, NAIFU ナイフ",
        factAliasLabel: "Alias",
        factFirstStoneLabel: "First step",
        factProLabel: "Sharpened professionally",
        factNowLabel: "Now",
        factNowValue: "Engineer & creator",
        journeyTitle: "My Path",
        journey1Title: "Sharpening on Rocks",
        journey1Text: "As a kid I'd grab any rock I could find to sharpen my tools. It never really worked — but the fascination never left me.",
        journey2Title: "The First Step · 2019",
        journey2Text: "In 2019 I took my first real step into the world of knife sharpening. Between 2019 and 2020 my skills rocketed and, for the first time, everything finally clicked.",
        journey3Title: "Going Professional · 2020",
        journey3Text: "I turned the craft into a service for professional chefs and home cooks as one of the owners of Tomatosharp.",
        journey4Title: "Selling Knives & Tools · 2021–2025",
        journey4Text: "I expanded beyond sharpening and sold knives and kitchen tools to a growing base of loyal customers. That ran until 2025, and continues independently today.",
        journey5Title: "A New Edge · 2025",
        journey5Text: "In 2025 the Tomatosharp journey came to an end. I took the next step to focus on my own path — first engineering (MSc & BSc from NTNU Trondheim), then social media as NAIFU on TikTok.",

        servicesTitle: "What I Sharpen",
        servicesLead: "Every knife sharpened by hand on Japanese whetstones.",
        service1Title: "Kitchen Knives",
        service1Text: "Gyuto, Santoku, Nakiri and Petty all count as standard kitchen knives.",
        service2Title: "Single-Bevel Knives",
        service2Text: "Yanagiba or Deba — knives sharpened flat on both sides, requiring advanced technique and strong skill.",
        service3Title: "Minor Repairs",
        service3Text: "Small tip damage and edge chips reshaped where possible.",

        pricingTitle: "Pricing",
        pricingLead: "Clear, honest prices. All amounts in Norwegian kroner (NOK).",
        price1Label: "Ordinary Kitchen Knife",
        price1Note: "Standard sharpening per knife.",
        price2Label: "Minor Damage Surcharge",
        price2Note: "Per issue — a chip along the edge or a broken tip counts as 50,- each.",
        price3Label: "Single-Bevel Surcharge",
        price3Note: "For single-bevel knives such as Yanagiba and Deba.",
        price4Label: "Filleting Knife Surcharge",
        price4Note: "For flexible filleting knives.",
        exampleTitle: "Example",
        exampleText: "A Yanagiba with a small chip on the edge: 125 + 100 + 50 = 275,- NOK.",
        calcTitle: "Price Calculator",
        calcQtyLabel: "Number of knives",
        calcSubsTitle: "Add-ons — select quantity",
        calcChipLabel: "Chips along the edge",
        calcTipLabel: "Broken tips",
        calcBevelLabel: "Single-bevel knives",
        calcFilletLabel: "Filleting knives",
        calcTotalLabel: "Estimated total",

        notOfferedTitle: "What I Don't Offer",
        notOfferedLead: "To keep quality high, some jobs are outside my service.",
        exclude1: "Major damage and blade reconstruction",
        exclude2: "Serrated knives",
        exclude3: "Hunting knives",
        exclude4: "Thinning of knives that have become too thick from repeated sharpening",
        notOfferedNote: "If I discover elements I don't handle, I may choose to leave certain knives unsharpened.",

        contactTitle: "Get in Touch",
        contactLead: "Have a knife that needs a new edge? Reach me by SMS, email or Facebook.",
        contactSms: "Send SMS",
        contactEmail: "Email",
        contactFacebook: "Facebook",
        mapTitle: "Drop-off & Pickup",
        mapLead: "This is where knives can be delivered and picked up.",
        mapOpen: "Open in Google Maps",
        shippingNote: "I mainly operate in Trondheim. If you're outside Trondheim and want your knives sharpened, get in touch and we can work something out — you cover shipping both ways, and I can't take responsibility for anything that happens to the knives during transit.",

        footerText: "Handcrafted knife sharpening.",
        footerTiktok: "Follow my work on TikTok"
    },
    no: {
        pageTitle: "NAIFU Knivsliping",
        navServices: "Tjenester",
        navPricing: "Priser",
        navNotOffered: "Utenfor tilbud",
        navContact: "Kontakt",
        navAbout: "Om meg",

        heroEyebrow: "Profesjonell knivsliper",
        heroTitle: "Din vennlige knivsliper i nabolaget",
        heroSubtitle: "Profesjonell knivsliping for kjøkken- og spesialkniver — håndslipt tilbake til en skarp og varig egg.",
        heroCtaPricing: "Se priser",
        heroCtaContact: "Ta kontakt",
        heroCtaTiktok: "Se på TikTok",

        aboutTitle: "Om meg",
        aboutText1: "Jeg er Phong — bedre kjent på nett som NAIFU ナイフ. Helt siden jeg var barn grep jeg tak i hvilken som helst stein jeg kunne finne for å slipe verktøyet mitt. Det fungerte aldri helt — før i 2019, da min første rimelige bryne fikk alt til å klaffe.",
        aboutText2: "Innen 2020 hadde jeg gjort lidenskapen om til en ekte bedrift. Mange kjenner meg som en av eierne av Tomatosharp, der jeg slipte for profesjonelle kokker og hjemmekokker og solgte kniver og kjøkkenutstyr fra 2020 til 2025.",
        aboutText3: "Den reisen tok slutt i 2025, da jeg valgte å ta steget videre og fokusere på egen karriere — først innenfor ingeniørfag, med en master- og bachelorgrad i geografi, geomatikk og arealplanlegging fra NTNU Trondheim, og deretter på sosiale medier som \u201cNAIFU\u201d, der jeg deler det rolige fokuset i håndverket med følgerne mine på TikTok.",
        aboutQuote: "\u201cHver kniv forteller en historie. Min jobb er å lytte til den gjennom stålet.\u201d",
        aboutQuoteAuthor: "— Phong, NAIFU ナイフ",
        factAliasLabel: "Alias",
        factFirstStoneLabel: "Første steg",
        factProLabel: "Profesjonell sliper",
        factNowLabel: "I dag",
        factNowValue: "Ingeniør & skaper",
        journeyTitle: "Min reise",
        journey1Title: "Sliping på stein",
        journey1Text: "Som barn grep jeg tak i hvilken som helst stein for å slipe verktøyet mitt. Det fungerte aldri helt — men fascinasjonen forsvant aldri.",
        journey2Title: "Det første steget · 2019",
        journey2Text: "I 2019 tok jeg mitt første ekte steg inn i knivslipeverdenen. Mellom 2019 og 2020 skjøt ferdighetene mine i været, og for første gang klaffet alt.",
        journey3Title: "Ble profesjonell · 2020",
        journey3Text: "Jeg gjorde håndverket om til en tjeneste for profesjonelle kokker og hjemmekokker som en av eierne av Tomatosharp.",
        journey4Title: "Salg av kniver og verktøy · 2021–2025",
        journey4Text: "Jeg utvidet ut over sliping og solgte kniver og kjøkkenutstyr til en voksende kundekrets. Det varte frem til 2025, og fortsetter nå på selvstendig basis.",
        journey5Title: "En ny egg · 2025",
        journey5Text: "I 2025 tok Tomatosharp-reisen slutt. Jeg tok steget videre for å fokusere på egen vei — først ingeniørfag (master og bachelor fra NTNU Trondheim), deretter sosiale medier som NAIFU på TikTok.",

        servicesTitle: "Hva jeg sliper",
        servicesLead: "Hver kniv er slipt for hånd på japanske våtstener.",
        service1Title: "Kjøkkenkniver",
        service1Text: "Gyuto, Santoku, Nakiri og Petty går alt under standard kjøkkenkniver.",
        service2Title: "Enegget kniver",
        service2Text: "Yanagiba eller Deba — kniver som slipes flatt på begge sider og krever avansert teknikk og sterk kompetanse.",
        service3Title: "Mindre reparasjoner",
        service3Text: "Små skader på spiss og hakk i eggen formes der det er mulig.",

        pricingTitle: "Priser",
        pricingLead: "Tydelige og ærlige priser. Alle beløp i norske kroner (NOK).",
        price1Label: "Vanlig kjøkkenkniv",
        price1Note: "Standard sliping per kniv.",
        price2Label: "Tillegg for mindre skader",
        price2Note: "Per skade — hakk langs eggen eller knekt tupp teller som 50,- per del.",
        price3Label: "Tillegg for enegget kniver",
        price3Note: "For enegget kniver som Yanagiba og Deba.",
        price4Label: "Tillegg for fileteringskniver",
        price4Note: "For fleksible fileteringskniver.",
        exampleTitle: "Eksempel",
        exampleText: "En Yanagiba med et lite hakk i eggen: 125 + 100 + 50 = 275,- NOK.",
        calcTitle: "Priskalkulator",
        calcQtyLabel: "Antall kniver",
        calcSubsTitle: "Tillegg — velg antall",
        calcChipLabel: "Hakk langs eggen",
        calcTipLabel: "Knekte tupper",
        calcBevelLabel: "Enegget kniver",
        calcFilletLabel: "Fileteringskniver",
        calcTotalLabel: "Estimert total",

        notOfferedTitle: "Hva jeg ikke tilbyr",
        notOfferedLead: "For å holde kvaliteten høy er noen oppdrag utenfor mitt tilbud.",
        exclude1: "Store skader og gjenoppbygging av blad",
        exclude2: "Kniver med tannet egg (brødkniver)",
        exclude3: "Jaktkniver",
        exclude4: "Tynning av kniver som har blitt for tykke etter gjentatte slipinger",
        notOfferedNote: "Dersom jeg oppdager elementer jeg ikke utfører, kan jeg velge å la enkelte kniver være uslipt.",

        contactTitle: "Ta kontakt",
        contactLead: "Har du en kniv som trenger ny egg? Ta kontakt via SMS, e-post eller Facebook.",
        contactSms: "Send SMS",
        contactEmail: "E-post",
        contactFacebook: "Facebook",
        mapTitle: "Levering og henting",
        mapLead: "Her kan kniver leveres og hentes.",
        mapOpen: "Åpne i Google Maps",
        shippingNote: "Jeg opererer hovedsakelig i Trondheim. Bor du utenfor Trondheim og ønsker sliping, ta kontakt så finner vi en løsning — du dekker frakt begge veier, og jeg kan ikke ta ansvar for det som eventuelt skjer med knivene under transport.",

        footerText: "Håndlaget knivsliping.",
        footerTiktok: "Følg arbeidet mitt på TikTok"
    }
};

let currentLang = "en";

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    currentLang = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] === undefined) return;
        if (key === "pageTitle") {
            document.title = dict[key];
        } else {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try {
        localStorage.setItem("naifu-lang", lang);
    } catch (e) {
        /* ignore storage errors */
    }
}

function initLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem("naifu-lang");
    } catch (e) {
        /* ignore */
    }
    const browserLang = (navigator.language || "en").toLowerCase().startsWith("nb") ||
        (navigator.language || "en").toLowerCase().startsWith("no") ? "no" : "en";
    applyLanguage(saved || browserLang);
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = "2025";
    }

    const calcQty = document.getElementById("calcQty");
    const calcChip = document.getElementById("calcChip");
    const calcTip = document.getElementById("calcTip");
    const calcBevel = document.getElementById("calcBevel");
    const calcFillet = document.getElementById("calcFillet");
    const calcResult = document.getElementById("calcResult");
    if (calcQty && calcChip && calcTip && calcBevel && calcFillet && calcResult) {
        const BASE = 125;
        const DAMAGE = 50;
        const BEVEL = 100;
        const FILLET = 25;
        const count = (el) => Math.max(0, parseInt(el.value, 10) || 0);
        const updateCalc = () => {
            const total = count(calcQty) * BASE +
                count(calcChip) * DAMAGE +
                count(calcTip) * DAMAGE +
                count(calcBevel) * BEVEL +
                count(calcFillet) * FILLET;
            calcResult.textContent = `${total},- NOK`;
        };
        [calcQty, calcChip, calcTip, calcBevel, calcFillet].forEach((el) => {
            el.addEventListener("input", updateCalc);
            el.addEventListener("change", updateCalc);
        });
        document.querySelectorAll(".stepper-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const input = document.getElementById(btn.dataset.target);
                if (!input) return;
                const step = parseInt(btn.dataset.step, 10) || 0;
                input.value = Math.max(0, (parseInt(input.value, 10) || 0) + step);
                updateCalc();
            });
        });
        updateCalc();
    }
});
