console.log(Elements);
console.log(ElementsMK);

let lang = "mk";
// PREVOD
//=================================================================

const customLang = {
  en: {
    mainTitle: "Periodic Table of Elements",
    legend: "Legend",
    searchPlaceholder: "Enter the name of the element or the symbol",
    alkalni: "Alkali Metals",
    drugiM: "Others Metals",
    trans: "Transition Metals",
    lantanidi: "Lanthanides",
    halogeni: "Halogens",
    aktinidi: "Actinides",
    Bgasovi: "Noble Gases",
    nemetali: "Non-metals",
    akali: "Akali Earth Metals",
    metaloidi: "Metalloids",
    headingL: "Lanthanides",
    aboutUsHeading: "DEVELOPED BY THE STUDENTS OF THE ACADEMY",
    email: "E-mail:",
    simbol: "Symbol",
    atomskaT: "Atomic Weight",
    gustina: "Density",
    topneje: "Melting Point",
    vrienje: "Boiling Point",
    atomskiBr: "Atomic number",
    pregled: "01.Overview",
    svojstva: "02.Thermal properties ",
    apTocka: "Absolute melting point",
    apTockaV: "Absolute boiling point",
    pregolemi: "Critical preasure",
    temp: "Critical temperatura",
    fuzija: "Heat of fusion",
    ispruvanje: "Heat of vaporization",
    sogoruvanje: "Heat of combustion",
    toplina: "Specific heat",
    indeks: "Adiabatic index",
    tocka: "Neel point",
    sprovodlivost: "Thermal conductivity",
    ekspanzija: "Thermal expansion",
    fizickiS: "03.Physical properties",
    tecnost: "Density(liquid)",
    MV: "Molar volume",
    TV: "Brinell hardness",
    MC: "Mohs hardness",
    MM: "Vickers hardness",
    MS: "Shear modules",
    MM: "Bulk modulus",
    MT: "Molar heat",
    TI: "Thermal exmapsion",
    R: "04. Reactivity",
    V: "Valence",
    EN: "Electronegativity",
    EA: "Electron afinity",
    IE: "Ionization energy",
    sigurnost: "05. Safety",
    TA: "Autoignition point",
    FA: "Flashpoint",
    TS: "Heat of combustion",
    K: "06. Classifications",
    AI: "Alternate names",
    IA: "Names of allotropes",
    B: "Block",
    G: "Group",
    P: "Period",
    BO: "Color",
    O: "Discovery",
    GF: "Gas phase",
    ES: "07. Electrical properties",
    EL: "Electrical Type",
    ELS: "Electrical conductivity",
    OT: "Resistivity",
    SST: "Superconducting point",
    MaS: "08. Magnetic Properties",
    faza: "Phase",
    halflife: "Half Life",
    lifetime: "Lifetime",
    decay: "Decay mode",
    Kbr: "Quantum numbers",
    NPR: "Neutron cross section",
    ANM: "Neutron mass absorpcion",
    PIZ: "Known isotopes",
    SIZ: "Stable isotopes",
    IZZ: "Isotopic abundances",
    nuklearniS: "11.Nuclear Properties",
    ARA: "Atomic radius",
    KRA: "Covalent radius",
    VDVR: "Van der Walls radius",
    KST: "Crystal structure",
    LALGI: "Latice angles",
    KL: "Latice constants",
    IPG: "Space group name",
    BPG: "Space group number",
    ADimenzii: "Atomic dimensions and structures",
    UNI: "In universse",
    SUN: "In sun",
    MET: "In meteoritis",
    ZKo: "In earth's crust",
    Oke: "In oceans",
    LJG: "In humans",
    treasure: "09.Abundances",
    mSvojstva: "Magnetic type",
    tLekuvanje: "Cure point",
    mmo: "Mass magnetic susceptibility",
    Mmo: "Molar magnetic susceptibility",
    Vmo: "Volume magnetic susceptibility",
  },
//=================================================================

  mk: {
    mainTitle: "Периодна табела на елементи",
    legend: "Легенда",
    searchPlaceholder: "Внесете го името на елементот или симболот",
    alkalni: "Aлкални метали",
    faza: "Фаза",
    drugiM: "Други метали",
    trans: "Транзициони метали",
    nemetali: "Неметали",
    lantanidi: "Лантаниди",
    halogeni: "Халогени",
    aktinidi: "Актиниди",
    Bgasovi: "Благородни гасови",
    akali: "Акали Земја метали",
    metaloidi: "Металоиди",
    headingL: "Лантханиди",
    aboutUsHeading: " ИЗРАБОТЕНО ОД СТУДЕНТИТЕ НА АКАДЕМИЈАТА",
    email: "Е-меил:",
    simbol: "Симбол",
    atomskaT: "Атомска тежина",
    gustina: "Густина",
    topneje: "Точка на топење",
    vrienje: "Топчка на вриење",
    atomskiBr: "Атомски број",
    prgled: "01.Преглед",
    svojstva: "02.Топлински свojства",
    apTocka: "Апсолутна точка на топење",
    apTockaV: "Апсолутна точка на вриење",
    pregolemi: "Критички преголеми",
    temp: "Критична температура",
    fuzija: "Топлина на фузија",
    ispruvanje: "Топлина на испарување",
    sogoruvanje: "Топлина на согорување",
    toplina: "Специфична топлина",
    indeks: "Адиабатски индекс",
    tocka: "Нил точка",
    sprovodlivost: "Термичка спроводливост",
    ekspanzija: "Термичка експанзија",
    fizickiS: "03.Физички својства",
    tecnost: "Густина(Течност)",
    MV: "Моларен волумен",

    TV: "Тврдина на Бринел",
    MC: "Мохсова цврстина",
    MM: "Масовно модул",
    MS: "Модул на смолкнување",
    MM: "Масовно модул",
    MT: "Моларната топлина",
    TI: "Термички измазнување",
    R: "04.Реактивност",
    V: "Валентност",
    EN: "Електронегативност",
    EA: "Електронска афинитет",
    IE: "Ионска енергија",
    sigurnost: "05.Сигурност",
    TA: "Точка на автониг",
    FA: "Флеш точка",
    TS: "Топлина на согорување",
    K: "06.Класификации",
    AI: "Алтернативни имиња",
    IA: "Имиња на алотропи",
    B: "Блокирај",
    G: "Група",
    P: "Период",
    BO: "Боја",
    O: "Откриено",
    GF: "Гасна фаза",
    ES: "07.Електрични својства",
    EL: "Електричен тип",
    ELS: "Електрична спроводливост",
    OT: "Отпорност",
    SST: "Суперспроводлива точка",
    MaS: "08.Магнетни Својства",
    halflife: "Пола живот",
    lifetime: "Доживотна",
    decay: "Режим на распаѓање",
    Kbr: "Квантитативен број",
    NPR: "Неутронски пресек",
    ANM: "Апсорпција на неутронска маса",
    PIZ: "Познати изотопи",
    SIZ: "Стабилни изотопи",
    IZZ: "Изoтопски изобили",
    nuklearniS: "11.Нуклеарни својства",
    ARA: "Атомски радиус",
    KRA: "Ковалентен радиус",
    VDVR: "Ван дер Валс радиус",
    KST: "Кристална структура",
    LALGI: "Лакови агли",
    KL: "Константи на латекс",
    IPG: "Име на просторната група",
    BPG: "Број на просторна група",
    ADimenzii: "10.Атомски димензии и структури",
    treasure: "09.Богатства",
    UNI: "Во универзум",
    SUN: "Во сонце",
    MET: "Во метеорити",
    ZKo: "Во земјината кора",
    Oke: "Во океаните",
    LJG: "Во луѓето",
    mSvojstva: "Mагнетни својства",
    tLekuvanje: "Точка на лекување",
    mmo: "Масовна магнетнa осетливост",
    Mmo: "Моларна магнетна осетливост",
    Vmo: " Волуменска магнетна осетливост",
  },
};
//=================================================================

const periodicTable = {
  en: Elements,
  mk: ElementsMK,
};
//=================================================================

const iframeUrls = {
  en: [
    "https://en.wikipedia.org/wiki/Alkali_metal",
    "https://en.wikipedia.org/wiki/Alkaline_earth_metal",
    "https://en.wikipedia.org/wiki/Group_3_element",
    "https://en.wikipedia.org/wiki/Group_4_element",
    "https://en.wikipedia.org/wiki/Group_5_element",
    "https://en.wikipedia.org/wiki/Group_6_element",
    "https://en.wikipedia.org/wiki/Group_7_element",
    "https://en.wikipedia.org/wiki/Group_8_element",
    "https://en.wikipedia.org/wiki/Group_9_element",
    "https://en.wikipedia.org/wiki/Group_10_element",
    "https://en.wikipedia.org/wiki/Group_11_element",
    "https://en.wikipedia.org/wiki/Group_12_element",
    "https://en.wikipedia.org/wiki/Boron_group",
    "https://en.wikipedia.org/wiki/Carbon_group",
    "https://en.wikipedia.org/wiki/Pnictogen",
    "https://en.wikipedia.org/wiki/Chalcogen#:~:text=The%20chalcogens%20(%2F%CB%88k%C3%A6,radioactive%20element%20polonium%20(Po).",
    "https://en.wikipedia.org/wiki/Halogen",
    "https://mk.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D0%BD_%D0%B3%D0%B0%D1%81",
  ],
  mk: [
    "https://mk.wikipedia.org/wiki/%D0%90%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB",
    "https://mk.wikipedia.org/wiki/%D0%97%D0%B5%D0%BC%D0%BD%D0%BE%D0%B0%D0%BB%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD_%D0%BC%D0%B5%D1%82%D0%B0%D0%BB",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_3_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_4_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_5_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_6_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_7_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_8_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_9_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_10_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_11_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%BF%D0%B0_12_%D0%BD%D0%B0_%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%BD%D0%B8%D0%BE%D1%82_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC",
    "https://mk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0",
    "https://mk.wikipedia.org/wiki/%D0%88%D0%B0%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4%D0%BD%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0",
    "https://mk.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D1%82%D0%BD%D0%B0_%D0%B3%D1%80%D1%83%D0%BF%D0%B0",
    "https://sr.wikipedia.org/wiki/16._%D0%B3%D1%80%D1%83%D0%BF%D0%B0_%D1%85%D0%B5%D0%BC%D0%B8%D1%98%D1%81%D0%BA%D0%B8%D1%85_%D0%B5%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D0%B0%D1%82%D0%B0",
    "https://mk.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BB%D0%BE%D0%B3%D0%B5%D0%BD",
    "https://en.wikipedia.org/wiki/Noble_gas",
  ],
};
//=================================================================

$(".lang").on("click", function () {
  //console.log($(this).attr('id'))

  lang = $(this).attr("id");
  translateAll();
});
//=================================================================

// function for translating

function translateAll() {
  createTable();
  createRow();

  $(".t").each(function (idx, element) {
    const key = $(this).attr("key");

    // translte SEARCH

    const hasPlaceholder = $(this).attr("placeholder");

    if (hasPlaceholder) {
      $(this).attr("placeholder", customLang[lang][key]);
    } else {
      $(this).text(customLang[lang][key]);
    }
  });
}

// kreiranje na Tabela
const createTable = () => {
  const $table = $(".periodic-table");
  $table.empty();
  for (let i = 1; i <= 18; i++) {
    $table.append(createColumn(i));
  }
};
//=================================================================

// kreiranje na kolona
const createColumn = (idx) => {
  // $('<div/>') isto kako createElement;
  const divContainer = $("<div/>");
  divContainer.addClass("periodic-column");

  const colLabel = $("<h3/>");
  colLabel.text(idx);
  colLabel.addClass("styleLabel");
  colLabel.addClass("box");
  divContainer.append(colLabel);

  colLabel.on("click", function () {
    $(".frame").attr("src", iframeUrls[lang][idx - 1]);
    $(".modal").addClass("open");
    $(".periodic-table").hide();
  });
//=================================================================

  // iterate over all elements

  periodicTable[lang].map((item) => {
    if (item.xpos === idx) {
      divContainer.append(createElement(item));
    }
  });

  // return some HTML
  return divContainer;
};
//=================================================================

// row for Lanthanidi i Aktinidi
const createRow = () => {
  const firstRow = $("<div/>");
  firstRow.addClass("periodic-row");

  const secondRow = $("<div/>");
  secondRow.addClass("periodic-row");

  const row = $(".rowA");
  const row1 = $(".row1");

  row.empty();
  row1.empty();

  row.append(firstRow);
  row1.append(secondRow);

  periodicTable[lang].forEach((item) => {
    if (item.xpos === "down") {
      firstRow.append(createEl(item));
    }
    if (item.xpos === "sdown") {
      secondRow.append(createEl(item));
    }
  });
};
//=================================================================

//creating element
const createElement = (data) => {
  //const { symbol, name } = data;
  return `<div href="#${data.number}"   class='hoverEL  element colorEl-${
    data.category
  }' id='click'>
  <ul class ='styleShells '>
  ${makeShells(data.shells)}
  </ul>
  <span class="numStyle">${data.number}</span>
  
  <span class='fw-bold  elSymbol' style=\"${
    data.number === null ? "color: white;" : ""
  }">${data.symbol}</span>
  
  <span  style=\"${
    data.number === null ? "; color: white;" : ""
  }" class="element-name">${data.name}</span>
  </div>
  `;
};
//=================================================================

//create element for Lanthanidi i Aktinidi;
const createEl = (data) => {
  // const { symbol, name } = data;
  return `<div class='styleTable hoverEL element   colorEl-${
    data.category
  } ' id='click' href="#${data.number}">
    <ul class ='styleShells'>
   ${makeShells(data.shells)}
   </ul>
   <span class="numStyle">${data.number}</span>
   
   <span class='fw-bold  elSymbol'>${data.symbol}</span>
   
   <span class=" element-name">${data.name}</span>
   
   </div>
   
   `;
};

//=================================================================

// SHELLS
function makeShells(shells) {
  let num = "";
  for (let i = 0; i < shells.length; i++) {
    const el = shells[i];
    num += `<li>${el}</li>`;
  }
  return num;
}

//-----------------------------------------------------

// DETAILS PAGE

$(document).on("click", "#click", function (e) {
  e.preventDefault();
  $(".SingleElement").addClass("open");

  let elNum = e.currentTarget.getElementsByTagName("span")[0].innerText;

  if (elNum) {
    let el = periodicTable[lang].find((n) => n.number.toString() === elNum);
    //$(".periodic-table").hide();
    $(".nStyle").text(`${el.number}`);
    $(".ul").html(`${makeShells(el.shells)}`);
    $(".theEl").html(`${el.symbol}`);
    $(".atomic-mass").html(`${el.atomic_mass}`);
    $(".name").text(`${el.name}`);
    $(".name").addClass("t");
    $(".summary").text(`${el.summary}`);
    $(".summary").addClass("t");
    $(".elImg").attr("src", `${el.staticImage.src}`);

    carouselImages(el);
    getProperties(el);
    Properties(el);
    Tproperties(el);
    PhProperties(el);
    Reactivity(el);
    Classifications(el);
    atomicStructures(el);
    NuclearProperties(el);
  }
});

function carouselImages(el) {
  let img = "";

  for (let i = 0; i < el.images.length; i++) {
    const pic = el.images[i];

    img += `<div class="carousel-item  ${i === 0 ? "active" : ""}">
    <img src="${pic.src}" class="d-block w-100" >
  </div>`;
  }
  $(".carousel-inner").empty();
  $(".carousel-inner").html(img);
}

function getProperties(el) {
  $(".properties").html(`
  <li>${el.atomic_mass.toFixed(2)}</li>
         <li>${el.density.toFixed(2)} g/cm3</li>
         <li>${el.melt} °C</li>
         <li>${el.boil.toFixed(2)} °C</li>`);
}

function Properties(el) {
  $(".Properties").html(`
  <li>${el.symbol}</li>
         <li>${el.number}</li>
         <li>${el.atomic_mass}</li>
         <li>${el.density} g/cm3</li>
         <li>${el.melt}°C</li>
         <li>${el.boil}°C</li>`);
}

function Tproperties(el) {
  $(".tProperties").html(`
  <li>${el.phase}</li>
                      <li>${el.melt} °C</li>
                      <li>${el.boil}°C</li>
                      <li>
                        
                        N/A
                      </li>
                      <li>
                        
                        N/A
                      </li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
  `);
}

function PhProperties(el) {
  $(".PhProperties").html(`
  <li>${el.density}g/cm3</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>${el.molar_heat}</li>
                      <li>N/A</li>
  `);
}

function Reactivity(el) {
  $(".reactivity").html(`
  <li>N/A</li>
                      <li>${el.electronegativity_pauling}</li>
                      <li>${el.electron_affinity}kJ/mol</li>
                      
                      <li> <br>${el.ionization_energies} </li>
  `);
}

function Classifications(el) {
  $(".classi").html(`
  <li>N/A</li>
  <li>N/A</li>
  <li>N/A</li>
  <li>${el.xpos}</li>
  <li>${el.period}</li>
  <li>${el.color}</li>
  <li>${el.named_by}</li>
  <li>N/A</li>
  `);
}

function atomicStructures(el) {
  $(".atomicStructures").html(`
  <li>N/A</li>
  <li>N/A</li>
  <li>N/A</li>
  <li>${el.crystal}</li>
  <li>N/A</li>
  <li>N/A</li>
  <li>N/A</li>
  <li>N/A</li>
  `);
}

function NuclearProperties(el) {
  $(".nuclearP").html(`
  <li>${el.halflife}</li>
                      <li>N/A</li>
                      <li>${el.alpha}</li>
                      <li>N/A</li>
                      <li>${el.cross}</li>
                      <li>N/A</li>
                      <li>N/A</li>
                      <li>N/A</li>`);
}

//--------------------------------------------------
//<!--  DETAILS PAGE -->

$(".close").on("click", function (e) {
  e.preventDefault();
  $(".SingleElement").removeClass("open");
  //$(".periodic-table").show();
});

//-----------------------------------------------------
//ABOUT US ONCLICK

const aboutUS = $(".aboutUs");
aboutUS.on("click", function (e) {
  e.preventDefault();
  $(".modaL").addClass("open");
});

$(".close").on("click", function () {
  $(".modaL").removeClass("open");
});

$(".close").on("click", function () {
  $(".modal").removeClass("open");
  $(".periodic-table").show();
});

//=============================================================================
// AUDIO BUTTON

let audio = $("#audio")[0];

$("#show-button").click(function () {
  $("#hide-button").show();
  $(".periodic-table").on("mouseover", function () {
    audio.play();
  });
  $(".row1").on("mouseover", function () {
    audio.play();
  });
  $(".row").on("mouseover", function () {
    audio.play();
  });
  $("#show-button").hide();
});

$("#hide-button").click(function () {
  $("#show-button").show();

  $(".periodic-table").on("mouseover", function () {
    audio.pause();
  });
  $(".row1").on("mouseover", function () {
    audio.pause();
  });
  $(".row").on("mouseover", function () {
    audio.pause();
  });
  $("#hide-button").hide();
});
//================================================================

translateAll();
createTable();
createRow();
//================================================================
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();

  if (searchInput.value != "") {
    var values = searchInput.value;
    searchData.classList.remove("active");
  } else {
    searchData.textContent = "";
  }
};
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
};

// ========================================================
// search the element

let search = $("#search");

search.on("keyup", function () {
  let userInput = search.val().toLowerCase();
  $("#result").empty();

  if (userInput.length === 0) {
    $("#result").empty();
    return false;
  }

  const filteredEl = periodicTable[lang].filter((el) => {
    let name = el.name.toLowerCase();
    let symbol = el.symbol.toLowerCase();

    let subSymbol = symbol.substring(0, userInput.length);
    let subName = name.substring(0, userInput.length);

    if (subSymbol == userInput || subName == userInput) {
      return true;
    }
  });

  console.log(filteredEl);

  filteredEl.forEach((element) => {
    $("#result").append(
      `<li href="#${element.number}">${element.symbol}</li>
      <li href="#${element.number}">${element.name}</li>`
    );
  });
});
