//    ========================================================================
//        Declaration des variable et acceder au objet du Document (DOM)
//    ========================================================================

let searchBox=document.querySelector('.searchBox')
let input=document.querySelector('input[type="text"]');
let corps=document.querySelector('.corps');
let card_meteo=document.querySelector('.card_meteo');
let slider=document.querySelector('.slider');


let temperature=document.querySelector('.temperature');
let icon=document.querySelector('.icon');
let despMeteo=document.querySelector('.despMeteo');
let humidite=document.querySelector('.humidite');
let villePays=document.querySelector('.villePays');
let erreur=document.querySelector('.erreur');

//    ======================================================================
//    Donnees de L'API(Application programming Interface)   
//    ======================================================================

const appId = 'd792fc2f27c1f6985f94a8fe66dc56af';
const units = 'metric'; 
const langue='fr';


//    ===========================================================================
//      Validation du formulaire(boite de recherche) 
//    ===========================================================================

searchBox.addEventListener('submit',(e)=>
{
    e.preventDefault();
    meteologue(input.value); // appel  Gestionnaire meteologique
},false)

//    ===========================================================================================
//        Gestionnaire meteologique : Appel de API et acceder aux coordonnes meteologique
//    ===========================================================================================

let meteologue=(donnee)=>
{
 let value=donnee;       
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${value}
             &units=${units}&lang=${langue}&APPID=${appId}`;




             fetch(api)
    .then((result) =>result.json())
    .then(infoMeteo=>{ 
        const {weather,main,name,sys}=infoMeteo // destructuring

        let url=`https://openweathermap.org/img/w/${weather[0].icon}.png`
        icon.src=url;

        villePays.innerHTML=`${name},${sys.country}`;
        despMeteo.innerHTML=weather[0].description;
        temperature.innerHTML=`${main.temp} °C`;
        humidite.innerHTML=`${Math.round(main.humidity)}%`;
        
        descripteur(infoMeteo); // appel descripteur

       // afficher le tableau meteologique
        corps.style.display="block";
        card_meteo.style.display="block";
        
        slider.style.display="none";

    })
    .catch((err) => {
        if(err=="TypeError: Failed to fetch")
        {
            erreur.innerHTML="problème de connexion ";
        }
        else
        erreur.innerHTML="ville non trouvé ou erreur orthographe";
        
       

    });
}

// ===========================================================================================
//     Gestionnaire description meteologique : background en fonction de la description
//      meteologique
// ==========================================================================================


let descripteur=(donnee_Server)=>
 {
     console.log(donnee_Server);
    switch (donnee_Server.weather[0].main) {
        case 'Clear':
            corps.style.backgroundImage = "url(images/Clouds.gif)";
            break;
        
        case 'Clouds':
            corps.style.backgroundImage = "url(images/Clear2.gif)";
            break;

        case 'Rain':
            corps.style.backgroundImage = "url(images/Rain2.gif)";
            break;

        case 'Drizzle':
            corps.style.backgroundImage = "url(images/Rain.gif)";
            break;

        case 'Mist':
            corps.style.backgroundImage = "url(images/mist.gif)";
            break;    
        
        case 'Thunderstorm':
            corps.style.backgroundImage = "url(images/orage.gif)";
            break;
        
        case 'Snow':
            corps.style.backgroundImage = "url(images/Snow.gif)";
            break;

        default:
            break;
    }
}



    
