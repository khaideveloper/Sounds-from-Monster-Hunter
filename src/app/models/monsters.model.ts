/* Monster class */
export class Monster {
    name : string;
    audioSRC : string;
    audio: HTMLAudioElement;
    imgSRC : string;
    expanded : boolean;
    playing: boolean;
    constructor(name? : string, audioSRC? : string, imgSRC? : string) {
      if(name != null) { this.name = name; }
      if(audioSRC != null) { this.audioSRC = audioSRC; }
      if(imgSRC != null) { this.imgSRC = imgSRC; }
      this.expanded = false;
      this.playing = false;
    }
}
 
/* Monster Audio */
export class MonsterAudio {
    audio : HTMLAudioElement;
    status : boolean;
    constructor(audio : HTMLAudioElement = null, status : boolean = null) {
        this.audio = audio;
        this.status = status;
    }
}
  
/* Monster List */
export const monsters : string[] = [
    "Agnaktor",
    "Ahtal_Ka",
    "Akantor",
    "Alatreon",
    "Amatsumagatsuchi",
    "Anjanath",
    "Arzuros",
    "Astalos",
    "Azure_Rathalos",
    "Barioth",
    "Barroth",
    "Basarios",
    "Bazelgeuse",
    "Behemoth",
    "Blangonga",
    "Blue_Yian_Kut_Ku",
    "Brachydios",
    "Bulldrome",
    "Ceadeus",
    "Cephadrome",
    "Chameleos",
    "Congalala",
    "Crimson_Qurupeco",
    "Crystal_Basarios",
    "Dahren_Mohran",
    "Daimyo_Hermitaur",
    "Dalamadur",
    "Deviljho",
    "Diablos",
    "Dodogama",
    "Duramboros",
    "Ebony_Odogaron",
    "Fatalis",
    "Gammoth",
    "Gigginox",
    "Glacial_Agnaktor",
    "Glavenus",
    "Gogmazios",
    "Gore_Magala",
    "Gravios",
    "Great_Baggi",
    "Great_Girros",
    "Great_Jaggi",
    "Great_Jagras",
    "Great_Maccao",
    "Great_Wroggi",
    "Gypceros",
    "Iodrome",
    "Jhen_Mohran",
    "Jyuratodus",
    "Kecha_Wacha",
    "Khezu",
    "Kirin",
    "Kulu_Ya_Ku",
    "Kulve_Taroth",
    "Kushala_Daora",
    "Lagiacrus",
    "Lagombi",
    "Lao_Shan_Lung",
    "Lavasioth",
    "Legiana",
    "Lunastra",
    "Malfestio",
    "Mizutsune",
    "Molten_Tigrex",
    "Monoblos",
    "Najarala",
    "Nakarkos",
    "Nargacuga",
    "Nergigante",
    "Nerscylla",
    "Nibelsnarf",
    "Odogaron",
    "Paolumu",
    "Pink_Rathian",
    "Pukei_Pukei",
    "Purple_Ludroth",
    "Qurupeco",
    "Radobaan",
    "Rajang",
    "Rathalos",
    "Rathian",
    "Royal_Ludroth",
    "Ruiner_Nergigante",
    "Rusted_Kushala_Daora",
    "Savage_Deviljho",
    "Seltas",
    "Seltas_Queen",
    "Seregios",
    "Shagaru_Magala",
    "Shah_Dalamadur",
    "Shrouded_Nerscylla",
    "Silverwind_Nargacuga",
    "Soulseer_Mizutsune",
    "Stygian_Zinogre",
    "Teostra",
    "Tetsucabra",
    "Tigrex",
    "Tobi_Kadachi",
    "Tzitzi_Ya_Ku",
    "Ukanlos",
    "Uragaan",
    "Vaal_Hazak",
    "Valstrax",
    "Velkhana",
    "Velocidrome",
    "Viper_Tobi_Kadachi",
    "Volvidon",
    "Xeno'jiiva",
    "Yian_Garuga",
    "Yian_Kut_Ku",
    "Zamtrios",
    "Zinogre"
]