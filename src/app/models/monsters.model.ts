/* Monster class */
export class Monster {
    /** Name of the monster */
    name : string;
    /** SRC of the audio */
    audioSRC : string;
    /** Audio element of the content */
    audio: HTMLAudioElement;
    /** SRC of the image */
    imgSRC : string;
    /** If the panel was expanded to see the image */
    expanded : boolean = false;
    /** If the image is saved on the storage */
    stored: boolean = null;
    /** If Loaded */
    loading: boolean = false;
    /** Constructor of the monster */
    constructor(
        /** Name */
        name? : string,
        /** Audio SRC */
        audioSRC? : string,
        /** Image SRC */
        imgSRC? : string
    ) {
        /** Check if some of the values are null */
        this.name = (name != null) ? name : '';
        this.audioSRC = audioSRC;
        this.imgSRC = imgSRC;
    }
}
  
/* Monster List */
export const monsters : { name: string, img_code: string }[] = [
    {
        name: "Agnaktor",
        img_code: "JtXAgwM"
    },
    {
        name: "Ahtal_Ka",
        img_code: "TdgtFMB"
    },
    {
        name: "Akantor",
        img_code: "VVHxrAN"
    },
    {
        name: "Alatreon",
        img_code: "t1KC5pW"
    },
    {
        name: "Amatsumagatsuchi",
        img_code: "gdLoKge"
    },
    {
        name: "Anjanath",
        img_code: "ObwSPJ1"
    },
    {
        name: "Arzuros",
        img_code: "xOh0CqQ"
    },
    {
        name: "Astalos",
        img_code: "XYcY2mV"
    },
    {
        name: "Azure_Rathalos",
        img_code: "YlPI5Y4"
    },
    {
        name: "Barioth",
        img_code: "lh1p79C"
    },
    {
        name: "Barroth",
        img_code: "J17XwIO"
    },
    {
        name: "Basarios",
        img_code: "GGEDwnD"
    },
    {
        name: "Bazelgeuse",
        img_code: "SZ9V8DT"
    },
    {
        name: "Behemoth",
        img_code: "jCienjX"
    },
    {
        name: "Blangonga",
        img_code: "ZWLWF32"
    },
    {
        name: "Blue_Yian_Kut_Ku",
        img_code: "MRonKH6"
    },
    {
        name: "Brachydios",
        img_code: "wnhcQo7"
    },
    {
        name: "Bulldrome",
        img_code: "jzDjiN9"
    },
    {
        name: "Ceadeus",
        img_code: "Cb6xGOi"
    },
    {
        name: "Cephadrome",
        img_code: "ONQ8E2V"
    },
    {
        name: "Chameleos",
        img_code: "Qr838dB"
    },
    {
        name: "Congalala",
        img_code: "Tx5CQao"
    },
    {
        name: "Crimson_Qurupeco",
        img_code: "9nWJxy9"
    },
    {
        name: "Crystal_Basarios",
        img_code: "Gq3W701"
    },
    {
        name: "Dahren_Mohran",
        img_code: "oStIK15"
    },
    {
        name: "Daimyo_Hermitaur",
        img_code: "BsxrpWj"
    },
    {
        name: "Dalamadur",
        img_code: "xrkHLCC"
    },
    {
        name: "Deviljho",
        img_code: "6kzOvE3"
    },
    {
        name: "Diablos",
        img_code: "uKFsz2e"
    },
    {
        name: "Dodogama",
        img_code: "NthcEPK"
    },
    {
        name: "Duramboros",
        img_code: "12D8YE8"
    },
    {
        name: "Ebony_Odogaron",
        img_code: "kg0GPj2"
    },
    {
        name: "Fatalis",
        img_code: "lx2mizY"
    },
    {
        name: "Gammoth",
        img_code: "YvZugjI"
    },
    {
        name: "Gigginox",
        img_code: "SsbNdp5"
    },
    {
        name: "Glacial_Agnaktor",
        img_code: "6yF308v"
    },
    {
        name: "Glavenus",
        img_code: "nLgEwec"
    },
    {
        name: "Gogmazios",
        img_code: "Cs3wYVQ"
    },
    {
        name: "Gore_Magala",
        img_code: "6Ui27d1"
    },
    {
        name: "Gravios",
        img_code: "GoQLi1v"
    },
    {
        name: "Great_Baggi",
        img_code: "FLs36Du"
    },
    {
        name: "Great_Girros",
        img_code: "rtxltNA"
    },
    {
        name: "Great_Jaggi",
        img_code: "955Kn73"
    },
    {
        name: "Great_Jagras",
        img_code: "88rDeql"
    },
    {
        name: "Great_Maccao",
        img_code: "iK0v2UI"
    },
    {
        name: "Great_Wroggi",
        img_code: "LH43Fm6"
    },
    {
        name: "Gypceros",
        img_code: "iBpe3II"
    },
    {
        name: "Iodrome",
        img_code: "Ma7UrWp"
    },
    {
        name: "Jhen_Mohran",
        img_code: "x5vfJoO"
    },
    {
        name: "Jyuratodus",
        img_code: "sK6MXda"
    },
    {
        name: "Kecha_Wacha",
        img_code: "jeOdWCE"
    },
    {
        name: "Khezu",
        img_code: "smTpGoH"
    },
    {
        name: "Kirin",
        img_code: "smJJcPS"
    },
    {
        name: "Kulu_Ya_Ku",
        img_code: "kTPPWEk"
    },
    {
        name: "Kulve_Taroth",
        img_code: "CU9A1gW"
    },
    {
        name: "Kushala_Daora",
        img_code: "BxapDFO"
    },
    {
        name: "Lagiacrus",
        img_code: "AeUsK1B"
    },
    {
        name: "Lagombi",
        img_code: "n0fQdER"
    },
    {
        name: "Lao_Shan_Lung",
        img_code: "xiEEk15"
    },
    {
        name: "Lavasioth",
        img_code: "1NdGYAi"
    },
    {
        name: "Legiana",
        img_code: "i9a8S7d"
    },
    {
        name: "Lunastra",
        img_code: "JrGIaoh"
    },
    {
        name: "Malfestio",
        img_code: "0OjgnXm"
    },
    {
        name: "Mizutsune",
        img_code: "RH9qvPP"
    },
    {
        name: "Molten_Tigrex",
        img_code: "3Z8UaSk"
    },
    {
        name: "Monoblos",
        img_code: "EbXHc8R"
    },
    {
        name: "Najarala",
        img_code: "7eLoP6i"
    },
    {
        name: "Nakarkos",
        img_code: "8WShzxi"
    },
    {
        name: "Nargacuga",
        img_code: "RlP3A6R"
    },
    {
        name: "Nergigante",
        img_code: "FAjIt2X"
    },
    {
        name: "Nerscylla",
        img_code: "BMIpxw7"
    },
    {
        name: "Nibelsnarf",
        img_code: "GPHFbc2"
    },
    {
        name: "Odogaron",
        img_code: "D91OWfY"
    },
    {
        name: "Paolumu",
        img_code: "bemYBH4"
    },
    {
        name: "Pink_Rathian",
        img_code: "vq6MjwP"
    },
    {
        name: "Pukei_Pukei",
        img_code: "piPtZnA"
    },
    {
        name: "Purple_Ludroth",
        img_code: "tqugkKn"
    },
    {
        name: "Qurupeco",
        img_code: "tN3Zumj"
    },
    {
        name: "Radobaan",
        img_code: "rJaR7jF"
    },
    {
        name: "Rajang",
        img_code: "6Vd23z0"
    },
    {
        name: "Rathalos",
        img_code: "PKUNnLt"
    },
    {
        name: "Rathian",
        img_code: "eIgeKPB"
    },
    {
        name: "Royal_Ludroth",
        img_code: "PdwWB9S"
    },
    {
        name: "Ruiner_Nergigante",
        img_code: "LmoQyAf"
    },
    {
        name: "Rusted_Kushala_Daora",
        img_code: "XV2U9G7"
    },
    {
        name: "Savage_Deviljho",
        img_code: "jgTSTbv"
    },
    {
        name: "Seltas",
        img_code: "KddWBdQ"
    },
    {
        name: "Seltas_Queen",
        img_code: "u84WKCC"
    },
    {
        name: "Seregios",
        img_code: "ML9acGN"
    },
    {
        name: "Shagaru_Magala",
        img_code: "kQl8xUz"
    },
    {
        name: "Shah_Dalamadur",
        img_code: "8DblW7E"
    },
    {
        name: "Shrouded_Nerscylla",
        img_code: "ilLuASj"
    },
    {
        name: "Silverwind_Nargacuga",
        img_code: "BE8jyQS"
    },
    {
        name: "Soulseer_Mizutsune",
        img_code: "1udVuwL"
    },
    {
        name: "Stygian_Zinogre",
        img_code: "27GCLnl"
    },
    {
        name: "Teostra",
        img_code: "yhcqMNl"
    },
    {
        name: "Tetsucabra",
        img_code: "NTcWstB"
    },
    {
        name: "Tigrex",
        img_code: "xhiBoM5"
    },
    {
        name: "Tobi_Kadachi",
        img_code: "ar0VeGN"
    },
    {
        name: "Tzitzi_Ya_Ku",
        img_code: "IfFdwfz"
    },
    {
        name: "Ukanlos",
        img_code: "8eZkXI7"
    },
    {
        name: "Uragaan",
        img_code: "EOJCSeD"
    },
    {
        name: "Vaal_Hazak",
        img_code: "jRQEGAM"
    },
    {
        name: "Valstrax",
        img_code: "YuvuQXn"
    },
    {
        name: "Velkhana",
        img_code: "j9YmYR0"
    },
    {
        name: "Velocidrome",
        img_code: "BCClXVx"
    },
    {
        name: "Viper_Tobi_Kadachi",
        img_code: "qYf5iYp"
    },
    {
        name: "Volvidon",
        img_code: "HG8fcA6"
    },
    {
        name: "Xeno'jiiva",
        img_code: "8UyrbPZ"
    },
    {
        name: "Yian_Garuga",
        img_code: "835npM2"
    },
    {
        name: "Yian_Kut_Ku",
        img_code: "3IevPjD"
    },
    {
        name: "Zamtrios",
        img_code: "o3UbOyJ"
    },
    {
        name: "Zinogre",
        img_code: "HbPHrvA"
    }
]