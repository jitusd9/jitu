// Menu toggel script ****************************

// (function() {
// 	const menuBtn = document.querySelector(".nav-toggle");
// 	const navBar = document.querySelector(".nav");

// 	function toggleMenu(e) {
// 		navBar.classList.toggle("expanded");
// 		menuBtn.classList.toggle("expanded");
// 	}

// 	navBar.addEventListener("click", toggleMenu);

// 	menuBtn.addEventListener("click", toggleMenu);
// })();

// const resume = document.querySelector('#resume');

// resume.addEventListener('mouseover', () => {
// 	resume.querySelector('a').innerHTML = 'preview 📄';
// });

// resume.addEventListener('mouseout', () => {
// 	resume.querySelector('a').innerHTML = 'resume 📄';
// });

const projects = [
    {
        name : "memory game",
        description : "",
        source : "",
        demo : "",
        thumbnail : ""
    },
    {
        name : "Quiz App",
        description : "",
        source : "",
        demo : "",
        thumbnail : ""
    },
    {
        name : "Medium Clone",
        description : "",
        source : "",
        demo : "",
        thumbnail : ""
    }
]

const moreBtn = document.querySelector("#more");
const projectContainer = document.querySelector(".projects");

function appendProjects(){
    //list all the projects available 
    let card = document.createElement('div');
    card.classList.add('card', 'added');

    let thumb = document.createElement('div');
    thumb.classList.add('thumb');
    let img = document.createElement('img');
    img.src = "./img/bizwiz.gif";
    img.alt = "project preview";
    thumb.append(img);

    let name = document.createElement('h3');
    name.innerText = "Memory Game";

    let p = document.createElement('p');
    p.innerText = "Memory game is where user filp tiles and see if they match, built with react.js"
    
    let btns = document.createElement('div');
    btns.classList.add('btns');
    let aSource = document.createElement('a');
    aSource.classList.add("source");
    aSource.setAttribute("target", "_blank");
    aSource.href = "https://github.com/jitusd9/memory-game";
    aSource.innerText = "Source Code"
    btns.append(aSource);
    let aLive = document.createElement('a');
    aLive.classList.add("live");
    aLive.setAttribute("target", "_blank");
    aLive.href = "https://match-tiles.netlify.app/";
    aLive.innerText = "Live"
    btns.append(aLive);

    card.append(thumb);
    card.append(name);
    card.append(p);
    card.append(btns);

    projectContainer.append(card);
}

function removeProjects(){
    let addedProjects = document.querySelectorAll('.added');
    addedProjects.forEach(project => {
        project.remove();
    })
}

moreBtn.addEventListener('click', () => {   
    if(moreBtn.dataset.clicked === "false"){
        moreBtn.dataset.clicked = "true";
        moreBtn.innerHTML = "less";
        appendProjects();
    }else{
        moreBtn.dataset.clicked = "false";
        moreBtn.innerHTML = "more projects";
        removeProjects();
    }

})
