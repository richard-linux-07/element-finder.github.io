document.addEventListener("DOMContentLoaded", function () {

  const elements = [
    {
      number: 1,
      symbol: "H",
      name: "Hydrogen",
      mass: "1.008",
      block: "S",
      category: "reactive-nonmetal",
      configuration: "1s¹",
      density: "0.08988",
      meltingPoint: "-259.16",
      boilingPoint: "-252.87",
      yearDiscovered: 1766,
      discoveredBy: "Henry Cavendish",
      state: "gas"
    },
    {
      number: 2,
      symbol: "He",
      name: "Helium",
      mass: "4.0026",
      block: "S",
      category: "noble-gas",
      configuration: "1s²",
      density: "0.1786",
      meltingPoint: "-272.20",
      boilingPoint: "-268.93",
      yearDiscovered: 1868,
      discoveredBy: "Pierre Janssen",
      state: "gas"
    },
    {
      number: 3,
      symbol: "Li",
      name: "Lithium",
      mass: "6.94",
      block: "S",
      category: "alkali-metal",
      configuration: "[He] 2s¹",
      density: "0.534",
      meltingPoint: "180.54",
      boilingPoint: "1342",
      yearDiscovered: 1817,
      discoveredBy: "Johan August Arfwedson",
      state: "solid"
    },
    {
      number: 4,
      symbol: "Be",
      name: "Beryllium",
      mass: "9.0122",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[He] 2s²",
      density: "1.850",
      meltingPoint: "1287",
      boilingPoint: "2469",
      yearDiscovered: 1798,
      discoveredBy: "Louis-Nicolas Vauquelin",
      state: "solid"
    },
    {
      number: 5,
      symbol: "B",
      name: "Boron",
      mass: "10.81",
      block: "P",
      category: "metalloid",
      configuration: "[He] 2s² 2p¹",
      density: "2.34",
      meltingPoint: "2075",
      boilingPoint: "4000",
      yearDiscovered: 1808,
      discoveredBy: "Humphry Davy",
      state: "solid"
    },
    {
      number: 6,
      symbol: "C",
      name: "Carbon",
      mass: "12.011",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[He] 2s² 2p²",
      density: "2.267",
      meltingPoint: "3550",
      boilingPoint: "4027",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 7,
      symbol: "N",
      name: "Nitrogen",
      mass: "14.007",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[He] 2s² 2p³",
      density: "0.00125",
      meltingPoint: "-210.10",
      boilingPoint: "-195.79",
      yearDiscovered: 1772,
      discoveredBy: "Daniel Rutherford",
      state: "gas"
    },
    {
      number: 8,
      symbol: "O",
      name: "Oxygen",
      mass: "15.999",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[He] 2s² 2p⁴",
      density: "0.00143",
      meltingPoint: "-218.79",
      boilingPoint: "-182.96",
      yearDiscovered: 1774,
      discoveredBy: "Joseph Priestley",
      state: "gas"
    },
    {
      number: 9,
      symbol: "F",
      name: "Fluorine",
      mass: "18.998",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[He] 2s² 2p⁵",
      density: "0.00170",
      meltingPoint: "-219.67",
      boilingPoint: "-188.11",
      yearDiscovered: 1886,
      discoveredBy: "Henri Moissan",
      state: "gas"
    },
    {
      number: 10,
      symbol: "Ne",
      name: "Neon",
      mass: "20.180",
      block: "P",
      category: "noble-gas",
      configuration: "[He] 2s² 2p⁶",
      density: "0.00090",
      meltingPoint: "-248.59",
      boilingPoint: "-246.08",
      yearDiscovered: 1898,
      discoveredBy: "William Ramsay",
      state: "gas"
    },
    {
      number: 11,
      symbol: "Na",
      name: "Sodium",
      mass: "22.990",
      block: "S",
      category: "alkali-metal",
      configuration: "[Ne] 3s¹",
      density: "0.971",
      meltingPoint: "97.79",
      boilingPoint: "883",
      yearDiscovered: 1807,
      discoveredBy: "Humphry Davy",
      state: "solid"
    },
    {
      number: 12,
      symbol: "Mg",
      name: "Magnesium",
      mass: "24.305",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[Ne] 3s²",
      density: "1.738",
      meltingPoint: "650",
      boilingPoint: "1090",
      yearDiscovered: 1755,
      discoveredBy: "Joseph Black",
      state: "solid"
    },
    {
      number: 13,
      symbol: "Al",
      name: "Aluminum",
      mass: "26.982",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Ne] 3s² 3p¹",
      density: "2.702",
      meltingPoint: "660.32",
      boilingPoint: "2519",
      yearDiscovered: 1825,
      discoveredBy: "Hans Christian Ørsted",
      state: "solid"
    },
    {
        number: 14,
        symbol: "Si",
        name: "Silicon",
        mass: "28.085",
        block: "P",
        category: "metalloid",
        configuration: "[Ne] 3s² 3p²",
        density: "2.33",
        meltingPoint: "1414",
        boilingPoint: "2900",
        yearDiscovered: 1824,
        discoveredBy: "Jöns Jakob Berzelius",
        state: "solid"
    },
    {
        number: 15,
        symbol: "P",
        name: "Phosphorus",
        mass: "30.974",
        block: "P",
        category: "reactive-nonmetal",
        configuration: "[Ne] 3s² 3p³",
        density: "1.823",
        meltingPoint: "44.15",
        boilingPoint: "280.5",
        yearDiscovered: 1669,
        discoveredBy: "Hennig Brand",
        state: "solid"
    },
    {
        number: 16,
        symbol: "S",
        name: "Sulfur",
        mass: "32.06",
        block: "P",
        category: "reactive-nonmetal",
        configuration: "[Ne] 3s² 3p⁴",
        density: "2.07",
        meltingPoint: "115.21",
        boilingPoint: "444.6",
        yearDiscovered: "Ancient",
        discoveredBy: "Unknown",
        state: "solid"
    },
    {
        number: 17,
        symbol: "Cl",
        name: "Chlorine",
        mass: "35.45",
        block: "P",
        category: "reactive-nonmetal",
        configuration: "[Ne] 3s² 3p⁵",
        density: "0.00321",
        meltingPoint: "-101.5",
        boilingPoint: "-34.04",
        yearDiscovered: 1774,
        discoveredBy: "Carl Wilhelm Scheele",
        state: "gas"
    },
    {
      number: 17,
      symbol: "Cl",
      name: "Chlorine",
      mass: "35.45",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[Ne] 3s² 3p⁵",
      density: "3.2",
      meltingPoint: "-101.5",
      boilingPoint: "-34.04",
      yearDiscovered: 1774,
      discoveredBy: "Carl Wilhelm Scheele",
      state: "gas"
    },
    {
      number: 18,
      symbol: "Ar",
      name: "Argon",
      mass: "39.948",
      block: "P",
      category: "noble-gas",
      configuration: "[Ne] 3s² 3p⁶",
      density: "1.784",
      meltingPoint: "-189.34",
      boilingPoint: "-185.85",
      yearDiscovered: 1894,
      discoveredBy: "Lord Rayleigh",
      state: "gas"
    },
    {
      number: 19,
      symbol: "K",
      name: "Potassium",
      mass: "39.098",
      block: "S",
      category: "alkali-metal",
      configuration: "[Ar] 4s¹",
      density: "0.862",
      meltingPoint: "63.5",
      boilingPoint: "759",
      yearDiscovered: 1807,
      discoveredBy: "Humphry Davy",
      state: "solid"
    },
    {
      number: 20,
      symbol: "Ca",
      name: "Calcium",
      mass: "40.078",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[Ar] 4s²",
      density: "1.55",
      meltingPoint: "842",
      boilingPoint: "1484",
      yearDiscovered: 1808,
      discoveredBy: "Humphry Davy",
      state: "solid"
    },
    {
      number: 21,
      symbol: "Sc",
      name: "Scandium",
      mass: "44.956",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d¹ 4s²",
      density: "2.989",
      meltingPoint: "1541",
      boilingPoint: "2836",
      yearDiscovered: 1879,
      discoveredBy: "Lars Fredrik Nilson",
      state: "solid"
    },
    {
      number: 22,
      symbol: "Ti",
      name: "Titanium",
      mass: "47.867",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d² 4s²",
      density: "4.54",
      meltingPoint: "1668",
      boilingPoint: "3287",
      yearDiscovered: 1791,
      discoveredBy: "William Gregor",
      state: "solid"
    },
    {
      number: 23,
      symbol: "V",
      name: "Vanadium",
      mass: "50.942",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d³ 4s²",
      density: "6.11",
      meltingPoint: "1910",
      boilingPoint: "3407",
      yearDiscovered: 1801,
      discoveredBy: "Andrés Manuel del Río",
      state: "solid"
    },
    {
      number: 24,
      symbol: "Cr",
      name: "Chromium",
      mass: "51.996",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d⁵ 4s¹",
      density: "7.15",
      meltingPoint: "1907",
      boilingPoint: "2671",
      yearDiscovered: 1797,
      discoveredBy: "Louis-Nicolas Vauquelin",
      state: "solid"
    },
    {
      number: 25,
      symbol: "Mn",
      name: "Manganese",
      mass: "54.938",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d⁵ 4s²",
      density: "7.44",
      meltingPoint: "1246",
      boilingPoint: "2061",
      yearDiscovered: 1774,
      discoveredBy: "Johan Gottlieb Gahn",
      state: "solid"
    },
    {
      number: 26,
      symbol: "Fe",
      name: "Iron",
      mass: "55.845",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d⁶ 4s²",
      density: "7.874",
      meltingPoint: "1538",
      boilingPoint: "2862",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 27,
      symbol: "Co",
      name: "Cobalt",
      mass: "58.933",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d⁷ 4s²",
      density: "8.90",
      meltingPoint: "1495",
      boilingPoint: "2927",
      yearDiscovered: 1735,
      discoveredBy: "Georg Brandt",
      state: "solid"
    },
    {
      number: 28,
      symbol: "Ni",
      name: "Nickel",
      mass: "58.693",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d⁸ 4s²",
      density: "8.908",
      meltingPoint: "1455",
      boilingPoint: "2913",
      yearDiscovered: 1751,
      discoveredBy: "Axel Fredrik Cronstedt",
      state: "solid"
    },
    {
      number: 29,
      symbol: "Cu",
      name: "Copper",
      mass: "63.546",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d¹⁰ 4s¹",
      density: "8.96",
      meltingPoint: "1084.62",
      boilingPoint: "2562",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 30,
      symbol: "Zn",
      name: "Zinc",
      mass: "65.38",
      block: "D",
      category: "transition-metal",
      configuration: "[Ar] 3d¹⁰ 4s²",
      density: "7.14",
      meltingPoint: "419.53",
      boilingPoint: "907",
      yearDiscovered: 1746,
      discoveredBy: "Andreas Sigismund Marggraf",
      state: "solid"
    },
    {
      number: 31,
      symbol: "Ga",
      name: "Gallium",
      mass: "69.723",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Ar] 3d¹⁰ 4s² 4p¹",
      density: "5.91",
      meltingPoint: "29.76",
      boilingPoint: "2204",
      yearDiscovered: 1875,
      discoveredBy: "Lecoq de Boisbaudran",
      state: "solid"
    },
    {
      number: 32,
      symbol: "Ge",
      name: "Germanium",
      mass: "72.630",
      block: "P",
      category: "metalloid",
      configuration: "[Ar] 3d¹⁰ 4s² 4p²",
      density: "5.323",
      meltingPoint: "938.25",
      boilingPoint: "2833",
      yearDiscovered: 1886,
      discoveredBy: "Clemens Winkler",
      state: "solid"
    },
    {
      number: 33,
      symbol: "As",
      name: "Arsenic",
      mass: "74.922",
      block: "P",
      category: "metalloid",
      configuration: "[Ar] 3d¹⁰ 4s² 4p³",
      density: "5.727",
      meltingPoint: "817",
      boilingPoint: "614",
      yearDiscovered: 1250,
      discoveredBy: "Albertus Magnus",
      state: "solid"
    },
    {
      number: 34,
      symbol: "Se",
      name: "Selenium",
      mass: "78.971",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[Ar] 3d¹⁰ 4s² 4p⁴",
      density: "4.81",
      meltingPoint: "221",
      boilingPoint: "685",
      yearDiscovered: 1817,
      discoveredBy: "Jöns Jacob Berzelius",
      state: "solid"
    },
    {
      number: 35,
      symbol: "Br",
      name: "Bromine",
      mass: "79.904",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[Ar] 3d¹⁰ 4s² 4p⁵",
      density: "3.1028",
      meltingPoint: "-7.2",
      boilingPoint: "58.8",
      yearDiscovered: 1826,
      discoveredBy: "Antoine Jérôme Balard",
      state: "liquid"
    },
    {
      number: 36,
      symbol: "Kr",
      name: "Krypton",
      mass: "83.798",
      block: "P",
      category: "noble-gas",
      configuration: "[Ar] 3d¹⁰ 4s² 4p⁶",
      density: "3.749",
      meltingPoint: "-157.36",
      boilingPoint: "-153.22",
      yearDiscovered: 1898,
      discoveredBy: "William Ramsay",
      state: "gas"
    },
    {
      number: 37,
      symbol: "Rb",
      name: "Rubidium",
      mass: "85.468",
      block: "S",
      category: "alkali-metal",
      configuration: "[Kr] 5s¹",
      density: "1.532",
      meltingPoint: "39.31",
      boilingPoint: "688",
      yearDiscovered: 1861,
      discoveredBy: "Robert Bunsen",
      state: "solid"
    },
    {
      number: 38,
      symbol: "Sr",
      name: "Strontium",
      mass: "87.62",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[Kr] 5s²",
      density: "2.64",
      meltingPoint: "777",
      boilingPoint: "1382",
      yearDiscovered: 1790,
      discoveredBy: "Adair Crawford",
      state: "solid"
    },
    {
      number: 39,
      symbol: "Y",
      name: "Yttrium",
      mass: "88.906",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d¹ 5s²",
      density: "4.472",
      meltingPoint: "1526",
      boilingPoint: "3336",
      yearDiscovered: 1794,
      discoveredBy: "Johan Gadolin",
      state: "solid"
    },
    {
      number: 40,
      symbol: "Zr",
      name: "Zirconium",
      mass: "91.224",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d² 5s²",
      density: "6.52",
      meltingPoint: "1855",
      boilingPoint: "4409",
      yearDiscovered: 1789,
      discoveredBy: "Martin Heinrich Klaproth",
      state: "solid"
    },
    {
      number: 41,
      symbol: "Nb",
      name: "Niobium",
      mass: "92.906",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d⁴ 5s¹",
      density: "8.57",
      meltingPoint: "2477",
      boilingPoint: "4744",
      yearDiscovered: 1801,
      discoveredBy: "Charles Hatchett",
      state: "solid"
    },
    {
      number: 42,
      symbol: "Mo",
      name: "Molybdenum",
      mass: "95.95",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d⁵ 5s¹",
      density: "10.28",
      meltingPoint: "2623",
      boilingPoint: "4639",
      yearDiscovered: 1778,
      discoveredBy: "Carl Wilhelm Scheele",
      state: "solid"
    },
    {
      number: 43,
      symbol: "Tc",
      name: "Technetium",
      mass: "98",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d⁵ 5s²",
      density: "11",
      meltingPoint: "2157",
      boilingPoint: "4265",
      yearDiscovered: 1937,
      discoveredBy: "Emilio Segrè",
      state: "solid"
    },
    {
      number: 44,
      symbol: "Ru",
      name: "Ruthenium",
      mass: "101.07",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d⁷ 5s¹",
      density: "12.45",
      meltingPoint: "2334",
      boilingPoint: "4150",
      yearDiscovered: 1844,
      discoveredBy: "Karl Ernst Claus",
      state: "solid"
    },
    {
      number: 45,
      symbol: "Rh",
      name: "Rhodium",
      mass: "102.91",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d⁸ 5s¹",
      density: "12.41",
      meltingPoint: "1964",
      boilingPoint: "3695",
      yearDiscovered: 1803,
      discoveredBy: "William Hyde Wollaston",
      state: "solid"
    },
    {
      number: 46,
      symbol: "Pd",
      name: "Palladium",
      mass: "106.42",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d¹⁰",
      density: "12.023",
      meltingPoint: "1554.9",
      boilingPoint: "2963",
      yearDiscovered: 1803,
      discoveredBy: "William Hyde Wollaston",
      state: "solid"
    },
    {
      number: 47,
      symbol: "Ag",
      name: "Silver",
      mass: "107.87",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d¹⁰ 5s¹",
      density: "10.49",
      meltingPoint: "961.78",
      boilingPoint: "2162",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 48,
      symbol: "Cd",
      name: "Cadmium",
      mass: "112.41",
      block: "D",
      category: "transition-metal",
      configuration: "[Kr] 4d¹⁰ 5s²",
      density: "8.65",
      meltingPoint: "321.07",
      boilingPoint: "767",
      yearDiscovered: 1817,
      discoveredBy: "Karl Samuel Leberecht Hermann",
      state: "solid"
    },
    {
      number: 49,
      symbol: "In",
      name: "Indium",
      mass: "114.82",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Kr] 4d¹⁰ 5s² 5p¹",
      density: "7.31",
      meltingPoint: "156.60",
      boilingPoint: "2072",
      yearDiscovered: 1863,
      discoveredBy: "Ferdinand Reich",
      state: "solid"
    },
    {
      number: 50,
      symbol: "Sn",
      name: "Tin",
      mass: "118.71",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Kr] 4d¹⁰ 5s² 5p²",
      density: "7.287",
      meltingPoint: "231.93",
      boilingPoint: "2602",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 51,
      symbol: "Sb",
      name: "Antimony",
      mass: "121.76",
      block: "P",
      category: "metalloid",
      configuration: "[Kr] 4d¹⁰ 5s² 5p³",
      density: "6.685",
      meltingPoint: "630.63",
      boilingPoint: "1587",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 52,
      symbol: "Te",
      name: "Tellurium",
      mass: "127.60",
      block: "P",
      category: "metalloid",
      configuration: "[Kr] 4d¹⁰ 5s² 5p⁴",
      density: "6.24",
      meltingPoint: "449.51",
      boilingPoint: "988",
      yearDiscovered: 1782,
      discoveredBy: "Franz-Joseph Müller von Reichenstein",
      state: "solid"
    },
    {
      number: 53,
      symbol: "I",
      name: "Iodine",
      mass: "126.90",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[Kr] 4d¹⁰ 5s² 5p⁵",
      density: "4.933",
      meltingPoint: "113.7",
      boilingPoint: "184.3",
      yearDiscovered: 1811,
      discoveredBy: "Bernard Courtois",
      state: "solid"
    },
    {
      number: 54,
      symbol: "Xe",
      name: "Xenon",
      mass: "131.29",
      block: "P",
      category: "noble-gas",
      configuration: "[Kr] 4d¹⁰ 5s² 5p⁶",
      density: "5.894",
      meltingPoint: "-111.7",
      boilingPoint: "-108.12",
      yearDiscovered: 1898,
      discoveredBy: "William Ramsay",
      state: "gas"
    },
    {
      number: 55,
      symbol: "Cs",
      name: "Cesium",
      mass: "132.91",
      block: "S",
      category: "alkali-metal",
      configuration: "[Xe] 6s¹",
      density: "1.93",
      meltingPoint: "28.44",
      boilingPoint: "671",
      yearDiscovered: 1860,
      discoveredBy: "Robert Bunsen",
      state: "solid"
    },
    {
      number: 56,
      symbol: "Ba",
      name: "Barium",
      mass: "137.33",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[Xe] 6s²",
      density: "3.51",
      meltingPoint: "727",
      boilingPoint: "1897",
      yearDiscovered: 1772,
      discoveredBy: "Carl Wilhelm Scheele",
      state: "solid"
    },
    {
      number: 57,
      symbol: "La",
      name: "Lanthanum",
      mass: "138.91",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 5d¹ 6s²",
      density: "6.162",
      meltingPoint: "918",
      boilingPoint: "3464",
      yearDiscovered: 1838,
      discoveredBy: "Carl Gustaf Mosander",
      state: "solid"
    },
    {
      number: 58,
      symbol: "Ce",
      name: "Cerium",
      mass: "140.12",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹ 5d¹ 6s²",
      density: "6.77",
      meltingPoint: "798",
      boilingPoint: "3443",
      yearDiscovered: 1803,
      discoveredBy: "Jöns Jacob Berzelius",
      state: "solid"
    },
    {
      number: 59,
      symbol: "Pr",
      name: "Praseodymium",
      mass: "140.91",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f³ 6s²",
      density: "6.77",
      meltingPoint: "931",
      boilingPoint: "3520",
      yearDiscovered: 1885,
      discoveredBy: "Carl Auer von Welsbach",
      state: "solid"
    },
    {
      number: 60,
      symbol: "Nd",
      name: "Neodymium",
      mass: "144.24",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁴ 6s²",
      density: "7.01",
      meltingPoint: "1021",
      boilingPoint: "3074",
      yearDiscovered: 1885,
      discoveredBy: "Carl Auer von Welsbach",
      state: "solid"
    },
    {
      number: 61,
      symbol: "Pm",
      name: "Promethium",
      mass: "145",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁵ 6s²",
      density: "7.26",
      meltingPoint: "1042",
      boilingPoint: "3000",
      yearDiscovered: 1945,
      discoveredBy: "Chien-Shiung Wu",
      state: "solid"
    },
    {
      number: 62,
      symbol: "Sm",
      name: "Samarium",
      mass: "150.36",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁶ 6s²",
      density: "7.52",
      meltingPoint: "1074",
      boilingPoint: "1794",
      yearDiscovered: 1879,
      discoveredBy: "Lecoq de Boisbaudran",
      state: "solid"
    },
    {
      number: 63,
      symbol: "Eu",
      name: "Europium",
      mass: "151.96",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁷ 6s²",
      density: "5.244",
      meltingPoint: "822",
      boilingPoint: "1529",
      yearDiscovered: 1901,
      discoveredBy: "Eugène-Anatole Demarçay",
      state: "solid"
    },
    {
      number: 64,
      symbol: "Gd",
      name: "Gadolinium",
      mass: "157.25",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁷ 5d¹ 6s²",
      density: "7.90",
      meltingPoint: "1313",
      boilingPoint: "3273",
      yearDiscovered: 1880,
      discoveredBy: "Jean Charles Galissard de Marignac",
      state: "solid"
    },
    {
      number: 65,
      symbol: "Tb",
      name: "Terbium",
      mass: "158.93",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f⁹ 6s²",
      density: "8.23",
      meltingPoint: "1356",
      boilingPoint: "3230",
      yearDiscovered: 1843,
      discoveredBy: "Carl Gustaf Mosander",
      state: "solid"
    },
    {
      number: 66,
      symbol: "Dy",
      name: "Dysprosium",
      mass: "162.50",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹⁰ 6s²",
      density: "8.54",
      meltingPoint: "1412",
      boilingPoint: "2567",
      yearDiscovered: 1886,
      discoveredBy: "Lecoq de Boisbaudran",
      state: "solid"
    },
    {
      number: 67,
      symbol: "Ho",
      name: "Holmium",
      mass: "164.93",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹¹ 6s²",
      density: "8.79",
      meltingPoint: "1474",
      boilingPoint: "2700",
      yearDiscovered: 1878,
      discoveredBy: "Marc Delafontaine",
      state: "solid"
    },
    {
      number: 68,
      symbol: "Er",
      name: "Erbium",
      mass: "167.26",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹² 6s²",
      density: "9.066",
      meltingPoint: "1529",
      boilingPoint: "2868",
      yearDiscovered: 1843,
      discoveredBy: "Carl Gustaf Mosander",
      state: "solid"
    },
    {
      number: 69,
      symbol: "Tm",
      name: "Thulium",
      mass: "168.93",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹³ 6s²",
      density: "9.32",
      meltingPoint: "1545",
      boilingPoint: "1950",
      yearDiscovered: 1879,
      discoveredBy: "Per Teodor Cleve",
      state: "solid"
    },
    {
      number: 70,
      symbol: "Yb",
      name: "Ytterbium",
      mass: "173.05",
      block: "F",
      category: "lanthanide",
      configuration: "[Xe] 4f¹⁴ 6s²",
      density: "6.90",
      meltingPoint: "819",
      boilingPoint: "1196",
      yearDiscovered: 1878,
      discoveredBy: "Jean Charles Galissard de Marignac",
      state: "solid"
    },
    {
      number: 71,
      symbol: "Lu",
      name: "Lutetium",
      mass: "174.97",
      block: "D",
      category: "lanthanide",
      configuration: "[Xe] 4f¹⁴ 5d¹ 6s²",
      density: "9.841",
      meltingPoint: "1663",
      boilingPoint: "3402",
      yearDiscovered: 1907,
      discoveredBy: "Georges Urbain",
      state: "solid"
    },
    {
      number: 72,
      symbol: "Hf",
      name: "Hafnium",
      mass: "178.49",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d² 6s²",
      density: "13.31",
      meltingPoint: "2233",
      boilingPoint: "4603",
      yearDiscovered: 1923,
      discoveredBy: "Dirk Coster",
      state: "solid"
    },
    {
      number: 73,
      symbol: "Ta",
      name: "Tantalum",
      mass: "180.95",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d³ 6s²",
      density: "16.69",
      meltingPoint: "3017",
      boilingPoint: "5458",
      yearDiscovered: 1802,
      discoveredBy: "Anders Gustaf Ekeberg",
      state: "solid"
    },
    {
      number: 74,
      symbol: "W",
      name: "Tungsten",
      mass: "183.84",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d⁴ 6s²",
      density: "19.25",
      meltingPoint: "3422",
      boilingPoint: "5555",
      yearDiscovered: 1781,
      discoveredBy: "Carl Wilhelm Scheele",
      state: "solid"
    },
    {
      number: 75,
      symbol: "Re",
      name: "Rhenium",
      mass: "186.21",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d⁵ 6s²",
      density: "21.02",
      meltingPoint: "3186",
      boilingPoint: "5596",
      yearDiscovered: 1925,
      discoveredBy: "Walter Noddack",
      state: "solid"
    },
    {
      number: 76,
      symbol: "Os",
      name: "Osmium",
      mass: "190.23",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d⁶ 6s²",
      density: "22.59",
      meltingPoint: "3033",
      boilingPoint: "5012",
      yearDiscovered: 1803,
      discoveredBy: "Smithson Tennant",
      state: "solid"
    },
    {
      number: 77,
      symbol: "Ir",
      name: "Iridium",
      mass: "192.22",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d⁷ 6s²",
      density: "22.56",
      meltingPoint: "2446",
      boilingPoint: "4428",
      yearDiscovered: 1803,
      discoveredBy: "Smithson Tennant",
      state: "solid"
    },
    {
      number: 78,
      symbol: "Pt",
      name: "Platinum",
      mass: "195.08",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
      density: "21.45",
      meltingPoint: "1768.3",
      boilingPoint: "3825",
      yearDiscovered: 1735,
      discoveredBy: "Antonio de Ulloa",
      state: "solid"
    },
    {
      number: 79,
      symbol: "Au",
      name: "Gold",
      mass: "196.97",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
      density: "19.30",
      meltingPoint: "1064.18",
      boilingPoint: "2856",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 80,
      symbol: "Hg",
      name: "Mercury",
      mass: "200.59",
      block: "D",
      category: "transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
      density: "13.534",
      meltingPoint: "-38.83",
      boilingPoint: "356.73",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "liquid"
    },
    {
      number: 81,
      symbol: "Tl",
      name: "Thallium",
      mass: "204.38",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
      density: "11.85",
      meltingPoint: "304",
      boilingPoint: "1473",
      yearDiscovered: 1861,
      discoveredBy: "William Crookes",
      state: "solid"
    },
    {
      number: 82,
      symbol: "Pb",
      name: "Lead",
      mass: "207.2",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
      density: "11.34",
      meltingPoint: "327.46",
      boilingPoint: "1749",
      yearDiscovered: "Ancient",
      discoveredBy: "Unknown",
      state: "solid"
    },
    {
      number: 83,
      symbol: "Bi",
      name: "Bismuth",
      mass: "208.98",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
      density: "9.78",
      meltingPoint: "271.3",
      boilingPoint: "1564",
      yearDiscovered: 1753,
      discoveredBy: "Claude François Geoffroy",
      state: "solid"
    },
    {
      number: 84,
      symbol: "Po",
      name: "Polonium",
      mass: "209",
      block: "P",
      category: "metalloid",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
      density: "9.32",
      meltingPoint: "254",
      boilingPoint: "962",
      yearDiscovered: 1898,
      discoveredBy: "Marie Curie",
      state: "solid"
    },
    {
      number: 85,
      symbol: "At",
      name: "Astatine",
      mass: "210",
      block: "P",
      category: "metalloid",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
      density: "7",
      meltingPoint: "302",
      boilingPoint: "337",
      yearDiscovered: 1940,
      discoveredBy: "Dale R. Corson",
      state: "solid"
    },
    {
      number: 86,
      symbol: "Rn",
      name: "Radon",
      mass: "222",
      block: "P",
      category: "noble-gas",
      configuration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
      density: "9.73",
      meltingPoint: "-71",
      boilingPoint: "-61.7",
      yearDiscovered: 1900,
      discoveredBy: "Friedrich Ernst Dorn",
      state: "gas"
    },
    {
      number: 87,
      symbol: "Fr",
      name: "Francium",
      mass: "223",
      block: "S",
      category: "alkali-metal",
      configuration: "[Rn] 7s¹",
      density: "1.87",
      meltingPoint: "27",
      boilingPoint: "677",
      yearDiscovered: 1939,
      discoveredBy: "Marguerite Perey",
      state: "solid"
    },
    {
      number: 88,
      symbol: "Ra",
      name: "Radium",
      mass: "226",
      block: "S",
      category: "alkaline-earth-metal",
      configuration: "[Rn] 7s²",
      density: "5.5",
      meltingPoint: "700",
      boilingPoint: "1737",
      yearDiscovered: 1898,
      discoveredBy: "Marie Curie",
      state: "solid"
    },
    {
      number: 89,
      symbol: "Ac",
      name: "Actinium",
      mass: "227",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 6d¹ 7s²",
      density: "10",
      meltingPoint: "1050",
      boilingPoint: "3198",
      yearDiscovered: 1899,
      discoveredBy: "Friedrich Oskar Giesel",
      state: "solid"
    },
    {
      number: 90,
      symbol: "Th",
      name: "Thorium",
      mass: "232.04",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 6d² 7s²",
      density: "11.7",
      meltingPoint: "1750",
      boilingPoint: "4788",
      yearDiscovered: 1828,
      discoveredBy: "Jöns Jacob Berzelius",
      state: "solid"
    },
    {
      number: 91,
      symbol: "Pa",
      name: "Protactinium",
      mass: "231.04",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f² 6d¹ 7s²",
      density: "15.4",
      meltingPoint: "1568",
      boilingPoint: "4027",
      yearDiscovered: 1913,
      discoveredBy: "Oswald Helmuth Göhring",
      state: "solid"
    },
    {
      number: 92,
      symbol: "U",
      name: "Uranium",
      mass: "238.03",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f³ 6d¹ 7s²",
      density: "18.95",
      meltingPoint: "1132.2",
      boilingPoint: "4131",
      yearDiscovered: 1789,
      discoveredBy: "Martin Heinrich Klaproth",
      state: "solid"
    },
    {
      number: 93,
      symbol: "Np",
      name: "Neptunium",
      mass: "237",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f⁴ 6d¹ 7s²",
      density: "20.2",
      meltingPoint: "639",
      boilingPoint: "4174",
      yearDiscovered: 1940,
      discoveredBy: "Edwin McMillan",
      state: "solid"
    },
    {
      number: 94,
      symbol: "Pu",
      name: "Plutonium",
      mass: "244",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f⁶ 7s²",
      density: "19.84",
      meltingPoint: "639.4",
      boilingPoint: "3228",
      yearDiscovered: 1940,
      discoveredBy: "Glenn T. Seaborg",
      state: "solid"
    },
    {
      number: 95,
      symbol: "Am",
      name: "Americium",
      mass: "243",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f⁷ 7s²",
      density: "13.67",
      meltingPoint: "1176",
      boilingPoint: "2607",
      yearDiscovered: 1944,
      discoveredBy: "Glenn T. Seaborg",
      state: "solid"
    },
    {
      number: 96,
      symbol: "Cm",
      name: "Curium",
      mass: "247",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f⁷ 6d¹ 7s²",
      density: "13.51",
      meltingPoint: "1340",
      boilingPoint: "3110",
      yearDiscovered: 1944,
      discoveredBy: "Glenn T. Seaborg",
      state: "solid"
    },
    {
      number: 97,
      symbol: "Bk",
      name: "Berkelium",
      mass: "247",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f⁹ 7s²",
      density: "14.78",
      meltingPoint: "986",
      boilingPoint: "2627",
      yearDiscovered: 1949,
      discoveredBy: "Glenn T. Seaborg",
      state: "solid"
    },
    {
      number: 98,
      symbol: "Cf",
      name: "Californium",
      mass: "251",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f¹⁰ 7s²",
      density: "15.1",
      meltingPoint: "900",
      boilingPoint: "1470",
      yearDiscovered: 1950,
      discoveredBy: "Glenn T. Seaborg",
      state: "solid"
    },
    {
      number: 99,
      symbol: "Es",
      name: "Einsteinium",
      mass: "252",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f¹¹ 7s²",
      density: "8.84",
      meltingPoint: "860",
      boilingPoint: "996",
      yearDiscovered: 1952,
      discoveredBy: "Albert Ghiorso",
      state: "solid"
    },
    {
      number: 100,
      symbol: "Fm",
      name: "Fermium",
      mass: "257",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f¹² 7s²",
      density: "Unknown",
      meltingPoint: "1527",
      boilingPoint: "Unknown",
      yearDiscovered: 1952,
      discoveredBy: "Albert Ghiorso",
      state: "solid"
    },
    {
      number: 101,
      symbol: "Md",
      name: "Mendelevium",
      mass: "258",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f¹³ 7s²",
      density: "Unknown",
      meltingPoint: "827",
      boilingPoint: "Unknown",
      yearDiscovered: 1955,
      discoveredBy: "Albert Ghiorso",
      state: "solid"
    },
    {
      number: 102,
      symbol: "No",
      name: "Nobelium",
      mass: "259",
      block: "F",
      category: "actinide",
      configuration: "[Rn] 5f¹⁴ 7s²",
      density: "Unknown",
      meltingPoint: "827",
      boilingPoint: "Unknown",
      yearDiscovered: 1966,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 103,
      symbol: "Lr",
      name: "Lawrencium",
      mass: "266",
      block: "D",
      category: "actinide",
      configuration: "[Rn] 5f¹⁴ 7s² 7p¹",
      density: "Unknown",
      meltingPoint: "1627",
      boilingPoint: "Unknown",
      yearDiscovered: 1961,
      discoveredBy: "Albert Ghiorso",
      state: "solid"
    },
    {
      number: 104,
      symbol: "Rf",
      name: "Rutherfordium",
      mass: "267",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d² 7s²",
      density: "23.2",
      meltingPoint: "2100",
      boilingPoint: "5500",
      yearDiscovered: 1964,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 105,
      symbol: "Db",
      name: "Dubnium",
      mass: "268",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d³ 7s²",
      density: "29.3",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1967,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 106,
      symbol: "Sg",
      name: "Seaborgium",
      mass: "269",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁴ 7s²",
      density: "35.0",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1974,
      discoveredBy: "Lawrence Berkeley National Laboratory",
      state: "solid"
    },
    {
      number: 107,
      symbol: "Bh",
      name: "Bohrium",
      mass: "270",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁵ 7s²",
      density: "37.1",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1981,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 108,
      symbol: "Hs",
      name: "Hassium",
      mass: "269",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁶ 7s²",
      density: "40.7",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1984,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 109,
      symbol: "Mt",
      name: "Meitnerium",
      mass: "278",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁷ 7s²",
      density: "37.4",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1982,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 110,
      symbol: "Ds",
      name: "Darmstadtium",
      mass: "281",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁸ 7s²",
      density: "34.8",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1994,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 111,
      symbol: "Rg",
      name: "Roentgenium",
      mass: "282",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d⁹ 7s²",
      density: "28.7",
      meltingPoint: "Unknown",
      boilingPoint: "Unknown",
      yearDiscovered: 1994,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 112,
      symbol: "Cn",
      name: "Copernicium",
      mass: "285",
      block: "D",
      category: "transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
      density: "23.7",
      meltingPoint: "Unknown",
      boilingPoint: "67",
      yearDiscovered: 1996,
      discoveredBy: "GSI Helmholtz Centre for Heavy Ion Research",
      state: "solid"
    },
    {
      number: 113,
      symbol: "Nh",
      name: "Nihonium",
      mass: "286",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
      density: "16",
      meltingPoint: "430",
      boilingPoint: "1130",
      yearDiscovered: 2003,
      discoveredBy: "RIKEN",
      state: "solid"
    },
    {
      number: 114,
      symbol: "Fl",
      name: "Flerovium",
      mass: "289",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
      density: "14",
      meltingPoint: "67",
      boilingPoint: "147",
      yearDiscovered: 1998,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 115,
      symbol: "Mc",
      name: "Moscovium",
      mass: "290",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
      density: "13.5",
      meltingPoint: "400",
      boilingPoint: "1100",
      yearDiscovered: 2003,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 116,
      symbol: "Lv",
      name: "Livermorium",
      mass: "293",
      block: "P",
      category: "post-transition-metal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
      density: "12.9",
      meltingPoint: "437",
      boilingPoint: "812",
      yearDiscovered: 2000,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 117,
      symbol: "Ts",
      name: "Tennessine",
      mass: "294",
      block: "P",
      category: "reactive-nonmetal",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
      density: "7.2",
      meltingPoint: "400",
      boilingPoint: "610",
      yearDiscovered: 2010,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    },
    {
      number: 118,
      symbol: "Og",
      name: "Oganesson",
      mass: "294",
      block: "P",
      category: "noble-gas",
      configuration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
      density: "5.0",
      meltingPoint: "52",
      boilingPoint: "177",
      yearDiscovered: 2002,
      discoveredBy: "Joint Institute for Nuclear Research",
      state: "solid"
    }


  ];

  /* ================= STATE ================= */

  let compareList = [];

  const resultContainer = document.getElementById("result-container");
  const searchInput = document.getElementById("search");
  const filterCategory = document.getElementById("filter-category");
  const compareBtn = document.getElementById("compare-btn");
  const compareSlots = document.getElementById("compare-slots");
  const clearCompare = document.getElementById("clear-compare");

  /* ================= MODAL ================= */

  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  document.body.appendChild(modal);

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });

  /* ================= FUNCTIONS ================= */

  function displayElements(list) {
    resultContainer.innerHTML = "";

    list.forEach((el, index) => {
      const selected = compareList.some(item => item.number === el.number);

      const card = document.createElement("div");
      card.className = `card ${el.category} ${selected ? "selected" : ""}`;
      card.style.setProperty("--order", index % 10);

      card.innerHTML = `
        <span class="symbol">${el.symbol}</span>
        <h2>${el.name} <small>#${el.number}</small></h2>
        <p><strong>Mass:</strong> ${el.mass}</p>
        <p><strong>Config:</strong> ${el.configuration}</p>
        <div class="category">${el.category.replace(/-/g, " ")}</div>
        <button class="compare-check">${selected ? "Selected" : "+ Compare"}</button>
      `;

      card.querySelector(".compare-check").onclick = e => {
        e.stopPropagation();
        toggleCompare(el);
      };

        card.addEventListener("click", () => {
          showDetailModal(el);
        });


      resultContainer.appendChild(card);
    });
  }

  function toggleCompare(el) {
    const i = compareList.findIndex(item => item.number === el.number);

    if (i > -1) {
      compareList.splice(i, 1);
    } else if (compareList.length === 1 && compareList[0].number === el.number) {
      return;
    } else if (compareList.length < 2) {
      compareList.push(el);
    } else {
      alert("Maximum 2 elements for comparison.");
    }

    updateCompareBar();
    filterData();
  }

  function updateCompareBar() {
    if (compareList.length === 0) {
      compareSlots.innerHTML = `<span class="compare-msg">Select 2 elements to compare</span>`;
      compareBtn.disabled = true;
    } else {
      compareSlots.innerHTML = compareList.map(el =>
        `<span class="selected-tag">${el.symbol}</span>`
      ).join("");
      compareBtn.disabled = compareList.length !== 2;
    }
  }

  function showDetailModal(el) {
    modal.innerHTML = `
      <div class="modal-content ${el.category}">
        <span class="close-modal">&times;</span>
        <h2>${el.name} (${el.symbol})</h2>
        <p><strong>Atomic Number:</strong> ${el.number}</p>
        <p><strong>Block:</strong> ${el.block}</p>
        <p><strong>Category:</strong> ${el.category.replace(/-/g, " ")}</p>
        <p><strong>State:</strong> ${el.state}</p>
        <p><strong>Atomic Mass:</strong> ${el.mass}</p>
        <p><strong>Density:</strong> ${el.density}</p>
        <p><strong>Melting Point:</strong> ${el.meltingPoint} °C</p>
        <p><strong>Boiling Point:</strong> ${el.boilingPoint} °C</p>
        <p><strong>Discovered In:</strong> ${el.yearDiscovered}</p>
        <p><strong>Discovered By:</strong> ${el.discoveredBy}</p>
        <p><strong>Electron Configuration:</strong> ${el.configuration}</p>
      </div>
    `;

    modal.classList.add("active");
    modal.querySelector(".close-modal").onclick = () =>
      modal.classList.remove("active");
  }

  compareBtn.onclick = () => {
    if (compareList.length !== 2) return;

    const [e1, e2] = compareList;

    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Comparison</h2>
        <table class="compare-table">
          <tr><th>Property</th><th>${e1.symbol}</th><th>${e2.symbol}</th></tr>
          <tr><td>Atomic Number</td><td>${e1.number}</td><td>${e2.number}</td></tr>
          <tr><td>Atomic Mass</td><td>${e1.mass}</td><td>${e2.mass}</td></tr>
          <tr><td>State</td><td>${e1.state}</td><td>${e2.state}</td></tr>
          <tr><td>Density</td><td>${e1.density}</td><td>${e2.density}</td></tr>
          <tr><td>Melting Point</td><td>${e1.meltingPoint}</td><td>${e2.meltingPoint}</td></tr>
          <tr><td>Boiling Point</td><td>${e1.boilingPoint}</td><td>${e2.boilingPoint}</td></tr>
          <tr><td>Electron Config</td><td>${e1.configuration}</td><td>${e2.configuration}</td></tr>
        </table>
      </div>
    `;

    modal.classList.add("active");
    modal.querySelector(".close-modal").onclick = () =>
      modal.classList.remove("active");
  };

  function filterData() {
    const text = searchInput.value.toLowerCase();
    const cat = filterCategory.value;

    const filtered = elements.filter(el =>
      (el.name.toLowerCase().includes(text) ||
        el.symbol.toLowerCase().includes(text) ||
        el.number.toString().includes(text)) &&
      (cat === "" || el.category === cat)
    );

    displayElements(filtered);
  }

  /* ================= EVENTS ================= */

  const clearSearchBtn = document.getElementById("clear-search");

searchInput.addEventListener("input", () => {
  clearSearchBtn.style.display = searchInput.value ? "block" : "none";
  filterData();
});

clearSearchBtn.onclick = () => {
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  filterData();
};


  clearCompare.onclick = () => {
    compareList = [];
    updateCompareBar();
    filterData();
  };

  /* ================= CUSTOM SELECT ================= */

  const customSelect = document.getElementById("categorySelect");
  const selected = customSelect.querySelector(".selected");
  const options = customSelect.querySelector(".options");

  customSelect.addEventListener("click", e => {
  e.stopPropagation();
  customSelect.classList.toggle("open");
});


  options.querySelectorAll("div").forEach(opt => {
    opt.onclick = e => {
      e.stopPropagation();
      selected.textContent = opt.textContent;
      filterCategory.value = opt.dataset.value;
      customSelect.classList.remove("open");
      filterData();
    };
  });

  document.addEventListener("click", e => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });

  /* ================= INIT ================= */

  displayElements(elements);
});
