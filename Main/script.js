

let projectDetails = [
    {name:"The Undying Night",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/theUndyingNight",
    imgSrc: "/Main/assets/undyingNight.png"},
    {name:"Plane in Peril",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/plane-in-peril",
    imgSrc: "/Main/assets/planeInPeril.png"},
    {name:"Clash Royale API",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/clash",
    imgSrc: "/Main/assets/clashRoyale.png"},
    {name:"Incredible Leaf Blower",
    liveURL: "LIVE",
    ghURL: "https://github.com/simonleonhardt/incredible-leaf-blower",
    imgSrc: "/Main/assets/incredibleLeafBlower.png"},
    
]

for(let i = 0; i < projectDetails.length; i++) {
    // Create elements
    let element = document.createElement('div');
    element.className = 'project';
    let imageLink = document.createElement('a');
    imageLink.href = projectDetails[i].liveURL;
    let image = document.createElement('img');
    image.src = projectDetails[i].imgSrc;
    image.className = 'projectImg';
    let container = document.createElement('div');
    container.className = 'container';
    let elementTitle = document.createElement('p');
    elementTitle.appendChild(document.createTextNode(projectDetails[i].name));
    elementTitle.className = 'projectTitle';
    let elementLive = document.createElement('a');
    elementLive.appendChild(document.createTextNode('LIVE'));
    elementLive.className = 'live projectLinks';
    elementLive.href = projectDetails[i].liveURL;
    let elementGithub = document.createElement('a');
    elementGithub.appendChild(document.createTextNode('GITHUB'));
    elementGithub.className = 'github projectLinks';
    elementGithub.href = projectDetails[i].ghURL;
    
    // Assign elements onto parent
    imageLink.appendChild(image);
    container.appendChild(elementTitle);
    container.appendChild(elementLive);
    container.appendChild(elementGithub);
    element.appendChild(imageLink);
    element.appendChild(container);

    let majority = document.getElementById('majority');
    majority.appendChild(element);
}