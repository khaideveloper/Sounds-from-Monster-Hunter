/* Monster class */
export class Monster {
    name : string;
    audioSRC : string;
    audio: HTMLAudioElement;
    imgSRC : string;
    expanded : boolean;
    playing: boolean;
    cloud: boolean;
    isCloudLoading: boolean;
    constructor(name? : string, audioSRC? : string, imgSRC? : string) {
      if(name != null) { this.name = name; }
      if(audioSRC != null) { this.audioSRC = audioSRC; }
      if(imgSRC != null) { this.imgSRC = imgSRC; }
      this.expanded = false;
      this.playing = false;
      this.cloud = null;
      this.isCloudLoading = false;
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
export const monsters : {
    name: string,
    img_code: string,
    audio_code: string
    }[] = [
    {
        name: "Agnaktor",
        audio_code: "1Pbp4kZSFWih0gSlfSWQVf_sJA5qEEDlA",
        img_code: "JtXAgwM"
    },
    {
        name: "Ahtal_Ka",
        audio_code: "10DwisnsanKMw_MSVV9XOOZJ-b2Tjldsc",
        img_code: "TdgtFMB"
    },
    {
        name: "Akantor",
        audio_code: "13iwA4ag5ZE9jWf3s_pAPS_EceWalpcdQ",
        img_code: "VVHxrAN"
    },
    {
        name: "Alatreon",
        audio_code: "1ZebFYCky0F1RiDhfavIvXU7hqielT9D5",
        img_code: "t1KC5pW"
    },
    {
        name: "Amatsumagatsuchi",
        audio_code: "1O2pklNdA370f-K6JoWYFoTM-DG4xKHu_",
        img_code: "gdLoKge"
    },
    {
        name: "Anjanath",
        audio_code: "1J_87hGtkuc8-Ay56YkH8Eu-KhMB1cKyz",
        img_code: "ObwSPJ1"
    },
    {
        name: "Arzuros",
        audio_code: "16JlWPU7tcw28VWw53e-he2dgV2AURWfv",
        img_code: "xOh0CqQ"
    },
    {
        name: "Astalos",
        audio_code: "1J-CfIVbM0rki0WRLNfTxUZxN_05P1FGa",
        img_code: "XYcY2mV"
    },
    {
        name: "Azure_Rathalos",
        audio_code: "1hGbNkeWB14SRRxzSd3bOJkjpPJsGAmp1",
        img_code: "YlPI5Y4"
    },
    {
        name: "Barioth",
        audio_code: "1R4wHnNsc4IcRoUrWHdt7ME5qMCeO1d1v",
        img_code: "lh1p79C"
    },
    {
        name: "Barroth",
        audio_code: "1TMBVCJYXJ8C7MeFJV3KRzEy2NgJo_zQe",
        img_code: "J17XwIO"
    },
    {
        name: "Basarios",
        audio_code: "142SYx9XkajaStHDQ7kFQLVqcINWWIXFD",
        img_code: "GGEDwnD"
    },
    {
        name: "Bazelgeuse",
        audio_code: "1xqURGRI0YbsMK_ul4Q8w85_P0iew38Ag",
        img_code: "SZ9V8DT"
    },
    {
        name: "Behemoth",
        audio_code: "131xbjuENa6UnW3QGoGA8xpqWdeAoKOqP",
        img_code: "jCienjX"
    },
    {
        name: "Blangonga",
        audio_code: "12RFDO010aA9qwlXmKzrsBwrHiNB6Pc7N",
        img_code: "ZWLWF32"
    },
    {
        name: "Blue_Yian_Kut_Ku",
        audio_code: "11aaLWRAANfnQfaE5IxrldcdFdBfuXPKz",
        img_code: "MRonKH6"
    },
    {
        name: "Brachydios",
        audio_code: "1knjsLAlR5wVSWjPiBGGzNf1iZG9liJh3",
        img_code: "wnhcQo7"
    },
    {
        name: "Bulldrome",
        audio_code: "119GITlg2J5zuxSwptcLPnPkM9DkpH2ck",
        img_code: "jzDjiN9"
    },
    {
        name: "Ceadeus",
        audio_code: "1I2jmdcz52zW8NC8klb7_XQ5FHsNpvKfB",
        img_code: "Cb6xGOi"
    },
    {
        name: "Cephadrome",
        audio_code: "14Z6Fes3uwLqpIlKDSakBqLgtFFW5ywVW",
        img_code: "ONQ8E2V"
    },
    {
        name: "Chameleos",
        audio_code: "1b-gP1YAmrnZ2NRxDkCzdEx9vtVkb4Jxc",
        img_code: "Qr838dB"
    },
    {
        name: "Congalala",
        audio_code: "1cGQP_uaKJy_VtosA2ttwqX4i71_MYCUG",
        img_code: "Tx5CQao"
    },
    {
        name: "Crimson_Qurupeco",
        audio_code: "1rU7D2nmcAsuuwK0cRg7zZoU_UuX2jTZk",
        img_code: "9nWJxy9"
    },
    {
        name: "Crystal_Basarios",
        audio_code: "10F6mt4U3gTHJAuE-PSIwFJQ39JMSWI7u",
        img_code: "Gq3W701"
    },
    {
        name: "Dahren_Mohran",
        audio_code: "1ZliJnAbO0svKT-aURV8alhebIKhXleoV",
        img_code: "oStIK15"
    },
    {
        name: "Daimyo_Hermitaur",
        audio_code: "17Fnjs3SLpHLBGLtZQ3NHHbcW5Yy3IsSZ",
        img_code: "BsxrpWj"
    },
    {
        name: "Dalamadur",
        audio_code: "1YyoO0aGNN4JbVBNp-xUr0ECe9aNkX9Xu",
        img_code: "xrkHLCC"
    },
    {
        name: "Deviljho",
        audio_code: "1y6OCkSS6wzQudfjeXE8N2khI1COEelSW",
        img_code: "6kzOvE3"
    },
    {
        name: "Diablos",
        audio_code: "1_PSyfuBWr4CP7_BeYbuNILTr-heEnJF9",
        img_code: "uKFsz2e"
    },
    {
        name: "Dodogama",
        audio_code: "1YiD6FJjnAxt_7A3XCjnqYZTDSlY8Dv9a",
        img_code: "NthcEPK"
    },
    {
        name: "Duramboros",
        audio_code: "1UQZ3wVcAZ3abh7DrMh5RfzE6_P-dAWnM",
        img_code: "12D8YE8"
    },
    {
        name: "Ebony_Odogaron",
        audio_code: "1WAMdNkHqUeAoL_AXxedQW1OcVY1kIjGa",
        img_code: "kg0GPj2"
    },
    {
        name: "Fatalis",
        audio_code: "1Hj1x71dT1ntFvKnouqTqcCpyAZ9owHe3",
        img_code: "lx2mizY"
    },
    {
        name: "Gammoth",
        audio_code: "1DABgjrOER7eZWjYjWS5HuColgo0j8p1J",
        img_code: "YvZugjI"
    },
    {
        name: "Gigginox",
        audio_code: "1MJ9hCYRUW_BqD43Kd11wmIbtGdx8AhCm",
        img_code: "SsbNdp5"
    },
    {
        name: "Glacial_Agnaktor",
        audio_code: "1LclzK_yNEbVwlJfnfejzr44UpZa_ZlbG",
        img_code: "6yF308v"
    },
    {
        name: "Glavenus",
        audio_code: "1JIFftqolPg7BbtfzbH-BVTduK3C17WEp",
        img_code: "nLgEwec"
    },
    {
        name: "Gogmazios",
        audio_code: "15IPkMRoJucAUZp01krTW1dCcO1yNYBLk",
        img_code: "Cs3wYVQ"
    },
    {
        name: "Gore_Magala",
        audio_code: "1gBHvSQ7UNLPTR20f7aPYQWvsPqVxK5wN",
        img_code: "6Ui27d1"
    },
    {
        name: "Gravios",
        audio_code: "17oKHPC2Dj2ceOB7BE478w4STuBfK16LP",
        img_code: "GoQLi1v"
    },
    {
        name: "Great_Baggi",
        audio_code: "1k0cYvZvsm-7HZUGH85kmajM2pHlx488v",
        img_code: "FLs36Du"
    },
    {
        name: "Great_Girros",
        audio_code: "1h0R-4PLquOXGTEWXGOXCha5lUuGoSbNB",
        img_code: "rtxltNA"
    },
    {
        name: "Great_Jaggi",
        audio_code: "1MDeBE4Ueht8REIJxCajRrUyjnL2jUQb1",
        img_code: "955Kn73"
    },
    {
        name: "Great_Jagras",
        audio_code: "1jEs4qKroNp2qJS2iyKh6x9ogj4O6RYCP",
        img_code: "88rDeql"
    },
    {
        name: "Great_Maccao",
        audio_code: "1rjii_uSqAD2duM6jbQjbm4t3mf_9a_J2",
        img_code: "iK0v2UI"
    },
    {
        name: "Great_Wroggi",
        audio_code: "1HxSSThbYVLiZT4xWYx_LnqkUw0Vn1a3u",
        img_code: "LH43Fm6"
    },
    {
        name: "Gypceros",
        audio_code: "1IAX54-3zJXd-G2TzwO_22O6abzVzW7oS",
        img_code: "iBpe3II"
    },
    {
        name: "Iodrome",
        audio_code: "1cM0DqMF3zm8Mmyf-PBOWEoWOfBPIqyUm",
        img_code: "Ma7UrWp"
    },
    {
        name: "Jhen_Mohran",
        audio_code: "1E5o8KEFeN8Vac6MDqd4OvpNuBmVh0607",
        img_code: "x5vfJoO"
    },
    {
        name: "Jyuratodus",
        audio_code: "1dmdMa6kaO8Srdhdfddvgh0EvIuqS4G7u",
        img_code: "sK6MXda"
    },
    {
        name: "Kecha_Wacha",
        audio_code: "1aBX0nSVNOLmgfLN9Cv0cs00bOC_4-z8d",
        img_code: "jeOdWCE"
    },
    {
        name: "Khezu",
        audio_code: "10cnFStFc95MUa6g3gLSRfO_nzPed5w8s",
        img_code: "smTpGoH"
    },
    {
        name: "Kirin",
        audio_code: "1lVe3cTL_1OR-uhhO1aSWgE1oXkWPqwqD",
        img_code: "smJJcPS"
    },
    {
        name: "Kulu_Ya_Ku",
        audio_code: "1X8SPXCnV5c7GShIT0cHorC1isyfa2GLQ",
        img_code: "kTPPWEk"
    },
    {
        name: "Kulve_Taroth",
        audio_code: "1z9XRRQF8OOYp3jBbeDv0Ikrl6KO6F9ie",
        img_code: "CU9A1gW"
    },
    {
        name: "Kushala_Daora",
        audio_code: "1G_cX1Na4BdhKU0JOY1snNJ4TkiY56JoH",
        img_code: "BxapDFO"
    },
    {
        name: "Lagiacrus",
        audio_code: "1r6JoNgGL2DcQ5_LZFjuZ71SpPST4yvmq",
        img_code: "AeUsK1B"
    },
    {
        name: "Lagombi",
        audio_code: "1gmxRs44TBoHKk2MSnipCqPRFDkzv3WJB",
        img_code: "n0fQdER"
    },
    {
        name: "Lao_Shan_Lung",
        audio_code: "1vNOk6oC7L9U9iqx7vfTfl522an7BciE5",
        img_code: "xiEEk15"
    },
    {
        name: "Lavasioth",
        audio_code: "1xufOb5ltJ4wsEP5fh-EOYrSKtYvgAfOT",
        img_code: "1NdGYAi"
    },
    {
        name: "Legiana",
        audio_code: "1Z7aGdvkDqOYxJDq1-vupNsSBYrzsnO5I",
        img_code: "i9a8S7d"
    },
    {
        name: "Lunastra",
        audio_code: "1NiKP5lB8b3DajXxesg2BwbCj9plXioxg",
        img_code: "JrGIaoh"
    },
    {
        name: "Malfestio",
        audio_code: "1qkMVQc0D2luToscmK2-4rsnjH5pJ-B1V",
        img_code: "0OjgnXm"
    },
    {
        name: "Mizutsune",
        audio_code: "1MWZfyF-_V7qC_nvdgT6Z0VvTt5Hs3MTz",
        img_code: "RH9qvPP"
    },
    {
        name: "Molten_Tigrex",
        audio_code: "1pjy1lJgx3w7dNKIDwTgAz42rY47ei5Kc",
        img_code: "3Z8UaSk"
    },
    {
        name: "Monoblos",
        audio_code: "1vjNN6hdowVWC4EB92Mx9JvsRpzisFOEm",
        img_code: "EbXHc8R"
    },
    {
        name: "Najarala",
        audio_code: "1hO19RDf0NcJkOjNX4yj_grSTRG142Wx0",
        img_code: "7eLoP6i"
    },
    {
        name: "Nakarkos",
        audio_code: "1m0ABwxvk3Engu4_EFPTP4ranUMUvaUdj",
        img_code: "8WShzxi"
    },
    {
        name: "Nargacuga",
        audio_code: "1yStPQXUoLpVUWWblW53BDY84UFe5_Xxr",
        img_code: "RlP3A6R"
    },
    {
        name: "Nergigante",
        audio_code: "1lRmvD3jRuGPF9INrMHEEQV-sJBpAcSoL",
        img_code: "FAjIt2X"
    },
    {
        name: "Nerscylla",
        audio_code: "1AW3YHFtv8oUN3CdWVgHcooCFbtCrJTpr",
        img_code: "BMIpxw7"
    },
    {
        name: "Nibelsnarf",
        audio_code: "1Dh-KUxK0zpDIBrd4DNRmmfKMf7towwli",
        img_code: "GPHFbc2"
    },
    {
        name: "Odogaron",
        audio_code: "11S-xttdbVqfs7EQt2-vt9hQSC8WbYU2d",
        img_code: "D91OWfY"
    },
    {
        name: "Paolumu",
        audio_code: "1z9bkmHam8Syyt94VvNVALhNNhVxAj6e_",
        img_code: "bemYBH4"
    },
    {
        name: "Pink_Rathian",
        audio_code: "1B0b5vB9zXqS9KQ-k4BVAKsM_LnxbktCu",
        img_code: "vq6MjwP"
    },
    {
        name: "Pukei_Pukei",
        audio_code: "12dK8znjhWZbqmAYPhMhuMvXBnj8Egdq_",
        img_code: "piPtZnA"
    },
    {
        name: "Purple_Ludroth",
        audio_code: "1sbXWK-JT4ST_pCMQZ74tzECfGkNoAWPS",
        img_code: "tqugkKn"
    },
    {
        name: "Qurupeco",
        audio_code: "1qMx4SJRwe_tlvXfv2-WS0uJr5X9CrdDG",
        img_code: "tN3Zumj"
    },
    {
        name: "Radobaan",
        audio_code: "14LvSRe_AgarlJWj_WK9sYRaJoPWEkj_Y",
        img_code: "rJaR7jF"
    },
    {
        name: "Rajang",
        audio_code: "1LLusVytyXhKY5KwLX7E9gQS_n8t170P8",
        img_code: "6Vd23z0"
    },
    {
        name: "Rathalos",
        audio_code: "1ZtQ1h5hdf15PeUqBlcQwNNlJFqXKC1Nc",
        img_code: "PKUNnLt"
    },
    {
        name: "Rathian",
        audio_code: "1qqJM87T8ujx5Q4eZBwGylvoMdbcouoFI",
        img_code: "eIgeKPB"
    },
    {
        name: "Royal_Ludroth",
        audio_code: "1x4Cp7yTSctNPEiFCWrUruIUl-BIlFzH_",
        img_code: "PdwWB9S"
    },
    {
        name: "Ruiner_Nergigante",
        audio_code: "1GwBV8YH_d16CQBlXxz-C4uKdde-S2SOP",
        img_code: "LmoQyAf"
    },
    {
        name: "Rusted_Kushala_Daora",
        audio_code: "1ivBlUTUFECjAKWHwRzzWvVyuX4aiqZQR",
        img_code: "XV2U9G7"
    },
    {
        name: "Savage_Deviljho",
        audio_code: "17CDQNiAsb1YrCcut9QevrTkTiPMjZC5X",
        img_code: "jgTSTbv"
    },
    {
        name: "Seltas",
        audio_code: "1_sqWhrWIShDgZrnvyVFTtHHWDROOYDl5",
        img_code: "KddWBdQ"
    },
    {
        name: "Seltas_Queen",
        audio_code: "1pXtM81jWgSxQ8-XKAEquDX9CXarEyJWI",
        img_code: "u84WKCC"
    },
    {
        name: "Seregios",
        audio_code: "1WwrNmwWdJVec0-S3dgxJLabZ-FrJvyXG",
        img_code: "ML9acGN"
    },
    {
        name: "Shagaru_Magala",
        audio_code: "1HzahV08HsS5PXmZGS4vCrsLStWGTXLUu",
        img_code: "kQl8xUz"
    },
    {
        name: "Shah_Dalamadur",
        audio_code: "1J5nYgIYOFwU0Wn41T7DNvxpsd4PtDoHJ",
        img_code: "8DblW7E"
    },
    {
        name: "Shrouded_Nerscylla",
        audio_code: "1kHkgxd0plGZXVKUg2d5u2jNeqm1zjsrF",
        img_code: "ilLuASj"
    },
    {
        name: "Silverwind_Nargacuga",
        audio_code: "1M8LtJBH4-bnQYSig9aU5XMX-QUqg1DC6",
        img_code: "BE8jyQS"
    },
    {
        name: "Soulseer_Mizutsune",
        audio_code: "1wCKMtlqkH30UftnyT1D2e01eMqJTBHnS",
        img_code: "1udVuwL"
    },
    {
        name: "Stygian_Zinogre",
        audio_code: "1JYBLIzzp3QoBpudmrcKe6oM6M-SLK3XC",
        img_code: "27GCLnl"
    },
    {
        name: "Teostra",
        audio_code: "1AZneJZ9ijgTMAiLxKAJPkOrCsA5RM8ya",
        img_code: "yhcqMNl"
    },
    {
        name: "Tetsucabra",
        audio_code: "12rXFeEzfOIFuxUa4cIqwzN7GyogUNeYG",
        img_code: "NTcWstB"
    },
    {
        name: "Tigrex",
        audio_code: "1jRmFHz7e20gmWHQ1HJGRfu_74GOJeLPQ",
        img_code: "xhiBoM5"
    },
    {
        name: "Tobi_Kadachi",
        audio_code: "1GMv639gR0W4AmujmOQA9wxK3KqrwZQMq",
        img_code: "ar0VeGN"
    },
    {
        name: "Tzitzi_Ya_Ku",
        audio_code: "1N722Jev-Q3LEDysMpHTPuFQjiE-YlAy3",
        img_code: "IfFdwfz"
    },
    {
        name: "Ukanlos",
        audio_code: "1HK7djffos6bQ1WiBdexRfNc6e5SZDN9B",
        img_code: "8eZkXI7"
    },
    {
        name: "Uragaan",
        audio_code: "1CRMS0WGshHiSye01of2BL6GNs2Im1I5w",
        img_code: "EOJCSeD"
    },
    {
        name: "Vaal_Hazak",
        audio_code: "1hlCE458H44sLlXEKO8Mowbob7KV1gy4S",
        img_code: "jRQEGAM"
    },
    {
        name: "Valstrax",
        audio_code: "1BxhI8RM3wxi-5ZVSlNuLaCJ3ouGGW_dd",
        img_code: "YuvuQXn"
    },
    {
        name: "Velkhana",
        audio_code: "1-SWamftLA91aCN5OzpRg5E_fE24a6e9g",
        img_code: "j9YmYR0"
    },
    {
        name: "Velocidrome",
        audio_code: "1f9hUN6gF02awB3rALJbycZopjQyRCSJm",
        img_code: "BCClXVx"
    },
    {
        name: "Viper_Tobi_Kadachi",
        audio_code: "15cA-AMLO_yAbnHN-mDHM1i99bnVdH2l1",
        img_code: "qYf5iYp"
    },
    {
        name: "Volvidon",
        audio_code: "1584PqG-Dzu7fXSOfTer4AZbDryPsv02b",
        img_code: "HG8fcA6"
    },
    {
        name: "Xeno'jiiva",
        audio_code: "1SbtoMSSo0Y5a8Yscl5bq_3awu2Vw7VXU",
        img_code: "8UyrbPZ"
    },
    {
        name: "Yian_Garuga",
        audio_code: "17q4314cMb0W_bFVNONcckazw237JDDMg",
        img_code: "835npM2"
    },
    {
        name: "Yian_Kut_Ku",
        audio_code: "1tWET9V81xNllf2kGJq6pqImyYLIOsO-k",
        img_code: "3IevPjD"
    },
    {
        name: "Zamtrios",
        audio_code: "1ZALBzkSuA6c3VA0aiqLl-x0Mw4L8hj2o",
        img_code: "o3UbOyJ"
    },
    {
        name: "Zinogre",
        audio_code: "1-ggDmTrsSqKCpxMIm29tCG0b3nwHfk3N",
        img_code: "HbPHrvA"
    }
]