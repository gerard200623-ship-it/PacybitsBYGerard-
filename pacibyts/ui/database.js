// Base de datos completa de cartas FC 27 estilo PacyBits / FUT (Más de 1000 cartas reales)
const PLAYERS_DB = [
    {
        "id": "icon_pele",
        "name": "Pelé",
        "fullName": "Edson Arantes do Nascimento",
        "rating": 98,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 95,
            "sho": 96,
            "pas": 93,
            "dri": 96,
            "def": 60,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/000/240/24_360.png",
        "quickSell": 50000
    },
    {
        "id": "icon_maradona",
        "name": "Maradona",
        "fullName": "Diego Armando Maradona",
        "rating": 97,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 92,
            "sho": 93,
            "pas": 92,
            "dri": 97,
            "def": 42,
            "phy": 75
        },
        "faceUrl": "https://cdn.sofifa.net/players/190/043/24_360.png",
        "quickSell": 45000
    },
    {
        "id": "icon_r9",
        "name": "Ronaldo R9",
        "fullName": "Ronaldo Nazário de Lima",
        "rating": 96,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 97,
            "sho": 95,
            "pas": 81,
            "dri": 95,
            "def": 45,
            "phy": 80
        },
        "faceUrl": "https://cdn.sofifa.net/players/001/040/23_360.png",
        "quickSell": 40000
    },
    {
        "id": "icon_zidane",
        "name": "Zidane",
        "fullName": "Zinedine Zidane",
        "rating": 96,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 85,
            "sho": 92,
            "pas": 96,
            "dri": 95,
            "def": 75,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/001/397/24_360.png",
        "quickSell": 40000
    },
    {
        "id": "icon_cruyff",
        "name": "Cruyff",
        "fullName": "Johan Cruyff",
        "rating": 95,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 91,
            "sho": 92,
            "pas": 91,
            "dri": 94,
            "def": 42,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/242/519/24_360.png",
        "quickSell": 35000
    },
    {
        "id": "icon_ronaldinho",
        "name": "Ronaldinho",
        "fullName": "Ronaldo de Assis Moreira",
        "rating": 94,
        "cardType": "icon",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 92,
            "sho": 90,
            "pas": 91,
            "dri": 95,
            "def": 37,
            "phy": 81
        },
        "faceUrl": "https://cdn.sofifa.net/players/028/130/24_360.png",
        "quickSell": 30000
    },
    {
        "id": "icon_maldini",
        "name": "Maldini",
        "fullName": "Paolo Maldini",
        "rating": 94,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 86,
            "sho": 56,
            "pas": 75,
            "dri": 70,
            "def": 96,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/001/075/24_360.png",
        "quickSell": 30000
    },
    {
        "id": "icon_henry",
        "name": "Henry",
        "fullName": "Thierry Henry",
        "rating": 93,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 94,
            "sho": 91,
            "pas": 83,
            "dri": 90,
            "def": 53,
            "phy": 80
        },
        "faceUrl": "https://cdn.sofifa.net/players/001/625/24_360.png",
        "quickSell": 25000
    },
    {
        "id": "icon_gullit",
        "name": "Gullit",
        "fullName": "Ruud Gullit",
        "rating": 93,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 86,
            "sho": 88,
            "pas": 88,
            "dri": 89,
            "def": 82,
            "phy": 87
        },
        "faceUrl": "https://cdn.sofifa.net/players/214/100/24_360.png",
        "quickSell": 25000
    },
    {
        "id": "icon_yashin",
        "name": "Yashin",
        "fullName": "Lev Yashin",
        "rating": 92,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "Rusia",
            "code": "ru"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 93,
            "sho": 89,
            "pas": 75,
            "dri": 95,
            "def": 60,
            "phy": 92
        },
        "faceUrl": "https://cdn.sofifa.net/players/238/380/24_360.png",
        "quickSell": 20000
    },
    {
        "id": "hero_ginola",
        "name": "Ginola",
        "fullName": "David Ginola",
        "rating": 89,
        "cardType": "hero",
        "pos": "MI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Premier League Heroes",
            "badge": "hero"
        },
        "stats": {
            "pac": 90,
            "sho": 88,
            "pas": 87,
            "dri": 91,
            "def": 54,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/264/875/24_360.png",
        "quickSell": 15000
    },
    {
        "id": "hero_toure",
        "name": "Yaya Touré",
        "fullName": "Gnégnéri Yaya Touré",
        "rating": 89,
        "cardType": "hero",
        "pos": "MC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Premier League Heroes",
            "badge": "hero"
        },
        "stats": {
            "pac": 78,
            "sho": 83,
            "pas": 86,
            "dri": 84,
            "def": 83,
            "phy": 89
        },
        "faceUrl": "https://cdn.sofifa.net/players/167/948/24_360.png",
        "quickSell": 15000
    },
    {
        "id": "hero_lucio",
        "name": "Lúcio",
        "fullName": "Lucimar da Silva Ferreira",
        "rating": 89,
        "cardType": "hero",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Serie A Heroes",
            "badge": "hero"
        },
        "stats": {
            "pac": 83,
            "sho": 71,
            "pas": 73,
            "dri": 74,
            "def": 91,
            "phy": 89
        },
        "faceUrl": "https://cdn.sofifa.net/players/258/885/24_360.png",
        "quickSell": 15000
    },
    {
        "id": "hero_forlan",
        "name": "Forlán",
        "fullName": "Diego Forlán",
        "rating": 88,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "LaLiga Heroes",
            "badge": "hero"
        },
        "stats": {
            "pac": 86,
            "sho": 90,
            "pas": 82,
            "dri": 85,
            "def": 48,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/268/000/24_360.png",
        "quickSell": 12000
    },
    {
        "id": "gold_mbappe",
        "name": "Mbappé",
        "fullName": "Kylian Mbappé",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 97,
            "sho": 90,
            "pas": 80,
            "dri": 92,
            "def": 36,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/747/24_360.png",
        "quickSell": 10000
    },
    {
        "id": "gold_haaland",
        "name": "Haaland",
        "fullName": "Erling Haaland",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 89,
            "sho": 93,
            "pas": 66,
            "dri": 81,
            "def": 45,
            "phy": 88
        },
        "faceUrl": "https://cdn.sofifa.net/players/239/085/24_360.png",
        "quickSell": 10000
    },
    {
        "id": "gold_rodri",
        "name": "Rodri",
        "fullName": "Rodrigo Hernández Cascante",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 66,
            "sho": 80,
            "pas": 86,
            "dri": 84,
            "def": 87,
            "phy": 85
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/866/24_360.png",
        "quickSell": 10000
    },
    {
        "id": "gold_vinicius",
        "name": "Vinícius Jr",
        "fullName": "Vinícius José Paixão de Oliveira Júnior",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 95,
            "sho": 84,
            "pas": 81,
            "dri": 91,
            "def": 29,
            "phy": 69
        },
        "faceUrl": "https://cdn.sofifa.net/players/238/794/24_360.png",
        "quickSell": 8000
    },
    {
        "id": "gold_bellingham",
        "name": "Bellingham",
        "fullName": "Jude Bellingham",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 80,
            "sho": 87,
            "pas": 83,
            "dri": 88,
            "def": 78,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/252/371/24_360.png",
        "quickSell": 8000
    },
    {
        "id": "gold_debruyne",
        "name": "De Bruyne",
        "fullName": "Kevin De Bruyne",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 67,
            "sho": 87,
            "pas": 94,
            "dri": 87,
            "def": 65,
            "phy": 74
        },
        "faceUrl": "https://cdn.sofifa.net/players/192/985/24_360.png",
        "quickSell": 8000
    },
    {
        "id": "gold_kane",
        "name": "Kane",
        "fullName": "Harry Kane",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 65,
            "sho": 93,
            "pas": 84,
            "dri": 83,
            "def": 49,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/202/126/24_360.png",
        "quickSell": 8000
    },
    {
        "id": "gold_salah",
        "name": "Salah",
        "fullName": "Mohamed Salah",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Egipto",
            "code": "eg"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 89,
            "sho": 87,
            "pas": 82,
            "dri": 88,
            "def": 45,
            "phy": 75
        },
        "faceUrl": "https://cdn.sofifa.net/players/209/331/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_vandijk",
        "name": "Van Dijk",
        "fullName": "Virgil van Dijk",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 78,
            "sho": 60,
            "pas": 71,
            "dri": 72,
            "def": 89,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/203/376/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_courtois",
        "name": "Courtois",
        "fullName": "Thibaut Courtois",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 85,
            "sho": 89,
            "pas": 76,
            "dri": 90,
            "def": 46,
            "phy": 88
        },
        "faceUrl": "https://cdn.sofifa.net/players/192/119/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_alisson",
        "name": "Alisson",
        "fullName": "Alisson Ramses Becker",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 86,
            "sho": 85,
            "pas": 85,
            "dri": 89,
            "def": 56,
            "phy": 90
        },
        "faceUrl": "https://cdn.sofifa.net/players/212/831/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_messi",
        "name": "Messi",
        "fullName": "Lionel Andrés Messi",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 79,
            "sho": 85,
            "pas": 87,
            "dri": 92,
            "def": 33,
            "phy": 64
        },
        "faceUrl": "https://cdn.sofifa.net/players/158/023/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_valverde",
        "name": "Valverde",
        "fullName": "Federico Valverde",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 88,
            "sho": 82,
            "pas": 84,
            "dri": 84,
            "def": 80,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/239/053/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_wirtz",
        "name": "Wirtz",
        "fullName": "Florian Wirtz",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 81,
            "sho": 80,
            "pas": 86,
            "dri": 89,
            "def": 52,
            "phy": 68
        },
        "faceUrl": "https://cdn.sofifa.net/players/256/630/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_musiala",
        "name": "Musiala",
        "fullName": "Jamal Musiala",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 84,
            "sho": 81,
            "pas": 81,
            "dri": 90,
            "def": 65,
            "phy": 64
        },
        "faceUrl": "https://cdn.sofifa.net/players/256/790/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_saliba",
        "name": "Saliba",
        "fullName": "William Saliba",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 82,
            "sho": 39,
            "pas": 70,
            "dri": 72,
            "def": 87,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/243/780/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_saka",
        "name": "Saka",
        "fullName": "Bukayo Saka",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 86,
            "sho": 83,
            "pas": 82,
            "dri": 88,
            "def": 65,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/246/669/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_odegaard",
        "name": "Ødegaard",
        "fullName": "Martin Ødegaard",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 74,
            "sho": 82,
            "pas": 89,
            "dri": 89,
            "def": 68,
            "phy": 64
        },
        "faceUrl": "https://cdn.sofifa.net/players/222/665/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_rudiger",
        "name": "Rüdiger",
        "fullName": "Antonio Rüdiger",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 82,
            "sho": 55,
            "pas": 71,
            "dri": 67,
            "def": 86,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/205/452/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_palmer",
        "name": "Cole Palmer",
        "fullName": "Cole Jermaine Palmer",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 82,
            "sho": 83,
            "pas": 84,
            "dri": 87,
            "def": 53,
            "phy": 66
        },
        "faceUrl": "https://cdn.sofifa.net/players/258/171/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_yamal",
        "name": "Lamine Yamal",
        "fullName": "Lamine Yamal Nasraoui Ebana",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 85,
            "sho": 78,
            "pas": 82,
            "dri": 88,
            "def": 35,
            "phy": 58
        },
        "faceUrl": "https://cdn.sofifa.net/players/277/643/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_pedri",
        "name": "Pedri",
        "fullName": "Pedro González López",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 79,
            "sho": 70,
            "pas": 85,
            "dri": 88,
            "def": 68,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/251/854/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_ronaldo",
        "name": "C. Ronaldo",
        "fullName": "Cristiano Ronaldo dos Santos Aveiro",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 77,
            "sho": 88,
            "pas": 75,
            "dri": 80,
            "def": 34,
            "phy": 74
        },
        "faceUrl": "https://cdn.sofifa.net/players/020/801/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_nico_williams",
        "name": "Nico Williams",
        "fullName": "Nicholas Williams Arthuer",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 93,
            "sho": 78,
            "pas": 79,
            "dri": 86,
            "def": 38,
            "phy": 68
        },
        "faceUrl": "https://cdn.sofifa.net/players/256/516/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_gavi",
        "name": "Gavi",
        "fullName": "Pablo Martín Páez Gavira",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 76,
            "sho": 66,
            "pas": 79,
            "dri": 84,
            "def": 68,
            "phy": 79
        },
        "faceUrl": "https://cdn.sofifa.net/players/264/240/24_360.png",
        "quickSell": 1500
    },
    {
        "id": "gold_camavinga",
        "name": "Camavinga",
        "fullName": "Eduardo Camavinga",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 80,
            "sho": 67,
            "pas": 81,
            "dri": 83,
            "def": 81,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/248/243/24_360.png",
        "quickSell": 1500
    },
    {
        "id": "gold_araujo",
        "name": "Araujo",
        "fullName": "Ronald Federico Araújo da Silva",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 82,
            "sho": 51,
            "pas": 65,
            "dri": 65,
            "def": 86,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/253/149/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_hakimi",
        "name": "Hakimi",
        "fullName": "Achraf Hakimi Mouh",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 92,
            "sho": 75,
            "pas": 79,
            "dri": 80,
            "def": 76,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/235/212/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_lewandowski",
        "name": "Lewandowski",
        "fullName": "Robert Lewandowski",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 75,
            "sho": 88,
            "pas": 80,
            "dri": 85,
            "def": 44,
            "phy": 81
        },
        "faceUrl": "https://cdn.sofifa.net/players/188/545/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_griezmann",
        "name": "Griezmann",
        "fullName": "Antoine Griezmann",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 80,
            "sho": 88,
            "pas": 87,
            "dri": 88,
            "def": 58,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/194/765/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_terstegen",
        "name": "Ter Stegen",
        "fullName": "Marc-André ter Stegen",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 86,
            "sho": 85,
            "pas": 89,
            "dri": 91,
            "def": 47,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/192/448/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "totw_mbappe",
        "name": "Mbappé TOTW",
        "fullName": "Kylian Mbappé (In-Form)",
        "rating": 92,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 98,
            "sho": 91,
            "pas": 82,
            "dri": 93,
            "def": 38,
            "phy": 80
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/747/24_360.png",
        "quickSell": 20000
    },
    {
        "id": "totw_haaland",
        "name": "Haaland TOTW",
        "fullName": "Erling Haaland (In-Form)",
        "rating": 92,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 90,
            "sho": 94,
            "pas": 68,
            "dri": 83,
            "def": 47,
            "phy": 90
        },
        "faceUrl": "https://cdn.sofifa.net/players/239/085/24_360.png",
        "quickSell": 20000
    },
    {
        "id": "totw_vinicius",
        "name": "Vinícius Jr TOTW",
        "fullName": "Vinícius Jr (In-Form)",
        "rating": 91,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 96,
            "sho": 86,
            "pas": 83,
            "dri": 92,
            "def": 31,
            "phy": 71
        },
        "faceUrl": "https://cdn.sofifa.net/players/238/794/24_360.png",
        "quickSell": 18000
    },
    {
        "id": "totw_yamal",
        "name": "Lamine Yamal TOTW",
        "fullName": "Lamine Yamal (In-Form)",
        "rating": 87,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 88,
            "sho": 82,
            "pas": 86,
            "dri": 91,
            "def": 38,
            "phy": 62
        },
        "faceUrl": "https://cdn.sofifa.net/players/277/643/24_360.png",
        "quickSell": 15000
    },
    {
        "id": "totw_palmer",
        "name": "Cole Palmer TOTW",
        "fullName": "Cole Palmer (In-Form)",
        "rating": 87,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 84,
            "sho": 86,
            "pas": 87,
            "dri": 89,
            "def": 56,
            "phy": 69
        },
        "faceUrl": "https://cdn.sofifa.net/players/258/171/24_360.png",
        "quickSell": 15000
    },
    {
        "id": "silver_cubarsi",
        "name": "Cubarsí",
        "fullName": "Pau Cubarsí Paredes",
        "rating": 74,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 72,
            "sho": 35,
            "pas": 75,
            "dri": 71,
            "def": 76,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/278/046/24_360.png",
        "quickSell": 400
    },
    {
        "id": "silver_endrick",
        "name": "Endrick",
        "fullName": "Endrick Felipe Moreira de Sousa",
        "rating": 74,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 85,
            "sho": 76,
            "pas": 65,
            "dri": 78,
            "def": 33,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/272/505/25_360.png",
        "quickSell": 400
    },
    {
        "id": "silver_guler",
        "name": "Arda Güler",
        "fullName": "Arda Güler",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 73,
            "sho": 72,
            "pas": 78,
            "dri": 81,
            "def": 52,
            "phy": 54
        },
        "faceUrl": "https://cdn.sofifa.net/players/264/309/24_360.png",
        "quickSell": 400
    },
    {
        "id": "silver_mainoo",
        "name": "Mainoo",
        "fullName": "Kobbie Boateng Mainoo",
        "rating": 74,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 71,
            "sho": 68,
            "pas": 75,
            "dri": 79,
            "def": 72,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/269/136/24_360.png",
        "quickSell": 400
    },
    {
        "id": "silver_estevao",
        "name": "Estêvão",
        "fullName": "Estêvão Willian Almeida de Oliveira",
        "rating": 73,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 84,
            "sho": 70,
            "pas": 72,
            "dri": 82,
            "def": 30,
            "phy": 55
        },
        "faceUrl": "assets/faces/silver_estevao.png",
        "quickSell": 350
    },
    {
        "id": "bronze_fort",
        "name": "Héctor Fort",
        "fullName": "Héctor Fort Carvillano",
        "rating": 64,
        "cardType": "bronze",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 74,
            "sho": 51,
            "pas": 63,
            "dri": 65,
            "def": 61,
            "phy": 60
        },
        "faceUrl": "https://cdn.sofifa.net/players/278/923/24_360.png",
        "quickSell": 150
    },
    {
        "id": "bronze_paz",
        "name": "Nico Paz",
        "fullName": "Nicolás Paz Martínez",
        "rating": 64,
        "cardType": "bronze",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 68,
            "sho": 64,
            "pas": 68,
            "dri": 70,
            "def": 48,
            "phy": 58
        },
        "faceUrl": "assets/faces/bronze_paz.png",
        "quickSell": 150
    },
    {
        "id": "bronze_casado",
        "name": "Marc Casadó",
        "fullName": "Marc Casadó Torras",
        "rating": 64,
        "cardType": "bronze",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 66,
            "sho": 52,
            "pas": 67,
            "dri": 66,
            "def": 64,
            "phy": 68
        },
        "faceUrl": "https://cdn.sofifa.net/players/271/424/24_120.png",
        "quickSell": 150
    },
    {
        "id": "gold_donnarumma",
        "name": "Donnarumma",
        "fullName": "Gianluigi Donnarumma",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 90,
            "sho": 84,
            "pas": 79,
            "dri": 89,
            "def": 52,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/230/621/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_lautaro",
        "name": "Lautaro",
        "fullName": "Lautaro Javier Martínez",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 82,
            "sho": 88,
            "pas": 75,
            "dri": 87,
            "def": 48,
            "phy": 85
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/478/24_360.png",
        "quickSell": 6000
    },
    {
        "id": "gold_foden",
        "name": "Foden",
        "fullName": "Phil Foden",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 86,
            "sho": 86,
            "pas": 85,
            "dri": 90,
            "def": 57,
            "phy": 64
        },
        "faceUrl": "https://cdn.sofifa.net/players/237/692/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_bernardo",
        "name": "Bernardo Silva",
        "fullName": "Bernardo Mota Veiga de Carvalho e Silva",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 70,
            "sho": 79,
            "pas": 88,
            "dri": 92,
            "def": 67,
            "phy": 69
        },
        "faceUrl": "https://cdn.sofifa.net/players/218/667/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_son",
        "name": "Son",
        "fullName": "Son Heung-min",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 87,
            "sho": 89,
            "pas": 82,
            "dri": 84,
            "def": 42,
            "phy": 70
        },
        "faceUrl": "https://cdn.sofifa.net/players/200/104/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_rice",
        "name": "Rice",
        "fullName": "Declan Rice",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 76,
            "sho": 67,
            "pas": 82,
            "dri": 79,
            "def": 86,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/234/378/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_barella",
        "name": "Barella",
        "fullName": "Nicolò Barella",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 79,
            "sho": 77,
            "pas": 84,
            "dri": 86,
            "def": 80,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/224/232/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_bastoni",
        "name": "Bastoni",
        "fullName": "Alessandro Bastoni",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 75,
            "sho": 38,
            "pas": 75,
            "dri": 75,
            "def": 88,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/237/383/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_modric",
        "name": "Modrić",
        "fullName": "Luka Modrić",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 70,
            "sho": 76,
            "pas": 89,
            "dri": 86,
            "def": 72,
            "phy": 64
        },
        "faceUrl": "https://cdn.sofifa.net/players/177/003/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_carvajal",
        "name": "Carvajal",
        "fullName": "Daniel Carvajal Ramos",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 81,
            "sho": 54,
            "pas": 80,
            "dri": 82,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/204/963/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_leao",
        "name": "Rafael Leão",
        "fullName": "Rafael Alexandre da Conceição Leão",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 93,
            "sho": 81,
            "pas": 76,
            "dri": 87,
            "def": 28,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/241/721/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_tchouameni",
        "name": "Tchouaméni",
        "fullName": "Aurélien Djani Tchouaméni",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 73,
            "sho": 72,
            "pas": 80,
            "dri": 81,
            "def": 83,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/241/637/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_osimhen",
        "name": "Osimhen",
        "fullName": "Victor James Osimhen",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 90,
            "sho": 86,
            "pas": 66,
            "dri": 80,
            "def": 42,
            "phy": 83
        },
        "faceUrl": "https://cdn.sofifa.net/players/232/293/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_davies",
        "name": "Davies",
        "fullName": "Alphonso Boyle Davies",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Canadá",
            "code": "ca"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 95,
            "sho": 68,
            "pas": 77,
            "dri": 84,
            "def": 75,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/234/396/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_oblak",
        "name": "Oblak",
        "fullName": "Jan Oblak",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Eslovenia",
            "code": "si"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 85,
            "sho": 88,
            "pas": 77,
            "dri": 87,
            "def": 48,
            "phy": 86
        },
        "faceUrl": "https://cdn.sofifa.net/players/200/389/24_360.png",
        "quickSell": 5000
    },
    {
        "id": "gold_bruno_fernandes",
        "name": "B. Fernandes",
        "fullName": "Bruno Miguel Borges Fernandes",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 72,
            "sho": 85,
            "pas": 90,
            "dri": 83,
            "def": 69,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/212/198/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_kvaratskhelia",
        "name": "Kvaratskhelia",
        "fullName": "Khvicha Kvaratskhelia",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Georgia",
            "code": "ge"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 86,
            "sho": 83,
            "pas": 81,
            "dri": 89,
            "def": 41,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/246/430/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_kounde",
        "name": "Koundé",
        "fullName": "Jules Olivier Koundé",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 84,
            "sho": 45,
            "pas": 74,
            "dri": 78,
            "def": 86,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/253/163/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_mac_allister",
        "name": "Mac Allister",
        "fullName": "Alexis Mac Allister",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 70,
            "sho": 80,
            "pas": 86,
            "dri": 84,
            "def": 78,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/247/204/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_gvardiol",
        "name": "Gvardiol",
        "fullName": "Joško Gvardiol",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 83,
            "sho": 64,
            "pas": 74,
            "dri": 79,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/243/580/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_dembele",
        "name": "O. Dembélé",
        "fullName": "Ousmane Dembélé",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 93,
            "sho": 78,
            "pas": 82,
            "dri": 90,
            "def": 36,
            "phy": 56
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/443/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_dybala",
        "name": "Dybala",
        "fullName": "Paulo Exequiel Dybala",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 80,
            "sho": 86,
            "pas": 86,
            "dri": 90,
            "def": 40,
            "phy": 60
        },
        "faceUrl": "https://cdn.sofifa.net/players/211/110/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_militao",
        "name": "Éder Militão",
        "fullName": "Éder Gabriel Militão",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 85,
            "sho": 50,
            "pas": 70,
            "dri": 72,
            "def": 86,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/240/130/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_tonali",
        "name": "Tonali",
        "fullName": "Sandro Tonali",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 82,
            "sho": 74,
            "pas": 81,
            "dri": 81,
            "def": 81,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/241/096/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_de_ligt",
        "name": "De Ligt",
        "fullName": "Matthijs de Ligt",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 72,
            "sho": 59,
            "pas": 65,
            "dri": 68,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "https://cdn.sofifa.net/players/235/790/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_joao_felix",
        "name": "João Félix",
        "fullName": "João Félix Sequeira",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 83,
            "sho": 80,
            "pas": 81,
            "dri": 88,
            "def": 40,
            "phy": 68
        },
        "faceUrl": "https://cdn.sofifa.net/players/242/444/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_kante",
        "name": "Kanté",
        "fullName": "N'Golo Kanté",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 78,
            "sho": 66,
            "pas": 75,
            "dri": 80,
            "def": 87,
            "phy": 82
        },
        "faceUrl": "https://cdn.sofifa.net/players/215/914/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_brahim",
        "name": "Brahim Díaz",
        "fullName": "Brahim Abdelkader Díaz",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 85,
            "sho": 78,
            "pas": 79,
            "dri": 87,
            "def": 38,
            "phy": 58
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/410/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_nkunku",
        "name": "Nkunku",
        "fullName": "Christopher Nkunku",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 82,
            "sho": 81,
            "pas": 83,
            "dri": 88,
            "def": 63,
            "phy": 66
        },
        "faceUrl": "https://cdn.sofifa.net/players/232/411/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_gravenberch",
        "name": "Gravenberch",
        "fullName": "Ryan Jiro Gravenberch",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 79,
            "sho": 75,
            "pas": 80,
            "dri": 83,
            "def": 74,
            "phy": 78
        },
        "faceUrl": "https://cdn.sofifa.net/players/251/573/24_360.png",
        "quickSell": 1500
    },
    {
        "id": "gold_barcola",
        "name": "Barcola",
        "fullName": "Bradley Barcola",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 91,
            "sho": 75,
            "pas": 78,
            "dri": 85,
            "def": 32,
            "phy": 62
        },
        "faceUrl": "https://cdn.sofifa.net/players/247/851/24_360.png",
        "quickSell": 1500
    },
    {
        "id": "gold_ansu_fati",
        "name": "Ansu Fati",
        "fullName": "Anssumane Fati Vieira",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 85,
            "sho": 78,
            "pas": 74,
            "dri": 81,
            "def": 30,
            "phy": 54
        },
        "faceUrl": "https://cdn.sofifa.net/players/253/004/24_360.png",
        "quickSell": 1000
    },
    {
        "id": "silver_mastantuono",
        "name": "Mastantuono",
        "fullName": "Franco Mastantuono",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 78,
            "sho": 72,
            "pas": 75,
            "dri": 79,
            "def": 42,
            "phy": 60
        },
        "faceUrl": "assets/faces/silver_mastantuono.png",
        "quickSell": 400
    },
    {
        "id": "gold_robertson",
        "name": "Robertson",
        "fullName": "Andrew Robertson",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Escocia",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 80,
            "sho": 61,
            "pas": 82,
            "dri": 80,
            "def": 81,
            "phy": 76
        },
        "faceUrl": "https://cdn.sofifa.net/players/216/267/24_360.png",
        "quickSell": 3000
    },
    {
        "id": "gold_hernandez",
        "name": "Theo Hernández",
        "fullName": "Theo Bernard François Hernández",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 95,
            "sho": 74,
            "pas": 78,
            "dri": 84,
            "def": 81,
            "phy": 89
        },
        "faceUrl": "https://cdn.sofifa.net/players/232/656/24_360.png",
        "quickSell": 4000
    },
    {
        "id": "gold_grimaldo",
        "name": "Grimaldo",
        "fullName": "Alejandro Grimaldo García",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 85,
            "sho": 78,
            "pas": 88,
            "dri": 84,
            "def": 78,
            "phy": 73
        },
        "faceUrl": "https://cdn.sofifa.net/players/209/780/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_dimarco",
        "name": "Dimarco",
        "fullName": "Federico Dimarco",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 84,
            "sho": 76,
            "pas": 86,
            "dri": 82,
            "def": 77,
            "phy": 75
        },
        "faceUrl": "https://cdn.sofifa.net/players/226/753/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "gold_mendy",
        "name": "Ferland Mendy",
        "fullName": "Ferland Sinna Mendy",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 91,
            "sho": 64,
            "pas": 77,
            "dri": 80,
            "def": 80,
            "phy": 85
        },
        "faceUrl": "https://cdn.sofifa.net/players/228/618/24_360.png",
        "quickSell": 2000
    },
    {
        "id": "gold_frimpong",
        "name": "Frimpong",
        "fullName": "Jeremie Agyekum Frimpong",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 96,
            "sho": 72,
            "pas": 81,
            "dri": 86,
            "def": 77,
            "phy": 75
        },
        "faceUrl": "https://cdn.sofifa.net/players/251/809/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_trent",
        "name": "Alexander-Arnold",
        "fullName": "Trent John Alexander-Arnold",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 76,
            "sho": 74,
            "pas": 90,
            "dri": 80,
            "def": 80,
            "phy": 74
        },
        "faceUrl": "https://cdn.sofifa.net/players/231/281/24_360.png",
        "quickSell": 3500
    },
    {
        "id": "gold_walker",
        "name": "Walker",
        "fullName": "Kyle Andrew Walker",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 89,
            "sho": 63,
            "pas": 77,
            "dri": 78,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "https://cdn.sofifa.net/players/188/377/24_360.png",
        "quickSell": 2500
    },
    {
        "id": "icon_zico",
        "name": "Zico",
        "fullName": "Arthur Antunes Coimbra",
        "rating": 94,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 84,
            "sho": 84,
            "pas": 96,
            "dri": 94,
            "def": 68,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 39000
    },
    {
        "id": "icon_muller",
        "name": "Muller",
        "fullName": "Gerd Müller",
        "rating": 94,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 91,
            "sho": 93,
            "pas": 74,
            "dri": 88,
            "def": 34,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 39000
    },
    {
        "id": "icon_van_basten",
        "name": "Van Basten",
        "fullName": "Marco van Basten",
        "rating": 93,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 94,
            "sho": 97,
            "pas": 76,
            "dri": 92,
            "def": 42,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_baresi",
        "name": "Baresi",
        "fullName": "Franco Baresi",
        "rating": 93,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 73,
            "sho": 46,
            "pas": 71,
            "dri": 64,
            "def": 95,
            "phy": 98
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_puskas",
        "name": "Puskas",
        "fullName": "Ferenc Puskás",
        "rating": 94,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Hungría",
            "code": "hu"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 90,
            "sho": 93,
            "pas": 77,
            "dri": 91,
            "def": 40,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 39000
    },
    {
        "id": "icon_baggio",
        "name": "Baggio",
        "fullName": "Roberto Baggio",
        "rating": 93,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 81,
            "sho": 77,
            "pas": 93,
            "dri": 95,
            "def": 75,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_eusebio",
        "name": "Eusebio",
        "fullName": "Eusébio da Silva Ferreira",
        "rating": 93,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 90,
            "sho": 92,
            "pas": 75,
            "dri": 86,
            "def": 38,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_carlos_alberto",
        "name": "Carlos Alberto",
        "fullName": "Carlos Alberto Torres",
        "rating": 93,
        "cardType": "icon",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 98,
            "sho": 64,
            "pas": 83,
            "dri": 82,
            "def": 88,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_cafu",
        "name": "Cafu",
        "fullName": "Marcos Evangelista de Morais",
        "rating": 93,
        "cardType": "icon",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 98,
            "sho": 66,
            "pas": 83,
            "dri": 80,
            "def": 86,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_roberto_carlos",
        "name": "Roberto Carlos",
        "fullName": "Roberto Carlos da Silva",
        "rating": 91,
        "cardType": "icon",
        "pos": "LI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 95,
            "sho": 66,
            "pas": 80,
            "dri": 84,
            "def": 86,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_casillas",
        "name": "Casillas",
        "fullName": "Iker Casillas Fernández",
        "rating": 92,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 95,
            "sho": 94,
            "pas": 85,
            "dri": 91,
            "def": 90,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_buffon",
        "name": "Buffon",
        "fullName": "Gianluigi Buffon",
        "rating": 93,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 90,
            "sho": 95,
            "pas": 92,
            "dri": 93,
            "def": 82,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_xavi",
        "name": "Xavi",
        "fullName": "Xavier Hernández Creus",
        "rating": 93,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 83,
            "sho": 78,
            "pas": 96,
            "dri": 94,
            "def": 74,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_iniesta_icon",
        "name": "Iniesta Icon",
        "fullName": "Andrés Iniesta Luján",
        "rating": 94,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 78,
            "sho": 86,
            "pas": 97,
            "dri": 99,
            "def": 73,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 39000
    },
    {
        "id": "icon_pirlo",
        "name": "Pirlo",
        "fullName": "Andrea Pirlo",
        "rating": 92,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 84,
            "sho": 84,
            "pas": 93,
            "dri": 92,
            "def": 72,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_matthaus",
        "name": "Matthaus",
        "fullName": "Lothar Matthäus",
        "rating": 93,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 75,
            "sho": 77,
            "pas": 97,
            "dri": 97,
            "def": 71,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_vieira",
        "name": "Vieira",
        "fullName": "Patrick Vieira",
        "rating": 91,
        "cardType": "icon",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 69,
            "sho": 64,
            "pas": 84,
            "dri": 81,
            "def": 90,
            "phy": 93
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_kaka",
        "name": "Kaka",
        "fullName": "Ricardo Izecson dos Santos Leite",
        "rating": 91,
        "cardType": "icon",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 74,
            "sho": 85,
            "pas": 92,
            "dri": 96,
            "def": 75,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_cantona",
        "name": "Cantona",
        "fullName": "Éric Daniel Pierre Cantona",
        "rating": 93,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 91,
            "sho": 97,
            "pas": 81,
            "dri": 86,
            "def": 46,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_shevchenko",
        "name": "Shevchenko",
        "fullName": "Andriy Shevchenko",
        "rating": 91,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 93,
            "sho": 92,
            "pas": 72,
            "dri": 85,
            "def": 38,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_del_piero",
        "name": "Del Piero",
        "fullName": "Alessandro Del Piero",
        "rating": 92,
        "cardType": "icon",
        "pos": "SD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 88,
            "sho": 97,
            "pas": 82,
            "dri": 85,
            "def": 44,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_nedved",
        "name": "Nedved",
        "fullName": "Pavel Nedvěd",
        "rating": 91,
        "cardType": "icon",
        "pos": "MI",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 99,
            "sho": 77,
            "pas": 79,
            "dri": 93,
            "def": 37,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_bergkamp",
        "name": "Bergkamp",
        "fullName": "Dennis Bergkamp",
        "rating": 92,
        "cardType": "icon",
        "pos": "SD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 87,
            "sho": 92,
            "pas": 76,
            "dri": 86,
            "def": 37,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_puyol",
        "name": "Puyol",
        "fullName": "Carles Puyol Saforcada",
        "rating": 92,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 72,
            "sho": 49,
            "pas": 75,
            "dri": 72,
            "def": 96,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_cannavaro",
        "name": "Cannavaro",
        "fullName": "Fabio Cannavaro",
        "rating": 92,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 74,
            "sho": 51,
            "pas": 72,
            "dri": 64,
            "def": 93,
            "phy": 95
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_schmeichel",
        "name": "Schmeichel",
        "fullName": "Peter Schmeichel",
        "rating": 92,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 88,
            "sho": 89,
            "pas": 90,
            "dri": 91,
            "def": 83,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_van_der_sar",
        "name": "Van der Sar",
        "fullName": "Edwin van der Sar",
        "rating": 91,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 89,
            "sho": 93,
            "pas": 85,
            "dri": 94,
            "def": 81,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_cech",
        "name": "Cech",
        "fullName": "Petr Čech",
        "rating": 91,
        "cardType": "icon",
        "pos": "POR",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 94,
            "sho": 90,
            "pas": 89,
            "dri": 88,
            "def": 87,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_drogba",
        "name": "Drogba",
        "fullName": "Didier Drogba",
        "rating": 91,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 84,
            "sho": 93,
            "pas": 75,
            "dri": 89,
            "def": 34,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_torres",
        "name": "Torres",
        "fullName": "Fernando Torres",
        "rating": 89,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 82,
            "sho": 88,
            "pas": 80,
            "dri": 86,
            "def": 32,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 21500
    },
    {
        "id": "icon_eto_o",
        "name": "Eto'o",
        "fullName": "Samuel Eto'o Fils",
        "rating": 92,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "Camerún",
            "code": "cm"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 86,
            "sho": 93,
            "pas": 75,
            "dri": 91,
            "def": 41,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_raul",
        "name": "Raul",
        "fullName": "Raúl González Blanco",
        "rating": 92,
        "cardType": "icon",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 91,
            "sho": 93,
            "pas": 78,
            "dri": 88,
            "def": 43,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_hierro",
        "name": "Hierro",
        "fullName": "Fernando Hierro",
        "rating": 90,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 75,
            "sho": 45,
            "pas": 65,
            "dri": 65,
            "def": 91,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 25000
    },
    {
        "id": "icon_koeman",
        "name": "Koeman",
        "fullName": "Ronald Koeman",
        "rating": 91,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 81,
            "sho": 47,
            "pas": 66,
            "dri": 72,
            "def": 91,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_blanc",
        "name": "Blanc",
        "fullName": "Laurent Blanc",
        "rating": 91,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 72,
            "sho": 42,
            "pas": 65,
            "dri": 64,
            "def": 96,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_desailly",
        "name": "Desailly",
        "fullName": "Marcel Desailly",
        "rating": 91,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 72,
            "sho": 47,
            "pas": 66,
            "dri": 65,
            "def": 93,
            "phy": 95
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_ferdinand",
        "name": "Ferdinand",
        "fullName": "Rio Ferdinand",
        "rating": 90,
        "cardType": "icon",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 75,
            "sho": 49,
            "pas": 72,
            "dri": 66,
            "def": 93,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 25000
    },
    {
        "id": "icon_lahm",
        "name": "Lahm",
        "fullName": "Philipp Lahm",
        "rating": 91,
        "cardType": "icon",
        "pos": "LD",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 92,
            "sho": 59,
            "pas": 78,
            "dri": 80,
            "def": 88,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_zanetti",
        "name": "Zanetti",
        "fullName": "Javier Zanetti",
        "rating": 92,
        "cardType": "icon",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 93,
            "sho": 59,
            "pas": 84,
            "dri": 77,
            "def": 89,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_scholes",
        "name": "Scholes",
        "fullName": "Paul Scholes",
        "rating": 91,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 83,
            "sho": 81,
            "pas": 93,
            "dri": 96,
            "def": 71,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_gerrard",
        "name": "Gerrard",
        "fullName": "Steven Gerrard",
        "rating": 91,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 76,
            "sho": 83,
            "pas": 95,
            "dri": 95,
            "def": 67,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 28500
    },
    {
        "id": "icon_lampard",
        "name": "Lampard",
        "fullName": "Frank Lampard",
        "rating": 90,
        "cardType": "icon",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 80,
            "sho": 75,
            "pas": 91,
            "dri": 95,
            "def": 71,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 25000
    },
    {
        "id": "icon_rivaldo",
        "name": "Rivaldo",
        "fullName": "Rivaldo Vítor Borba Ferreira",
        "rating": 92,
        "cardType": "icon",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 99,
            "sho": 80,
            "pas": 85,
            "dri": 95,
            "def": 43,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_figo",
        "name": "Figo",
        "fullName": "Luís Filipe Madeira Caeiro Figo",
        "rating": 92,
        "cardType": "icon",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 95,
            "sho": 86,
            "pas": 86,
            "dri": 96,
            "def": 49,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_best",
        "name": "Best",
        "fullName": "George Best",
        "rating": 93,
        "cardType": "icon",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 98,
            "sho": 81,
            "pas": 84,
            "dri": 96,
            "def": 44,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 35500
    },
    {
        "id": "icon_garrincha",
        "name": "Garrincha",
        "fullName": "Manuel Francisco dos Santos",
        "rating": 94,
        "cardType": "icon",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 99,
            "sho": 85,
            "pas": 81,
            "dri": 98,
            "def": 41,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 39000
    },
    {
        "id": "icon_jairzinho",
        "name": "Jairzinho",
        "fullName": "Jair Ventura Filho",
        "rating": 92,
        "cardType": "icon",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 95,
            "sho": 86,
            "pas": 79,
            "dri": 94,
            "def": 41,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 32000
    },
    {
        "id": "icon_ribery",
        "name": "Ribery",
        "fullName": "Franck Ribéry",
        "rating": 90,
        "cardType": "icon",
        "pos": "EI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 96,
            "sho": 85,
            "pas": 79,
            "dri": 95,
            "def": 41,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 25000
    },
    {
        "id": "icon_robben",
        "name": "Robben",
        "fullName": "Arjen Robben",
        "rating": 90,
        "cardType": "icon",
        "pos": "ED",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FUT Icons",
            "badge": "icon"
        },
        "stats": {
            "pac": 92,
            "sho": 81,
            "pas": 84,
            "dri": 90,
            "def": 38,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 25000
    },
    {
        "id": "hero_yaya_toure",
        "name": "Yaya Toure",
        "fullName": "Gnégnéri Yaya Touré",
        "rating": 88,
        "cardType": "hero",
        "pos": "MC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 75,
            "sho": 74,
            "pas": 89,
            "dri": 92,
            "def": 67,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_di_natale",
        "name": "Di Natale",
        "fullName": "Antonio Di Natale",
        "rating": 88,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 83,
            "sho": 94,
            "pas": 73,
            "dri": 85,
            "def": 33,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_morientes",
        "name": "Morientes",
        "fullName": "Fernando Morientes",
        "rating": 89,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "LaLiga",
            "badge": "hero"
        },
        "stats": {
            "pac": 84,
            "sho": 92,
            "pas": 77,
            "dri": 87,
            "def": 44,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 18000
    },
    {
        "id": "hero_cordoba",
        "name": "Cordoba",
        "fullName": "Iván Ramiro Córdoba",
        "rating": 87,
        "cardType": "hero",
        "pos": "DFC",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 77,
            "sho": 35,
            "pas": 69,
            "dri": 60,
            "def": 90,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 15000
    },
    {
        "id": "hero_kompany",
        "name": "Kompany",
        "fullName": "Vincent Kompany",
        "rating": 89,
        "cardType": "hero",
        "pos": "DFC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 75,
            "sho": 43,
            "pas": 67,
            "dri": 61,
            "def": 91,
            "phy": 95
        },
        "faceUrl": "",
        "quickSell": 18000
    },
    {
        "id": "hero_carvalho",
        "name": "Carvalho",
        "fullName": "Ricardo Carvalho",
        "rating": 88,
        "cardType": "hero",
        "pos": "DFC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 78,
            "sho": 36,
            "pas": 66,
            "dri": 68,
            "def": 88,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_capdevila",
        "name": "Capdevila",
        "fullName": "Joan Capdevila",
        "rating": 88,
        "cardType": "hero",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "LaLiga",
            "badge": "hero"
        },
        "stats": {
            "pac": 90,
            "sho": 62,
            "pas": 78,
            "dri": 74,
            "def": 79,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_marchisio",
        "name": "Marchisio",
        "fullName": "Claudio Marchisio",
        "rating": 88,
        "cardType": "hero",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 79,
            "sho": 79,
            "pas": 94,
            "dri": 88,
            "def": 67,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_milito",
        "name": "Milito",
        "fullName": "Diego Milito",
        "rating": 88,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 83,
            "sho": 91,
            "pas": 79,
            "dri": 87,
            "def": 33,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_kewell",
        "name": "Kewell",
        "fullName": "Harry Kewell",
        "rating": 87,
        "cardType": "hero",
        "pos": "EI",
        "nation": {
            "name": "Australia",
            "code": "au"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 92,
            "sho": 74,
            "pas": 76,
            "dri": 89,
            "def": 46,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 15000
    },
    {
        "id": "hero_govou",
        "name": "Govou",
        "fullName": "Sidney Govou",
        "rating": 86,
        "cardType": "hero",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Ligue 1",
            "badge": "hero"
        },
        "stats": {
            "pac": 95,
            "sho": 79,
            "pas": 76,
            "dri": 87,
            "def": 46,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 13500
    },
    {
        "id": "hero_park_ji_sung",
        "name": "Park Ji Sung",
        "fullName": "Park Ji-sung",
        "rating": 87,
        "cardType": "hero",
        "pos": "MI",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 96,
            "sho": 82,
            "pas": 76,
            "dri": 88,
            "def": 40,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 15000
    },
    {
        "id": "hero_smolarek",
        "name": "Smolarek",
        "fullName": "Włodzimierz Smolarek",
        "rating": 86,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Bundesliga",
            "badge": "hero"
        },
        "stats": {
            "pac": 81,
            "sho": 91,
            "pas": 78,
            "dri": 82,
            "def": 30,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 13500
    },
    {
        "id": "hero_kohler",
        "name": "Kohler",
        "fullName": "Jürgen Kohler",
        "rating": 89,
        "cardType": "hero",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bundesliga",
            "badge": "hero"
        },
        "stats": {
            "pac": 78,
            "sho": 47,
            "pas": 64,
            "dri": 62,
            "def": 93,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 18000
    },
    {
        "id": "hero_tevez",
        "name": "Tevez",
        "fullName": "Carlos Tévez",
        "rating": 88,
        "cardType": "hero",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 83,
            "sho": 87,
            "pas": 78,
            "dri": 84,
            "def": 42,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_ramires",
        "name": "Ramires",
        "fullName": "Ramires Santos do Nascimento",
        "rating": 87,
        "cardType": "hero",
        "pos": "MCD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 68,
            "sho": 65,
            "pas": 83,
            "dri": 74,
            "def": 89,
            "phy": 93
        },
        "faceUrl": "",
        "quickSell": 15000
    },
    {
        "id": "hero_futre",
        "name": "Futre",
        "fullName": "Paulo Futre",
        "rating": 89,
        "cardType": "hero",
        "pos": "EI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Liga Portugal",
            "id": 86
        },
        "stats": {
            "pac": 91,
            "sho": 82,
            "pas": 84,
            "dri": 94,
            "def": 47,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 18000
    },
    {
        "id": "hero_sneijder",
        "name": "Sneijder",
        "fullName": "Wesley Sneijder",
        "rating": 88,
        "cardType": "hero",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 75,
            "sho": 78,
            "pas": 92,
            "dri": 91,
            "def": 64,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "hero_hazard",
        "name": "Hazard",
        "fullName": "Eden Hazard",
        "rating": 89,
        "cardType": "hero",
        "pos": "EI",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Premier League",
            "badge": "hero"
        },
        "stats": {
            "pac": 98,
            "sho": 76,
            "pas": 80,
            "dri": 90,
            "def": 36,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 18000
    },
    {
        "id": "hero_maicon",
        "name": "Maicon",
        "fullName": "Maicon Douglas Sisenando",
        "rating": 88,
        "cardType": "hero",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Serie A",
            "badge": "hero"
        },
        "stats": {
            "pac": 92,
            "sho": 63,
            "pas": 76,
            "dri": 74,
            "def": 86,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 16500
    },
    {
        "id": "gold_rare_mbappe",
        "name": "Mbappe",
        "fullName": "Kylian Mbappé",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 90,
            "sho": 97,
            "pas": 78,
            "dri": 90,
            "def": 36,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 10000
    },
    {
        "id": "gold_rare_vinicius_jr",
        "name": "Vinicius Jr",
        "fullName": "Vinícius José Paixão de Oliveira Júnior",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 95,
            "sho": 77,
            "pas": 80,
            "dri": 92,
            "def": 46,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 8000
    },
    {
        "id": "gold_rare_bellingham",
        "name": "Bellingham",
        "fullName": "Jude Bellingham",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 77,
            "sho": 75,
            "pas": 95,
            "dri": 89,
            "def": 68,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 8000
    },
    {
        "id": "gold_rare_valverde",
        "name": "Valverde",
        "fullName": "Federico Valverde",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 72,
            "sho": 75,
            "pas": 93,
            "dri": 93,
            "def": 63,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_courtois",
        "name": "Courtois",
        "fullName": "Thibaut Courtois",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 91,
            "sho": 89,
            "pas": 86,
            "dri": 88,
            "def": 82,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_rudiger",
        "name": "Rudiger",
        "fullName": "Antonio Rüdiger",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 76,
            "sho": 43,
            "pas": 64,
            "dri": 66,
            "def": 89,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_rodrygo",
        "name": "Rodrygo",
        "fullName": "Rodrygo Silva de Goes",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 94,
            "sho": 76,
            "pas": 78,
            "dri": 91,
            "def": 38,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_camavinga",
        "name": "Camavinga",
        "fullName": "Eduardo Camavinga",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 78,
            "sho": 73,
            "pas": 89,
            "dri": 85,
            "def": 64,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_tchouameni",
        "name": "Tchouameni",
        "fullName": "Aurélien Tchouaméni",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 69,
            "sho": 58,
            "pas": 81,
            "dri": 69,
            "def": 88,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_modric",
        "name": "Modric",
        "fullName": "Luka Modrić",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 92,
            "dri": 87,
            "def": 70,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_carvajal",
        "name": "Carvajal",
        "fullName": "Daniel Carvajal Ramos",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 91,
            "sho": 60,
            "pas": 74,
            "dri": 79,
            "def": 81,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_alaba",
        "name": "Alaba",
        "fullName": "David Olatukunbo Alaba",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 77,
            "sho": 36,
            "pas": 68,
            "dri": 63,
            "def": 90,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_militao",
        "name": "Militao",
        "fullName": "Éder Gabriel Militão",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 78,
            "sho": 38,
            "pas": 70,
            "dri": 63,
            "def": 89,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_brahim_diaz",
        "name": "Brahim Diaz",
        "fullName": "Brahim Abdelkader Díaz",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 67,
            "sho": 73,
            "pas": 87,
            "dri": 84,
            "def": 71,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_mendy",
        "name": "Mendy",
        "fullName": "Ferland Mendy",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 84,
            "sho": 57,
            "pas": 74,
            "dri": 72,
            "def": 77,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_arda_guler",
        "name": "Arda Guler",
        "fullName": "Arda Güler",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 68,
            "sho": 66,
            "pas": 82,
            "dri": 79,
            "def": 66,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_endrick",
        "name": "Endrick",
        "fullName": "Endrick Felipe Moreira de Sousa",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 71,
            "sho": 81,
            "pas": 66,
            "dri": 77,
            "def": 38,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_ceballos",
        "name": "Ceballos",
        "fullName": "Daniel Ceballos Fernández",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 67,
            "sho": 74,
            "pas": 85,
            "dri": 82,
            "def": 60,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_lucas_vazquez",
        "name": "Lucas Vazquez",
        "fullName": "Lucas Vázquez Iglesias",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 83,
            "sho": 56,
            "pas": 75,
            "dri": 69,
            "def": 77,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_fran_garcia",
        "name": "Fran Garcia",
        "fullName": "Francisco José García Torres",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 81,
            "sho": 49,
            "pas": 71,
            "dri": 68,
            "def": 70,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_lunin",
        "name": "Lunin",
        "fullName": "Andriy Lunin",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 80,
            "sho": 83,
            "pas": 79,
            "dri": 80,
            "def": 75,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "silver_vallejo",
        "name": "Vallejo",
        "fullName": "Jesús Vallejo",
        "rating": 73,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 60,
            "sho": 36,
            "pas": 55,
            "dri": 58,
            "def": 75,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_nico_paz",
        "name": "Nico Paz",
        "fullName": "Nicolás Paz Martínez",
        "rating": 70,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 64,
            "sho": 62,
            "pas": 71,
            "dri": 74,
            "def": 56,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 375
    },
    {
        "id": "gold_rare_lewandowski",
        "name": "Lewandowski",
        "fullName": "Robert Lewandowski",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 84,
            "sho": 91,
            "pas": 70,
            "dri": 83,
            "def": 31,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_lamine_yamal",
        "name": "Lamine Yamal",
        "fullName": "Lamine Yamal Nasraoui Ebana",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 92,
            "sho": 78,
            "pas": 80,
            "dri": 85,
            "def": 39,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_raphinha",
        "name": "Raphinha",
        "fullName": "Raphael Dias Belloli",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 92,
            "sho": 78,
            "pas": 78,
            "dri": 91,
            "def": 40,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_pedri",
        "name": "Pedri",
        "fullName": "Pedro González López",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 70,
            "sho": 73,
            "pas": 92,
            "dri": 88,
            "def": 62,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_gavi",
        "name": "Gavi",
        "fullName": "Pablo Martín Páez Gavira",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 68,
            "sho": 76,
            "pas": 87,
            "dri": 82,
            "def": 69,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_de_jong",
        "name": "De Jong",
        "fullName": "Frenkie de Jong",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 74,
            "sho": 75,
            "pas": 93,
            "dri": 91,
            "def": 65,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_kounde",
        "name": "Kounde",
        "fullName": "Jules Koundé",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 86,
            "sho": 57,
            "pas": 73,
            "dri": 71,
            "def": 76,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_araujo",
        "name": "Araujo",
        "fullName": "Ronald Federico Araújo da Silva",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 73,
            "sho": 46,
            "pas": 69,
            "dri": 65,
            "def": 91,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_cubarsi",
        "name": "Cubarsi",
        "fullName": "Pau Cubarsí Paredes",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 64,
            "sho": 38,
            "pas": 57,
            "dri": 55,
            "def": 76,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_balde",
        "name": "Balde",
        "fullName": "Alejandro Balde Martínez",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 89,
            "sho": 58,
            "pas": 75,
            "dri": 75,
            "def": 75,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ter_stegen",
        "name": "Ter Stegen",
        "fullName": "Marc-André ter Stegen",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 87,
            "sho": 88,
            "pas": 84,
            "dri": 86,
            "def": 82,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_dani_olmo",
        "name": "Dani Olmo",
        "fullName": "Daniel Olmo Carvajal",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 76,
            "sho": 75,
            "pas": 86,
            "dri": 83,
            "def": 60,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_ferran_torres",
        "name": "Ferran Torres",
        "fullName": "Ferran Torres García",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 74,
            "sho": 84,
            "pas": 72,
            "dri": 78,
            "def": 31,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_fermin",
        "name": "Fermin",
        "fullName": "Fermín López Marín",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 65,
            "sho": 68,
            "pas": 80,
            "dri": 78,
            "def": 63,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_casado",
        "name": "Casado",
        "fullName": "Marc Casadó Torras",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 64,
            "sho": 53,
            "pas": 71,
            "dri": 65,
            "def": 74,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_hector_fort",
        "name": "Hector Fort",
        "fullName": "Héctor Fort Carvillano",
        "rating": 68,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 75,
            "sho": 49,
            "pas": 65,
            "dri": 65,
            "def": 68,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 325
    },
    {
        "id": "gold_rare_christensen",
        "name": "Christensen",
        "fullName": "Andreas Christensen",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 71,
            "sho": 46,
            "pas": 60,
            "dri": 56,
            "def": 84,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_inigo_martinez",
        "name": "Inigo Martinez",
        "fullName": "Íñigo Martínez Berridi",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 68,
            "sho": 42,
            "pas": 66,
            "dri": 57,
            "def": 82,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ansu_fati",
        "name": "Ansu Fati",
        "fullName": "Anssumane Fati Vieira",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 84,
            "sho": 72,
            "pas": 70,
            "dri": 78,
            "def": 37,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_pau_victor",
        "name": "Pau Victor",
        "fullName": "Pau Víctor Delgado",
        "rating": 72,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 65,
            "sho": 77,
            "pas": 66,
            "dri": 66,
            "def": 32,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_inaki_pena",
        "name": "Inaki Pena",
        "fullName": "Ignacio Peña Sotorres",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 75,
            "sho": 72,
            "pas": 72,
            "dri": 77,
            "def": 65,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_pablo_torre",
        "name": "Pablo Torre",
        "fullName": "Pablo Torre Carral",
        "rating": 73,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 68,
            "sho": 61,
            "pas": 78,
            "dri": 73,
            "def": 58,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_haaland",
        "name": "Haaland",
        "fullName": "Erling Braut Haaland",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 83,
            "sho": 94,
            "pas": 82,
            "dri": 86,
            "def": 33,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 10000
    },
    {
        "id": "gold_rare_rodri",
        "name": "Rodri",
        "fullName": "Rodrigo Hernández Cascante",
        "rating": 91,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 70,
            "sho": 72,
            "pas": 85,
            "dri": 78,
            "def": 91,
            "phy": 93
        },
        "faceUrl": "",
        "quickSell": 10000
    },
    {
        "id": "gold_rare_de_bruyne",
        "name": "De Bruyne",
        "fullName": "Kevin De Bruyne",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 77,
            "sho": 76,
            "pas": 92,
            "dri": 90,
            "def": 74,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 8000
    },
    {
        "id": "gold_rare_foden",
        "name": "Foden",
        "fullName": "Phil Foden",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 92,
            "sho": 75,
            "pas": 84,
            "dri": 88,
            "def": 37,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_bernardo_silva",
        "name": "Bernardo Silva",
        "fullName": "Bernardo Mota Veiga de Carvalho e Silva",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 80,
            "sho": 78,
            "pas": 89,
            "dri": 87,
            "def": 71,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_ruben_dias",
        "name": "Ruben Dias",
        "fullName": "Rúben dos Santos Gato Alves Dias",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 74,
            "sho": 38,
            "pas": 69,
            "dri": 63,
            "def": 91,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_ederson",
        "name": "Ederson",
        "fullName": "Ederson Santana de Moraes",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 84,
            "sho": 84,
            "pas": 83,
            "dri": 88,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_gvardiol",
        "name": "Gvardiol",
        "fullName": "Joško Gvardiol",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 88,
            "sho": 57,
            "pas": 75,
            "dri": 74,
            "def": 80,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_akanji",
        "name": "Akanji",
        "fullName": "Manuel Obafemi Akanji",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 72,
            "sho": 47,
            "pas": 64,
            "dri": 58,
            "def": 89,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_ake",
        "name": "Ake",
        "fullName": "Nathan Benjamin Aké",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 71,
            "sho": 40,
            "pas": 62,
            "dri": 59,
            "def": 89,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_stones",
        "name": "Stones",
        "fullName": "John Stones",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 69,
            "sho": 36,
            "pas": 63,
            "dri": 67,
            "def": 88,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_walker",
        "name": "Walker",
        "fullName": "Kyle Andrew Walker",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 90,
            "sho": 60,
            "pas": 70,
            "dri": 73,
            "def": 76,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_gundogan",
        "name": "Gundogan",
        "fullName": "İlkay Gündoğan",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 80,
            "sho": 76,
            "pas": 91,
            "dri": 85,
            "def": 67,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_kovacic",
        "name": "Kovacic",
        "fullName": "Mateo Kovačić",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 69,
            "sho": 76,
            "pas": 84,
            "dri": 82,
            "def": 59,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_grealish",
        "name": "Grealish",
        "fullName": "Jack Peter Grealish",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 87,
            "sho": 78,
            "pas": 73,
            "dri": 87,
            "def": 39,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_doku",
        "name": "Doku",
        "fullName": "Jérémy Bafour Doku",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 89,
            "sho": 72,
            "pas": 71,
            "dri": 81,
            "def": 32,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_savinho",
        "name": "Savinho",
        "fullName": "Sávio Moreira de Oliveira",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 91,
            "sho": 72,
            "pas": 70,
            "dri": 85,
            "def": 42,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_matheus_nunes",
        "name": "Matheus Nunes",
        "fullName": "Matheus Luiz Nunes",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 65,
            "sho": 65,
            "pas": 85,
            "dri": 81,
            "def": 58,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_rico_lewis",
        "name": "Rico Lewis",
        "fullName": "Rico Mark Lewis",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 82,
            "sho": 51,
            "pas": 70,
            "dri": 65,
            "def": 69,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_ortega",
        "name": "Ortega",
        "fullName": "Stefan Ortega Moreno",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 81,
            "sho": 76,
            "pas": 76,
            "dri": 80,
            "def": 69,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "silver_bobb",
        "name": "Bobb",
        "fullName": "Oscar Bobb",
        "rating": 74,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 78,
            "sho": 68,
            "pas": 64,
            "dri": 74,
            "def": 37,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_salah",
        "name": "Salah",
        "fullName": "Mohamed Salah Hamed Mahrous Ghaly",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Egipto",
            "code": "eg"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 95,
            "sho": 76,
            "pas": 85,
            "dri": 89,
            "def": 38,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_van_dijk",
        "name": "Van Dijk",
        "fullName": "Virgil van Dijk",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 72,
            "sho": 40,
            "pas": 68,
            "dri": 66,
            "def": 94,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_alisson",
        "name": "Alisson",
        "fullName": "Alisson Ramses Becker",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 90,
            "sho": 89,
            "pas": 90,
            "dri": 88,
            "def": 87,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_alexander_arnold",
        "name": "Alexander-Arnold",
        "fullName": "Trent John Alexander-Arnold",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 89,
            "sho": 64,
            "pas": 75,
            "dri": 78,
            "def": 78,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_mac_allister",
        "name": "Mac Allister",
        "fullName": "Alexis Mac Allister",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 70,
            "sho": 71,
            "pas": 92,
            "dri": 91,
            "def": 69,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_szoboszlai",
        "name": "Szoboszlai",
        "fullName": "Dominik Szoboszlai",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Hungría",
            "code": "hu"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 68,
            "sho": 77,
            "pas": 89,
            "dri": 86,
            "def": 64,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_luis_diaz",
        "name": "Luis Diaz",
        "fullName": "Luis Fernando Díaz Marulanda",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 91,
            "sho": 71,
            "pas": 78,
            "dri": 87,
            "def": 44,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_darwin_nunez",
        "name": "Darwin Nunez",
        "fullName": "Darwin Gabriel Núñez Ribeiro",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 80,
            "sho": 85,
            "pas": 64,
            "dri": 75,
            "def": 32,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_gakpo",
        "name": "Gakpo",
        "fullName": "Cody Mathès Gakpo",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 88,
            "sho": 74,
            "pas": 76,
            "dri": 86,
            "def": 44,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_diogo_jota",
        "name": "Diogo Jota",
        "fullName": "Diogo José Teixeira da Silva",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 79,
            "sho": 85,
            "pas": 73,
            "dri": 82,
            "def": 35,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_robertson",
        "name": "Robertson",
        "fullName": "Andrew Robertson",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 92,
            "sho": 61,
            "pas": 72,
            "dri": 72,
            "def": 79,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_konate",
        "name": "Konate",
        "fullName": "Ibrahima Konaté",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 65,
            "sho": 45,
            "pas": 61,
            "dri": 61,
            "def": 88,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_gravenberch",
        "name": "Gravenberch",
        "fullName": "Ryan Jiro Gravenberch",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 77,
            "sho": 72,
            "pas": 83,
            "dri": 82,
            "def": 66,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_curtis_jones",
        "name": "Curtis Jones",
        "fullName": "Curtis Julian Jones",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 63,
            "sho": 69,
            "pas": 85,
            "dri": 80,
            "def": 63,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_elliott",
        "name": "Elliott",
        "fullName": "Harvey Daniel James Elliott",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 65,
            "sho": 69,
            "pas": 79,
            "dri": 77,
            "def": 56,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_endo",
        "name": "Endo",
        "fullName": "Wataru Endo",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 66,
            "sho": 63,
            "pas": 71,
            "dri": 66,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_chiesa",
        "name": "Chiesa",
        "fullName": "Federico Chiesa",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 88,
            "sho": 74,
            "pas": 79,
            "dri": 88,
            "def": 37,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_quansah",
        "name": "Quansah",
        "fullName": "Jarell Amorin Quansah",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 60,
            "sho": 36,
            "pas": 55,
            "dri": 59,
            "def": 77,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_bradley",
        "name": "Bradley",
        "fullName": "Conor Bradley",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 78,
            "sho": 54,
            "pas": 69,
            "dri": 67,
            "def": 73,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_kelleher",
        "name": "Kelleher",
        "fullName": "Caoimhín Odhrán Kelleher",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Irlanda",
            "code": "ie"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 74,
            "sho": 73,
            "pas": 72,
            "dri": 75,
            "def": 65,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_tsimikas",
        "name": "Tsimikas",
        "fullName": "Konstantinos Tsimikas",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Grecia",
            "code": "gr"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 80,
            "sho": 55,
            "pas": 68,
            "dri": 68,
            "def": 76,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_bajcetic",
        "name": "Bajcetic",
        "fullName": "Stefan Bajčetić",
        "rating": 72,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 61,
            "sho": 50,
            "pas": 65,
            "dri": 65,
            "def": 73,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_saka",
        "name": "Saka",
        "fullName": "Bukayo Ayoyinka Saka",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 95,
            "sho": 78,
            "pas": 79,
            "dri": 89,
            "def": 38,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_odegaard",
        "name": "Odegaard",
        "fullName": "Martin Ødegaard",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 74,
            "sho": 77,
            "pas": 95,
            "dri": 90,
            "def": 75,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_saliba",
        "name": "Saliba",
        "fullName": "William Alain André Gabriel Saliba",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 73,
            "sho": 47,
            "pas": 65,
            "dri": 69,
            "def": 90,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_gabriel_magalhaes",
        "name": "Gabriel Magalhaes",
        "fullName": "Gabriel dos Santos Magalhães",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 77,
            "sho": 38,
            "pas": 71,
            "dri": 61,
            "def": 89,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_rice",
        "name": "Rice",
        "fullName": "Declan Rice",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 66,
            "sho": 64,
            "pas": 81,
            "dri": 73,
            "def": 87,
            "phy": 92
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_havertz",
        "name": "Havertz",
        "fullName": "Kai Lukas Havertz",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 86,
            "sho": 85,
            "pas": 72,
            "dri": 80,
            "def": 36,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_martinelli",
        "name": "Martinelli",
        "fullName": "Gabriel Teodoro Martinelli Silva",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 91,
            "sho": 74,
            "pas": 79,
            "dri": 88,
            "def": 41,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_raya",
        "name": "Raya",
        "fullName": "David Raya Martín",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 81,
            "sho": 80,
            "pas": 85,
            "dri": 86,
            "def": 75,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_white",
        "name": "White",
        "fullName": "Benjamin William White",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 92,
            "sho": 63,
            "pas": 71,
            "dri": 73,
            "def": 79,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_timber",
        "name": "Timber",
        "fullName": "Jurriën David Norman Timber",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 63,
            "sho": 39,
            "pas": 67,
            "dri": 63,
            "def": 83,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_calafiori",
        "name": "Calafiori",
        "fullName": "Riccardo Calafiori",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 89,
            "sho": 51,
            "pas": 74,
            "dri": 68,
            "def": 78,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_merino",
        "name": "Merino",
        "fullName": "Mikel Merino Zazón",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 77,
            "sho": 74,
            "pas": 88,
            "dri": 87,
            "def": 65,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_partey",
        "name": "Partey",
        "fullName": "Thomas Teye Partey",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Ghana",
            "code": "gh"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 66,
            "sho": 58,
            "pas": 74,
            "dri": 69,
            "def": 83,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_trossard",
        "name": "Trossard",
        "fullName": "Leandro Trossard",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 88,
            "sho": 71,
            "pas": 75,
            "dri": 87,
            "def": 37,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_jesus",
        "name": "Jesus",
        "fullName": "Gabriel Fernando de Jesus",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 79,
            "sho": 84,
            "pas": 66,
            "dri": 78,
            "def": 37,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_sterling",
        "name": "Sterling",
        "fullName": "Raheem Shaquille Sterling",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 88,
            "sho": 74,
            "pas": 75,
            "dri": 86,
            "def": 33,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_tomiyasu",
        "name": "Tomiyasu",
        "fullName": "Takehiro Tomiyasu",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 62,
            "sho": 31,
            "pas": 64,
            "dri": 59,
            "def": 79,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_zinchenko",
        "name": "Zinchenko",
        "fullName": "Oleksandr Volodymyrovych Zinchenko",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 81,
            "sho": 51,
            "pas": 74,
            "dri": 71,
            "def": 77,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_jorginho",
        "name": "Jorginho",
        "fullName": "Jorge Luiz Frello Filho",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 74,
            "sho": 70,
            "pas": 88,
            "dri": 86,
            "def": 67,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_kiwior",
        "name": "Kiwior",
        "fullName": "Jakub Piotr Kiwior",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 71,
            "sho": 36,
            "pas": 65,
            "dri": 56,
            "def": 80,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_nwaneri",
        "name": "Nwaneri",
        "fullName": "Ethan Chidiebere Nwaneri",
        "rating": 68,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 64,
            "sho": 60,
            "pas": 71,
            "dri": 70,
            "def": 59,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 325
    },
    {
        "id": "silver_lewis_skelly",
        "name": "Lewis-Skelly",
        "fullName": "Myles Lewis-Skelly",
        "rating": 66,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 55,
            "sho": 53,
            "pas": 65,
            "dri": 65,
            "def": 70,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 275
    },
    {
        "id": "gold_rare_kane",
        "name": "Kane",
        "fullName": "Harry Edward Kane",
        "rating": 90,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 83,
            "sho": 95,
            "pas": 73,
            "dri": 89,
            "def": 39,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 8000
    },
    {
        "id": "gold_rare_musiala",
        "name": "Musiala",
        "fullName": "Jamal Musiala",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 70,
            "sho": 75,
            "pas": 93,
            "dri": 87,
            "def": 65,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_sane",
        "name": "Sane",
        "fullName": "Leroy Aziz Sané",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 91,
            "sho": 72,
            "pas": 76,
            "dri": 89,
            "def": 40,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_kimmich",
        "name": "Kimmich",
        "fullName": "Joshua Walter Kimmich",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 75,
            "sho": 74,
            "pas": 90,
            "dri": 86,
            "def": 65,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_neuer",
        "name": "Neuer",
        "fullName": "Manuel Peter Neuer",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 84,
            "sho": 85,
            "pas": 85,
            "dri": 89,
            "def": 81,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_upamecano",
        "name": "Upamecano",
        "fullName": "Dayotchanculle Oswald Upamecano",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 73,
            "sho": 45,
            "pas": 64,
            "dri": 62,
            "def": 88,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_min_jae_kim",
        "name": "Min Jae Kim",
        "fullName": "Kim Min-jae",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 72,
            "sho": 42,
            "pas": 70,
            "dri": 60,
            "def": 86,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_davies",
        "name": "Davies",
        "fullName": "Alphonso Boyle Davies",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Internacional",
            "code": "ca"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 86,
            "sho": 55,
            "pas": 71,
            "dri": 75,
            "def": 75,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_olise",
        "name": "Olise",
        "fullName": "Michael Akpovie Olise",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 85,
            "sho": 72,
            "pas": 76,
            "dri": 87,
            "def": 40,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_gnabry",
        "name": "Gnabry",
        "fullName": "Serge David Gnabry",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 88,
            "sho": 69,
            "pas": 78,
            "dri": 86,
            "def": 42,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_coman",
        "name": "Coman",
        "fullName": "Kingsley Junior Coman",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 88,
            "sho": 76,
            "pas": 75,
            "dri": 86,
            "def": 37,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_palhinha",
        "name": "Palhinha",
        "fullName": "João Pedro Gonçalves Neves Palhinha",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 73,
            "sho": 62,
            "pas": 77,
            "dri": 76,
            "def": 88,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_goretzka",
        "name": "Goretzka",
        "fullName": "Leon Christoph Goretzka",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 72,
            "sho": 78,
            "pas": 86,
            "dri": 87,
            "def": 65,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_pavlovic",
        "name": "Pavlovic",
        "fullName": "Aleksandar Pavlović",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 62,
            "sho": 64,
            "pas": 81,
            "dri": 77,
            "def": 56,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_laimer",
        "name": "Laimer",
        "fullName": "Konrad Laimer",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 68,
            "sho": 67,
            "pas": 83,
            "dri": 86,
            "def": 65,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_guerreiro",
        "name": "Guerreiro",
        "fullName": "Raphaël Adelino José Guerreiro",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 84,
            "sho": 61,
            "pas": 75,
            "dri": 73,
            "def": 76,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_boey",
        "name": "Boey",
        "fullName": "Sacha Gaston Boey",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 84,
            "sho": 55,
            "pas": 69,
            "dri": 70,
            "def": 75,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_dier",
        "name": "Dier",
        "fullName": "Eric Jeremy Edgar Dier",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 69,
            "sho": 43,
            "pas": 56,
            "dri": 61,
            "def": 78,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_ito",
        "name": "Ito",
        "fullName": "Hiroki Ito",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 69,
            "sho": 32,
            "pas": 60,
            "dri": 59,
            "def": 83,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_tel",
        "name": "Tel",
        "fullName": "Mathys Henri Tel",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 60,
            "dri": 72,
            "def": 31,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_ulreich",
        "name": "Ulreich",
        "fullName": "Sven Ulreich",
        "rating": 74,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 72,
            "sho": 74,
            "pas": 69,
            "dri": 75,
            "def": 72,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_dembele",
        "name": "Dembele",
        "fullName": "Masour Ousmane Dembélé",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 94,
            "sho": 78,
            "pas": 75,
            "dri": 91,
            "def": 41,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_donnarumma",
        "name": "Donnarumma",
        "fullName": "Gianluigi Donnarumma",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 90,
            "sho": 86,
            "pas": 82,
            "dri": 91,
            "def": 77,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_marquinhos",
        "name": "Marquinhos",
        "fullName": "Marcos Aoás Corrêa",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 72,
            "sho": 38,
            "pas": 64,
            "dri": 65,
            "def": 87,
            "phy": 91
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_hakimi",
        "name": "Hakimi",
        "fullName": "Achraf Hakimi Mouh",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 90,
            "sho": 55,
            "pas": 79,
            "dri": 77,
            "def": 82,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_barcola",
        "name": "Barcola",
        "fullName": "Bradley Barcola",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 89,
            "sho": 76,
            "pas": 72,
            "dri": 84,
            "def": 36,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_vitinha",
        "name": "Vitinha",
        "fullName": "Vítor Machado Ferreira",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 78,
            "sho": 73,
            "pas": 89,
            "dri": 85,
            "def": 68,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_zaire_emery",
        "name": "Zaire-Emery",
        "fullName": "Warren Zaïre-Emery",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 64,
            "sho": 72,
            "pas": 84,
            "dri": 79,
            "def": 64,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_joao_neves",
        "name": "Joao Neves",
        "fullName": "João Pedro Neves Filipe",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 74,
            "sho": 70,
            "pas": 83,
            "dri": 85,
            "def": 61,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_pacho",
        "name": "Pacho",
        "fullName": "William Joel Pacho Tenorio",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Ecuador",
            "code": "ec"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 63,
            "sho": 37,
            "pas": 57,
            "dri": 60,
            "def": 80,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_nuno_mendes",
        "name": "Nuno Mendes",
        "fullName": "Nuno Alexandre Tavares Mendes",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 84,
            "sho": 56,
            "pas": 71,
            "dri": 71,
            "def": 75,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_fabian_ruiz",
        "name": "Fabian Ruiz",
        "fullName": "Fabián Ruiz Peña",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 72,
            "sho": 75,
            "pas": 82,
            "dri": 86,
            "def": 60,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_asensio",
        "name": "Asensio",
        "fullName": "Marco Asensio Willemsen",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 89,
            "sho": 72,
            "pas": 72,
            "dri": 83,
            "def": 39,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_kang_in_lee",
        "name": "Kang-in Lee",
        "fullName": "Lee Kang-in",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 64,
            "sho": 66,
            "pas": 79,
            "dri": 82,
            "def": 58,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_kolo_muani",
        "name": "Kolo Muani",
        "fullName": "Randal Kolo Muani",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 78,
            "sho": 81,
            "pas": 66,
            "dri": 81,
            "def": 41,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_goncalo_ramos",
        "name": "Goncalo Ramos",
        "fullName": "Gonçalo Matias Ramos",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 79,
            "sho": 85,
            "pas": 66,
            "dri": 79,
            "def": 40,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_lucas_hernandez",
        "name": "Lucas Hernandez",
        "fullName": "Lucas François Bernard Hernández",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 72,
            "sho": 40,
            "pas": 59,
            "dri": 59,
            "def": 86,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_beraldo",
        "name": "Beraldo",
        "fullName": "Lucas Lopes Beraldo",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 61,
            "sho": 41,
            "pas": 59,
            "dri": 55,
            "def": 82,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_skriniar",
        "name": "Skriniar",
        "fullName": "Milan Škriniar",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Eslovaquia",
            "code": "sk"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 67,
            "sho": 42,
            "pas": 62,
            "dri": 59,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_safonov",
        "name": "Safonov",
        "fullName": "Matvey Safonov",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Rusia",
            "code": "ru"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 78,
            "sho": 74,
            "pas": 74,
            "dri": 78,
            "def": 76,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_mayulu",
        "name": "Mayulu",
        "fullName": "Senny Mayulu",
        "rating": 67,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Paris Saint-Germain",
            "id": 524
        },
        "stats": {
            "pac": 55,
            "sho": 60,
            "pas": 70,
            "dri": 70,
            "def": 50,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 300
    },
    {
        "id": "gold_rare_lautaro_martinez",
        "name": "Lautaro Martinez",
        "fullName": "Lautaro Javier Martínez",
        "rating": 89,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 84,
            "sho": 90,
            "pas": 73,
            "dri": 84,
            "def": 40,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 5900
    },
    {
        "id": "gold_rare_barella",
        "name": "Barella",
        "fullName": "Nicolò Barella",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 81,
            "sho": 78,
            "pas": 89,
            "dri": 86,
            "def": 70,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_bastoni",
        "name": "Bastoni",
        "fullName": "Alessandro Bastoni",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 74,
            "sho": 39,
            "pas": 68,
            "dri": 60,
            "def": 88,
            "phy": 93
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_calhanoglu",
        "name": "Calhanoglu",
        "fullName": "Hakan Çalhanoğlu",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 70,
            "sho": 73,
            "pas": 91,
            "dri": 85,
            "def": 67,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_dimarco",
        "name": "Dimarco",
        "fullName": "Federico Dimarco",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 87,
            "sho": 60,
            "pas": 72,
            "dri": 72,
            "def": 81,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_thuram",
        "name": "Thuram",
        "fullName": "Marcus Lilian Thuram-Ulien",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 81,
            "sho": 84,
            "pas": 67,
            "dri": 76,
            "def": 42,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_sommer",
        "name": "Sommer",
        "fullName": "Yann Sommer",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 86,
            "sho": 88,
            "pas": 86,
            "dri": 85,
            "def": 79,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_pavard",
        "name": "Pavard",
        "fullName": "Benjamin Jacques Marcel Pavard",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 74,
            "sho": 47,
            "pas": 69,
            "dri": 67,
            "def": 88,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_acerbi",
        "name": "Acerbi",
        "fullName": "Francesco Acerbi",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 76,
            "sho": 43,
            "pas": 62,
            "dri": 64,
            "def": 88,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_de_vrij",
        "name": "De Vrij",
        "fullName": "Stefan de Vrij",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 67,
            "sho": 40,
            "pas": 68,
            "dri": 61,
            "def": 84,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_mkhitaryan",
        "name": "Mkhitaryan",
        "fullName": "Henrikh Hamleti Mkhitaryan",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Armenia",
            "code": "am"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 67,
            "sho": 76,
            "pas": 87,
            "dri": 84,
            "def": 60,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_dumfries",
        "name": "Dumfries",
        "fullName": "Denzel Justus Morris Dumfries",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 85,
            "sho": 58,
            "pas": 77,
            "dri": 71,
            "def": 77,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_frattesi",
        "name": "Frattesi",
        "fullName": "Davide Frattesi",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 73,
            "sho": 76,
            "pas": 83,
            "dri": 81,
            "def": 65,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_zielinski",
        "name": "Zielinski",
        "fullName": "Piotr Sebastian Zieliński",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 72,
            "sho": 76,
            "pas": 82,
            "dri": 86,
            "def": 67,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_taremi",
        "name": "Taremi",
        "fullName": "Mehdi Taremi",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Irán",
            "code": "ir"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 75,
            "sho": 81,
            "pas": 65,
            "dri": 74,
            "def": 38,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_darmian",
        "name": "Darmian",
        "fullName": "Matteo Darmian",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 88,
            "sho": 54,
            "pas": 75,
            "dri": 72,
            "def": 73,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_carlos_augusto",
        "name": "Carlos Augusto",
        "fullName": "Carlos Augusto Zopolato Neves",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 81,
            "sho": 54,
            "pas": 67,
            "dri": 73,
            "def": 72,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_asllani",
        "name": "Asllani",
        "fullName": "Kristjan Asllani",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Albania",
            "code": "al"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 58,
            "sho": 56,
            "pas": 65,
            "dri": 65,
            "def": 74,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_bisseck",
        "name": "Bisseck",
        "fullName": "Yann Aurel Ludger Bisseck",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 70,
            "sho": 43,
            "pas": 55,
            "dri": 60,
            "def": 79,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_arnautovic",
        "name": "Arnautovic",
        "fullName": "Marko Arnautović",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 74,
            "sho": 81,
            "pas": 63,
            "dri": 77,
            "def": 27,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_josep_martinez",
        "name": "Josep Martinez",
        "fullName": "Josep Martínez Riera",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 72,
            "sho": 75,
            "pas": 71,
            "dri": 76,
            "def": 66,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_wirtz",
        "name": "Wirtz",
        "fullName": "Florian Richard Wirtz",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 82,
            "sho": 81,
            "pas": 93,
            "dri": 88,
            "def": 71,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_xhaka",
        "name": "Xhaka",
        "fullName": "Granit Xhaka",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 71,
            "sho": 59,
            "pas": 74,
            "dri": 69,
            "def": 91,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_grimaldo",
        "name": "Grimaldo",
        "fullName": "Alejandro Grimaldo García",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 89,
            "sho": 55,
            "pas": 79,
            "dri": 76,
            "def": 84,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_frimpong",
        "name": "Frimpong",
        "fullName": "Jeremie Agyekum Frimpong",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 93,
            "sho": 61,
            "pas": 78,
            "dri": 78,
            "def": 84,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_tah",
        "name": "Tah",
        "fullName": "Jonathan Glao Tah",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 72,
            "sho": 35,
            "pas": 66,
            "dri": 68,
            "def": 87,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_palacios",
        "name": "Palacios",
        "fullName": "Exequiel Alejandro Palacios",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 71,
            "sho": 74,
            "pas": 90,
            "dri": 89,
            "def": 64,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_boniface",
        "name": "Boniface",
        "fullName": "Victor Okoh Boniface",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 75,
            "sho": 81,
            "pas": 74,
            "dri": 76,
            "def": 39,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_schick",
        "name": "Schick",
        "fullName": "Patrik Schick",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 84,
            "sho": 82,
            "pas": 69,
            "dri": 75,
            "def": 30,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_tapsoba",
        "name": "Tapsoba",
        "fullName": "Edmond Fayçal Tapsoba",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Burkina Faso",
            "code": "bf"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 71,
            "sho": 37,
            "pas": 67,
            "dri": 62,
            "def": 82,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_hincapie",
        "name": "Hincapie",
        "fullName": "Piero Martín Hincapié Reyna",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Ecuador",
            "code": "ec"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 66,
            "sho": 41,
            "pas": 64,
            "dri": 56,
            "def": 87,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_hradecky",
        "name": "Hradecky",
        "fullName": "Lukáš Hrádecký",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Finlandia",
            "code": "fi"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 83,
            "sho": 80,
            "pas": 79,
            "dri": 86,
            "def": 79,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_andrich",
        "name": "Andrich",
        "fullName": "Robert Andrich",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 61,
            "sho": 62,
            "pas": 73,
            "dri": 73,
            "def": 82,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_hofmann",
        "name": "Hofmann",
        "fullName": "Jonas Hofmann",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 65,
            "sho": 70,
            "pas": 85,
            "dri": 85,
            "def": 60,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_adli",
        "name": "Adli",
        "fullName": "Amine Adli",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 87,
            "sho": 73,
            "pas": 67,
            "dri": 82,
            "def": 40,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_terrier",
        "name": "Terrier",
        "fullName": "Martin Albert Frédéric Terrier",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 78,
            "sho": 82,
            "pas": 70,
            "dri": 76,
            "def": 41,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_aleix_garcia",
        "name": "Aleix Garcia",
        "fullName": "Aleix García Serrano",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 76,
            "sho": 77,
            "pas": 83,
            "dri": 87,
            "def": 58,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_tella",
        "name": "Tella",
        "fullName": "Nathan Anthony Adewale Temitayo Tella",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 81,
            "sho": 73,
            "pas": 68,
            "dri": 82,
            "def": 43,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_mukiele",
        "name": "Mukiele",
        "fullName": "Nordi Mukiele Mulere",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 83,
            "sho": 52,
            "pas": 68,
            "dri": 71,
            "def": 73,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_belocian",
        "name": "Belocian",
        "fullName": "Jeanuël Belocian",
        "rating": 72,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 64,
            "sho": 39,
            "pas": 59,
            "dri": 55,
            "def": 75,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_kovar",
        "name": "Kovar",
        "fullName": "Matěj Kovář",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 76,
            "sho": 74,
            "pas": 74,
            "dri": 75,
            "def": 66,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_cole_palmer",
        "name": "Cole Palmer",
        "fullName": "Cole Jermaine Palmer",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 74,
            "sho": 70,
            "pas": 87,
            "dri": 85,
            "def": 70,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_caicedo",
        "name": "Caicedo",
        "fullName": "Moisés Isaac Caicedo Corozo",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Ecuador",
            "code": "ec"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 64,
            "sho": 59,
            "pas": 77,
            "dri": 69,
            "def": 84,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_enzo_fernandez",
        "name": "Enzo Fernandez",
        "fullName": "Enzo Jeremías Fernández",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 66,
            "sho": 73,
            "pas": 83,
            "dri": 85,
            "def": 60,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_nkunku",
        "name": "Nkunku",
        "fullName": "Christopher Alan Nkunku",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 78,
            "sho": 76,
            "pas": 88,
            "dri": 86,
            "def": 70,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_jackson",
        "name": "Jackson",
        "fullName": "Nicolas Jackson",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 77,
            "sho": 80,
            "pas": 70,
            "dri": 77,
            "def": 40,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_pedro_neto",
        "name": "Pedro Neto",
        "fullName": "Pedro Lomba Neto",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 88,
            "sho": 73,
            "pas": 71,
            "dri": 79,
            "def": 37,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_madueke",
        "name": "Madueke",
        "fullName": "Chukwunonso Tristan Madueke",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 87,
            "sho": 67,
            "pas": 68,
            "dri": 83,
            "def": 38,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_mudryk",
        "name": "Mudryk",
        "fullName": "Mykhailo Petrovych Mudryk",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 84,
            "sho": 71,
            "pas": 73,
            "dri": 79,
            "def": 37,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_sancho",
        "name": "Sancho",
        "fullName": "Jadon Malik Sancho",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 86,
            "sho": 75,
            "pas": 76,
            "dri": 86,
            "def": 36,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_felix",
        "name": "Felix",
        "fullName": "João Félix Sequeira",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 79,
            "sho": 80,
            "pas": 68,
            "dri": 76,
            "def": 33,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_colwill",
        "name": "Colwill",
        "fullName": "Levi Lemar Samuel Colwill",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 70,
            "sho": 33,
            "pas": 57,
            "dri": 55,
            "def": 84,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_fofana",
        "name": "Fofana",
        "fullName": "Wesley Tidjan Fofana",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 62,
            "sho": 33,
            "pas": 55,
            "dri": 56,
            "def": 82,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_james",
        "name": "James",
        "fullName": "Reece Lewis James",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 89,
            "sho": 55,
            "pas": 72,
            "dri": 74,
            "def": 75,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_gusto",
        "name": "Gusto",
        "fullName": "Malo Arthur Gusto",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 80,
            "sho": 54,
            "pas": 71,
            "dri": 68,
            "def": 77,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_cucurella",
        "name": "Cucurella",
        "fullName": "Marc Cucurella Saseta",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 89,
            "sho": 60,
            "pas": 72,
            "dri": 75,
            "def": 81,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_lavia",
        "name": "Lavia",
        "fullName": "Roméo Lavia",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 66,
            "sho": 58,
            "pas": 68,
            "dri": 65,
            "def": 77,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_sanchez",
        "name": "Sanchez",
        "fullName": "Robert Lynch Sánchez",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 74,
            "sho": 72,
            "pas": 76,
            "dri": 74,
            "def": 70,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_adarabioyo",
        "name": "Adarabioyo",
        "fullName": "Abdul-Nasir Oluwatosin Adarabioyo",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 64,
            "sho": 33,
            "pas": 63,
            "dri": 55,
            "def": 81,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_badiashile",
        "name": "Badiashile",
        "fullName": "Benoît Nambitingue Badiashile",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 70,
            "sho": 39,
            "pas": 58,
            "dri": 55,
            "def": 81,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_disasi",
        "name": "Disasi",
        "fullName": "Axel Wilson Arthur Disasi Mhakote",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 63,
            "sho": 43,
            "pas": 65,
            "dri": 55,
            "def": 82,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_guiu",
        "name": "Guiu",
        "fullName": "Marc Guiu Paz",
        "rating": 69,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 66,
            "sho": 69,
            "pas": 55,
            "dri": 66,
            "def": 35,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 350
    },
    {
        "id": "gold_rare_bruno_fernandes",
        "name": "Bruno Fernandes",
        "fullName": "Bruno Miguel Borges Fernandes",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 72,
            "sho": 74,
            "pas": 89,
            "dri": 89,
            "def": 64,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_rashford",
        "name": "Rashford",
        "fullName": "Marcus Rashford",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 83,
            "sho": 74,
            "pas": 76,
            "dri": 84,
            "def": 41,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_hojlund",
        "name": "Hojlund",
        "fullName": "Rasmus Winther Højlund",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 82,
            "sho": 82,
            "pas": 61,
            "dri": 75,
            "def": 31,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_zirkzee",
        "name": "Zirkzee",
        "fullName": "Joshua Orobosa Zirkzee",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 76,
            "sho": 79,
            "pas": 72,
            "dri": 77,
            "def": 30,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_garnacho",
        "name": "Garnacho",
        "fullName": "Alejandro Garnacho Ferreyra",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 88,
            "sho": 74,
            "pas": 69,
            "dri": 84,
            "def": 33,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_amad",
        "name": "Amad",
        "fullName": "Amad Diallo",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 82,
            "sho": 65,
            "pas": 69,
            "dri": 78,
            "def": 34,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_mainoo",
        "name": "Mainoo",
        "fullName": "Kobbie Boateng Mainoo",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 65,
            "sho": 65,
            "pas": 83,
            "dri": 82,
            "def": 64,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_ugarte",
        "name": "Ugarte",
        "fullName": "Manuel Ugarte Ribeiro",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 62,
            "sho": 62,
            "pas": 72,
            "dri": 67,
            "def": 83,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_casemiro",
        "name": "Casemiro",
        "fullName": "Carlos Henrique Casimiro",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 69,
            "sho": 67,
            "pas": 79,
            "dri": 67,
            "def": 88,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_eriksen",
        "name": "Eriksen",
        "fullName": "Christian Dannemann Eriksen",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 70,
            "sho": 67,
            "pas": 84,
            "dri": 80,
            "def": 60,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_lisandro_martinez",
        "name": "Lisandro Martinez",
        "fullName": "Lisandro Martínez",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 72,
            "sho": 39,
            "pas": 61,
            "dri": 62,
            "def": 88,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_de_ligt",
        "name": "De Ligt",
        "fullName": "Matthijs de Ligt",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 71,
            "sho": 36,
            "pas": 64,
            "dri": 59,
            "def": 86,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_maguire",
        "name": "Maguire",
        "fullName": "Jacob Harry Maguire",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 61,
            "sho": 33,
            "pas": 61,
            "dri": 63,
            "def": 83,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_yoro",
        "name": "Yoro",
        "fullName": "Leny Olivier Yoro",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 65,
            "sho": 34,
            "pas": 63,
            "dri": 55,
            "def": 78,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_dalot",
        "name": "Dalot",
        "fullName": "José Diogo Dalot Teixeira",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 90,
            "sho": 53,
            "pas": 70,
            "dri": 76,
            "def": 75,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_mazraoui",
        "name": "Mazraoui",
        "fullName": "Noussair Mazraoui",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 83,
            "sho": 56,
            "pas": 73,
            "dri": 74,
            "def": 76,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_shaw",
        "name": "Shaw",
        "fullName": "Luke Paul Hoare Shaw",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 89,
            "sho": 51,
            "pas": 71,
            "dri": 74,
            "def": 80,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_malacia",
        "name": "Malacia",
        "fullName": "Tyrell Johannes Chicco Malacia",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 84,
            "sho": 53,
            "pas": 67,
            "dri": 69,
            "def": 74,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_onana",
        "name": "Onana",
        "fullName": "André Onana Onana",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Camerún",
            "code": "cm"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 81,
            "sho": 82,
            "pas": 80,
            "dri": 81,
            "def": 75,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_mount",
        "name": "Mount",
        "fullName": "Mason Tony Mount",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 69,
            "sho": 69,
            "pas": 80,
            "dri": 80,
            "def": 66,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_antony",
        "name": "Antony",
        "fullName": "Antony Matheus dos Santos",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 86,
            "sho": 68,
            "pas": 68,
            "dri": 79,
            "def": 34,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_bayindir",
        "name": "Bayindir",
        "fullName": "Altay Bayındır",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 75,
            "sho": 76,
            "pas": 74,
            "dri": 80,
            "def": 71,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_griezmann",
        "name": "Griezmann",
        "fullName": "Antoine Griezmann",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 82,
            "sho": 92,
            "pas": 77,
            "dri": 85,
            "def": 32,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_julian_alvarez",
        "name": "Julian Alvarez",
        "fullName": "Julián Álvarez",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 86,
            "sho": 89,
            "pas": 69,
            "dri": 77,
            "def": 29,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_oblak",
        "name": "Oblak",
        "fullName": "Jan Oblak",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Eslovenia",
            "code": "si"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 87,
            "sho": 83,
            "pas": 83,
            "dri": 92,
            "def": 84,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_sorloth",
        "name": "Sorloth",
        "fullName": "Alexander Sørloth",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 74,
            "sho": 85,
            "pas": 66,
            "dri": 81,
            "def": 31,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_koke",
        "name": "Koke",
        "fullName": "Jorge Resurrección Merodio",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 70,
            "sho": 75,
            "pas": 86,
            "dri": 84,
            "def": 63,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_de_paul",
        "name": "De Paul",
        "fullName": "Rodrigo Javier De Paul",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 68,
            "sho": 69,
            "pas": 86,
            "dri": 88,
            "def": 68,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_gallagher",
        "name": "Gallagher",
        "fullName": "Conor John Gallagher",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 76,
            "sho": 68,
            "pas": 87,
            "dri": 80,
            "def": 58,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_llorente",
        "name": "Llorente",
        "fullName": "Marcos Llorente Moreno",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 84,
            "sho": 60,
            "pas": 75,
            "dri": 70,
            "def": 81,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_gimenez",
        "name": "Gimenez",
        "fullName": "José María Giménez de Vargas",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 74,
            "sho": 43,
            "pas": 68,
            "dri": 64,
            "def": 84,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_le_normand",
        "name": "Le Normand",
        "fullName": "Robin Aime Robert Le Normand",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 68,
            "sho": 38,
            "pas": 59,
            "dri": 64,
            "def": 84,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_witsel",
        "name": "Witsel",
        "fullName": "Axel Laurent Angel Lambert Witsel",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 67,
            "sho": 35,
            "pas": 68,
            "dri": 63,
            "def": 86,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_reinildo",
        "name": "Reinildo",
        "fullName": "Reinildo Isnard Mandava",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Mozambique",
            "code": "mz"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 82,
            "sho": 59,
            "pas": 67,
            "dri": 71,
            "def": 73,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_molina",
        "name": "Molina",
        "fullName": "Nahuel Molina Lucero",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 87,
            "sho": 57,
            "pas": 74,
            "dri": 72,
            "def": 79,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_lino",
        "name": "Lino",
        "fullName": "Samuel Dias Lino",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 85,
            "sho": 53,
            "pas": 74,
            "dri": 75,
            "def": 80,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_riquelme",
        "name": "Riquelme",
        "fullName": "Rodrigo Riquelme Reche",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 82,
            "sho": 67,
            "pas": 72,
            "dri": 81,
            "def": 41,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_correa",
        "name": "Correa",
        "fullName": "Ángel Martín Correa Martínez",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 74,
            "sho": 81,
            "pas": 67,
            "dri": 79,
            "def": 28,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_barrios",
        "name": "Barrios",
        "fullName": "Pablo Barrios Rivas",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 64,
            "sho": 68,
            "pas": 77,
            "dri": 82,
            "def": 64,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_musso",
        "name": "Musso",
        "fullName": "Juan Agustín Musso",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 78,
            "sho": 79,
            "pas": 79,
            "dri": 81,
            "def": 68,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_lenglet",
        "name": "Lenglet",
        "fullName": "Clément Nicolas Laurent Lenglet",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 59,
            "sho": 42,
            "pas": 61,
            "dri": 55,
            "def": 78,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_azpilicueta",
        "name": "Azpilicueta",
        "fullName": "César Azpilicueta Tanco",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 71,
            "sho": 36,
            "pas": 59,
            "dri": 63,
            "def": 80,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_vlahovic",
        "name": "Vlahovic",
        "fullName": "Dušan Vlahović",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 78,
            "sho": 90,
            "pas": 70,
            "dri": 81,
            "def": 42,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_koopmeiners",
        "name": "Koopmeiners",
        "fullName": "Teun Koopmeiners",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 67,
            "sho": 73,
            "pas": 85,
            "dri": 84,
            "def": 60,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_bremer",
        "name": "Bremer",
        "fullName": "Gleison Bremer Silva Nascimento",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 67,
            "sho": 43,
            "pas": 68,
            "dri": 66,
            "def": 86,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_di_gregorio",
        "name": "Di Gregorio",
        "fullName": "Michele Di Gregorio",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 84,
            "sho": 84,
            "pas": 80,
            "dri": 84,
            "def": 79,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_douglas_luiz",
        "name": "Douglas Luiz",
        "fullName": "Douglas Luiz Soares de Paulo",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 71,
            "sho": 72,
            "pas": 85,
            "dri": 85,
            "def": 62,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_thuram_jr",
        "name": "Thuram Jr",
        "fullName": "Khéphren Thuram-Ulien",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 72,
            "sho": 70,
            "pas": 82,
            "dri": 83,
            "def": 56,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_locatelli",
        "name": "Locatelli",
        "fullName": "Manuel Locatelli",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 61,
            "sho": 56,
            "pas": 69,
            "dri": 67,
            "def": 81,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_nico_gonzalez",
        "name": "Nico Gonzalez",
        "fullName": "Nicolás Iván González",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 87,
            "sho": 74,
            "pas": 69,
            "dri": 82,
            "def": 41,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_conceicao",
        "name": "Conceicao",
        "fullName": "Rodrigo Fernandes da Conceição",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 84,
            "sho": 69,
            "pas": 74,
            "dri": 78,
            "def": 39,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_yildiz",
        "name": "Yildiz",
        "fullName": "Kenan Yıldız",
        "rating": 74,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 76,
            "sho": 62,
            "pas": 70,
            "dri": 75,
            "def": 30,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_cambiaso",
        "name": "Cambiaso",
        "fullName": "Andrea Cambiaso",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 87,
            "sho": 51,
            "pas": 70,
            "dri": 66,
            "def": 74,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_gatti",
        "name": "Gatti",
        "fullName": "Federico Gatti",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 61,
            "sho": 41,
            "pas": 56,
            "dri": 62,
            "def": 81,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_kalulu",
        "name": "Kalulu",
        "fullName": "Pierre Kazeye Rommel Kalulu Kyatengwa",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 72,
            "sho": 42,
            "pas": 62,
            "dri": 60,
            "def": 83,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_danilo",
        "name": "Danilo",
        "fullName": "Danilo Luiz da Silva",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 62,
            "sho": 35,
            "pas": 65,
            "dri": 58,
            "def": 81,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_fagioli",
        "name": "Fagioli",
        "fullName": "Nicolò Fagioli",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 69,
            "sho": 67,
            "pas": 81,
            "dri": 77,
            "def": 56,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_milik",
        "name": "Milik",
        "fullName": "Arkadiusz Krystian Milik",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 63,
            "dri": 77,
            "def": 37,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_weah",
        "name": "Weah",
        "fullName": "Timothy Tarpeh Weah",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 80,
            "sho": 67,
            "pas": 66,
            "dri": 79,
            "def": 31,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_mckennie",
        "name": "McKennie",
        "fullName": "Weston James Earl McKennie",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 67,
            "sho": 71,
            "pas": 82,
            "dri": 77,
            "def": 66,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_perin",
        "name": "Perin",
        "fullName": "Mattia Perin",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 77,
            "sho": 75,
            "pas": 71,
            "dri": 80,
            "def": 70,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_cabal",
        "name": "Cabal",
        "fullName": "Juan David Cabal Murillo",
        "rating": 74,
        "cardType": "silver",
        "pos": "LI",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 80,
            "sho": 45,
            "pas": 65,
            "dri": 69,
            "def": 71,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_leao",
        "name": "Leao",
        "fullName": "Rafael Alexandre da Conceição Leão",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 90,
            "sho": 79,
            "pas": 78,
            "dri": 91,
            "def": 38,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_maignan",
        "name": "Maignan",
        "fullName": "Mike Peterson Maignan",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 89,
            "sho": 86,
            "pas": 80,
            "dri": 86,
            "def": 76,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_theo_hernandez",
        "name": "Theo Hernandez",
        "fullName": "Theo Bernard François Hernández",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 92,
            "sho": 56,
            "pas": 80,
            "dri": 80,
            "def": 79,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_pulisic",
        "name": "Pulisic",
        "fullName": "Christian Mate Pulisic",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 89,
            "sho": 74,
            "pas": 71,
            "dri": 88,
            "def": 34,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_morata",
        "name": "Morata",
        "fullName": "Álvaro Borja Morata Martín",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 81,
            "sho": 83,
            "pas": 66,
            "dri": 76,
            "def": 39,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_reijnders",
        "name": "Reijnders",
        "fullName": "Tijjani Martinus Jan Reijnders",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 73,
            "sho": 71,
            "pas": 82,
            "dri": 87,
            "def": 63,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_tomori",
        "name": "Tomori",
        "fullName": "Oluwafikayomi Oluwadamilola Tomori",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 68,
            "sho": 42,
            "pas": 63,
            "dri": 61,
            "def": 85,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_pavlovic_ac_milan",
        "name": "Pavlovic",
        "fullName": "Strahinja Pavlović",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 69,
            "sho": 38,
            "pas": 56,
            "dri": 55,
            "def": 84,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_fofana_ac_milan",
        "name": "Fofana",
        "fullName": "Youssouf Fofana",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 60,
            "sho": 64,
            "pas": 75,
            "dri": 72,
            "def": 80,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_loftus_cheek",
        "name": "Loftus-Cheek",
        "fullName": "Ruben Ira Loftus-Cheek",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 75,
            "sho": 69,
            "pas": 82,
            "dri": 84,
            "def": 62,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_chukwueze",
        "name": "Chukwueze",
        "fullName": "Samuel Chimerenka Chukwueze",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 81,
            "sho": 71,
            "pas": 68,
            "dri": 84,
            "def": 36,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_okafor",
        "name": "Okafor",
        "fullName": "Noah Arinzechukwu Okafor",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 65,
            "dri": 76,
            "def": 28,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_emerson_royal",
        "name": "Emerson Royal",
        "fullName": "Emerson Aparecido Leite de Souza Junior",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 86,
            "sho": 50,
            "pas": 73,
            "dri": 66,
            "def": 76,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_calabria",
        "name": "Calabria",
        "fullName": "Davide Calabria",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 81,
            "sho": 56,
            "pas": 75,
            "dri": 71,
            "def": 73,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_thiaw",
        "name": "Thiaw",
        "fullName": "Malick Laye Thiaw",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 63,
            "sho": 39,
            "pas": 64,
            "dri": 55,
            "def": 84,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_gabbia",
        "name": "Gabbia",
        "fullName": "Matteo Gabbia",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 66,
            "sho": 35,
            "pas": 59,
            "dri": 55,
            "def": 82,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_musah",
        "name": "Musah",
        "fullName": "Yunus Dimoara Musah",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 63,
            "sho": 62,
            "pas": 77,
            "dri": 78,
            "def": 62,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_abraham",
        "name": "Abraham",
        "fullName": "Tammy Bakumo-Abraham",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 73,
            "sho": 77,
            "pas": 67,
            "dri": 75,
            "def": 35,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_sportiello",
        "name": "Sportiello",
        "fullName": "Marco Sportiello",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 77,
            "sho": 77,
            "pas": 74,
            "dri": 76,
            "def": 67,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "bronze_camarda",
        "name": "Camarda",
        "fullName": "Francesco Camarda",
        "rating": 65,
        "cardType": "bronze",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 69,
            "sho": 66,
            "pas": 57,
            "dri": 65,
            "def": 25,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 200
    },
    {
        "id": "gold_rare_kobel",
        "name": "Kobel",
        "fullName": "Gregor Kobel",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 84,
            "sho": 83,
            "pas": 89,
            "dri": 89,
            "def": 84,
            "phy": 88
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_brandt",
        "name": "Brandt",
        "fullName": "Julian Brandt",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 72,
            "sho": 73,
            "pas": 85,
            "dri": 86,
            "def": 65,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_schlotterbeck",
        "name": "Schlotterbeck",
        "fullName": "Nico Schlotterbeck",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 73,
            "sho": 46,
            "pas": 65,
            "dri": 58,
            "def": 90,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_guirassy",
        "name": "Guirassy",
        "fullName": "Serhou Yadaly Guirassy",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Guinea",
            "code": "gn"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 75,
            "sho": 84,
            "pas": 73,
            "dri": 78,
            "def": 40,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_malen",
        "name": "Malen",
        "fullName": "Donyell Malen",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 89,
            "sho": 73,
            "pas": 76,
            "dri": 85,
            "def": 33,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_adeyemi",
        "name": "Adeyemi",
        "fullName": "Karim-David Adeyemi",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 83,
            "sho": 74,
            "pas": 76,
            "dri": 83,
            "def": 35,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_sabitzer",
        "name": "Sabitzer",
        "fullName": "Marcel Sabitzer",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 76,
            "sho": 72,
            "pas": 88,
            "dri": 86,
            "def": 66,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_can",
        "name": "Can",
        "fullName": "Emre Can",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 66,
            "sho": 57,
            "pas": 76,
            "dri": 71,
            "def": 86,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_gross",
        "name": "Gross",
        "fullName": "Pascal Groß",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 76,
            "sho": 67,
            "pas": 83,
            "dri": 81,
            "def": 61,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_gittens",
        "name": "Gittens",
        "fullName": "Jamie Jermaine Bynoe-Gittens",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 82,
            "sho": 70,
            "pas": 65,
            "dri": 76,
            "def": 39,
            "phy": 51
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_anton",
        "name": "Anton",
        "fullName": "Waldemar Anton",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 67,
            "sho": 35,
            "pas": 63,
            "dri": 61,
            "def": 83,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_sule",
        "name": "Sule",
        "fullName": "Niklas Süle",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 64,
            "sho": 42,
            "pas": 60,
            "dri": 60,
            "def": 83,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ryerson",
        "name": "Ryerson",
        "fullName": "Julian Ryerson",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 80,
            "sho": 53,
            "pas": 67,
            "dri": 69,
            "def": 76,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_bensebaini",
        "name": "Bensebaini",
        "fullName": "Ramy Bensebaini",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Argelia",
            "code": "dz"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 81,
            "sho": 50,
            "pas": 70,
            "dri": 67,
            "def": 77,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_couto",
        "name": "Couto",
        "fullName": "Yan Bueno Couto",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 85,
            "sho": 51,
            "pas": 67,
            "dri": 66,
            "def": 70,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_nmecha",
        "name": "Nmecha",
        "fullName": "Felix Kalu Nmecha",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 70,
            "sho": 68,
            "pas": 79,
            "dri": 76,
            "def": 62,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_beier",
        "name": "Beier",
        "fullName": "Maximilian Beier",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 73,
            "sho": 78,
            "pas": 61,
            "dri": 72,
            "def": 32,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_reyna",
        "name": "Reyna",
        "fullName": "Giovanni Alejandro Reyna",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 67,
            "sho": 71,
            "pas": 82,
            "dri": 77,
            "def": 63,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_meyer",
        "name": "Meyer",
        "fullName": "Alexander Meyer-Schade",
        "rating": 74,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 75,
            "sho": 69,
            "pas": 70,
            "dri": 74,
            "def": 66,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_duranville",
        "name": "Duranville",
        "fullName": "Julien Duranville",
        "rating": 68,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Borussia Dortmund",
            "id": 4
        },
        "stats": {
            "pac": 77,
            "sho": 62,
            "pas": 66,
            "dri": 70,
            "def": 30,
            "phy": 50
        },
        "faceUrl": "",
        "quickSell": 325
    },
    {
        "id": "gold_rare_son",
        "name": "Son",
        "fullName": "Son Heung-min",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 93,
            "sho": 74,
            "pas": 82,
            "dri": 88,
            "def": 47,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_romero",
        "name": "Romero",
        "fullName": "Cristian Gabriel Romero",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 66,
            "sho": 37,
            "pas": 68,
            "dri": 67,
            "def": 88,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_van_de_ven",
        "name": "Van de Ven",
        "fullName": "Micky van de Ven",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 67,
            "sho": 43,
            "pas": 62,
            "dri": 64,
            "def": 84,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_vicario",
        "name": "Vicario",
        "fullName": "Guglielmo Vicario",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 87,
            "sho": 80,
            "pas": 84,
            "dri": 84,
            "def": 81,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_maddison",
        "name": "Maddison",
        "fullName": "James Daniel Maddison",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 68,
            "sho": 74,
            "pas": 88,
            "dri": 84,
            "def": 70,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_kulusevski",
        "name": "Kulusevski",
        "fullName": "Dejan Kulusevski",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 86,
            "sho": 77,
            "pas": 78,
            "dri": 82,
            "def": 44,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_solanke",
        "name": "Solanke",
        "fullName": "Dominic Ayodele Solanke-Mitchell",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 75,
            "sho": 83,
            "pas": 72,
            "dri": 76,
            "def": 32,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_porro",
        "name": "Porro",
        "fullName": "Pedro Antonio Porro Sauceda",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 87,
            "sho": 63,
            "pas": 73,
            "dri": 70,
            "def": 78,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_udogie",
        "name": "Udogie",
        "fullName": "Iyenoma Destiny Udogie",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 90,
            "sho": 60,
            "pas": 76,
            "dri": 71,
            "def": 80,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_sarr",
        "name": "Sarr",
        "fullName": "Pape Matar Sarr",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 65,
            "sho": 73,
            "pas": 79,
            "dri": 80,
            "def": 59,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_bissouma",
        "name": "Bissouma",
        "fullName": "Yves Bissouma",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Malí",
            "code": "ml"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 69,
            "sho": 61,
            "pas": 74,
            "dri": 65,
            "def": 83,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_bentancur",
        "name": "Bentancur",
        "fullName": "Rodrigo Bentancur Colmán",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 75,
            "sho": 73,
            "pas": 85,
            "dri": 85,
            "def": 62,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_richarlison",
        "name": "Richarlison",
        "fullName": "Richarlison de Andrade",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 74,
            "sho": 85,
            "pas": 71,
            "dri": 74,
            "def": 32,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_johnson",
        "name": "Johnson",
        "fullName": "Brennan Price Johnson",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Gales",
            "code": "gb-wls"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 81,
            "sho": 69,
            "pas": 69,
            "dri": 82,
            "def": 37,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_odobert",
        "name": "Odobert",
        "fullName": "Wilson Odobert",
        "rating": 74,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 82,
            "sho": 62,
            "pas": 69,
            "dri": 79,
            "def": 30,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_dragusin",
        "name": "Dragusin",
        "fullName": "Radu Matei Drăgușin",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Rumania",
            "code": "ro"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 59,
            "sho": 43,
            "pas": 55,
            "dri": 59,
            "def": 76,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_bergvall",
        "name": "Bergvall",
        "fullName": "Lucas Erik Holger Bergvall",
        "rating": 71,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 67,
            "sho": 60,
            "pas": 76,
            "dri": 75,
            "def": 57,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 400
    },
    {
        "id": "silver_gray",
        "name": "Gray",
        "fullName": "Archie James Francis Gray",
        "rating": 73,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 56,
            "sho": 50,
            "pas": 67,
            "dri": 65,
            "def": 76,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_davies_tottenham_hotspur",
        "name": "Davies",
        "fullName": "Benjamin Thomas Davies",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Gales",
            "code": "gb-wls"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 68,
            "sho": 42,
            "pas": 61,
            "dri": 61,
            "def": 79,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_forster",
        "name": "Forster",
        "fullName": "Fraser Gerard Forster",
        "rating": 73,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 74,
            "sho": 71,
            "pas": 74,
            "dri": 70,
            "def": 64,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_dybala",
        "name": "Dybala",
        "fullName": "Paulo Exequiel Dybala",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 90,
            "sho": 86,
            "pas": 75,
            "dri": 80,
            "def": 43,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_pellegrini",
        "name": "Pellegrini",
        "fullName": "Lorenzo Pellegrini",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 78,
            "sho": 76,
            "pas": 86,
            "dri": 82,
            "def": 61,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_mancini",
        "name": "Mancini",
        "fullName": "Gianluca Mancini",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 73,
            "sho": 43,
            "pas": 69,
            "dri": 63,
            "def": 83,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_ndicka",
        "name": "Ndicka",
        "fullName": "Obite Evan Ndicka",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 62,
            "sho": 33,
            "pas": 64,
            "dri": 56,
            "def": 85,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_svilar",
        "name": "Svilar",
        "fullName": "Mile Svilar",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 82,
            "sho": 78,
            "pas": 78,
            "dri": 80,
            "def": 77,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_dovbyk",
        "name": "Dovbyk",
        "fullName": "Artem Oleksandrovych Dovbyk",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 86,
            "sho": 88,
            "pas": 67,
            "dri": 81,
            "def": 33,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_soule",
        "name": "Soule",
        "fullName": "Matías Soulé Malvano",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 81,
            "sho": 73,
            "pas": 68,
            "dri": 78,
            "def": 33,
            "phy": 52
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_kone",
        "name": "Kone",
        "fullName": "Emmanuel Kouadio Koné",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 70,
            "sho": 65,
            "pas": 85,
            "dri": 82,
            "def": 67,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_cristante",
        "name": "Cristante",
        "fullName": "Bryan Cristante",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 62,
            "sho": 62,
            "pas": 70,
            "dri": 69,
            "def": 79,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_paredes",
        "name": "Paredes",
        "fullName": "Leandro Daniel Paredes",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 70,
            "sho": 61,
            "pas": 69,
            "dri": 71,
            "def": 83,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_el_shaarawy",
        "name": "El Shaarawy",
        "fullName": "Stephan Kareem El Shaarawy",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 86,
            "sho": 69,
            "pas": 74,
            "dri": 80,
            "def": 36,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_angelino",
        "name": "Angelino",
        "fullName": "José Ángel Esmorís Tasende",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 83,
            "sho": 58,
            "pas": 72,
            "dri": 68,
            "def": 71,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_saelemaekers",
        "name": "Saelemaekers",
        "fullName": "Alexis Jesse Saelemaekers",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 82,
            "sho": 68,
            "pas": 68,
            "dri": 78,
            "def": 34,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_celik",
        "name": "Celik",
        "fullName": "Mehmet Zeki Çelik",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 77,
            "sho": 55,
            "pas": 65,
            "dri": 69,
            "def": 75,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_hummels",
        "name": "Hummels",
        "fullName": "Mats Julian Hummels",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 69,
            "sho": 35,
            "pas": 60,
            "dri": 64,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_hermoso",
        "name": "Hermoso",
        "fullName": "Mario Hermoso Canseco",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 72,
            "sho": 33,
            "pas": 68,
            "dri": 59,
            "def": 84,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_baldanzi",
        "name": "Baldanzi",
        "fullName": "Tommaso Baldanzi",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 61,
            "sho": 62,
            "pas": 81,
            "dri": 78,
            "def": 60,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_le_fee",
        "name": "Le Fee",
        "fullName": "Enzo Jérémy Le Fée",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 71,
            "sho": 65,
            "pas": 78,
            "dri": 77,
            "def": 62,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_zalewski",
        "name": "Zalewski",
        "fullName": "Nicola Zalewski",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 78,
            "sho": 57,
            "pas": 66,
            "dri": 70,
            "def": 74,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_ryan",
        "name": "Ryan",
        "fullName": "Mathew David Ryan",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Australia",
            "code": "au"
        },
        "club": {
            "name": "Roma",
            "id": 100
        },
        "stats": {
            "pac": 80,
            "sho": 78,
            "pas": 71,
            "dri": 78,
            "def": 75,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_kvaratskhelia",
        "name": "Kvaratskhelia",
        "fullName": "Khvicha Kvaratskhelia",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Georgia",
            "code": "ge"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 90,
            "sho": 79,
            "pas": 77,
            "dri": 90,
            "def": 36,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_lukaku",
        "name": "Lukaku",
        "fullName": "Romelu Menama Lukaku Bolingoli",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 85,
            "sho": 84,
            "pas": 70,
            "dri": 80,
            "def": 29,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_di_lorenzo",
        "name": "Di Lorenzo",
        "fullName": "Giovanni Di Lorenzo",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 88,
            "sho": 53,
            "pas": 74,
            "dri": 73,
            "def": 79,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_lobotska",
        "name": "Lobotska",
        "fullName": "Stanislav Lobotka",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Eslovaquia",
            "code": "sk"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 76,
            "sho": 69,
            "pas": 89,
            "dri": 82,
            "def": 66,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_anguissa",
        "name": "Anguissa",
        "fullName": "André-Frank Zambo Anguissa",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Camerún",
            "code": "cm"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 69,
            "sho": 74,
            "pas": 87,
            "dri": 85,
            "def": 61,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_buongiorno",
        "name": "Buongiorno",
        "fullName": "Alessandro Buongiorno",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 63,
            "sho": 38,
            "pas": 67,
            "dri": 59,
            "def": 87,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_rrahmani",
        "name": "Rrahmani",
        "fullName": "Amir Kadri Rrahmani",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Kosovo",
            "code": "xk"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 67,
            "sho": 35,
            "pas": 61,
            "dri": 55,
            "def": 82,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_meret",
        "name": "Meret",
        "fullName": "Alex Meret",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 79,
            "sho": 77,
            "pas": 76,
            "dri": 83,
            "def": 73,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_mctominay",
        "name": "McTominay",
        "fullName": "Scott Francis McTominay",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 70,
            "sho": 73,
            "pas": 83,
            "dri": 78,
            "def": 57,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_politano",
        "name": "Politano",
        "fullName": "Matteo Politano",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 86,
            "sho": 70,
            "pas": 69,
            "dri": 85,
            "def": 38,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_neres",
        "name": "Neres",
        "fullName": "David Neres Campos",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 87,
            "sho": 68,
            "pas": 68,
            "dri": 83,
            "def": 38,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_olivera",
        "name": "Olivera",
        "fullName": "Mathías Olivera Miramontes",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 85,
            "sho": 52,
            "pas": 66,
            "dri": 65,
            "def": 70,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_spinazzola",
        "name": "Spinazzola",
        "fullName": "Leonardo Spinazzola",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 86,
            "sho": 51,
            "pas": 70,
            "dri": 73,
            "def": 77,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_gilmour",
        "name": "Gilmour",
        "fullName": "Billy Clifford Gilmour",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 63,
            "sho": 62,
            "pas": 77,
            "dri": 78,
            "def": 63,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_raspadori",
        "name": "Raspadori",
        "fullName": "Giacomo Raspadori",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 79,
            "sho": 81,
            "pas": 62,
            "dri": 72,
            "def": 40,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_simeone",
        "name": "Simeone",
        "fullName": "Giovanni Pablo Simeone Baldini",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 76,
            "sho": 75,
            "pas": 63,
            "dri": 72,
            "def": 30,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_mazzocchi",
        "name": "Mazzocchi",
        "fullName": "Pasquale Mazzocchi",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 78,
            "sho": 55,
            "pas": 65,
            "dri": 65,
            "def": 71,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_caprile",
        "name": "Caprile",
        "fullName": "Elia Caprile",
        "rating": 74,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 74,
            "sho": 75,
            "pas": 72,
            "dri": 75,
            "def": 63,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_folorunsho",
        "name": "Folorunsho",
        "fullName": "Michael Ijemuan Folorunsho",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 70,
            "sho": 69,
            "pas": 82,
            "dri": 77,
            "def": 56,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_juan_jesus",
        "name": "Juan Jesus",
        "fullName": "Juan Guilherme Nunes Jesus",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 59,
            "sho": 34,
            "pas": 55,
            "dri": 55,
            "def": 79,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_isak",
        "name": "Isak",
        "fullName": "Alexander Isak",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 88,
            "sho": 84,
            "pas": 77,
            "dri": 79,
            "def": 41,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_bruno_guimaraes",
        "name": "Bruno Guimaraes",
        "fullName": "Bruno Guimarães Rodriguez Moura",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 74,
            "sho": 75,
            "pas": 85,
            "dri": 85,
            "def": 70,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_gordon",
        "name": "Gordon",
        "fullName": "Anthony Michael Gordon",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 83,
            "sho": 72,
            "pas": 73,
            "dri": 84,
            "def": 39,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_tonali",
        "name": "Tonali",
        "fullName": "Sandro Tonali",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 72,
            "sho": 58,
            "pas": 79,
            "dri": 76,
            "def": 84,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_joelinton",
        "name": "Joelinton",
        "fullName": "Joelinton Cássio Apolinário de Lira",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 77,
            "sho": 75,
            "pas": 86,
            "dri": 86,
            "def": 60,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_schar",
        "name": "Schar",
        "fullName": "Fabian Lukas Schär",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 69,
            "sho": 38,
            "pas": 68,
            "dri": 57,
            "def": 86,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_botman",
        "name": "Botman",
        "fullName": "Sven Botman",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 72,
            "sho": 43,
            "pas": 59,
            "dri": 57,
            "def": 81,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_trippier",
        "name": "Trippier",
        "fullName": "Kieran John Trippier",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 91,
            "sho": 55,
            "pas": 78,
            "dri": 74,
            "def": 75,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_livramento",
        "name": "Livramento",
        "fullName": "Tino Valentino Livramento",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 83,
            "sho": 50,
            "pas": 65,
            "dri": 66,
            "def": 75,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_hall",
        "name": "Hall",
        "fullName": "Lewis Hall",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 83,
            "sho": 51,
            "pas": 67,
            "dri": 70,
            "def": 72,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_burn",
        "name": "Burn",
        "fullName": "Daniel Johnson Burn",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 70,
            "sho": 39,
            "pas": 61,
            "dri": 63,
            "def": 80,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_pope",
        "name": "Pope",
        "fullName": "Nicholas David Pope",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 85,
            "sho": 81,
            "pas": 82,
            "dri": 80,
            "def": 76,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_barnes",
        "name": "Barnes",
        "fullName": "Harvey Lewis Barnes",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 88,
            "sho": 68,
            "pas": 73,
            "dri": 84,
            "def": 44,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_wilson",
        "name": "Wilson",
        "fullName": "Callum Eddie Graham Wilson",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 79,
            "sho": 79,
            "pas": 64,
            "dri": 76,
            "def": 40,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_murphy",
        "name": "Murphy",
        "fullName": "Jacob Kai Murphy",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 78,
            "sho": 71,
            "pas": 72,
            "dri": 80,
            "def": 39,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_almiron",
        "name": "Almiron",
        "fullName": "Miguel Ángel Almirón Rejala",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 84,
            "sho": 68,
            "pas": 71,
            "dri": 84,
            "def": 43,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_willock",
        "name": "Willock",
        "fullName": "Joseph George Willock",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 64,
            "sho": 66,
            "pas": 77,
            "dri": 79,
            "def": 62,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_longstaff",
        "name": "Longstaff",
        "fullName": "Sean David Longstaff",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 66,
            "sho": 69,
            "pas": 78,
            "dri": 80,
            "def": 57,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_kelly",
        "name": "Kelly",
        "fullName": "Lloyd Casius Kelly",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 60,
            "sho": 43,
            "pas": 55,
            "dri": 57,
            "def": 80,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_dubravka",
        "name": "Dubravka",
        "fullName": "Martin Dúbravka",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Eslovaquia",
            "code": "sk"
        },
        "club": {
            "name": "Newcastle United",
            "id": 67
        },
        "stats": {
            "pac": 80,
            "sho": 79,
            "pas": 73,
            "dri": 79,
            "def": 75,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_messi",
        "name": "Messi",
        "fullName": "Lionel Andrés Messi Cuccittini",
        "rating": 88,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 97,
            "sho": 75,
            "pas": 82,
            "dri": 93,
            "def": 45,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 5100
    },
    {
        "id": "gold_rare_suarez",
        "name": "Suarez",
        "fullName": "Luis Alberto Suárez Díaz",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 85,
            "sho": 82,
            "pas": 65,
            "dri": 80,
            "def": 36,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_busquets",
        "name": "Busquets",
        "fullName": "Sergio Busquets Burgos",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 68,
            "sho": 59,
            "pas": 74,
            "dri": 70,
            "def": 86,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_jordi_alba",
        "name": "Jordi Alba",
        "fullName": "Jordi Alba Ramos",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 88,
            "sho": 53,
            "pas": 71,
            "dri": 67,
            "def": 77,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "silver_campana",
        "name": "Campana",
        "fullName": "Leonardo Campana Romero",
        "rating": 74,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Ecuador",
            "code": "ec"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 65,
            "dri": 68,
            "def": 34,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_taylor",
        "name": "Taylor",
        "fullName": "Robert Thomas Taylor",
        "rating": 73,
        "cardType": "silver",
        "pos": "MI",
        "nation": {
            "name": "Finlandia",
            "code": "fi"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 80,
            "sho": 67,
            "pas": 66,
            "dri": 76,
            "def": 34,
            "phy": 50
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_callender",
        "name": "Callender",
        "fullName": "Drake Steven Callender",
        "rating": 73,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 70,
            "sho": 73,
            "pas": 73,
            "dri": 74,
            "def": 62,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_aviles",
        "name": "Aviles",
        "fullName": "Tomás Agustín Avilés Mancilla",
        "rating": 72,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 61,
            "sho": 32,
            "pas": 56,
            "dri": 55,
            "def": 77,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_rojas",
        "name": "Rojas",
        "fullName": "Matías Nicolás Rojas Romero",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 70,
            "sho": 71,
            "pas": 79,
            "dri": 78,
            "def": 59,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_redondo",
        "name": "Redondo",
        "fullName": "Federico Redondo Solari",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 58,
            "sho": 52,
            "pas": 65,
            "dri": 66,
            "def": 73,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_gomez",
        "name": "Gomez",
        "fullName": "Diego Alexander Gómez Amarilla",
        "rating": 73,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 65,
            "sho": 64,
            "pas": 78,
            "dri": 74,
            "def": 61,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_cremaschi",
        "name": "Cremaschi",
        "fullName": "Benjamin Cremaschi",
        "rating": 70,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 65,
            "sho": 60,
            "pas": 72,
            "dri": 75,
            "def": 53,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 375
    },
    {
        "id": "silver_weigandt",
        "name": "Weigandt",
        "fullName": "Marcelo Alexis Weigandt",
        "rating": 72,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 75,
            "sho": 53,
            "pas": 66,
            "dri": 67,
            "def": 68,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_martinez",
        "name": "Martinez",
        "fullName": "David Héctor Martínez",
        "rating": 73,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 60,
            "sho": 31,
            "pas": 55,
            "dri": 56,
            "def": 77,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_fray",
        "name": "Fray",
        "fullName": "Ian Charles Michael Fray",
        "rating": 66,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 55,
            "sho": 30,
            "pas": 55,
            "dri": 55,
            "def": 75,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 275
    },
    {
        "id": "gold_rare_cristiano_ronaldo",
        "name": "Cristiano Ronaldo",
        "fullName": "Cristiano Ronaldo dos Santos Aveiro",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 89,
            "sho": 85,
            "pas": 78,
            "dri": 81,
            "def": 36,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_mane",
        "name": "Mane",
        "fullName": "Sadio Mané",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 88,
            "sho": 72,
            "pas": 79,
            "dri": 89,
            "def": 39,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_laporte",
        "name": "Laporte",
        "fullName": "Aymeric Jean Louis Gérard Alphonse Laporte",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 72,
            "sho": 46,
            "pas": 64,
            "dri": 62,
            "def": 83,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_brozovic",
        "name": "Brozovic",
        "fullName": "Marcelo Brozović",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 71,
            "sho": 60,
            "pas": 75,
            "dri": 66,
            "def": 88,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_otavio",
        "name": "Otavio",
        "fullName": "Otávio Edmilson da Silva Monteiro",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 77,
            "sho": 71,
            "pas": 82,
            "dri": 81,
            "def": 58,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_simakan",
        "name": "Simakan",
        "fullName": "Mohamed Simakan",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 64,
            "sho": 32,
            "pas": 65,
            "dri": 59,
            "def": 81,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_bento",
        "name": "Bento",
        "fullName": "Bento Matheus Krepski",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 78,
            "sho": 75,
            "pas": 78,
            "dri": 81,
            "def": 75,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_angelo",
        "name": "Angelo",
        "fullName": "Ângelo Gabriel Borges Damaceno",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 84,
            "sho": 67,
            "pas": 70,
            "dri": 77,
            "def": 40,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_talisca",
        "name": "Talisca",
        "fullName": "Anderson Souza Conceição",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 69,
            "sho": 70,
            "pas": 85,
            "dri": 80,
            "def": 62,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "silver_al_ghannam",
        "name": "Al Ghannam",
        "fullName": "Sultan Abdullah Al-Ghannam",
        "rating": 74,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 77,
            "sho": 51,
            "pas": 67,
            "dri": 68,
            "def": 69,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_al_khaibari",
        "name": "Al Khaibari",
        "fullName": "Abdullah Al-Khaibari",
        "rating": 72,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 61,
            "sho": 53,
            "pas": 65,
            "dri": 65,
            "def": 71,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_lajami",
        "name": "Lajami",
        "fullName": "Ali Lajami",
        "rating": 73,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 65,
            "sho": 39,
            "pas": 60,
            "dri": 56,
            "def": 75,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_ghareeb",
        "name": "Ghareeb",
        "fullName": "Abdulrahman Ghareeb",
        "rating": 74,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 76,
            "sho": 69,
            "pas": 70,
            "dri": 75,
            "def": 34,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_al_najjar",
        "name": "Al Najjar",
        "fullName": "Raghid Al-Najjar",
        "rating": 66,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 67,
            "sho": 66,
            "pas": 59,
            "dri": 67,
            "def": 64,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 275
    },
    {
        "id": "gold_rare_neymar_jr",
        "name": "Neymar Jr",
        "fullName": "Neymar da Silva Santos Júnior",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 90,
            "sho": 75,
            "pas": 79,
            "dri": 88,
            "def": 45,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_mitrovic",
        "name": "Mitrovic",
        "fullName": "Aleksandar Mitrović",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 81,
            "sho": 84,
            "pas": 74,
            "dri": 81,
            "def": 29,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_milinkovic_savic",
        "name": "Milinkovic-Savic",
        "fullName": "Sergej Milinković-Savić",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 68,
            "sho": 71,
            "pas": 89,
            "dri": 86,
            "def": 72,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_neves",
        "name": "Neves",
        "fullName": "Rúben Diogo da Silva Neves",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 70,
            "sho": 77,
            "pas": 84,
            "dri": 85,
            "def": 64,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_cancelo",
        "name": "Cancelo",
        "fullName": "João Pedro Cavaco Cancelo",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 88,
            "sho": 58,
            "pas": 72,
            "dri": 76,
            "def": 77,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_malcom",
        "name": "Malcom",
        "fullName": "Malcom Filipe Silva de Oliveira",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 88,
            "sho": 75,
            "pas": 70,
            "dri": 84,
            "def": 42,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_koulibaly",
        "name": "Koulibaly",
        "fullName": "Kalidou Koulibaly",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 66,
            "sho": 46,
            "pas": 66,
            "dri": 67,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_bono",
        "name": "Bono",
        "fullName": "Yassine Bounou",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 84,
            "sho": 82,
            "pas": 81,
            "dri": 81,
            "def": 76,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_lodi",
        "name": "Lodi",
        "fullName": "Renan Augusto Lodi dos Santos",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 85,
            "sho": 56,
            "pas": 66,
            "dri": 73,
            "def": 75,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_al_dawsari",
        "name": "Al Dawsari",
        "fullName": "Salem Muwaffaq Al-Dawsari",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 87,
            "sho": 66,
            "pas": 67,
            "dri": 81,
            "def": 34,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_al_bulayhi",
        "name": "Al Bulayhi",
        "fullName": "Ali Al-Bulayhi",
        "rating": 74,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 67,
            "sho": 36,
            "pas": 56,
            "dri": 58,
            "def": 78,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_kanno",
        "name": "Kanno",
        "fullName": "Mohamed Kanno",
        "rating": 74,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 61,
            "sho": 61,
            "pas": 76,
            "dri": 76,
            "def": 59,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_al_shahrani",
        "name": "Al Shahrani",
        "fullName": "Yasser Al-Shahrani",
        "rating": 74,
        "cardType": "silver",
        "pos": "LI",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 78,
            "sho": 56,
            "pas": 69,
            "dri": 65,
            "def": 72,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_al_qahtani",
        "name": "Al Qahtani",
        "fullName": "Mohammed Al-Qahtani",
        "rating": 67,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Hilal",
            "id": "al_hilal"
        },
        "stats": {
            "pac": 75,
            "sho": 61,
            "pas": 65,
            "dri": 72,
            "def": 38,
            "phy": 50
        },
        "faceUrl": "",
        "quickSell": 300
    },
    {
        "id": "gold_rare_benzema",
        "name": "Benzema",
        "fullName": "Karim Mostafa Benzema",
        "rating": 86,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 80,
            "sho": 85,
            "pas": 69,
            "dri": 83,
            "def": 43,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 3500
    },
    {
        "id": "gold_rare_kante",
        "name": "Kante",
        "fullName": "N'Golo Kanté",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 70,
            "sho": 61,
            "pas": 74,
            "dri": 76,
            "def": 85,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_fabinho",
        "name": "Fabinho",
        "fullName": "Fábio Henrique Tavares",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 68,
            "sho": 58,
            "pas": 75,
            "dri": 72,
            "def": 83,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_aouar",
        "name": "Aouar",
        "fullName": "Houssem-Eddine Chaâbane Aouar",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argelia",
            "code": "dz"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 65,
            "sho": 71,
            "pas": 80,
            "dri": 82,
            "def": 63,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_diaby",
        "name": "Diaby",
        "fullName": "Moussa Diaby",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 86,
            "sho": 72,
            "pas": 70,
            "dri": 85,
            "def": 45,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_bergwijn",
        "name": "Bergwijn",
        "fullName": "Steven Charles Bergwijn",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 85,
            "sho": 67,
            "pas": 71,
            "dri": 83,
            "def": 38,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_danilo_pereira",
        "name": "Danilo Pereira",
        "fullName": "Danilo Luís Hélio Pereira",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 71,
            "sho": 42,
            "pas": 62,
            "dri": 60,
            "def": 82,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_rajkovic",
        "name": "Rajkovic",
        "fullName": "Predrag Rajković",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 82,
            "sho": 76,
            "pas": 74,
            "dri": 84,
            "def": 71,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_luiz_felipe",
        "name": "Luiz Felipe",
        "fullName": "Luiz Felipe Ramos Marchi",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 61,
            "sho": 42,
            "pas": 64,
            "dri": 56,
            "def": 82,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_al_shanqeeti",
        "name": "Al Shanqeeti",
        "fullName": "Muhannad Al-Shanqeeti",
        "rating": 72,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 77,
            "sho": 54,
            "pas": 66,
            "dri": 66,
            "def": 70,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_kadesh",
        "name": "Kadesh",
        "fullName": "Hassan Kadesh",
        "rating": 71,
        "cardType": "silver",
        "pos": "LI",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 75,
            "sho": 45,
            "pas": 65,
            "dri": 65,
            "def": 69,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 400
    },
    {
        "id": "silver_al_ghamdi",
        "name": "Al Ghamdi",
        "fullName": "Faisal Al-Ghamdi",
        "rating": 70,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 55,
            "sho": 62,
            "pas": 74,
            "dri": 73,
            "def": 50,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 375
    },
    {
        "id": "silver_al_shehri",
        "name": "Al Shehri",
        "fullName": "Saleh Al-Shehri",
        "rating": 73,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Arabia Saudí",
            "code": "sa"
        },
        "club": {
            "name": "Al Ittihad",
            "id": "al_ittihad"
        },
        "stats": {
            "pac": 77,
            "sho": 73,
            "pas": 58,
            "dri": 67,
            "def": 33,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_mastantuono_river_plate",
        "name": "Mastantuono",
        "fullName": "Franco Mastantuono",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 61,
            "sho": 62,
            "pas": 74,
            "dri": 76,
            "def": 62,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_borja",
        "name": "Borja",
        "fullName": "Miguel Ángel Borja Hernández",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 74,
            "sho": 81,
            "pas": 69,
            "dri": 72,
            "def": 35,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_armani",
        "name": "Armani",
        "fullName": "Franco Armani",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 76,
            "sho": 75,
            "pas": 70,
            "dri": 81,
            "def": 71,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_pezzella",
        "name": "Pezzella",
        "fullName": "Germán Alejo Pezzella",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 68,
            "sho": 44,
            "pas": 61,
            "dri": 63,
            "def": 82,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_acu_a",
        "name": "Acuña",
        "fullName": "Marcos Javier Acuña",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 86,
            "sho": 52,
            "pas": 71,
            "dri": 69,
            "def": 75,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_lanzini",
        "name": "Lanzini",
        "fullName": "Manuel Lanzini",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 61,
            "sho": 66,
            "pas": 78,
            "dri": 80,
            "def": 65,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_kranevitter",
        "name": "Kranevitter",
        "fullName": "Claudio Matías Kranevitter",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 64,
            "sho": 59,
            "pas": 65,
            "dri": 65,
            "def": 77,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_meza",
        "name": "Meza",
        "fullName": "Maximiliano Eduardo Meza",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 83,
            "sho": 70,
            "pas": 68,
            "dri": 79,
            "def": 32,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_colidio",
        "name": "Colidio",
        "fullName": "Facundo Colidio",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 63,
            "dri": 73,
            "def": 26,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_villagra",
        "name": "Villagra",
        "fullName": "Rodrigo Román Villagra",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 63,
            "sho": 56,
            "pas": 70,
            "dri": 65,
            "def": 79,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_simon",
        "name": "Simon",
        "fullName": "Santiago Simón",
        "rating": 73,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 66,
            "sho": 64,
            "pas": 76,
            "dri": 74,
            "def": 53,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_diaz",
        "name": "Diaz",
        "fullName": "Paulo César Díaz Huincales",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Chile",
            "code": "cl"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 62,
            "sho": 33,
            "pas": 58,
            "dri": 58,
            "def": 78,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_bustos",
        "name": "Bustos",
        "fullName": "Fabricio Fabricio Bustos",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 84,
            "sho": 50,
            "pas": 71,
            "dri": 66,
            "def": 70,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_enzo_diaz",
        "name": "Enzo Diaz",
        "fullName": "Enzo Hernán Díaz",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 79,
            "sho": 51,
            "pas": 71,
            "dri": 65,
            "def": 69,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_bareiro",
        "name": "Bareiro",
        "fullName": "Adam Fernando Bareiro Gamarra",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 73,
            "sho": 78,
            "pas": 67,
            "dri": 73,
            "def": 29,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_aliendro",
        "name": "Aliendro",
        "fullName": "Rodrigo Germán Aliendro",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 61,
            "sho": 71,
            "pas": 77,
            "dri": 76,
            "def": 55,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_echeverri",
        "name": "Echeverri",
        "fullName": "Claudio Jeremías Echeverri",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 64,
            "sho": 65,
            "pas": 81,
            "dri": 77,
            "def": 63,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_ruberto",
        "name": "Ruberto",
        "fullName": "Agustín Fabián Ruberto",
        "rating": 67,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 66,
            "sho": 71,
            "pas": 53,
            "dri": 65,
            "def": 34,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 300
    },
    {
        "id": "gold_rare_cavani",
        "name": "Cavani",
        "fullName": "Edinson Roberto Cavani Gómez",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 79,
            "sho": 82,
            "pas": 62,
            "dri": 76,
            "def": 30,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_merentiel",
        "name": "Merentiel",
        "fullName": "Miguel Ángel Merentiel Serrano",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 78,
            "sho": 82,
            "pas": 66,
            "dri": 73,
            "def": 28,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_zenon",
        "name": "Zenon",
        "fullName": "Kevin Andrés Zenón",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 84,
            "sho": 67,
            "pas": 71,
            "dri": 81,
            "def": 39,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_medina",
        "name": "Medina",
        "fullName": "Cristian Nicolás Medina",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 68,
            "sho": 66,
            "pas": 82,
            "dri": 81,
            "def": 60,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_romero_boca_juniors",
        "name": "Romero",
        "fullName": "Sergio Germán Romero",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 72,
            "sho": 74,
            "pas": 71,
            "dri": 76,
            "def": 71,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_rojo",
        "name": "Rojo",
        "fullName": "Faustino Marcos Alberto Rojo",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 62,
            "sho": 42,
            "pas": 56,
            "dri": 58,
            "def": 80,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_blanco",
        "name": "Blanco",
        "fullName": "Lautaro Emanuel Blanco",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 80,
            "sho": 51,
            "pas": 68,
            "dri": 67,
            "def": 71,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_advincula",
        "name": "Advincula",
        "fullName": "Luis Jan Piers Advíncula Castrillón",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Perú",
            "code": "pe"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 79,
            "sho": 49,
            "pas": 65,
            "dri": 65,
            "def": 70,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_gimenez",
        "name": "Gimenez",
        "fullName": "Milton Giménez",
        "rating": 74,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 67,
            "sho": 75,
            "pas": 64,
            "dri": 69,
            "def": 26,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_zeballos",
        "name": "Zeballos",
        "fullName": "Exequiel Zeballos",
        "rating": 74,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 82,
            "sho": 65,
            "pas": 68,
            "dri": 79,
            "def": 33,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_lema",
        "name": "Lema",
        "fullName": "Cristian Franco Lema",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 69,
            "sho": 30,
            "pas": 60,
            "dri": 57,
            "def": 81,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_figal",
        "name": "Figal",
        "fullName": "Jorge Nicolás Figal",
        "rating": 74,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 61,
            "sho": 38,
            "pas": 56,
            "dri": 55,
            "def": 79,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_pol_fernandez",
        "name": "Pol Fernandez",
        "fullName": "Guillermo Matías Fernández",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 61,
            "sho": 67,
            "pas": 80,
            "dri": 79,
            "def": 56,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_belmonte",
        "name": "Belmonte",
        "fullName": "Tomás Belmonte",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 55,
            "sho": 59,
            "pas": 67,
            "dri": 66,
            "def": 79,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_saracchi",
        "name": "Saracchi",
        "fullName": "Marcelo Josemir Saracchi Pintos",
        "rating": 73,
        "cardType": "silver",
        "pos": "LI",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 80,
            "sho": 47,
            "pas": 66,
            "dri": 67,
            "def": 68,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_brey",
        "name": "Brey",
        "fullName": "Leandro Brey",
        "rating": 69,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Boca Juniors",
            "id": "boca"
        },
        "stats": {
            "pac": 67,
            "sho": 65,
            "pas": 70,
            "dri": 67,
            "def": 60,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 350
    },
    {
        "id": "silver_estevao_palmeiras",
        "name": "Estevao",
        "fullName": "Estêvão Willian Almeida de Oliveira Gonçalves",
        "rating": 74,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 78,
            "sho": 64,
            "pas": 68,
            "dri": 79,
            "def": 37,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_veiga",
        "name": "Veiga",
        "fullName": "Raphael Cavalcante Veiga",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 74,
            "sho": 66,
            "pas": 81,
            "dri": 79,
            "def": 61,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_gomez",
        "name": "Gomez",
        "fullName": "Gustavo Raúl Gómez Portillo",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Paraguay",
            "code": "py"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 66,
            "sho": 39,
            "pas": 64,
            "dri": 64,
            "def": 86,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_weverton",
        "name": "Weverton",
        "fullName": "Weverton Pereira da Silva",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 77,
            "sho": 81,
            "pas": 80,
            "dri": 77,
            "def": 77,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_murilo",
        "name": "Murilo",
        "fullName": "Murilo Cerqueira Paim",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 70,
            "sho": 37,
            "pas": 60,
            "dri": 58,
            "def": 78,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_piquerez",
        "name": "Piquerez",
        "fullName": "Joaquín Piquerez Moreira",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 85,
            "sho": 56,
            "pas": 69,
            "dri": 69,
            "def": 75,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_mayke",
        "name": "Mayke",
        "fullName": "Mayke Rocha Oliveira",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 84,
            "sho": 47,
            "pas": 70,
            "dri": 67,
            "def": 70,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_ze_rafael",
        "name": "Ze Rafael",
        "fullName": "José Rafael Vivian",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 67,
            "sho": 71,
            "pas": 84,
            "dri": 77,
            "def": 64,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_rios",
        "name": "Rios",
        "fullName": "Richard Ríos Montoya",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 67,
            "sho": 67,
            "pas": 81,
            "dri": 78,
            "def": 61,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_anibal_moreno",
        "name": "Anibal Moreno",
        "fullName": "Aníbal Ismael Moreno",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 66,
            "sho": 61,
            "pas": 68,
            "dri": 65,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_rony",
        "name": "Rony",
        "fullName": "Ronielson da Silva Barbosa",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 76,
            "sho": 82,
            "pas": 66,
            "dri": 70,
            "def": 38,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_flaco_lopez",
        "name": "Flaco Lopez",
        "fullName": "José Manuel Alberto López",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 74,
            "sho": 81,
            "pas": 63,
            "dri": 72,
            "def": 26,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_dudu",
        "name": "Dudu",
        "fullName": "Eduardo Pereira Rodrigues",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 80,
            "sho": 67,
            "pas": 72,
            "dri": 79,
            "def": 42,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_mauricio",
        "name": "Mauricio",
        "fullName": "Maurício Magalhães Prado",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 66,
            "sho": 66,
            "pas": 81,
            "dri": 75,
            "def": 60,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_giay",
        "name": "Giay",
        "fullName": "Agustín Giay",
        "rating": 73,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 76,
            "sho": 47,
            "pas": 65,
            "dri": 65,
            "def": 69,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_gabriel_menino",
        "name": "Gabriel Menino",
        "fullName": "Gabriel Vinicius Menino Aquino",
        "rating": 74,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 68,
            "sho": 65,
            "pas": 80,
            "dri": 78,
            "def": 53,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_nico_paz_como",
        "name": "Nico Paz",
        "fullName": "Nicolás Paz Martínez",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 65,
            "sho": 63,
            "pas": 79,
            "dri": 77,
            "def": 61,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_cutrone",
        "name": "Cutrone",
        "fullName": "Patrick Cutrone",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 73,
            "sho": 76,
            "pas": 68,
            "dri": 70,
            "def": 26,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_belotti",
        "name": "Belotti",
        "fullName": "Andrea Belotti",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 73,
            "sho": 77,
            "pas": 65,
            "dri": 74,
            "def": 28,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_strefezza",
        "name": "Strefezza",
        "fullName": "Gabriel Barbosa Strefezza",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 82,
            "sho": 66,
            "pas": 65,
            "dri": 79,
            "def": 41,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_sergi_roberto",
        "name": "Sergi Roberto",
        "fullName": "Sergi Roberto Carnicer",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 63,
            "sho": 64,
            "pas": 80,
            "dri": 82,
            "def": 57,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_fadera",
        "name": "Fadera",
        "fullName": "Alieu Fadera",
        "rating": 72,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Gambia",
            "code": "gm"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 81,
            "sho": 64,
            "pas": 65,
            "dri": 72,
            "def": 33,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_perrone",
        "name": "Perrone",
        "fullName": "Máximo Perrone",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 57,
            "sho": 51,
            "pas": 69,
            "dri": 65,
            "def": 73,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_audero",
        "name": "Audero",
        "fullName": "Emil Audero Mulyadi",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 75,
            "sho": 75,
            "pas": 74,
            "dri": 74,
            "def": 67,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_dossena",
        "name": "Dossena",
        "fullName": "Alberto Dossena",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 64,
            "sho": 40,
            "pas": 55,
            "dri": 55,
            "def": 75,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_kempf",
        "name": "Kempf",
        "fullName": "Marc-Oliver Kempf",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 61,
            "sho": 38,
            "pas": 55,
            "dri": 59,
            "def": 80,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_moreno",
        "name": "Moreno",
        "fullName": "Alberto Moreno Pérez",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 79,
            "sho": 54,
            "pas": 71,
            "dri": 69,
            "def": 71,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_van_der_brempt",
        "name": "Van Der Brempt",
        "fullName": "Ignace Van Der Brempt",
        "rating": 72,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 75,
            "sho": 47,
            "pas": 65,
            "dri": 65,
            "def": 71,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_da_cunha",
        "name": "Da Cunha",
        "fullName": "Lucas Da Cunha",
        "rating": 73,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 62,
            "sho": 63,
            "pas": 75,
            "dri": 77,
            "def": 61,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_mazzitelli",
        "name": "Mazzitelli",
        "fullName": "Luca Mazzitelli",
        "rating": 74,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 68,
            "sho": 67,
            "pas": 79,
            "dri": 77,
            "def": 61,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_goldaniga",
        "name": "Goldaniga",
        "fullName": "Edoardo Goldaniga",
        "rating": 73,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 68,
            "sho": 30,
            "pas": 58,
            "dri": 55,
            "def": 78,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_reina",
        "name": "Reina",
        "fullName": "José Manuel Reina Páez",
        "rating": 73,
        "cardType": "silver",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 72,
            "sho": 68,
            "pas": 72,
            "dri": 77,
            "def": 62,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_gyokeres",
        "name": "Gyokeres",
        "fullName": "Viktor Einar Gyökeres",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 88,
            "sho": 90,
            "pas": 67,
            "dri": 78,
            "def": 38,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_hjulmand",
        "name": "Hjulmand",
        "fullName": "Morten Blom Due Hjulmand",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 71,
            "sho": 62,
            "pas": 77,
            "dri": 71,
            "def": 81,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_inacio",
        "name": "Inacio",
        "fullName": "Gonçalo Bernardo Inácio",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 66,
            "sho": 40,
            "pas": 58,
            "dri": 63,
            "def": 87,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_diomande",
        "name": "Diomande",
        "fullName": "Ousmane Diomande",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 62,
            "sho": 44,
            "pas": 62,
            "dri": 55,
            "def": 82,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_trincao",
        "name": "Trincao",
        "fullName": "Francisco António Machado Mota Castro Trincão",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 83,
            "sho": 75,
            "pas": 76,
            "dri": 85,
            "def": 37,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_pote",
        "name": "Pote",
        "fullName": "Pedro António Pereira Gonçalves",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 76,
            "sho": 74,
            "pas": 88,
            "dri": 88,
            "def": 63,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_catamo",
        "name": "Catamo",
        "fullName": "Geny Cipriano Catamo",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Mozambique",
            "code": "mz"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 82,
            "sho": 55,
            "pas": 70,
            "dri": 68,
            "def": 74,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_morita",
        "name": "Morita",
        "fullName": "Hidemasa Morita",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 64,
            "sho": 67,
            "pas": 81,
            "dri": 85,
            "def": 68,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "silver_quenda",
        "name": "Quenda",
        "fullName": "Geovany Quenda",
        "rating": 72,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 75,
            "sho": 67,
            "pas": 67,
            "dri": 74,
            "def": 35,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_israel",
        "name": "Israel",
        "fullName": "Franco Israel Wibmer",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 78,
            "sho": 76,
            "pas": 71,
            "dri": 72,
            "def": 73,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_diogo_costa",
        "name": "Diogo Costa",
        "fullName": "Diogo Meireles da Costa",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 85,
            "sho": 81,
            "pas": 78,
            "dri": 82,
            "def": 76,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_galeno",
        "name": "Galeno",
        "fullName": "Wenderson Rodrigues do Carmo Galeno",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 87,
            "sho": 74,
            "pas": 75,
            "dri": 86,
            "def": 34,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_samu_omorodion",
        "name": "Samu Omorodion",
        "fullName": "Samuel Omorodion Aghehowa",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 73,
            "sho": 77,
            "pas": 64,
            "dri": 77,
            "def": 33,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_varela",
        "name": "Varela",
        "fullName": "Alan Gonzalo Varela",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 66,
            "sho": 58,
            "pas": 74,
            "dri": 67,
            "def": 84,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_pepe",
        "name": "Pepe",
        "fullName": "Eduardo Gabriel Aquino Cossa",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 84,
            "sho": 69,
            "pas": 77,
            "dri": 85,
            "def": 38,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_nico_gonzalez_porto",
        "name": "Nico Gonzalez",
        "fullName": "Nicolás González Iglesias",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 69,
            "sho": 71,
            "pas": 78,
            "dri": 82,
            "def": 65,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_otavio_porto",
        "name": "Otavio",
        "fullName": "Otávio Paulo Neves Santos",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 61,
            "sho": 30,
            "pas": 60,
            "dri": 55,
            "def": 82,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_joao_mario",
        "name": "Joao Mario",
        "fullName": "João Mário Neto Lopes",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 86,
            "sho": 57,
            "pas": 70,
            "dri": 71,
            "def": 74,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_fabio_vieira",
        "name": "Fabio Vieira",
        "fullName": "Fábio Daniel Ferreira Vieira",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 70,
            "sho": 67,
            "pas": 79,
            "dri": 81,
            "def": 59,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "silver_danny_namaso",
        "name": "Danny Namaso",
        "fullName": "Daniel Namaso Loader",
        "rating": 73,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Porto",
            "id": 503
        },
        "stats": {
            "pac": 68,
            "sho": 77,
            "pas": 62,
            "dri": 72,
            "def": 26,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_brobbey",
        "name": "Brobbey",
        "fullName": "Brian Ebenezer Adjei Brobbey",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 72,
            "sho": 83,
            "pas": 67,
            "dri": 76,
            "def": 31,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_berghuis",
        "name": "Berghuis",
        "fullName": "Steven Berghuis",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 87,
            "sho": 68,
            "pas": 71,
            "dri": 80,
            "def": 41,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_taylor",
        "name": "Taylor",
        "fullName": "Kenneth Ina Dorothea Taylor",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 68,
            "sho": 70,
            "pas": 78,
            "dri": 79,
            "def": 62,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_hato",
        "name": "Hato",
        "fullName": "Jorrel Hato",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 63,
            "sho": 38,
            "pas": 60,
            "dri": 55,
            "def": 77,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_pasveer",
        "name": "Pasveer",
        "fullName": "Remko Pasveer",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 76,
            "sho": 71,
            "pas": 76,
            "dri": 75,
            "def": 73,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_henderson",
        "name": "Henderson",
        "fullName": "Jordan Brian Henderson",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 66,
            "sho": 63,
            "pas": 69,
            "dri": 65,
            "def": 81,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "silver_godts",
        "name": "Godts",
        "fullName": "Mika Godts",
        "rating": 71,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 77,
            "sho": 61,
            "pas": 66,
            "dri": 73,
            "def": 35,
            "phy": 50
        },
        "faceUrl": "",
        "quickSell": 400
    },
    {
        "id": "gold_rare_traore",
        "name": "Traore",
        "fullName": "Bertrand Isidore Traoré",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Burkina Faso",
            "code": "bf"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 82,
            "sho": 69,
            "pas": 74,
            "dri": 77,
            "def": 37,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_sutalo",
        "name": "Sutalo",
        "fullName": "Josip Šutalo",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 60,
            "sho": 40,
            "pas": 56,
            "dri": 55,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_rensch",
        "name": "Rensch",
        "fullName": "Devyne Fabian Jairo Rensch",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Ajax",
            "id": 678
        },
        "stats": {
            "pac": 82,
            "sho": 52,
            "pas": 67,
            "dri": 68,
            "def": 73,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_de_jong_psv",
        "name": "De Jong",
        "fullName": "Luuk de Jong",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 84,
            "sho": 83,
            "pas": 65,
            "dri": 75,
            "def": 36,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_bakayoko",
        "name": "Bakayoko",
        "fullName": "Saint-Cyr Johan Bakayoko",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 86,
            "sho": 73,
            "pas": 73,
            "dri": 85,
            "def": 34,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_veerman",
        "name": "Veerman",
        "fullName": "Joey Veerman",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 71,
            "sho": 67,
            "pas": 87,
            "dri": 83,
            "def": 68,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_schouten",
        "name": "Schouten",
        "fullName": "Jerdy Schouten",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 70,
            "sho": 60,
            "pas": 70,
            "dri": 65,
            "def": 80,
            "phy": 87
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_lang",
        "name": "Lang",
        "fullName": "Noa Noëll Lang",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 87,
            "sho": 70,
            "pas": 73,
            "dri": 80,
            "def": 43,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_til",
        "name": "Til",
        "fullName": "Guus Til",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 71,
            "sho": 68,
            "pas": 84,
            "dri": 80,
            "def": 55,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_dest",
        "name": "Dest",
        "fullName": "Sergiño Gianni Dest",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 85,
            "sho": 57,
            "pas": 69,
            "dri": 70,
            "def": 74,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_boscagli",
        "name": "Boscagli",
        "fullName": "Olivier Boscagli",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 70,
            "sho": 43,
            "pas": 63,
            "dri": 62,
            "def": 81,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "silver_flamingo",
        "name": "Flamingo",
        "fullName": "Ryan Flamingo",
        "rating": 74,
        "cardType": "silver",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 60,
            "sho": 31,
            "pas": 58,
            "dri": 55,
            "def": 75,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_benitez",
        "name": "Benitez",
        "fullName": "Walter Daniel Benítez",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "PSV",
            "id": 674
        },
        "stats": {
            "pac": 83,
            "sho": 81,
            "pas": 79,
            "dri": 78,
            "def": 79,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_icardi",
        "name": "Icardi",
        "fullName": "Mauro Emanuel Icardi",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 76,
            "sho": 89,
            "pas": 73,
            "dri": 78,
            "def": 42,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_osimhen",
        "name": "Osimhen",
        "fullName": "Victor James Osimhen",
        "rating": 87,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 88,
            "sho": 86,
            "pas": 78,
            "dri": 82,
            "def": 32,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 4300
    },
    {
        "id": "gold_rare_torreira",
        "name": "Torreira",
        "fullName": "Lucas Sebastián Torreira Di Pascua",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 71,
            "sho": 62,
            "pas": 76,
            "dri": 69,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_muslera",
        "name": "Muslera",
        "fullName": "Néstor Fernando Muslera Micol",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 81,
            "sho": 78,
            "pas": 82,
            "dri": 81,
            "def": 79,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_davinson_sanchez",
        "name": "Davinson Sanchez",
        "fullName": "Dávinson Sánchez Mina",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 68,
            "sho": 45,
            "pas": 66,
            "dri": 59,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_sara",
        "name": "Sara",
        "fullName": "Gabriel Davi Gomes Sara",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 67,
            "sho": 64,
            "pas": 79,
            "dri": 77,
            "def": 55,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_mertens",
        "name": "Mertens",
        "fullName": "Dries Mertens",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 68,
            "sho": 70,
            "pas": 84,
            "dri": 80,
            "def": 64,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ziyech",
        "name": "Ziyech",
        "fullName": "Hakim Ziyech",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 87,
            "sho": 76,
            "pas": 77,
            "dri": 82,
            "def": 34,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_baris_alper_yilmaz",
        "name": "Baris Alper Yilmaz",
        "fullName": "Barış Alper Yılmaz",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 83,
            "sho": 70,
            "pas": 66,
            "dri": 82,
            "def": 33,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_nelsson",
        "name": "Nelsson",
        "fullName": "Victor Enok Nelsson",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 65,
            "sho": 35,
            "pas": 64,
            "dri": 56,
            "def": 82,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_jakobs",
        "name": "Jakobs",
        "fullName": "Ismail Joshua Jakobs",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 82,
            "sho": 55,
            "pas": 67,
            "dri": 65,
            "def": 68,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_batshuayi",
        "name": "Batshuayi",
        "fullName": "Michy Batshuayi Tunga",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Galatasaray",
            "id": 610
        },
        "stats": {
            "pac": 74,
            "sho": 83,
            "pas": 66,
            "dri": 74,
            "def": 38,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_dzeko",
        "name": "Dzeko",
        "fullName": "Edin Džeko",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Bosnia y Herzegovina",
            "code": "ba"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 78,
            "sho": 87,
            "pas": 70,
            "dri": 76,
            "def": 36,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_tadic",
        "name": "Tadic",
        "fullName": "Dušan Tadić",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 90,
            "sho": 69,
            "pas": 72,
            "dri": 85,
            "def": 38,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_fred",
        "name": "Fred",
        "fullName": "Frederico Rodrigues de Paula Santos",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 76,
            "sho": 76,
            "pas": 82,
            "dri": 80,
            "def": 60,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_amrabat",
        "name": "Amrabat",
        "fullName": "Sofyan Amrabat",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 68,
            "sho": 58,
            "pas": 70,
            "dri": 65,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_en_nesyri",
        "name": "En-Nesyri",
        "fullName": "Youssef En-Nesyri",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 74,
            "sho": 84,
            "pas": 67,
            "dri": 80,
            "def": 35,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_livakovic",
        "name": "Livakovic",
        "fullName": "Dominik Livaković",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 79,
            "sho": 77,
            "pas": 81,
            "dri": 82,
            "def": 70,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_szymanski",
        "name": "Szymanski",
        "fullName": "Sebastian Szymański",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 72,
            "sho": 74,
            "pas": 84,
            "dri": 83,
            "def": 60,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_soyuncu",
        "name": "Soyuncu",
        "fullName": "Çağlar Söyüncü",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 59,
            "sho": 39,
            "pas": 60,
            "dri": 59,
            "def": 78,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_djiku",
        "name": "Djiku",
        "fullName": "Alexander Kwabena Baidoo Djiku",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Ghana",
            "code": "gh"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 67,
            "sho": 31,
            "pas": 55,
            "dri": 61,
            "def": 81,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_kadioglu",
        "name": "Kadioglu",
        "fullName": "Ferdi Erenay Kadıoğlu",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Fenerbahce",
            "id": 611
        },
        "stats": {
            "pac": 82,
            "sho": 59,
            "pas": 67,
            "dri": 69,
            "def": 72,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_lookman",
        "name": "Lookman",
        "fullName": "Ademola Olajide Lookman",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 76,
            "sho": 88,
            "pas": 66,
            "dri": 76,
            "def": 33,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_retegui",
        "name": "Retegui",
        "fullName": "Mateo Retegui",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 83,
            "sho": 79,
            "pas": 73,
            "dri": 78,
            "def": 36,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_ederson_atalanta",
        "name": "Ederson",
        "fullName": "Éderson José dos Santos Lourenço da Silva",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 77,
            "sho": 71,
            "pas": 88,
            "dri": 86,
            "def": 62,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_de_ketelaere",
        "name": "De Ketelaere",
        "fullName": "Charles De Ketelaere",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 74,
            "sho": 70,
            "pas": 86,
            "dri": 85,
            "def": 62,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_scalvini",
        "name": "Scalvini",
        "fullName": "Giorgio Scalvini",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 70,
            "sho": 44,
            "pas": 57,
            "dri": 58,
            "def": 78,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_hien",
        "name": "Hien",
        "fullName": "Isak Malcolm Kwaku Hien",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 67,
            "sho": 36,
            "pas": 65,
            "dri": 55,
            "def": 83,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_ruggeri",
        "name": "Ruggeri",
        "fullName": "Matteo Ruggeri",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 82,
            "sho": 54,
            "pas": 72,
            "dri": 65,
            "def": 76,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_zappacosta",
        "name": "Zappacosta",
        "fullName": "Davide Zappacosta",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 84,
            "sho": 58,
            "pas": 67,
            "dri": 68,
            "def": 74,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_pasalic",
        "name": "Pasalic",
        "fullName": "Mario Pašalić",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 67,
            "sho": 72,
            "pas": 86,
            "dri": 80,
            "def": 68,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_carnesecchi",
        "name": "Carnesecchi",
        "fullName": "Marco Carnesecchi",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 82,
            "sho": 82,
            "pas": 79,
            "dri": 78,
            "def": 71,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_kolasinac",
        "name": "Kolasinac",
        "fullName": "Sead Kolašinac",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Bosnia y Herzegovina",
            "code": "ba"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 62,
            "sho": 36,
            "pas": 63,
            "dri": 62,
            "def": 84,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_samardzic",
        "name": "Samardzic",
        "fullName": "Lazar Samardžić",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Atalanta",
            "id": 102
        },
        "stats": {
            "pac": 71,
            "sho": 69,
            "pas": 81,
            "dri": 78,
            "def": 59,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_nico_williams",
        "name": "Nico Williams",
        "fullName": "Nicholas Williams Arthuer",
        "rating": 85,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 91,
            "sho": 80,
            "pas": 80,
            "dri": 85,
            "def": 46,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 2300
    },
    {
        "id": "gold_rare_inaki_williams",
        "name": "Inaki Williams",
        "fullName": "Iñaki Williams Arthuer",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Ghana",
            "code": "gh"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 87,
            "sho": 75,
            "pas": 74,
            "dri": 84,
            "def": 41,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_sancet",
        "name": "Sancet",
        "fullName": "Oihan Sancet Tirapu",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 73,
            "sho": 71,
            "pas": 86,
            "dri": 83,
            "def": 68,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_unai_simon",
        "name": "Unai Simon",
        "fullName": "Unai Simón Mendibil",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 85,
            "sho": 85,
            "pas": 78,
            "dri": 87,
            "def": 71,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_vivian",
        "name": "Vivian",
        "fullName": "Daniel Vivian Moreno",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 68,
            "sho": 44,
            "pas": 61,
            "dri": 62,
            "def": 87,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_yeray",
        "name": "Yeray",
        "fullName": "Yeray Álvarez López",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 72,
            "sho": 33,
            "pas": 62,
            "dri": 59,
            "def": 84,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_yuri",
        "name": "Yuri",
        "fullName": "Yuri Berchiche Izeta",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 84,
            "sho": 60,
            "pas": 67,
            "dri": 67,
            "def": 77,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_de_marcos",
        "name": "De Marcos",
        "fullName": "Óscar de Marcos Arana",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 86,
            "sho": 51,
            "pas": 71,
            "dri": 66,
            "def": 72,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_galarreta",
        "name": "Galarreta",
        "fullName": "Iñigo Ruiz de Galarreta Etxeberria",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 67,
            "sho": 69,
            "pas": 85,
            "dri": 84,
            "def": 67,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_guruzeta",
        "name": "Guruzeta",
        "fullName": "Gorka Guruzeta Rodríguez",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 77,
            "sho": 84,
            "pas": 70,
            "dri": 73,
            "def": 40,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_berenguer",
        "name": "Berenguer",
        "fullName": "Alejandro Berenguer Remiro",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 87,
            "sho": 66,
            "pas": 69,
            "dri": 80,
            "def": 42,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_prados",
        "name": "Prados",
        "fullName": "Beñat Prados Díaz",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 61,
            "sho": 66,
            "pas": 82,
            "dri": 79,
            "def": 55,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_jauregizar",
        "name": "Jauregizar",
        "fullName": "Mikel Jauregizar Alboniga",
        "rating": 71,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 61,
            "sho": 64,
            "pas": 71,
            "dri": 71,
            "def": 54,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 400
    },
    {
        "id": "gold_rare_agirrezabala",
        "name": "Agirrezabala",
        "fullName": "Julen Agirrezabala Astúlez",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Athletic Club",
            "id": 77
        },
        "stats": {
            "pac": 78,
            "sho": 75,
            "pas": 77,
            "dri": 79,
            "def": 66,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_zubimendi",
        "name": "Zubimendi",
        "fullName": "Martín Zubimendi Ibáñez",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 71,
            "sho": 60,
            "pas": 79,
            "dri": 70,
            "def": 86,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_kubo",
        "name": "Kubo",
        "fullName": "Takefusa Kubo",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 90,
            "sho": 76,
            "pas": 72,
            "dri": 87,
            "def": 36,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_oyarzabal",
        "name": "Oyarzabal",
        "fullName": "Mikel Oyarzabal Ugarte",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 84,
            "sho": 85,
            "pas": 73,
            "dri": 82,
            "def": 38,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_remiro",
        "name": "Remiro",
        "fullName": "Álex Remiro Gargallo",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 80,
            "sho": 79,
            "pas": 83,
            "dri": 85,
            "def": 80,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_brais_mendez",
        "name": "Brais Mendez",
        "fullName": "Brais Méndez Portela",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 68,
            "sho": 69,
            "pas": 85,
            "dri": 83,
            "def": 69,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_barrenetxea",
        "name": "Barrenetxea",
        "fullName": "Ander Barrenetxea Muguruza",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 86,
            "sho": 66,
            "pas": 67,
            "dri": 79,
            "def": 41,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_sucic",
        "name": "Sucic",
        "fullName": "Luka Sučić",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 64,
            "sho": 66,
            "pas": 78,
            "dri": 81,
            "def": 56,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_zubeldia",
        "name": "Zubeldia",
        "fullName": "Igor Zubeldia Elorza",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 67,
            "sho": 40,
            "pas": 63,
            "dri": 57,
            "def": 86,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_aguerd",
        "name": "Aguerd",
        "fullName": "Nayef Aguerd",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 67,
            "sho": 42,
            "pas": 63,
            "dri": 55,
            "def": 83,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_traore_real_sociedad",
        "name": "Traore",
        "fullName": "Hamari Traoré",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Malí",
            "code": "ml"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 84,
            "sho": 53,
            "pas": 74,
            "dri": 71,
            "def": 74,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_javi_lopez",
        "name": "Javi Lopez",
        "fullName": "Javier López Carballo",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 78,
            "sho": 56,
            "pas": 65,
            "dri": 67,
            "def": 75,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_sergio_gomez",
        "name": "Sergio Gomez",
        "fullName": "Sergio Gómez Martín",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 81,
            "sho": 48,
            "pas": 65,
            "dri": 69,
            "def": 72,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_oskarsson",
        "name": "Oskarsson",
        "fullName": "Orri Steinn Óskarsson",
        "rating": 73,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Islandia",
            "code": "is"
        },
        "club": {
            "name": "Real Sociedad",
            "id": 92
        },
        "stats": {
            "pac": 77,
            "sho": 79,
            "pas": 57,
            "dri": 73,
            "def": 32,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_isco",
        "name": "Isco",
        "fullName": "Francisco Román Alarcón Suárez",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 68,
            "sho": 77,
            "pas": 90,
            "dri": 83,
            "def": 64,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_lo_celso",
        "name": "Lo Celso",
        "fullName": "Giovani Lo Celso",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 67,
            "sho": 72,
            "pas": 85,
            "dri": 86,
            "def": 58,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_vitor_roque",
        "name": "Vitor Roque",
        "fullName": "Vitor Hugo Roque Ferreira",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 71,
            "sho": 80,
            "pas": 66,
            "dri": 72,
            "def": 37,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_abde",
        "name": "Abde",
        "fullName": "Abdessamad Ezzalzouli",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 81,
            "sho": 68,
            "pas": 72,
            "dri": 77,
            "def": 38,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_fornals",
        "name": "Fornals",
        "fullName": "Pablo Fornals Malla",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 73,
            "sho": 68,
            "pas": 83,
            "dri": 83,
            "def": 62,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_johnny_cardoso",
        "name": "Johnny Cardoso",
        "fullName": "João Lucas de Souza Cardoso",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 62,
            "sho": 54,
            "pas": 67,
            "dri": 65,
            "def": 81,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_marc_roca",
        "name": "Marc Roca",
        "fullName": "Marc Roca Junqué",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 62,
            "sho": 52,
            "pas": 75,
            "dri": 68,
            "def": 77,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_bartra",
        "name": "Bartra",
        "fullName": "Marc Bartra Aregall",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 62,
            "sho": 38,
            "pas": 58,
            "dri": 56,
            "def": 80,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_llorente_real_betis",
        "name": "Llorente",
        "fullName": "Diego Javier Llorente Ríos",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 73,
            "sho": 35,
            "pas": 63,
            "dri": 57,
            "def": 82,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_bellerin",
        "name": "Bellerin",
        "fullName": "Héctor Bellerín Moruno",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 85,
            "sho": 58,
            "pas": 65,
            "dri": 70,
            "def": 71,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_perraud",
        "name": "Perraud",
        "fullName": "Romain Paul Jean-Michel Perraud",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 84,
            "sho": 53,
            "pas": 66,
            "dri": 65,
            "def": 75,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_rui_silva",
        "name": "Rui Silva",
        "fullName": "Rui Tiago Dantas da Silva",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 77,
            "sho": 77,
            "pas": 80,
            "dri": 82,
            "def": 73,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_chimy_avila",
        "name": "Chimy Avila",
        "fullName": "Luis Ezequiel Ávila",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 73,
            "sho": 83,
            "pas": 70,
            "dri": 76,
            "def": 31,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_bakambu",
        "name": "Bakambu",
        "fullName": "Cédric Bakambu",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "RD Congo",
            "code": "cd"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 73,
            "sho": 82,
            "pas": 68,
            "dri": 70,
            "def": 35,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_assane_diao",
        "name": "Assane Diao",
        "fullName": "Assane Diao Diaoune",
        "rating": 73,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Real Betis",
            "id": 90
        },
        "stats": {
            "pac": 81,
            "sho": 64,
            "pas": 66,
            "dri": 73,
            "def": 30,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_gerard_moreno",
        "name": "Gerard Moreno",
        "fullName": "Gerard Moreno Balagueró",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 82,
            "sho": 82,
            "pas": 73,
            "dri": 77,
            "def": 42,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_baena",
        "name": "Baena",
        "fullName": "Álex Baena Rodríguez",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 76,
            "sho": 73,
            "pas": 86,
            "dri": 83,
            "def": 64,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_ayoze_perez",
        "name": "Ayoze Perez",
        "fullName": "Ayoze Pérez Gutiérrez",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 75,
            "sho": 85,
            "pas": 72,
            "dri": 75,
            "def": 30,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_parejo",
        "name": "Parejo",
        "fullName": "Daniel Parejo Muñoz",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 70,
            "sho": 72,
            "pas": 87,
            "dri": 85,
            "def": 60,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_yeremy_pino",
        "name": "Yeremy Pino",
        "fullName": "Yeremy Jesús Pino Santos",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 85,
            "sho": 73,
            "pas": 73,
            "dri": 84,
            "def": 43,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_barry",
        "name": "Barry",
        "fullName": "Thierno Mamadou Barry",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 70,
            "sho": 80,
            "pas": 65,
            "dri": 74,
            "def": 38,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_pepe_villarreal",
        "name": "Pepe",
        "fullName": "Nicolas Pépé",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 87,
            "sho": 69,
            "pas": 70,
            "dri": 81,
            "def": 39,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_comesana",
        "name": "Comesana",
        "fullName": "Santiago Comesaña Veiga",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 69,
            "sho": 66,
            "pas": 84,
            "dri": 81,
            "def": 63,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_gueye",
        "name": "Gueye",
        "fullName": "Pape Alassane Gueye",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 60,
            "sho": 60,
            "pas": 71,
            "dri": 66,
            "def": 79,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_albiol",
        "name": "Albiol",
        "fullName": "Raúl Albiol Tortajada",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 65,
            "sho": 31,
            "pas": 63,
            "dri": 61,
            "def": 82,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_bailly",
        "name": "Bailly",
        "fullName": "Eric Bertrand Bailly",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 65,
            "sho": 33,
            "pas": 55,
            "dri": 58,
            "def": 78,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_logan_costa",
        "name": "Logan Costa",
        "fullName": "Logan Evans Costa",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Cabo Verde",
            "code": "cv"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 62,
            "sho": 39,
            "pas": 56,
            "dri": 58,
            "def": 79,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_foyth",
        "name": "Foyth",
        "fullName": "Juan Marcos Foyth",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 80,
            "sho": 52,
            "pas": 71,
            "dri": 70,
            "def": 75,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_cardona",
        "name": "Cardona",
        "fullName": "Sergi Cardona Bermúdez",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 77,
            "sho": 54,
            "pas": 66,
            "dri": 65,
            "def": 70,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_conde",
        "name": "Conde",
        "fullName": "Diego José Conde Alcolado",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Villarreal",
            "id": 94
        },
        "stats": {
            "pac": 79,
            "sho": 75,
            "pas": 76,
            "dri": 77,
            "def": 74,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_lukebakio",
        "name": "Lukebakio",
        "fullName": "Dodi Lukébakio Ngandoli",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 84,
            "sho": 72,
            "pas": 72,
            "dri": 82,
            "def": 33,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_isaac_romero",
        "name": "Isaac Romero",
        "fullName": "Isaac Romero Bernal",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 69,
            "sho": 79,
            "pas": 64,
            "dri": 76,
            "def": 33,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_saul",
        "name": "Saul",
        "fullName": "Saúl Ñíguez Esclápez",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 67,
            "sho": 69,
            "pas": 84,
            "dri": 79,
            "def": 61,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_sow",
        "name": "Sow",
        "fullName": "Djibril Sow",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 64,
            "sho": 68,
            "pas": 81,
            "dri": 82,
            "def": 59,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_lokonga",
        "name": "Lokonga",
        "fullName": "Albert Sambi Lokonga",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 64,
            "sho": 64,
            "pas": 76,
            "dri": 77,
            "def": 56,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_gudelj",
        "name": "Gudelj",
        "fullName": "Nemanja Gudelj",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 64,
            "sho": 40,
            "pas": 65,
            "dri": 55,
            "def": 83,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_bade",
        "name": "Bade",
        "fullName": "Loïc Badé",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 73,
            "sho": 34,
            "pas": 56,
            "dri": 56,
            "def": 80,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_nyland",
        "name": "Nyland",
        "fullName": "Ørjan Håskjold Nyland",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 80,
            "sho": 72,
            "pas": 78,
            "dri": 75,
            "def": 69,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_pedrosa",
        "name": "Pedrosa",
        "fullName": "Adrià Giner Pedrosa",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 79,
            "sho": 49,
            "pas": 66,
            "dri": 68,
            "def": 75,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_juanlu",
        "name": "Juanlu",
        "fullName": "Juan Luis Sánchez Velasco",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 83,
            "sho": 46,
            "pas": 71,
            "dri": 65,
            "def": 68,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_ejuke",
        "name": "Ejuke",
        "fullName": "Chidera Ejuke",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 79,
            "sho": 72,
            "pas": 67,
            "dri": 76,
            "def": 31,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_iheanacho",
        "name": "Iheanacho",
        "fullName": "Kelechi Promise Iheanacho",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 78,
            "sho": 81,
            "pas": 65,
            "dri": 74,
            "def": 28,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_peque",
        "name": "Peque",
        "fullName": "Gerard Fernández Castellano",
        "rating": 74,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 68,
            "sho": 67,
            "pas": 80,
            "dri": 73,
            "def": 61,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "silver_carmona",
        "name": "Carmona",
        "fullName": "José Ángel Carmona Navarro",
        "rating": 74,
        "cardType": "silver",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Sevilla",
            "id": 559
        },
        "stats": {
            "pac": 78,
            "sho": 54,
            "pas": 65,
            "dri": 68,
            "def": 68,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_tsygankov",
        "name": "Tsygankov",
        "fullName": "Viktor Vitaliyovych Tsygankov",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 86,
            "sho": 71,
            "pas": 79,
            "dri": 88,
            "def": 44,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_abel_ruiz",
        "name": "Abel Ruiz",
        "fullName": "Abel Ruiz Ortega",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 71,
            "sho": 75,
            "pas": 63,
            "dri": 70,
            "def": 30,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_miovski",
        "name": "Miovski",
        "fullName": "Bojan Miovski",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Macedonia del Norte",
            "code": "mk"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 73,
            "sho": 79,
            "pas": 60,
            "dri": 71,
            "def": 36,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_herrera",
        "name": "Herrera",
        "fullName": "Yangel Clemente Herrera Ravelo",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Venezuela",
            "code": "ve"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 72,
            "sho": 71,
            "pas": 84,
            "dri": 78,
            "def": 59,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_ivan_martin",
        "name": "Ivan Martin",
        "fullName": "Iván Martín Núñez",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 69,
            "sho": 73,
            "pas": 80,
            "dri": 81,
            "def": 65,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_van_de_beek",
        "name": "Van de Beek",
        "fullName": "Donny van de Beek",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 61,
            "sho": 67,
            "pas": 81,
            "dri": 79,
            "def": 61,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_blind",
        "name": "Blind",
        "fullName": "Daley Blind",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 74,
            "sho": 42,
            "pas": 67,
            "dri": 55,
            "def": 82,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_david_lopez",
        "name": "David Lopez",
        "fullName": "David López Silva",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 67,
            "sho": 39,
            "pas": 65,
            "dri": 59,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_krejci",
        "name": "Krejci",
        "fullName": "Ladislav Krejčí",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 66,
            "sho": 35,
            "pas": 57,
            "dri": 59,
            "def": 82,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_arnau_martinez",
        "name": "Arnau Martinez",
        "fullName": "Arnau Martínez López",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 79,
            "sho": 55,
            "pas": 66,
            "dri": 68,
            "def": 72,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_gutierrez",
        "name": "Gutierrez",
        "fullName": "Miguel Gutiérrez Ortega",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 84,
            "sho": 51,
            "pas": 71,
            "dri": 71,
            "def": 78,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_gazzaniga",
        "name": "Gazzaniga",
        "fullName": "Paulo Dino Gazzaniga",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 76,
            "sho": 74,
            "pas": 75,
            "dri": 76,
            "def": 72,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_bryan_gil",
        "name": "Bryan Gil",
        "fullName": "Bryan Gil Salvatierra",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 82,
            "sho": 68,
            "pas": 70,
            "dri": 77,
            "def": 41,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_asprilla",
        "name": "Asprilla",
        "fullName": "Yáser Esneider Asprilla Martínez",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 71,
            "sho": 64,
            "pas": 79,
            "dri": 75,
            "def": 59,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_portu",
        "name": "Portu",
        "fullName": "Cristian Portugués Manzanera",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 84,
            "sho": 69,
            "pas": 68,
            "dri": 79,
            "def": 39,
            "phy": 51
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_misehouy",
        "name": "Misehouy",
        "fullName": "Gabriel Osei Misehouy",
        "rating": 68,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Girona",
            "id": 298
        },
        "stats": {
            "pac": 61,
            "sho": 61,
            "pas": 71,
            "dri": 70,
            "def": 57,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 325
    },
    {
        "id": "gold_rare_bowen",
        "name": "Bowen",
        "fullName": "Jarrod Bowen",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 92,
            "sho": 77,
            "pas": 77,
            "dri": 87,
            "def": 41,
            "phy": 57
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_kudus",
        "name": "Kudus",
        "fullName": "Mohammed Kudus",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Ghana",
            "code": "gh"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 75,
            "sho": 77,
            "pas": 85,
            "dri": 88,
            "def": 61,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_lucas_paqueta",
        "name": "Lucas Paqueta",
        "fullName": "Lucas Tolentino Coelho de Lima",
        "rating": 84,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 73,
            "sho": 72,
            "pas": 90,
            "dri": 83,
            "def": 70,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 1900
    },
    {
        "id": "gold_rare_fullkrug",
        "name": "Fullkrug",
        "fullName": "Niclas Füllkrug",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 80,
            "sho": 86,
            "pas": 71,
            "dri": 79,
            "def": 40,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_soucek",
        "name": "Soucek",
        "fullName": "Tomáš Souček",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 68,
            "sho": 72,
            "pas": 84,
            "dri": 83,
            "def": 67,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_edson_alvarez",
        "name": "Edson Alvarez",
        "fullName": "Edson Omar Álvarez Velázquez",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "México",
            "code": "mx"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 61,
            "sho": 58,
            "pas": 77,
            "dri": 67,
            "def": 80,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_kilman",
        "name": "Kilman",
        "fullName": "Max Thomas Kilman",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 68,
            "sho": 35,
            "pas": 57,
            "dri": 59,
            "def": 84,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_todibo",
        "name": "Todibo",
        "fullName": "Jean-Clair Dimitri Roger Todibo",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 71,
            "sho": 33,
            "pas": 65,
            "dri": 64,
            "def": 80,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_areola",
        "name": "Areola",
        "fullName": "Alphonse Francis Areola",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 78,
            "sho": 80,
            "pas": 80,
            "dri": 82,
            "def": 70,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_wan_bissaka",
        "name": "Wan-Bissaka",
        "fullName": "Aaron Wan-Bissaka",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 88,
            "sho": 57,
            "pas": 72,
            "dri": 67,
            "def": 76,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_emerson",
        "name": "Emerson",
        "fullName": "Emerson Palmieri dos Santos",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 84,
            "sho": 58,
            "pas": 71,
            "dri": 72,
            "def": 77,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_summerville",
        "name": "Summerville",
        "fullName": "Crysencio Jilbert Sylverio Cirro Summerville",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 82,
            "sho": 70,
            "pas": 76,
            "dri": 81,
            "def": 36,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_rodriguez",
        "name": "Rodriguez",
        "fullName": "Guido Rodríguez",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 68,
            "sho": 62,
            "pas": 70,
            "dri": 71,
            "def": 85,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_antonio",
        "name": "Antonio",
        "fullName": "Michail Gregory Antonio",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Jamaica",
            "code": "jm"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 70,
            "sho": 76,
            "pas": 67,
            "dri": 73,
            "def": 34,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_coufal",
        "name": "Coufal",
        "fullName": "Vladimír Coufal",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "República Checa",
            "code": "cz"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 78,
            "sho": 58,
            "pas": 72,
            "dri": 65,
            "def": 74,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_fabianski",
        "name": "Fabianski",
        "fullName": "Łukasz Marek Fabiański",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "West Ham",
            "id": 563
        },
        "stats": {
            "pac": 73,
            "sho": 76,
            "pas": 72,
            "dri": 75,
            "def": 64,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_greenwood",
        "name": "Greenwood",
        "fullName": "Mason Will John Greenwood",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 85,
            "sho": 68,
            "pas": 72,
            "dri": 81,
            "def": 41,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_wahi",
        "name": "Wahi",
        "fullName": "Sepe Elye Wahi",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 78,
            "sho": 79,
            "pas": 60,
            "dri": 76,
            "def": 26,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_hojbjerg",
        "name": "Hojbjerg",
        "fullName": "Pierre-Emile Kordt Højbjerg",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 63,
            "sho": 59,
            "pas": 75,
            "dri": 70,
            "def": 81,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_rabiot",
        "name": "Rabiot",
        "fullName": "Adrien Rabiot-Provost",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 73,
            "sho": 73,
            "pas": 83,
            "dri": 82,
            "def": 69,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_rulli",
        "name": "Rulli",
        "fullName": "Gerónimo Rulli",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 77,
            "sho": 75,
            "pas": 77,
            "dri": 82,
            "def": 74,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_balerdi",
        "name": "Balerdi",
        "fullName": "Leonardo Julián Balerdi Rosa",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 62,
            "sho": 42,
            "pas": 57,
            "dri": 55,
            "def": 82,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_kondogbia",
        "name": "Kondogbia",
        "fullName": "Geoffrey Edwin Kondogbia",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "República Centroafricana",
            "code": "cf"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 62,
            "sho": 55,
            "pas": 70,
            "dri": 71,
            "def": 81,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_harit",
        "name": "Harit",
        "fullName": "Amine Harit",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 63,
            "sho": 65,
            "pas": 79,
            "dri": 81,
            "def": 63,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_henrique",
        "name": "Henrique",
        "fullName": "Luis Henrique Tomaz de Lima",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 83,
            "sho": 69,
            "pas": 73,
            "dri": 80,
            "def": 41,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_brassier",
        "name": "Brassier",
        "fullName": "Lilian Brassier",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 71,
            "sho": 33,
            "pas": 64,
            "dri": 61,
            "def": 79,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_merlin",
        "name": "Merlin",
        "fullName": "Quentin Merlin",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 84,
            "sho": 54,
            "pas": 70,
            "dri": 67,
            "def": 75,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_murillo",
        "name": "Murillo",
        "fullName": "Michael Amir Murillo Bermúdez",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Panamá",
            "code": "pa"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 76,
            "sho": 47,
            "pas": 69,
            "dri": 70,
            "def": 74,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_rongier",
        "name": "Rongier",
        "fullName": "Valentin Rongier",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 68,
            "sho": 71,
            "pas": 82,
            "dri": 80,
            "def": 56,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "silver_rowe",
        "name": "Rowe",
        "fullName": "Jonathan David Rowe",
        "rating": 74,
        "cardType": "silver",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 80,
            "sho": 69,
            "pas": 65,
            "dri": 79,
            "def": 30,
            "phy": 51
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_maupay",
        "name": "Maupay",
        "fullName": "Neal Maupay",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Marseille",
            "id": 516
        },
        "stats": {
            "pac": 73,
            "sho": 80,
            "pas": 58,
            "dri": 69,
            "def": 36,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_golovin",
        "name": "Golovin",
        "fullName": "Aleksandr Sergeyevich Golovin",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Rusia",
            "code": "ru"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 67,
            "sho": 73,
            "pas": 87,
            "dri": 86,
            "def": 66,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_zakaria",
        "name": "Zakaria",
        "fullName": "Denis Lemi Zakaria Lako Lado",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 61,
            "sho": 58,
            "pas": 70,
            "dri": 71,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_embolo",
        "name": "Embolo",
        "fullName": "Breel-Donald Embolo",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 79,
            "sho": 81,
            "pas": 68,
            "dri": 75,
            "def": 38,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_balogun",
        "name": "Balogun",
        "fullName": "Folarin Jerry Balogun",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 71,
            "sho": 80,
            "pas": 71,
            "dri": 73,
            "def": 37,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_akliouche",
        "name": "Akliouche",
        "fullName": "Maghnes Akliouche",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 81,
            "sho": 69,
            "pas": 70,
            "dri": 77,
            "def": 30,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_ben_seghir",
        "name": "Ben Seghir",
        "fullName": "Eliesse Ben Seghir",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 84,
            "sho": 70,
            "pas": 64,
            "dri": 78,
            "def": 32,
            "phy": 56
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_camara",
        "name": "Camara",
        "fullName": "Lamine Camara",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 71,
            "sho": 62,
            "pas": 82,
            "dri": 75,
            "def": 56,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_kehrer",
        "name": "Kehrer",
        "fullName": "Jan Thilo Kehrer",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 66,
            "sho": 37,
            "pas": 63,
            "dri": 58,
            "def": 79,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_singo",
        "name": "Singo",
        "fullName": "Wilfried Stephane Singo",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Costa de Marfil",
            "code": "ci"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 61,
            "sho": 40,
            "pas": 60,
            "dri": 56,
            "def": 79,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_kohn",
        "name": "Kohn",
        "fullName": "Philipp Köhn",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 73,
            "sho": 78,
            "pas": 75,
            "dri": 75,
            "def": 69,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_vanderson",
        "name": "Vanderson",
        "fullName": "Vanderson de Oliveira Campos",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 79,
            "sho": 58,
            "pas": 65,
            "dri": 67,
            "def": 75,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_caio_henrique",
        "name": "Caio Henrique",
        "fullName": "Caio Henrique Oliveira Silva",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 84,
            "sho": 57,
            "pas": 72,
            "dri": 70,
            "def": 76,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_minamino",
        "name": "Minamino",
        "fullName": "Takumi Minamino",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Japón",
            "code": "jp"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 67,
            "sho": 69,
            "pas": 80,
            "dri": 82,
            "def": 64,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_salisu",
        "name": "Salisu",
        "fullName": "Mohammed Salisu Abdul Karim",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Ghana",
            "code": "gh"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 66,
            "sho": 32,
            "pas": 65,
            "dri": 55,
            "def": 78,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "silver_ilenikhena",
        "name": "Ilenikhena",
        "fullName": "George Ilenikhena",
        "rating": 72,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Monaco",
            "id": 548
        },
        "stats": {
            "pac": 75,
            "sho": 75,
            "pas": 64,
            "dri": 70,
            "def": 32,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "gold_rare_sesko",
        "name": "Sesko",
        "fullName": "Benjamin Šeško",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Eslovenia",
            "code": "si"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 83,
            "sho": 80,
            "pas": 64,
            "dri": 75,
            "def": 31,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_openda",
        "name": "Openda",
        "fullName": "Ikoma-Loïs Openda",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 81,
            "sho": 84,
            "pas": 68,
            "dri": 79,
            "def": 30,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_xavi_simons",
        "name": "Xavi Simons",
        "fullName": "Xavier Quentin Shay Simons",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 74,
            "sho": 78,
            "pas": 84,
            "dri": 86,
            "def": 65,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_orban",
        "name": "Orban",
        "fullName": "Willi Thomas Orbán",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Hungría",
            "code": "hu"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 70,
            "sho": 43,
            "pas": 63,
            "dri": 63,
            "def": 85,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_gulacsi",
        "name": "Gulacsi",
        "fullName": "Péter Gulácsi",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Hungría",
            "code": "hu"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 80,
            "sho": 84,
            "pas": 81,
            "dri": 86,
            "def": 76,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_lukeba",
        "name": "Lukeba",
        "fullName": "Castello Junior Lukeba",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 67,
            "sho": 41,
            "pas": 63,
            "dri": 57,
            "def": 82,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_raum",
        "name": "Raum",
        "fullName": "David Raum",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 82,
            "sho": 53,
            "pas": 68,
            "dri": 70,
            "def": 74,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_geertruida",
        "name": "Geertruida",
        "fullName": "Lutsharel Geertruida",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 85,
            "sho": 58,
            "pas": 73,
            "dri": 72,
            "def": 74,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_haidara",
        "name": "Haidara",
        "fullName": "Amadou Haidara",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Malí",
            "code": "ml"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 72,
            "sho": 72,
            "pas": 78,
            "dri": 80,
            "def": 58,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_kampl",
        "name": "Kampl",
        "fullName": "Kevin Kampl",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Eslovenia",
            "code": "si"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 63,
            "sho": 66,
            "pas": 83,
            "dri": 79,
            "def": 61,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_henrichs",
        "name": "Henrichs",
        "fullName": "Benjamin Paa Kwesi Henrichs",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 81,
            "sho": 57,
            "pas": 70,
            "dri": 66,
            "def": 75,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_seiwald",
        "name": "Seiwald",
        "fullName": "Nicolas Seiwald",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 59,
            "sho": 61,
            "pas": 73,
            "dri": 65,
            "def": 78,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_baumgartner",
        "name": "Baumgartner",
        "fullName": "Christoph Baumgartner",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 68,
            "sho": 68,
            "pas": 79,
            "dri": 78,
            "def": 57,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_poulsen",
        "name": "Poulsen",
        "fullName": "Yussuf Yurary Poulsen",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 75,
            "sho": 78,
            "pas": 62,
            "dri": 70,
            "def": 25,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_nusa",
        "name": "Nusa",
        "fullName": "Antonio Eromonsele Nordby Nusa",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 81,
            "sho": 65,
            "pas": 66,
            "dri": 80,
            "def": 37,
            "phy": 51
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_vandevoordt",
        "name": "Vandevoordt",
        "fullName": "Maarten Vandevoordt",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 77,
            "sho": 76,
            "pas": 69,
            "dri": 79,
            "def": 68,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_ouedraogo",
        "name": "Ouedraogo",
        "fullName": "Assan Ouédraogo",
        "rating": 70,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 62,
            "sho": 60,
            "pas": 75,
            "dri": 74,
            "def": 50,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 375
    },
    {
        "id": "gold_rare_marmoush",
        "name": "Marmoush",
        "fullName": "Omar Khaled Mohamed Marmoush",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Egipto",
            "code": "eg"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 83,
            "sho": 84,
            "pas": 70,
            "dri": 74,
            "def": 38,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ekitike",
        "name": "Ekitike",
        "fullName": "Hugo Ekitiké",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 81,
            "sho": 81,
            "pas": 64,
            "dri": 74,
            "def": 28,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_larsson",
        "name": "Larsson",
        "fullName": "Hugo Emanuel Larsson",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 67,
            "sho": 67,
            "pas": 82,
            "dri": 77,
            "def": 55,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_koch",
        "name": "Koch",
        "fullName": "Robin Koch",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 63,
            "sho": 35,
            "pas": 65,
            "dri": 57,
            "def": 84,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_trapp",
        "name": "Trapp",
        "fullName": "Kevin Trapp",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 80,
            "sho": 76,
            "pas": 75,
            "dri": 83,
            "def": 76,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_theate",
        "name": "Theate",
        "fullName": "Arthur Nicolas Theate",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 68,
            "sho": 44,
            "pas": 58,
            "dri": 60,
            "def": 84,
            "phy": 84
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_kristensen",
        "name": "Kristensen",
        "fullName": "Rasmus Nissen Kristensen",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 81,
            "sho": 56,
            "pas": 66,
            "dri": 68,
            "def": 72,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_nkounkou",
        "name": "Nkounkou",
        "fullName": "Niels Patrick Nkounkou",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 83,
            "sho": 56,
            "pas": 70,
            "dri": 66,
            "def": 72,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_skhiri",
        "name": "Skhiri",
        "fullName": "Ellyes Joris Skhiri",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Túnez",
            "code": "tn"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 68,
            "sho": 57,
            "pas": 70,
            "dri": 71,
            "def": 83,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_gotze",
        "name": "Gotze",
        "fullName": "Mario Götze",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 74,
            "sho": 74,
            "pas": 86,
            "dri": 82,
            "def": 67,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_chaibi",
        "name": "Chaibi",
        "fullName": "Farès Chaïbi",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Argelia",
            "code": "dz"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 71,
            "sho": 66,
            "pas": 80,
            "dri": 81,
            "def": 64,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_knauff",
        "name": "Knauff",
        "fullName": "Ansgar Knauff",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 79,
            "sho": 68,
            "pas": 71,
            "dri": 80,
            "def": 42,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_tuta",
        "name": "Tuta",
        "fullName": "Lucas Silva Melo",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 69,
            "sho": 34,
            "pas": 60,
            "dri": 55,
            "def": 82,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_dahoud",
        "name": "Dahoud",
        "fullName": "Mahmoud Dahoud",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 63,
            "sho": 62,
            "pas": 79,
            "dri": 78,
            "def": 64,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_uzun",
        "name": "Uzun",
        "fullName": "Can Yılmaz Uzun",
        "rating": 72,
        "cardType": "silver",
        "pos": "MCO",
        "nation": {
            "name": "Turquía",
            "code": "tr"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 58,
            "sho": 60,
            "pas": 76,
            "dri": 73,
            "def": 58,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 425
    },
    {
        "id": "silver_matanovic",
        "name": "Matanovic",
        "fullName": "Igor Matanović",
        "rating": 73,
        "cardType": "silver",
        "pos": "DEL",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 67,
            "sho": 73,
            "pas": 58,
            "dri": 67,
            "def": 26,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "gold_rare_smith_rowe",
        "name": "Smith Rowe",
        "fullName": "Emile Smith Rowe",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 70,
            "sho": 72,
            "pas": 84,
            "dri": 83,
            "def": 64,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_iwobi",
        "name": "Iwobi",
        "fullName": "Alex Iwobi",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 67,
            "sho": 64,
            "pas": 81,
            "dri": 79,
            "def": 57,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_antonee_robinson",
        "name": "Antonee Robinson",
        "fullName": "Antonee Robinson",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Estados Unidos",
            "code": "us"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 89,
            "sho": 56,
            "pas": 69,
            "dri": 69,
            "def": 80,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_andreas_pereira",
        "name": "Andreas Pereira",
        "fullName": "Andreas Hugo Hoelgebaum Pereira",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 64,
            "sho": 66,
            "pas": 80,
            "dri": 79,
            "def": 66,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_leno",
        "name": "Leno",
        "fullName": "Bernd Leno",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 85,
            "sho": 77,
            "pas": 82,
            "dri": 80,
            "def": 74,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_adama_traore",
        "name": "Adama Traore",
        "fullName": "Adama Traoré Diarra",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 81,
            "sho": 66,
            "pas": 68,
            "dri": 79,
            "def": 40,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_muniz",
        "name": "Muniz",
        "fullName": "Rodrigo Muniz Carvalho",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 80,
            "sho": 83,
            "pas": 60,
            "dri": 75,
            "def": 36,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_jimenez",
        "name": "Jimenez",
        "fullName": "Raúl Alonso Jiménez Rodríguez",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "México",
            "code": "mx"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 74,
            "sho": 77,
            "pas": 66,
            "dri": 76,
            "def": 36,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_bassey",
        "name": "Bassey",
        "fullName": "Calvin Bassey",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Nigeria",
            "code": "ng"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 63,
            "sho": 43,
            "pas": 64,
            "dri": 58,
            "def": 80,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_andersen",
        "name": "Andersen",
        "fullName": "Joachim Christian Andersen",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 65,
            "sho": 38,
            "pas": 60,
            "dri": 61,
            "def": 83,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_castagne",
        "name": "Castagne",
        "fullName": "Timothy Castagne",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 80,
            "sho": 58,
            "pas": 66,
            "dri": 67,
            "def": 71,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_lukic",
        "name": "Lukic",
        "fullName": "Saša Lukić",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 62,
            "sho": 71,
            "pas": 77,
            "dri": 77,
            "def": 56,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_sessegnon",
        "name": "Sessegnon",
        "fullName": "Kouassi Ryan Sessegnon",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 77,
            "sho": 57,
            "pas": 66,
            "dri": 65,
            "def": 71,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_nelson",
        "name": "Nelson",
        "fullName": "Reiss Luke Nelson",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 81,
            "sho": 65,
            "pas": 72,
            "dri": 77,
            "def": 30,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_wilson_fulham",
        "name": "Wilson",
        "fullName": "Harry Wilson",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Gales",
            "code": "gb-wls"
        },
        "club": {
            "name": "Fulham",
            "id": 63
        },
        "stats": {
            "pac": 83,
            "sho": 67,
            "pas": 72,
            "dri": 79,
            "def": 34,
            "phy": 54
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_matheus_cunha",
        "name": "Matheus Cunha",
        "fullName": "Matheus Santos Carneiro da Cunha",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 79,
            "sho": 83,
            "pas": 71,
            "dri": 80,
            "def": 28,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_ait_nouri",
        "name": "Ait-Nouri",
        "fullName": "Rayan Aït-Nouri",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Argelia",
            "code": "dz"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 82,
            "sho": 50,
            "pas": 75,
            "dri": 69,
            "def": 75,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_hwang_hee_chan",
        "name": "Hwang Hee Chan",
        "fullName": "Hwang Hee-chan",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 78,
            "sho": 79,
            "pas": 66,
            "dri": 80,
            "def": 37,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_lemina",
        "name": "Lemina",
        "fullName": "Mario René Junior Lemina",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Internacional",
            "code": "ga"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 63,
            "sho": 55,
            "pas": 72,
            "dri": 65,
            "def": 83,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_jose_sa",
        "name": "Jose Sa",
        "fullName": "José Pedro Malheiro de Sá",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 81,
            "sho": 79,
            "pas": 76,
            "dri": 77,
            "def": 69,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_semedo",
        "name": "Semedo",
        "fullName": "Nélson Cabral Semedo",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 80,
            "sho": 59,
            "pas": 66,
            "dri": 66,
            "def": 74,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_joao_gomes",
        "name": "Joao Gomes",
        "fullName": "João Victor Gomes da Silva",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 66,
            "sho": 64,
            "pas": 79,
            "dri": 80,
            "def": 64,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_andre",
        "name": "Andre",
        "fullName": "André Trindade da Costa Neto",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 68,
            "sho": 54,
            "pas": 74,
            "dri": 71,
            "def": 80,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_larsen",
        "name": "Larsen",
        "fullName": "Jørgen Strand Larsen",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 74,
            "sho": 79,
            "pas": 68,
            "dri": 73,
            "def": 32,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_guedes",
        "name": "Guedes",
        "fullName": "Gonçalo Manuel Ganchinho Guedes",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 83,
            "sho": 74,
            "pas": 74,
            "dri": 78,
            "def": 43,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_toti_gomes",
        "name": "Toti Gomes",
        "fullName": "Tote António Gomes",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 69,
            "sho": 38,
            "pas": 56,
            "dri": 55,
            "def": 78,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_dawson",
        "name": "Dawson",
        "fullName": "Craig Dawson",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 65,
            "sho": 34,
            "pas": 60,
            "dri": 61,
            "def": 79,
            "phy": 82
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_bueno",
        "name": "Bueno",
        "fullName": "Santiago Ignacio Bueno Sciutto",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 59,
            "sho": 30,
            "pas": 60,
            "dri": 55,
            "def": 77,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_bellegarde",
        "name": "Bellegarde",
        "fullName": "Jean-Ricner Bellegarde",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 64,
            "sho": 71,
            "pas": 79,
            "dri": 76,
            "def": 54,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_rodrigo_gomes",
        "name": "Rodrigo Gomes",
        "fullName": "Rodrigo Martins Gomes",
        "rating": 74,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Wolverhampton",
            "id": 76
        },
        "stats": {
            "pac": 80,
            "sho": 63,
            "pas": 65,
            "dri": 75,
            "def": 39,
            "phy": 50
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "gold_rare_pickford",
        "name": "Pickford",
        "fullName": "Jordan Lee Pickford",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 79,
            "sho": 80,
            "pas": 78,
            "dri": 86,
            "def": 78,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_branthwaite",
        "name": "Branthwaite",
        "fullName": "Jarrad Paul Branthwaite",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 71,
            "sho": 33,
            "pas": 63,
            "dri": 56,
            "def": 82,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_tarkowski",
        "name": "Tarkowski",
        "fullName": "James Alan Tarkowski",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 69,
            "sho": 44,
            "pas": 59,
            "dri": 64,
            "def": 80,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_calvert_lewin",
        "name": "Calvert-Lewin",
        "fullName": "Dominic Calvert-Lewin",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 78,
            "sho": 84,
            "pas": 66,
            "dri": 77,
            "def": 29,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_mcneil",
        "name": "McNeil",
        "fullName": "Dwight James Matthew McNeil",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 84,
            "sho": 68,
            "pas": 70,
            "dri": 84,
            "def": 31,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_mykolenko",
        "name": "Mykolenko",
        "fullName": "Vitaliy Serhiyovych Mykolenko",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Ucrania",
            "code": "ua"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 81,
            "sho": 50,
            "pas": 67,
            "dri": 68,
            "def": 76,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_gueye_everton",
        "name": "Gueye",
        "fullName": "Idrissa Gana Gueye",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 60,
            "sho": 60,
            "pas": 71,
            "dri": 66,
            "def": 81,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_ndiaye",
        "name": "Ndiaye",
        "fullName": "Iliman Cheikh Baroy Ndiaye",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 65,
            "sho": 64,
            "pas": 81,
            "dri": 76,
            "def": 59,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_lindstrom",
        "name": "Lindstrom",
        "fullName": "Jesper Grænge Lindstrøm",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 64,
            "sho": 65,
            "pas": 82,
            "dri": 77,
            "def": 60,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_garner",
        "name": "Garner",
        "fullName": "James David Garner",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 61,
            "sho": 64,
            "pas": 80,
            "dri": 78,
            "def": 59,
            "phy": 62
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_harrison",
        "name": "Harrison",
        "fullName": "Jack David Harrison",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 81,
            "sho": 64,
            "pas": 65,
            "dri": 78,
            "def": 36,
            "phy": 52
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_doucoure",
        "name": "Doucoure",
        "fullName": "Abdoulaye Doucouré",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Malí",
            "code": "ml"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 71,
            "sho": 66,
            "pas": 84,
            "dri": 79,
            "def": 63,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_beto",
        "name": "Beto",
        "fullName": "Norberto Bercique Gomes Betuncal",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 74,
            "sho": 79,
            "pas": 62,
            "dri": 75,
            "def": 39,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_mangala",
        "name": "Mangala",
        "fullName": "Orel Johnson Mangala",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 65,
            "sho": 71,
            "pas": 78,
            "dri": 75,
            "def": 63,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_coleman",
        "name": "Coleman",
        "fullName": "Seamus Coleman",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Irlanda",
            "code": "ie"
        },
        "club": {
            "name": "Everton",
            "id": 62
        },
        "stats": {
            "pac": 78,
            "sho": 47,
            "pas": 65,
            "dri": 65,
            "def": 71,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_gimenez_feyenoord",
        "name": "Gimenez",
        "fullName": "Santiago Tomás Giménez",
        "rating": 83,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "México",
            "code": "mx"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 79,
            "sho": 86,
            "pas": 66,
            "dri": 77,
            "def": 32,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 1500
    },
    {
        "id": "gold_rare_hancko",
        "name": "Hancko",
        "fullName": "Dávid Hancko",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Eslovaquia",
            "code": "sk"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 74,
            "sho": 33,
            "pas": 67,
            "dri": 65,
            "def": 86,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_timber_feyenoord",
        "name": "Timber",
        "fullName": "Quinten Ryan Crispito Timber",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 68,
            "sho": 69,
            "pas": 80,
            "dri": 81,
            "def": 58,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_bijlow",
        "name": "Bijlow",
        "fullName": "Justin Bijlow",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 76,
            "sho": 74,
            "pas": 76,
            "dri": 81,
            "def": 74,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_paixao",
        "name": "Paixao",
        "fullName": "Igor Guilherme Barbosa da Paixão",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 86,
            "sho": 74,
            "pas": 69,
            "dri": 83,
            "def": 32,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_stengs",
        "name": "Stengs",
        "fullName": "Calvin Stengs",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MCO",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 65,
            "sho": 73,
            "pas": 82,
            "dri": 79,
            "def": 61,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_trauner",
        "name": "Trauner",
        "fullName": "Gernot Trauner",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Austria",
            "code": "at"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 66,
            "sho": 31,
            "pas": 62,
            "dri": 55,
            "def": 80,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_welleneuther",
        "name": "Welleneuther",
        "fullName": "Timon Wellenreuther",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 78,
            "sho": 74,
            "pas": 75,
            "dri": 77,
            "def": 73,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_zerrouki",
        "name": "Zerrouki",
        "fullName": "Ramiz Larbi Zerrouki",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Argelia",
            "code": "dz"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 61,
            "sho": 54,
            "pas": 71,
            "dri": 65,
            "def": 79,
            "phy": 81
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_beelen",
        "name": "Beelen",
        "fullName": "Thomas Beelen",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 68,
            "sho": 40,
            "pas": 58,
            "dri": 58,
            "def": 79,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_nieuwkoop",
        "name": "Nieuwkoop",
        "fullName": "Bart Nieuwkoop",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 79,
            "sho": 50,
            "pas": 65,
            "dri": 68,
            "def": 72,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_bueno_feyenoord",
        "name": "Bueno",
        "fullName": "Hugo Bueno López",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 76,
            "sho": 56,
            "pas": 65,
            "dri": 70,
            "def": 72,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "gold_rare_carranza",
        "name": "Carranza",
        "fullName": "Julián Simón Carranza",
        "rating": 75,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 74,
            "sho": 79,
            "pas": 62,
            "dri": 73,
            "def": 36,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 700
    },
    {
        "id": "silver_milambo",
        "name": "Milambo",
        "fullName": "Antoni-Djibu Milambo",
        "rating": 73,
        "cardType": "silver",
        "pos": "MC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 63,
            "sho": 69,
            "pas": 74,
            "dri": 75,
            "def": 55,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 450
    },
    {
        "id": "silver_zechi_l",
        "name": "Zechiël",
        "fullName": "Gjivai Zechiël",
        "rating": 71,
        "cardType": "silver",
        "pos": "MCD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Feyenoord",
            "id": 675
        },
        "stats": {
            "pac": 55,
            "sho": 56,
            "pas": 67,
            "dri": 65,
            "def": 76,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 400
    },
    {
        "id": "gold_rare_zaccagni",
        "name": "Zaccagni",
        "fullName": "Mattia Zaccagni",
        "rating": 82,
        "cardType": "gold_rare",
        "pos": "EI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 86,
            "sho": 75,
            "pas": 72,
            "dri": 86,
            "def": 40,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 980
    },
    {
        "id": "gold_rare_guendouzi",
        "name": "Guendouzi",
        "fullName": "Mattéo Guendouzi Olié",
        "rating": 80,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 74,
            "sho": 74,
            "pas": 81,
            "dri": 85,
            "def": 64,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 900
    },
    {
        "id": "gold_rare_castellanos",
        "name": "Castellanos",
        "fullName": "Valentín Mariano José Castellanos Giménez",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 81,
            "sho": 78,
            "pas": 63,
            "dri": 76,
            "def": 28,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_romagnoli",
        "name": "Romagnoli",
        "fullName": "Alessio Romagnoli",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 71,
            "sho": 43,
            "pas": 68,
            "dri": 58,
            "def": 84,
            "phy": 85
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_provedel",
        "name": "Provedel",
        "fullName": "Ivan Provedel",
        "rating": 81,
        "cardType": "gold_rare",
        "pos": "POR",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 78,
            "sho": 81,
            "pas": 81,
            "dri": 81,
            "def": 69,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 940
    },
    {
        "id": "gold_rare_tavares",
        "name": "Tavares",
        "fullName": "Nuno Albertino Varela Tavares",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "LI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 86,
            "sho": 56,
            "pas": 71,
            "dri": 67,
            "def": 75,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_rovella",
        "name": "Rovella",
        "fullName": "Nicolò Rovella",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "MCD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 66,
            "sho": 54,
            "pas": 75,
            "dri": 67,
            "def": 79,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_dia",
        "name": "Dia",
        "fullName": "Boulaye Dia",
        "rating": 79,
        "cardType": "gold_rare",
        "pos": "DEL",
        "nation": {
            "name": "Senegal",
            "code": "sn"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 75,
            "sho": 84,
            "pas": 63,
            "dri": 75,
            "def": 30,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 860
    },
    {
        "id": "gold_rare_isaksen",
        "name": "Isaksen",
        "fullName": "Gustav Tang Isaksen",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Dinamarca",
            "code": "dk"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 83,
            "sho": 68,
            "pas": 66,
            "dri": 79,
            "def": 39,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_vecino",
        "name": "Vecino",
        "fullName": "Matías Vecino Falero",
        "rating": 78,
        "cardType": "gold_rare",
        "pos": "MC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 68,
            "sho": 67,
            "pas": 83,
            "dri": 80,
            "def": 61,
            "phy": 60
        },
        "faceUrl": "",
        "quickSell": 820
    },
    {
        "id": "gold_rare_lazzari",
        "name": "Lazzari",
        "fullName": "Manuel Lazzari",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "LD",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 79,
            "sho": 56,
            "pas": 71,
            "dri": 71,
            "def": 69,
            "phy": 66
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_gila",
        "name": "Gila",
        "fullName": "Mario Gila Fuentes",
        "rating": 77,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 69,
            "sho": 38,
            "pas": 55,
            "dri": 56,
            "def": 78,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 780
    },
    {
        "id": "gold_rare_patric",
        "name": "Patric",
        "fullName": "Patricio Gabarrón Gil",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 59,
            "sho": 41,
            "pas": 62,
            "dri": 58,
            "def": 82,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "gold_rare_noslin",
        "name": "Noslin",
        "fullName": "Tijjani Noslin",
        "rating": 76,
        "cardType": "gold_rare",
        "pos": "ED",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 79,
            "sho": 65,
            "pas": 71,
            "dri": 78,
            "def": 35,
            "phy": 53
        },
        "faceUrl": "",
        "quickSell": 740
    },
    {
        "id": "silver_tchaouna",
        "name": "Tchaouna",
        "fullName": "Loum Tchaouna",
        "rating": 74,
        "cardType": "silver",
        "pos": "ED",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Lazio",
            "id": 110
        },
        "stats": {
            "pac": 77,
            "sho": 67,
            "pas": 65,
            "dri": 74,
            "def": 31,
            "phy": 58
        },
        "faceUrl": "",
        "quickSell": 475
    },
    {
        "id": "totw_mbappe_totw",
        "name": "Mbappe TOTW",
        "fullName": "Kylian Mbappé Lottin",
        "rating": 92,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 84,
            "sho": 94,
            "pas": 74,
            "dri": 90,
            "def": 33,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 22400
    },
    {
        "id": "totw_vinicius_totw",
        "name": "Vinicius TOTW",
        "fullName": "Vinícius José Paixão de Oliveira Júnior",
        "rating": 91,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 95,
            "sho": 85,
            "pas": 83,
            "dri": 93,
            "def": 39,
            "phy": 69
        },
        "faceUrl": "",
        "quickSell": 21200
    },
    {
        "id": "totw_bellingham_totw",
        "name": "Bellingham TOTW",
        "fullName": "Jude Victor William Bellingham",
        "rating": 91,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 84,
            "sho": 78,
            "pas": 92,
            "dri": 94,
            "def": 70,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 21200
    },
    {
        "id": "totw_valverde_totw",
        "name": "Valverde TOTW",
        "fullName": "Federico Santiago Valverde Dipetta",
        "rating": 89,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Uruguay",
            "code": "uy"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 72,
            "sho": 81,
            "pas": 89,
            "dri": 91,
            "def": 64,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_courtois_totw",
        "name": "Courtois TOTW",
        "fullName": "Thibaut Nicolas Marc Courtois",
        "rating": 90,
        "cardType": "totw",
        "pos": "POR",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 89,
            "sho": 85,
            "pas": 91,
            "dri": 93,
            "def": 87,
            "phy": 92
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_rodrygo_totw",
        "name": "Rodrygo TOTW",
        "fullName": "Rodrygo Silva de Goes",
        "rating": 87,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 96,
            "sho": 75,
            "pas": 77,
            "dri": 92,
            "def": 40,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_camavinga_totw",
        "name": "Camavinga TOTW",
        "fullName": "Eduardo Celmi Camavinga",
        "rating": 85,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 76,
            "sho": 79,
            "pas": 89,
            "dri": 89,
            "def": 68,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_brahim_totw",
        "name": "Brahim TOTW",
        "fullName": "Brahim Abdelkader Díaz",
        "rating": 85,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Marruecos",
            "code": "ma"
        },
        "club": {
            "name": "Real Madrid",
            "id": 86
        },
        "stats": {
            "pac": 79,
            "sho": 76,
            "pas": 85,
            "dri": 86,
            "def": 72,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_yamal_totw",
        "name": "Yamal TOTW",
        "fullName": "Lamine Yamal Nasraoui Ebana",
        "rating": 84,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 92,
            "sho": 77,
            "pas": 72,
            "dri": 88,
            "def": 45,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 12800
    },
    {
        "id": "totw_lewandowski_totw",
        "name": "Lewandowski TOTW",
        "fullName": "Robert Lewandowski",
        "rating": 89,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Polonia",
            "code": "pl"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 89,
            "sho": 94,
            "pas": 76,
            "dri": 86,
            "def": 40,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_raphinha_totw",
        "name": "Raphinha TOTW",
        "fullName": "Raphael Dias Belloli",
        "rating": 86,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 92,
            "sho": 79,
            "pas": 76,
            "dri": 91,
            "def": 47,
            "phy": 59
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_pedri_totw",
        "name": "Pedri TOTW",
        "fullName": "Pedro González López",
        "rating": 87,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 77,
            "sho": 72,
            "pas": 88,
            "dri": 87,
            "def": 70,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_gavi_totw",
        "name": "Gavi TOTW",
        "fullName": "Pablo Martín Páez Gavira",
        "rating": 84,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 75,
            "sho": 69,
            "pas": 90,
            "dri": 83,
            "def": 68,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 12800
    },
    {
        "id": "totw_kounde_totw",
        "name": "Kounde TOTW",
        "fullName": "Jules Olivier Koundé",
        "rating": 86,
        "cardType": "totw",
        "pos": "LD",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 93,
            "sho": 62,
            "pas": 74,
            "dri": 73,
            "def": 82,
            "phy": 74
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_olmo_totw",
        "name": "Olmo TOTW",
        "fullName": "Daniel Olmo Carvajal",
        "rating": 85,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 77,
            "sho": 79,
            "pas": 87,
            "dri": 85,
            "def": 70,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_cubarsi_totw",
        "name": "Cubarsi TOTW",
        "fullName": "Pau Cubarsí Paredes",
        "rating": 78,
        "cardType": "totw",
        "pos": "DFC",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "FC Barcelona",
            "id": 81
        },
        "stats": {
            "pac": 65,
            "sho": 43,
            "pas": 58,
            "dri": 59,
            "def": 81,
            "phy": 83
        },
        "faceUrl": "",
        "quickSell": 5600
    },
    {
        "id": "totw_haaland_totw",
        "name": "Haaland TOTW",
        "fullName": "Erling Braut Haaland",
        "rating": 92,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 94,
            "sho": 94,
            "pas": 83,
            "dri": 91,
            "def": 46,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 22400
    },
    {
        "id": "totw_rodri_totw",
        "name": "Rodri TOTW",
        "fullName": "Rodrigo Hernández Cascante",
        "rating": 92,
        "cardType": "totw",
        "pos": "MCD",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 72,
            "sho": 68,
            "pas": 81,
            "dri": 78,
            "def": 92,
            "phy": 92
        },
        "faceUrl": "",
        "quickSell": 22400
    },
    {
        "id": "totw_de_bruyne_totw",
        "name": "De Bruyne TOTW",
        "fullName": "Kevin De Bruyne",
        "rating": 91,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Bélgica",
            "code": "be"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 81,
            "sho": 82,
            "pas": 93,
            "dri": 96,
            "def": 66,
            "phy": 75
        },
        "faceUrl": "",
        "quickSell": 21200
    },
    {
        "id": "totw_foden_totw",
        "name": "Foden TOTW",
        "fullName": "Philip Walter Foden",
        "rating": 89,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 98,
            "sho": 78,
            "pas": 84,
            "dri": 90,
            "def": 37,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_gvardiol_totw",
        "name": "Gvardiol TOTW",
        "fullName": "Joško Gvardiol",
        "rating": 86,
        "cardType": "totw",
        "pos": "LI",
        "nation": {
            "name": "Croacia",
            "code": "hr"
        },
        "club": {
            "name": "Manchester City",
            "id": 65
        },
        "stats": {
            "pac": 89,
            "sho": 54,
            "pas": 72,
            "dri": 72,
            "def": 81,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_salah_totw",
        "name": "Salah TOTW",
        "fullName": "Mohamed Salah Hamed Mahrous Ghaly",
        "rating": 90,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Egipto",
            "code": "eg"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 95,
            "sho": 82,
            "pas": 79,
            "dri": 95,
            "def": 43,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_van_dijk_totw",
        "name": "Van Dijk TOTW",
        "fullName": "Virgil van Dijk",
        "rating": 90,
        "cardType": "totw",
        "pos": "DFC",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 73,
            "sho": 42,
            "pas": 66,
            "dri": 69,
            "def": 96,
            "phy": 96
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_alisson_totw",
        "name": "Alisson TOTW",
        "fullName": "Alisson Ramses Becker",
        "rating": 90,
        "cardType": "totw",
        "pos": "POR",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 87,
            "sho": 85,
            "pas": 88,
            "dri": 91,
            "def": 85,
            "phy": 90
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_mac_allister_totw",
        "name": "Mac Allister TOTW",
        "fullName": "Alexis Mac Allister",
        "rating": 87,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 71,
            "sho": 77,
            "pas": 92,
            "dri": 86,
            "def": 63,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_luis_diaz_totw",
        "name": "Luis Diaz TOTW",
        "fullName": "Luis Fernando Díaz Marulanda",
        "rating": 85,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Colombia",
            "code": "co"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 92,
            "sho": 72,
            "pas": 81,
            "dri": 87,
            "def": 45,
            "phy": 67
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_szoboszlai_totw",
        "name": "Szoboszlai TOTW",
        "fullName": "Dominik Szoboszlai",
        "rating": 84,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Hungría",
            "code": "hu"
        },
        "club": {
            "name": "Liverpool",
            "id": 64
        },
        "stats": {
            "pac": 71,
            "sho": 78,
            "pas": 88,
            "dri": 87,
            "def": 63,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 12800
    },
    {
        "id": "totw_saka_totw",
        "name": "Saka TOTW",
        "fullName": "Bukayo Ayoyinka Saka",
        "rating": 88,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 97,
            "sho": 79,
            "pas": 77,
            "dri": 91,
            "def": 40,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_odegaard_totw",
        "name": "Odegaard TOTW",
        "fullName": "Martin Ødegaard",
        "rating": 90,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Noruega",
            "code": "no"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 84,
            "sho": 75,
            "pas": 94,
            "dri": 89,
            "def": 70,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_saliba_totw",
        "name": "Saliba TOTW",
        "fullName": "William Alain André Gabriel Saliba",
        "rating": 88,
        "cardType": "totw",
        "pos": "DFC",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 69,
            "sho": 48,
            "pas": 72,
            "dri": 69,
            "def": 92,
            "phy": 89
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_rice_totw",
        "name": "Rice TOTW",
        "fullName": "Declan Rice",
        "rating": 88,
        "cardType": "totw",
        "pos": "MCD",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 73,
            "sho": 63,
            "pas": 84,
            "dri": 74,
            "def": 87,
            "phy": 94
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_gabriel_totw",
        "name": "Gabriel TOTW",
        "fullName": "Gabriel dos Santos Magalhães",
        "rating": 87,
        "cardType": "totw",
        "pos": "DFC",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Arsenal",
            "id": 57
        },
        "stats": {
            "pac": 71,
            "sho": 40,
            "pas": 67,
            "dri": 60,
            "def": 92,
            "phy": 86
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_kane_totw",
        "name": "Kane TOTW",
        "fullName": "Harry Edward Kane",
        "rating": 91,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 86,
            "sho": 96,
            "pas": 72,
            "dri": 84,
            "def": 39,
            "phy": 80
        },
        "faceUrl": "",
        "quickSell": 21200
    },
    {
        "id": "totw_musiala_totw",
        "name": "Musiala TOTW",
        "fullName": "Jamal Musiala",
        "rating": 88,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 80,
            "sho": 76,
            "pas": 91,
            "dri": 92,
            "def": 66,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_kimmich_totw",
        "name": "Kimmich TOTW",
        "fullName": "Joshua Walter Kimmich",
        "rating": 87,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 71,
            "sho": 80,
            "pas": 92,
            "dri": 89,
            "def": 68,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_davies_totw",
        "name": "Davies TOTW",
        "fullName": "Alphonso Boyle Davies",
        "rating": 84,
        "cardType": "totw",
        "pos": "LI",
        "nation": {
            "name": "Internacional",
            "code": "ca"
        },
        "club": {
            "name": "Bayern München",
            "id": 5
        },
        "stats": {
            "pac": 85,
            "sho": 56,
            "pas": 70,
            "dri": 70,
            "def": 76,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 12800
    },
    {
        "id": "totw_wirtz_totw",
        "name": "Wirtz TOTW",
        "fullName": "Florian Richard Wirtz",
        "rating": 89,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Alemania",
            "code": "de"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 77,
            "sho": 77,
            "pas": 90,
            "dri": 91,
            "def": 64,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_xhaka_totw",
        "name": "Xhaka TOTW",
        "fullName": "Granit Xhaka",
        "rating": 87,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Suiza",
            "code": "ch"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 74,
            "sho": 81,
            "pas": 90,
            "dri": 92,
            "def": 64,
            "phy": 77
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_frimpong_totw",
        "name": "Frimpong TOTW",
        "fullName": "Jeremie Agyekum Frimpong",
        "rating": 85,
        "cardType": "totw",
        "pos": "LD",
        "nation": {
            "name": "Países Bajos",
            "code": "nl"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 92,
            "sho": 59,
            "pas": 77,
            "dri": 78,
            "def": 79,
            "phy": 73
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_grimaldo_totw",
        "name": "Grimaldo TOTW",
        "fullName": "Alejandro Grimaldo García",
        "rating": 87,
        "cardType": "totw",
        "pos": "LI",
        "nation": {
            "name": "España",
            "code": "es"
        },
        "club": {
            "name": "Bayer Leverkusen",
            "id": 3
        },
        "stats": {
            "pac": 92,
            "sho": 65,
            "pas": 74,
            "dri": 73,
            "def": 85,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_lautaro_totw",
        "name": "Lautaro TOTW",
        "fullName": "Lautaro Javier Martínez",
        "rating": 90,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 84,
            "sho": 91,
            "pas": 75,
            "dri": 85,
            "def": 42,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 20000
    },
    {
        "id": "totw_barella_totw",
        "name": "Barella TOTW",
        "fullName": "Nicolò Barella",
        "rating": 88,
        "cardType": "totw",
        "pos": "MC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 81,
            "sho": 80,
            "pas": 90,
            "dri": 92,
            "def": 68,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_bastoni_totw",
        "name": "Bastoni TOTW",
        "fullName": "Alessandro Bastoni",
        "rating": 88,
        "cardType": "totw",
        "pos": "DFC",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 73,
            "sho": 38,
            "pas": 68,
            "dri": 63,
            "def": 94,
            "phy": 92
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_dimarco_totw",
        "name": "Dimarco TOTW",
        "fullName": "Federico Dimarco",
        "rating": 85,
        "cardType": "totw",
        "pos": "LI",
        "nation": {
            "name": "Italia",
            "code": "it"
        },
        "club": {
            "name": "Inter",
            "id": 108
        },
        "stats": {
            "pac": 89,
            "sho": 55,
            "pas": 71,
            "dri": 72,
            "def": 77,
            "phy": 78
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_griezmann_totw",
        "name": "Griezmann TOTW",
        "fullName": "Antoine Griezmann",
        "rating": 89,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 92,
            "sho": 95,
            "pas": 70,
            "dri": 83,
            "def": 40,
            "phy": 79
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_alvarez_totw",
        "name": "Alvarez TOTW",
        "fullName": "Julián Álvarez",
        "rating": 85,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Atlético de Madrid",
            "id": 78
        },
        "stats": {
            "pac": 78,
            "sho": 88,
            "pas": 74,
            "dri": 81,
            "def": 30,
            "phy": 70
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_cole_palmer_totw",
        "name": "Cole Palmer TOTW",
        "fullName": "Cole Jermaine Palmer",
        "rating": 86,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Inglaterra",
            "code": "gb-eng"
        },
        "club": {
            "name": "Chelsea",
            "id": 61
        },
        "stats": {
            "pac": 90,
            "sho": 73,
            "pas": 79,
            "dri": 91,
            "def": 44,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_bruno_fernandes_totw",
        "name": "Bruno Fernandes TOTW",
        "fullName": "Bruno Miguel Borges Fernandes",
        "rating": 88,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Manchester United",
            "id": 66
        },
        "stats": {
            "pac": 77,
            "sho": 75,
            "pas": 91,
            "dri": 93,
            "def": 67,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_son_totw",
        "name": "Son TOTW",
        "fullName": "Son Heung-min",
        "rating": 88,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Corea del Sur",
            "code": "kr"
        },
        "club": {
            "name": "Tottenham Hotspur",
            "id": 73
        },
        "stats": {
            "pac": 91,
            "sho": 76,
            "pas": 81,
            "dri": 88,
            "def": 39,
            "phy": 61
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_leao_totw",
        "name": "Leao TOTW",
        "fullName": "Rafael Alexandre da Conceição Leão",
        "rating": 87,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 93,
            "sho": 80,
            "pas": 76,
            "dri": 89,
            "def": 35,
            "phy": 68
        },
        "faceUrl": "",
        "quickSell": 16400
    },
    {
        "id": "totw_theo_hernandez_totw",
        "name": "Theo Hernandez TOTW",
        "fullName": "Theo Bernard François Hernandez",
        "rating": 88,
        "cardType": "totw",
        "pos": "LI",
        "nation": {
            "name": "Francia",
            "code": "fr"
        },
        "club": {
            "name": "AC Milan",
            "id": 98
        },
        "stats": {
            "pac": 93,
            "sho": 60,
            "pas": 82,
            "dri": 81,
            "def": 86,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 17600
    },
    {
        "id": "totw_kvaratskhelia_totw",
        "name": "Kvaratskhelia TOTW",
        "fullName": "Khvicha Kvaratskhelia",
        "rating": 86,
        "cardType": "totw",
        "pos": "EI",
        "nation": {
            "name": "Georgia",
            "code": "ge"
        },
        "club": {
            "name": "Napoli",
            "id": 113
        },
        "stats": {
            "pac": 91,
            "sho": 75,
            "pas": 78,
            "dri": 88,
            "def": 47,
            "phy": 65
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_vlahovic_totw",
        "name": "Vlahovic TOTW",
        "fullName": "Dušan Vlahović",
        "rating": 85,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Serbia",
            "code": "rs"
        },
        "club": {
            "name": "Juventus",
            "id": 109
        },
        "stats": {
            "pac": 77,
            "sho": 91,
            "pas": 75,
            "dri": 78,
            "def": 31,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 14000
    },
    {
        "id": "totw_gyokeres_totw",
        "name": "Gyokeres TOTW",
        "fullName": "Viktor Einar Gyökeres",
        "rating": 86,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Suecia",
            "code": "se"
        },
        "club": {
            "name": "Sporting CP",
            "id": 1903
        },
        "stats": {
            "pac": 86,
            "sho": 87,
            "pas": 69,
            "dri": 83,
            "def": 37,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 15200
    },
    {
        "id": "totw_marmoush_totw",
        "name": "Marmoush TOTW",
        "fullName": "Omar Khaled Mohamed Marmoush",
        "rating": 83,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Egipto",
            "code": "eg"
        },
        "club": {
            "name": "Eintracht Frankfurt",
            "id": 19
        },
        "stats": {
            "pac": 83,
            "sho": 87,
            "pas": 72,
            "dri": 81,
            "def": 34,
            "phy": 71
        },
        "faceUrl": "",
        "quickSell": 11600
    },
    {
        "id": "totw_sesko_totw",
        "name": "Sesko TOTW",
        "fullName": "Benjamin Šeško",
        "rating": 83,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Eslovenia",
            "code": "si"
        },
        "club": {
            "name": "RB Leipzig",
            "id": 721
        },
        "stats": {
            "pac": 78,
            "sho": 87,
            "pas": 67,
            "dri": 76,
            "def": 33,
            "phy": 72
        },
        "faceUrl": "",
        "quickSell": 11600
    },
    {
        "id": "totw_nico_paz_totw",
        "name": "Nico Paz TOTW",
        "fullName": "Nicolás Paz Martínez",
        "rating": 78,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Como",
            "id": "como"
        },
        "stats": {
            "pac": 73,
            "sho": 66,
            "pas": 84,
            "dri": 83,
            "def": 57,
            "phy": 63
        },
        "faceUrl": "",
        "quickSell": 5600
    },
    {
        "id": "totw_mastantuono_totw",
        "name": "Mastantuono TOTW",
        "fullName": "Franco Mastantuono",
        "rating": 78,
        "cardType": "totw",
        "pos": "MCO",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "River Plate",
            "id": "river"
        },
        "stats": {
            "pac": 63,
            "sho": 65,
            "pas": 82,
            "dri": 83,
            "def": 66,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 5600
    },
    {
        "id": "totw_estevao_totw",
        "name": "Estevao TOTW",
        "fullName": "Estêvão Willian Almeida de Oliveira Gonçalves",
        "rating": 78,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Brasil",
            "code": "br"
        },
        "club": {
            "name": "Palmeiras",
            "id": "palmeiras"
        },
        "stats": {
            "pac": 82,
            "sho": 74,
            "pas": 74,
            "dri": 83,
            "def": 42,
            "phy": 55
        },
        "faceUrl": "",
        "quickSell": 5600
    },
    {
        "id": "totw_messi_totw",
        "name": "Messi TOTW",
        "fullName": "Lionel Andrés Messi Cuccittini",
        "rating": 89,
        "cardType": "totw",
        "pos": "ED",
        "nation": {
            "name": "Argentina",
            "code": "ar"
        },
        "club": {
            "name": "Inter Miami",
            "id": "inter_miami"
        },
        "stats": {
            "pac": 98,
            "sho": 79,
            "pas": 80,
            "dri": 94,
            "def": 45,
            "phy": 64
        },
        "faceUrl": "",
        "quickSell": 18800
    },
    {
        "id": "totw_cristiano_ronaldo_totw",
        "name": "Cristiano Ronaldo TOTW",
        "fullName": "Cristiano Ronaldo dos Santos Aveiro",
        "rating": 87,
        "cardType": "totw",
        "pos": "DEL",
        "nation": {
            "name": "Portugal",
            "code": "pt"
        },
        "club": {
            "name": "Al Nassr",
            "id": "al_nassr"
        },
        "stats": {
            "pac": 85,
            "sho": 87,
            "pas": 71,
            "dri": 82,
            "def": 41,
            "phy": 76
        },
        "faceUrl": "",
        "quickSell": 16400
    }
];

// Tipos de sobres y configuración de tienda (9 cartas exactas salvo Iconos)
const PACKS_CONFIG = [
    {
        id: "pack_free",
        name: "Sobre Gratis",
        price: 0,
        cardsCount: 9,
        color: "#10b981",
        description: "¡9 cartas gratis! Probabilidades muy bajas para cartas de élite, ideal para empezar.",
        guaranteed: "9 Cartas (Bronce / Plata / Oro Común)",
        weights: { bronze: 0.65, silver: 0.28, gold_rare: 0.068, totw: 0.0019, hero: 0.0001, icon: 0.0000 },
        badgeText: "GRATIS (9 CARTAS)"
    },
    {
        id: "pack_gold",
        name: "Sobre Oro",
        price: 5000,
        cardsCount: 9,
        color: "#fbbf24",
        description: "9 cartas con presencia balanceada de jugadores Oro Únicos.",
        guaranteed: "9 Cartas (Garantiza cartas Oro)",
        weights: { bronze: 0.15, silver: 0.35, gold_rare: 0.46, totw: 0.035, hero: 0.004, icon: 0.001 },
        badgeText: "ESTÁNDAR (9 CARTAS)"
    },
    {
        id: "pack_gold_premium",
        name: "Oro Premium",
        price: 15000,
        cardsCount: 9,
        color: "#f59e0b",
        description: "9 cartas de alta calidad con gran mayoría de jugadores Oro y Walkouts.",
        guaranteed: "9 Cartas (Altas Medias)",
        weights: { bronze: 0.03, silver: 0.12, gold_rare: 0.74, totw: 0.08, hero: 0.022, icon: 0.008 },
        badgeText: "POPULAR (9 CARTAS)"
    },
    {
        id: "pack_mega_top",
        name: "Mega Sobre Top Players",
        price: 50000,
        cardsCount: 9,
        color: "#8b5cf6",
        description: "¡9 cartas de primer nivel! Probabilidades muy altas de Walkouts (86+), TOTW e Iconos.",
        guaranteed: "9 Cartas Oro Único + Walkouts",
        weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.73, totw: 0.18, hero: 0.06, icon: 0.03 },
        badgeText: "86+ WALKOUT (9 CARTAS)"
    },
    {
        id: "pack_icon_legends",
        name: "Sobre Iconos & Héroes",
        price: 150000,
        cardsCount: 5,
        color: "#ec4899",
        description: "El sobre legendario exclusivo de 5 cartas. ¡Garantiza al menos un Icono o Héroe!",
        guaranteed: "1 Icono / Héroe 100% Asegurado",
        weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.35, totw: 0.25, hero: 0.25, icon: 0.15 },
        badgeText: "LEGENDARIO (5 CARTAS)"
    }
];

if (typeof module !== 'undefined') {
    module.exports = { PLAYERS_DB, PACKS_CONFIG };
}
