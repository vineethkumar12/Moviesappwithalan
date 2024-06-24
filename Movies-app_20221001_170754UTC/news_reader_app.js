// Use this sample to create your own voice commands 
let savedmovies=[];
//let titles=[]; 
//let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
intent(`(Hello vinni|hi|hey vinni)`, p => {
	p.play(`(Hi|hello) there, I am Vinni.`);
    p.play(`How can I help you.`);
})  
intent(`hi alan how are you`, p => {
	p.play(`i am fine and thankyou what about you `);
    p.then(confirma);
}) 
intent(`come back to home page`, p => {
	    p.play('Okay, going back...');
    p.play({command:'back'}); 
})  
const APIKEY = "192a81102be79532153a351eb666c883";
const TMDB = "https://api.themoviedb.org/3/discover/movie";

intent('what are the latest movies', (p) => {
 let MOVIES_API_URL = `${TMDB}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&page=1&include_video=true`;

api.request.get(MOVIES_API_URL, (err, res, body) => {
    const {results,total_results} = JSON.parse(body);
    if(typeof results === 'undefined'){
        p.play('sorry, Please tell again different way!')
        return;
    } 
    savedmovies=results; 
    /*for(let j=0;j<20;j++)
     {  titles[j]=savedmovies[j].title;
         
     } */
    	
    
    p.play({command:'movies',a:results});
    p.play(`Here are the total ${results.length} movies.`); 
     p.play(`can i read the movies name.`);  
      p.then(confirmation);
 })
})      
  
      intent(` open $(titles* (.*)) movie`,(p)=>{ 
               let a=true;
                 p.play({command:'open',titl:p.titles.value}) 
                    for (let i = 0; i < 20; i++) {
                     if(savedmovies[i].title.toLowerCase()===p.titles.value.toLowerCase())  
                       {    
                           a=false;
                          break;
                       }     
                    }
          if( a)
          {p.play('sorry, Please tell again different way or tell latest movie name properly!')}
          else
           { p.play("opening....") }
          
          
          
          
         
                 
                    
                
           }) 

    intent(`  open number $(number* (.*)) movie`,p=>{
           
           
           p.play({command:'num',n:p.number.value})
          
    }) 

      intent(`open trailer of the $(titles* (.*)) movie `,(p)=>{  
          
           p.play({command:'video',video:p.titles.value})
          
          
          
      })
intent(`come back from this trailer `,(p)=>{  
          
           p.play({command:'comeback'})
          
            p.play("ok going back")
          
      }) 

 

      intent(` tell me about $(titles* (.*))  movie`,(p)=>{ 
                
                     for (let i = 0; i < 20; i++) {
                     if(savedmovies[i].title===p.titles.value)  
                       {   
                           p.play(`${savedmovies[i].overview}`) }
                } 
                 
                
           })  
       
 

const confirmation = context(() =>{
    intent('yes',async(p) =>{ 
        for (let i = 0; i < 20; i++) {
           
            p.play(`${savedmovies[i].title}`)
	}  
    })
    intent('no',(p) =>{ 
        p.play('Sure,sounds good.')
    })
})    
const confirma=context(()=>{
      intent('i am good',p=>{
          p.play('haaaaaa')
          
      })
    
})