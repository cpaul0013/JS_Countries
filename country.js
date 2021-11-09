class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "USAFlag.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "MexicoFlag.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "algeriaFlag.jpg");
let japan = new Country("Japan", "Japanese", "Ya-Ho Sekai", ["red", "white"], "JapanFlag.jpg" );
let brazil = new Country("Brazil", "Portuguese", "Ola Mundo", ["green", "yellow", "blue"], "BrazilFlag.jpg" );

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    
    let country = "";

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if(input === "Japan")
    {
        country = japan;
    }
    else if(input== "Brazil")
    {
        country = brazil;
    }
document.getElementById("CountryName").innerText = country.name;
document.getElementById("OfficialLanguage").innerText = country.lang;
document.getElementById("HelloWorld").innerText = country.greeting;
document.getElementById("Flag").src=country.flag;
DisplayColors(country.colors);
}

function DisplayColors(colors){

    let color1 = document.getElementById("Color1");
    color1.style.backgroundColor = colors[0];
    let color2 = document.getElementById("Color2");
    color2.style.backgroundColor = colors[1];
    let color3 = document.getElementById("Color3");
    color3.style.backgroundColor = colors[2];
}

