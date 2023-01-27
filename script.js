

let projectDetails = [
    {name:"Project 1",
    liveURL: "LIVE",
    ghURL: "GITHUB",
    imgSrc: "/assets/cat.jpg"},
    {name:"The Undying Night",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/theUndyingNight",
    imgSrc: "/assets/undyingNight.png"},
    {name:"Clash Royale API",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/clash",
    imgSrc: "/assets/clashRoyale.png"},
    {name:"Plane in Peril",
    liveURL: "LIVE",
    ghURL: "GITHUB",
    imgSrc: "/assets/planeInPeril.png"},
    {name:"Project 5",
    liveURL: "LIVE",
    ghURL: "GITHUB",
    imgSrc: ""},
    {name:"Project 6",
    liveURL: "LIVE",
    ghURL: "GITHUB",
    imgSrc: ""}
]

for(let i = 0; i < projectDetails.length; i++) {
    // Create elements
    let element = document.createElement('div');
    element.className = 'project';
    let image = document.createElement('img');
    image.src = projectDetails[i].imgSrc;
    image.style.width = "100%";
    let container = document.createElement('div');
    container.className = 'container';
    let elementTitle = document.createElement('p');
    elementTitle.appendChild(document.createTextNode(projectDetails[i].name));
    elementTitle.className = 'projectTitle';
    let elementLive = document.createElement('a');
    elementLive.appendChild(document.createTextNode('LIVE'));
    elementLive.className = 'live projectLinks';
    elementLive.href = projectDetails[i].liveURL
    let elementGithub = document.createElement('a');
    elementGithub.appendChild(document.createTextNode('GITHUB'));
    elementGithub.className = 'github projectLinks';
    elementGithub.href = projectDetails[i].ghURL;
    
    // Assign elements onto parent
    container.appendChild(elementTitle);
    container.appendChild(elementLive);
    container.appendChild(elementGithub);
    element.appendChild(image);
    element.appendChild(container);

    let majority = document.getElementById('majority');
    majority.appendChild(element);
}