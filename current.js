const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav li a");

let currentSection = sections[0];
//console.log(currentSection);
let currentLink = links[0];
let currentIndex = 0;
let initialPosition = window.scrollY;

window.addEventListener("load", () => {
    let loadedHeight = window.scrollY;
    let height = 0;
    let index;
    
    for (let i=0; i<sections.length; i+=1) {
        height += sections[i].offsetHeight;
        if (height >= loadedHeight) {
            index = i;
            break;
        }
    }
    
    currentIndex = index;
    currentLink.parentNode.classList.remove("current-page");
    currentLink = links[index];
    currentLink.parentNode.classList.add("current-page");
    currentSection = sections[index];
    if (index == 0) { initialPosition = 0; }
    else { initialPosition = height - sections[index].offsetHeight; }
});

window.addEventListener("scroll", () => {
    try {
        let currentPosition = window.scrollY;
        //console.log("CP", currentPosition);

        if (currentPosition > (initialPosition + currentSection.offsetHeight - 25)) {
            currentLink.parentNode.classList.remove("current-page");
            let next = links[(currentIndex+1)%links.length];
            next.parentNode.classList.add("current-page");
            currentSection = sections[(currentIndex+1)%sections.length];
            currentLink = next;
            //console.log(currentLink);
            initialPosition = currentPosition;
            //console.log("IP", initialPosition)
            currentIndex += 1;
        }
        
        else if (currentPosition < initialPosition) {
            currentLink.parentNode.classList.remove("current-page");
            let previous = links[(currentIndex-1)%links.length];
            //console.log(previous);
            previous.parentNode.classList.add("current-page");
            currentSection = sections[(currentIndex-1)%sections.length];
            initialPosition = currentPosition - currentSection.offsetHeight;
            currentLink = previous;
            currentIndex -= 1;
        }
    }
    
    catch (exception) {
        console.log(exception);
    }
});