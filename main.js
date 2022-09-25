let theInput=document.querySelector('.get-repos input');
let getButton=document.querySelector('.get-button');
let reposData=document.querySelector('.show-date');

getButton.onclick=function(){
    getRepose()
}

//Get Repose Function
function getRepose(){
    if(theInput.value==""){  //if value is empty
        reposData.innerHTML='<span>Please Write Github User Name</span>'
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((Response)=>Response.json())
        .then((repositories)=>{
          //Empty the container
          reposData.innerHTML='';

            //Loop on date
          repositories.forEach((repo)=>{
           //create the main div element
           let mainDiv=document.createElement('div');

            //create textNode
           let repoName=document.createTextNode(repo.name);

             //append text to main div
             mainDiv.appendChild(repoName);

              //create repo url anchor
             let theUrl=document.createElement('a');
             
             //create url text
             let theUrlText=document.createTextNode('visit');

             //append  the repo url text  to anchor tag
              theUrl.appendChild(theUrlText)

             //add the href
            theUrl.href=`https://github.com/${theInput.value}/${repo.name}`;

              //set Attribute Blank
             theUrl.setAttribute('target','_blank');

             //append the anchor to main div
             mainDiv.appendChild(theUrl)

             //create stars count span
             let starsSpan=document.createElement('span');

             //create text stars
             let starsText=document.createTextNode(`stars ${repo.stargazers_count}`)

            //Add stars account to starsSpan
            starsSpan.appendChild(starsText)

            //add classe to main div
            mainDiv.className='repo-box'

            //append starsspan to the main div
            mainDiv.appendChild(starsSpan)







             //append the main Div to the container
             reposData.appendChild(mainDiv);

          })
        })
    }
}