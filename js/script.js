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
        description : "Memory game is where user filp tiles and see if they match, built with react.js",
        source : "https://github.com/jitusd9/memory-game",
        demo : "https://match-tiles.netlify.app/",
        thumbnail : "/img/matchTiles.webm",
        thumbType : "video"
    },
    {
        name : "HeyPal",
        description : "Mini Social Media application where user can post content and other can comments,built with react.js and firebase for storage and authenticaiton.",
        source : "https://github.com/jitusd9/HeyPal",
        demo : "https://friendly-33b9e.web.app/",
        thumbnail : "/img/heypal.webm",
        thumbType : "video"
    },
    {
        name : "Todo App",
        description : "Simple ToDo app in vanilla Javascript html/CSS with localstorage",
        source : "https://github.com/jitusd9/todo-REVISITED",
        demo : "https://jitusd9.github.io/todo-REVISITED",
        thumbnail : "/img/todoapp.webm",
        thumbType : "video"
    },
    {
        name : "Idea Bucket",
        description : "In this app I use to write whatever comes in my mind (ideas).",
        source : "#",
        demo : "https://ideabucket.netlify.app/",
        thumbnail : "/img/idea-bkt.webm",
        thumbType : "video"
    },
    {
        name : "Quiz App",
        description : "Quiz app for various topics using external api built with react.js",
        source : "#",
        demo : "#",
        thumbnail : "/img/thumbnail.jpg",
        thumbType : "image"
    },
    {
        name : "Medium Clone",
        description : "popular blogging website medium.com clone also in reactjs",
        source : "#",
        demo : "#",
        thumbnail : "/img/thumbnail.jpg",
        thumbType : "image"
    }
]

const moreBtn = document.querySelector("#more");
const projectContainer = document.querySelector(".projects");

function appendProjects(){
    //list all the projects available 

    projects.forEach(project => {

        let card = document.createElement('div');
        card.classList.add('card', 'added');
    
        let thumb = document.createElement('div');
        thumb.classList.add('thumb');
        if(project.thumbType === "image"){
            let img = document.createElement('img');
            img.src = project.thumbnail;
            img.alt = "project preview";
            thumb.append(img);
        }else{
            let video = document.createElement('video');
            video.setAttribute("loop", "");
            video.setAttribute("autoplay", "");
            video.setAttribute("muted", "");
            let videoSource = document.createElement('source');
            videoSource.src = project.thumbnail;
            videoSource.type = "video/webm";
            video.append(videoSource);
            // video.innerHTML = `
            // <source src="${project.thumbnail}" type="video/webm">
            // Your browser does not support the video tag.
            // `;
            thumb.append(video);
        }

    
        let name = document.createElement('h3');
        name.innerText = project.name;
    
        let p = document.createElement('p');
        p.innerText = project.description
        
        let btns = document.createElement('div');
        btns.classList.add('btns');
        
        if(project.source !== "#"){
            let aSource = document.createElement('a');
            aSource.classList.add("source");
            aSource.setAttribute("target", "_blank");
            aSource.href = project.source;
            aSource.innerText = "Source Code"
            btns.append(aSource);
        }

        if(project.demo !== "#"){
            console.log(project.demo === "#");
            let aLive = document.createElement('a');
            aLive.classList.add("live");
            aLive.setAttribute("target", "_blank");
            aLive.href = project.demo;
            aLive.innerText = "Live"
            btns.append(aLive);
        }
    
        card.append(thumb);
        card.append(name);
        card.append(p);
        card.append(btns);
    
        projectContainer.append(card);

    })

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
        moreBtn.innerHTML = "more";
        removeProjects();
    }

})
