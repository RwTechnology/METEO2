let slides=document.querySelector('.slider-items').children;

let longueur=slides.length;


let left=document.querySelector('.left');
let right=document.querySelector('.right');

let compteur=0;
slides[0].style.display="block";

right.addEventListener('click',()=>{ 
  defiler('next');
  switch (compteur) {
    case 0:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[0].style.display="block";
        break;

    case 1:
       console.log(compteur); 
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[1].style.display="block";
        break;

    case 2:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[2].style.display="block";
        break;

    case 3:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[3].style.display="block";
        break;

    case 4:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[4].style.display="block";
        break;

    case 5:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[5].style.display="block";
        break;

    case 6:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[6].style.display="block";
        break;

    case 7:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[7].style.display="block";
        break;

    case 8:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[8].style.display="block";
        break;

    case 9:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[9].style.display="block";
        break;

    default:
        break;
}

}
);






left.addEventListener('click',()=>{
  defiler('prev'); 
  console.log(compteur); 

  switch (compteur) {
    case 0:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[0].style.display="block";
        break;

    case 1:
       console.log(compteur); 
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[1].style.display="block";
        break;

    case 2:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[2].style.display="block";
        break;

    case 3:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[3].style.display="block";
        break;

    case 4:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[4].style.display="block";
        break;

    case 5:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[5].style.display="block";
        break;

    case 6:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[6].style.display="block";
        break;

    case 7:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[7].style.display="block";
        break;

    case 8:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[8].style.display="block";
        break;

    case 9:
        
        for(i=0;i<longueur;i++)
        {
           slides[i].style.display="none";  
        }

        slides[9].style.display="block";
        break;

    default:
        break;
}
}
);








 let defiler=(direction)=>
{
    if(direction=='next')
    {
        if(compteur==longueur-1)
        {
         compteur=0;
        }
        else{
          compteur++;  
        }      
   }

   else{

    if(compteur==0)
    {
     compteur=longueur-1;
    }
       else
       compteur--;
   }

}

