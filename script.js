"use strict";

const translations = {
    "en": {
        "pageTitle": "Kniveslipetjenesten | Knife sharpening in Trondheim",
        "navServices": "Services",
        "navPricing": "Pricing",
        "navContact": "Contact",
        "navAbout": "How it works",
        "heroEyebrow": "Knife sharpening in Trondheim",
        "heroTitle": "A fresh edge for your kitchen knives.",
        "heroSubtitle": "Phong sharpens kitchen knives by hand on Japanese whetstones. Drop-off and pickup in Trondheim by appointment.",
        "heroCtaPricing": "Calculate price",
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
        "price2Label": "Minor Damage Surcharge",
        "price2Note": "Per issue — a chip along the edge or a broken tip counts as 50,- each.",
        "price3Label": "Single-Bevel Surcharge",
        "price4Label": "Filleting Knife Surcharge",
        "exampleText": "A Yanagiba with a small edge chip costs NOK 275 (125 + 100 + 50).",
        "calcTitle": "Price Calculator",
        "calcQtyLabel": "Number of knives",
        "calcSubsTitle": "Add-ons",
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
        "footerTiktok": "Follow my work on TikTok",
        "skip": "Skip to content",
        "step1": "Send an inquiry",
        "step2": "Arrange drop-off",
        "heroRate": "NOK 125",
        "heroRateUnit": "per standard kitchen knife",
        "quote": "Open an email with your estimate",
        "quoteNote": "Add your knife types and any photos before sending.",
        "zeroNote": "Select at least one knife to prepare an inquiry.",
        "quoteSubject": "Knife sharpening inquiry",
        "greeting": "Hi Phong,",
        "quoteIntro": "I’d like to arrange knife sharpening and drop-off in Trondheim.",
        "quoteTypes": "Knife types and any notes:",
        "navigation": "Main navigation",
        "language": "Choose language"
    },
    "no": {
        "pageTitle": "Kniveslipetjenesten | Knivsliping i Trondheim",
        "navServices": "Tjenester",
        "navPricing": "Priser",
        "navContact": "Kontakt",
        "navAbout": "Slik fungerer det",
        "heroEyebrow": "Knivsliping i Trondheim",
        "heroTitle": "Gi knivene ny egg.",
        "heroSubtitle": "Phong sliper kjøkkenkniver for hånd på japanske våtsteiner. Levering og henting i Trondheim etter avtale.",
        "heroCtaPricing": "Beregn pris",
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
        "price2Label": "Tillegg for mindre skader",
        "price2Note": "50 kr per skade. Hakk i eggen og knekt spiss regnes som to skader.",
        "price3Label": "Tillegg for ensidig egg",
        "price4Label": "Tillegg for fileteringskniver",
        "exampleText": "En Yanagiba med et lite hakk i eggen koster 275 kr (125 + 100 + 50).",
        "calcTitle": "Priskalkulator",
        "calcQtyLabel": "Antall kniver",
        "calcSubsTitle": "Tillegg",
        "calcChipLabel": "Hakk langs eggen",
        "calcTipLabel": "Knekte spisser",
        "calcBevelLabel": "Ensidig egg",
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
        "footerTiktok": "Følg arbeidet mitt på TikTok",
        "skip": "Hopp til innhold",
        "step1": "Send en forespørsel",
        "step2": "Avtal levering",
        "heroRate": "125 kr",
        "heroRateUnit": "per vanlig kjøkkenkniv",
        "quote": "Åpne e-post med estimatet",
        "quoteNote": "Legg til knivtyper og eventuelle bilder før du sender.",
        "zeroNote": "Velg minst én kniv for å lage en forespørsel.",
        "quoteSubject": "Forespørsel om knivsliping",
        "greeting": "Hei Phong,",
        "quoteIntro": "Jeg ønsker å avtale sliping og levering i Trondheim.",
        "quoteTypes": "Knivtyper og eventuelle merknader:",
        "navigation": "Hovedmeny",
        "language": "Velg språk"
    }
};

let currentLang = "no";
const calculator = document.getElementById("calculator");
const result = document.getElementById("calcResult");
const quoteLink = document.getElementById("quoteLink");
const quoteNote = calculator.querySelector(".calc-note");
const contactEmail = document.querySelector('.contact-method[href^="mailto:"]');
const fields = [
    { id: "calcQty", label: "calcQtyLabel", rate: 125 },
    { id: "calcChip", label: "calcChipLabel", rate: 50 },
    { id: "calcTip", label: "calcTipLabel", rate: 50 },
    { id: "calcBevel", label: "calcBevelLabel", rate: 100, limitByQuantity: true },
    { id: "calcFillet", label: "calcFilletLabel", rate: 25, limitByQuantity: true }
].map((field) => ({ ...field, select: document.getElementById(field.id) }));

function setOptions(select, maximum) {
    if (select.options.length === maximum + 1 && select.options[0].value === "0") return;
    const previous = Number(select.value);
    const options = Array.from({ length: maximum + 1 }, (_, quantity) => new Option(quantity, quantity));
    select.replaceChildren(...options);
    select.value = Math.min(previous, maximum);
}

function emailLink(subject, body) {
    return `mailto:naifuco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function updateCalculator() {
    const dict = translations[currentLang];
    const quantity = Number(fields[0].select.value);
    fields.slice(1).forEach(({ select, limitByQuantity }) => {
        setOptions(select, limitByQuantity || quantity === 0 ? quantity : 100);
        select.disabled = quantity === 0;
    });

    const selected = fields.map((field) => ({ ...field, quantity: Number(field.select.value) }));
    const total = selected.reduce((sum, field) => sum + field.quantity * field.rate, 0);
    const amount = new Intl.NumberFormat(currentLang === "no" ? "nb-NO" : "en", {
        maximumFractionDigits: 0
    }).format(total);
    const formattedTotal = currentLang === "no" ? `${amount} kr` : `NOK ${amount}`;
    result.value = formattedTotal;
    quoteLink.hidden = quantity === 0;
    quoteNote.textContent = quantity ? dict.quoteNote : dict.zeroNote;

    const lines = selected.filter((field) => field.quantity > 0)
        .map((field) => `${dict[field.label]}: ${field.quantity}`);
    const body = [
        dict.greeting, "", dict.quoteIntro, "", ...lines,
        `${dict.calcTotalLabel}: ${formattedTotal}`, "", dict.quoteTypes, ""
    ].join("\r\n");
    quoteLink.href = emailLink(dict.quoteSubject, body);
    contactEmail.href = emailLink(dict.quoteSubject, `${dict.greeting}\r\n\r\n`);
}

function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    document.documentElement.lang = lang === "no" ? "nb" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = dict[element.dataset.i18n];
    });
    document.querySelectorAll("[data-label]").forEach((element) => {
        element.setAttribute("aria-label", dict[element.dataset.label]);
    });
    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    updateCalculator();

    try {
        localStorage.setItem("kniveslipetjenesten-lang", lang);
    } catch {
        // The language switch also works when storage is unavailable.
    }
}

let savedLanguage;
try {
    savedLanguage = localStorage.getItem("kniveslipetjenesten-lang");
} catch {
    // Use Norwegian when the stored preference is inaccessible.
}

setOptions(fields[0].select, 100);
applyLanguage(savedLanguage === "en" ? "en" : "no");
calculator.hidden = false;
calculator.addEventListener("change", updateCalculator);
calculator.addEventListener("submit", (event) => event.preventDefault());
document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});
document.getElementById("year").textContent = new Date().getFullYear();
