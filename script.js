"use strict";

const translations = {
    "en": {
        "pageTitle": "Kniveslipetjenesten | Knife sharpening in Trondheim",
        "navServices": "Services",
        "navPricing": "Pricing",
        "navNotOffered": "Limitations",
        "navContact": "Contact",
        "navAbout": "How it works",
        "heroEyebrow": "Knife sharpening in Trondheim",
        "heroTitle": "Blunt kitchen knives? I sharpen them.",
        "heroSubtitle": "Hand sharpening on Japanese whetstones for home cooks and professional chefs. Standard kitchen knife: NOK 125. Contact me to arrange drop-off and pickup.",
        "heroCtaPricing": "See Pricing",
        "heroCtaContact": "Arrange sharpening",
        "aboutTitle": "How to get your knives sharpened",
        "aboutText1": "Send a text with the number and types of knives you need sharpened. For chips or a broken tip, please include a photo.",
        "aboutText2": "We arrange drop-off and pickup in Trondheim. See the prices below for sharpening and surcharges.",
        "aboutText3": "I’m Phong. I sharpen knives by hand on Japanese whetstones. From 2020 to 2025, I sharpened for home cooks and professional chefs as one of the owners of Tomatosharp.",
        "servicesTitle": "Knives and repairs",
        "servicesLead": "Sharpening for kitchen knives, Japanese single-bevel knives and minor damage.",
        "service1Title": "Kitchen Knives",
        "service1Text": "Chef’s knives, vegetable knives and small kitchen knives, including Gyuto, Santoku, Nakiri and Petty.",
        "service2Title": "Single-Bevel Knives",
        "service2Text": "Single-bevel Yanagiba and Deba are sharpened to suit the blade’s geometry. Surcharge: NOK 100 per knife.",
        "service3Title": "Minor Repairs",
        "service3Text": "Small edge chips and broken tips can be repaired where possible. Surcharge: NOK 50 per issue.",
        "pricingTitle": "Pricing",
        "pricingLead": "NOK 125 per standard kitchen knife. Surcharges below are added to the base price.",
        "price1Label": "Ordinary Kitchen Knife",
        "price1Note": "Standard sharpening per knife.",
        "price2Label": "Minor Damage Surcharge",
        "price2Note": "Per issue — a chip along the edge or a broken tip counts as 50,- each.",
        "price3Label": "Single-Bevel Surcharge",
        "price3Note": "For single-bevel knives such as Yanagiba and Deba.",
        "price4Label": "Filleting Knife Surcharge",
        "price4Note": "For flexible filleting knives.",
        "exampleTitle": "Example",
        "exampleText": "A Yanagiba with a small chip on the edge: 125 + 100 + 50 = 275,- NOK.",
        "calcTitle": "Price Calculator",
        "calcQtyLabel": "Number of knives",
        "calcSubsTitle": "Add-ons — select quantity",
        "calcChipLabel": "Chips along the edge",
        "calcTipLabel": "Broken tips",
        "calcBevelLabel": "Single-bevel knives",
        "calcFilletLabel": "Filleting knives",
        "calcTotalLabel": "Estimated total",
        "notOfferedTitle": "What I Don't Offer",
        "notOfferedLead": "The service does not cover the knives and work listed below.",
        "exclude1": "Major damage and blade reconstruction",
        "exclude2": "Serrated knives",
        "exclude3": "Hunting knives",
        "exclude4": "Thinning of knives that have become too thick from repeated sharpening",
        "notOfferedNote": "Unsure whether your knife can be sharpened? Send a photo before drop-off.",
        "contactTitle": "Arrange drop-off and sharpening",
        "contactLead": "Send the number and types of knives by text, email or Facebook. Include a photo of any damage. We will arrange drop-off and pickup.",
        "contactSms": "Send SMS",
        "contactEmail": "Email",
        "contactFacebook": "Facebook",
        "mapTitle": "Drop-off & Pickup",
        "mapLead": "Drop-off and pickup in Trondheim by arrangement. Please get in touch before visiting.",
        "mapOpen": "Open in Google Maps",
        "shippingNote": "I mainly operate in Trondheim. If you're outside Trondheim and want your knives sharpened, get in touch and we can work something out — you cover shipping both ways, and I can't take responsibility for anything that happens to the knives during transit.",
        "footerText": "Knife sharpening in Trondheim · Phong",
        "footerTiktok": "Follow my work on TikTok"
    },
    "no": {
        "pageTitle": "Kniveslipetjenesten | Knivsliping i Trondheim",
        "navServices": "Tjenester",
        "navPricing": "Priser",
        "navNotOffered": "Avgrensninger",
        "navContact": "Kontakt",
        "navAbout": "Slik fungerer det",
        "heroEyebrow": "Knivsliping i Trondheim",
        "heroTitle": "Sløve kjøkkenkniver? Jeg sliper dem.",
        "heroSubtitle": "Håndsliping på japanske våtsteiner for hjemmekokker og profesjonelle. Vanlig kjøkkenkniv: 125 kr. Avtal levering og henting direkte med meg.",
        "heroCtaPricing": "Se priser",
        "heroCtaContact": "Avtal knivsliping",
        "aboutTitle": "Slik får du knivene slipt",
        "aboutText1": "Send en SMS med antall kniver og hvilke typer du vil ha slipt. Har kniven hakk eller knekt spiss, send gjerne et bilde.",
        "aboutText2": "Vi avtaler levering og henting i Trondheim. Se prisene nedenfor for sliping og tillegg.",
        "aboutText3": "Jeg heter Phong og sliper knivene for hånd på japanske våtsteiner. Fra 2020 til 2025 slipte jeg for hjemmekokker og profesjonelle kokker som en av eierne av Tomatosharp.",
        "servicesTitle": "Kniver og reparasjoner",
        "servicesLead": "Sliping av kjøkkenkniver, japanske kniver med ensidig egg og mindre skader.",
        "service1Title": "Kjøkkenkniver",
        "service1Text": "Kokkekniver, grønnsakskniver og små kjøkkenkniver, blant annet Gyuto, Santoku, Nakiri og Petty.",
        "service2Title": "Kniver med ensidig egg",
        "service2Text": "Yanagiba og Deba med ensidig egg slipes etter bladets geometri. Tillegg: 100 kr per kniv.",
        "service3Title": "Mindre reparasjoner",
        "service3Text": "Mindre hakk i eggen og knekte spisser kan repareres der det er mulig. Tillegg: 50 kr per skade.",
        "pricingTitle": "Priser",
        "pricingLead": "125 kr per vanlig kjøkkenkniv. Tilleggene nedenfor kommer i tillegg til grunnprisen.",
        "price1Label": "Vanlig kjøkkenkniv",
        "price1Note": "Standard sliping per kniv.",
        "price2Label": "Tillegg for mindre skader",
        "price2Note": "50 kr per skade. Hakk i eggen og knekt spiss regnes som to skader.",
        "price3Label": "Tillegg for ensidig egg",
        "price3Note": "For kniver med ensidig egg, som Yanagiba og Deba.",
        "price4Label": "Tillegg for fileteringskniver",
        "price4Note": "For fleksible fileteringskniver.",
        "exampleTitle": "Eksempel",
        "exampleText": "En Yanagiba med et lite hakk i eggen: 125 + 100 + 50 = 275,- NOK.",
        "calcTitle": "Priskalkulator",
        "calcQtyLabel": "Antall kniver",
        "calcSubsTitle": "Tillegg — velg antall",
        "calcChipLabel": "Hakk langs eggen",
        "calcTipLabel": "Knekte tupper",
        "calcBevelLabel": "Kniver med ensidig egg",
        "calcFilletLabel": "Fileteringskniver",
        "calcTotalLabel": "Estimert total",
        "notOfferedTitle": "Dette sliper jeg ikke",
        "notOfferedLead": "Tjenesten omfatter ikke knivene og arbeidene nedenfor.",
        "exclude1": "Store skader og gjenoppbygging av blad",
        "exclude2": "Kniver med tannet egg (brødkniver)",
        "exclude3": "Jaktkniver",
        "exclude4": "Tynning av kniver som har blitt for tykke etter gjentatte slipinger",
        "notOfferedNote": "Er du usikker på om kniven kan slipes? Send et bilde før levering.",
        "contactTitle": "Avtal levering og sliping",
        "contactLead": "Send antall kniver og knivtype på SMS, e-post eller Facebook. Legg gjerne ved et bilde av skader. Vi avtaler tidspunkt for levering og henting.",
        "contactSms": "Send SMS",
        "contactEmail": "E-post",
        "contactFacebook": "Facebook",
        "mapTitle": "Levering og henting",
        "mapLead": "Levering og henting i Trondheim etter avtale. Ta kontakt før du kommer.",
        "mapOpen": "Åpne i Google Maps",
        "shippingNote": "Jeg opererer hovedsakelig i Trondheim. Bor du utenfor Trondheim og ønsker sliping, ta kontakt så finner vi en løsning — du dekker frakt begge veier, og jeg kan ikke ta ansvar for det som eventuelt skjer med knivene under transport.",
        "footerText": "Knivsliping i Trondheim · Phong",
        "footerTiktok": "Følg arbeidet mitt på TikTok"
    }
};

let currentLang = "no";

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;
    currentLang = lang;

    document.documentElement.lang = lang === "no" ? "nb" : "en";

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
        localStorage.setItem("kniveslipetjenesten-lang", lang);
    } catch (e) {
        /* ignore storage errors */
    }
}

function initLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem("kniveslipetjenesten-lang");
    } catch (e) {
        /* ignore */
    }
    applyLanguage(saved === "en" ? "en" : "no");
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
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
