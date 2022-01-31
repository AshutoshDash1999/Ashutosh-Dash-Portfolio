let greetingTag = document.querySelector("#greeting");
let projectArrayDiv = document.querySelector(".project-array");

// function for showing greeting according to time of day
const greetingFunction = () => {
    let dt = new Date();
    let hour = dt.getHours();
    if (hour>=16 && hour<=23){
        greetingTag.innerHTML = "Good Evening"
    } else if (hour>=4 && hour<12){
        greetingTag.innerHTML = "Good Morning"
    } else if (hour>=12 && hour<16){
        greetingTag.innerHTML = "Good Afternoon"
    } else if (hour>=0 && hour<=4){
        greetingTag.innerHTML = "Good Evening"
    }
}
greetingFunction();

//function for fetching project json
const showProjects = () => {
    fetch("./project_data.json")
    .then(response => response.json())
    .then((data)=> {
        
        for (let index=0; index<data[0]["projects"].length; index++){
            //declaring project info from project json
            let projectImgSrc = data[0]["projects"][index]["img"];
            let projectName = data[0]["projects"][index]["project-name"];
            let techStack = data[0]["projects"][index]["tech-stack"];
            let liveLink = data[0]["projects"][index]["live-link"];
            let githubLink = data[0]["projects"][index]["github-link"];

            // declaring elements for html 
            const projectcardDiv = document.createElement("div");
            projectcardDiv.className = "project-card";

            //project img div
            const projectImgDiv = document.createElement("div");
            projectImgDiv.className = "project-img-div";

            //project img
            const projectImg = document.createElement("img");
            projectImg.src = projectImgSrc;
            projectImg.alt = projectName;
            projectImg.loading = "lazy";
            projectImgDiv.appendChild(projectImg)

            const cardContent = document.createElement("div");
            cardContent.className = "card-content";

            //project heading
            const heading = document.createElement("h4");
            heading.className = "project-title";
            const textNode = document.createTextNode(projectName);
            heading.appendChild(textNode)

            //tech stack
            const techlist = document.createElement("ul");
            techlist.className = "tech-stack";
            for (let index2=0; index2<techStack.length; index2++){
                let techlistItem = data[0]["projects"][index]["tech-stack"][index2];
                let techListTag = document.createElement("li");
                techListTag.className ="tech-items";
                let listNode = document.createTextNode(techlistItem);
                techListTag.appendChild(listNode);
                techlist.appendChild(techListTag)
            }

            //project links
            const repoLinks = document.createElement("ul");
            repoLinks.className = "project-links";

            let githubTag = document.createElement("li");
            githubTag.className = "project-link-item";
            let githubAnchor = document.createElement("a")
            githubAnchor.href = githubLink;
            githubAnchor.innerHTML = `Source Code <i class="fa fa-github" aria-hidden="true"></i>`;
            githubAnchor.target = "_blank";
            githubAnchor.rel = "noopener";
            githubTag.appendChild(githubAnchor)
            repoLinks.appendChild(githubTag)
            
            let liveLinkTag = document.createElement("li");
            liveLinkTag.className = "project-link-item";
            liveLinkTag.className = "live-link";
            let livelinkAnchor = document.createElement("a")
            livelinkAnchor.href = liveLink;
            livelinkAnchor.innerHTML = `Live Preview <i class="fa fa-external-link" aria-hidden="true"></i>`;
            livelinkAnchor.target = "_blank";
            livelinkAnchor.rel="noopener";
            liveLinkTag.appendChild(livelinkAnchor)
            repoLinks.appendChild(liveLinkTag)

            //append content to cardcontent
            cardContent.appendChild(heading);
            cardContent.appendChild(techlist);
            cardContent.appendChild(repoLinks);

            //append content and img to stuff to projectaCardDiv
            projectcardDiv.appendChild(projectImgDiv)
            projectcardDiv.appendChild(cardContent);

            //append project card
            projectArrayDiv.appendChild(projectcardDiv);
        }
    })
}
showProjects();
