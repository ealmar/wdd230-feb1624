/* selecting grid list and cards */
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

/* listeners grid or list */

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function


function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
};

const jasonFile = "data/members.json";
  /* building the cards 

    1. name of the company.
    2. address.
    3. phone number.
    4. website url.
    5. image or icon file names.
    6. Membership level.
    7. Other information like services.
*/
const displayData = (businesses) => {  
businesses.forEach((business) => {
    let card = document.createElement('section');
    let image = document.createElement('img');
        image.setAttribute('src'),business.img;
        image.setAttribute('alt',`image of ${business.name}`);
})
}

/* Reading the json data file */
async function readData(){
    const response = await fetch(jasonFile);
    const records  = await response.json();
    displayData(records.businesses);
}

readData();