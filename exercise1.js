let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
}

//Displaying Cities using array
function displayCities(){
    let cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
    for(let i=0; i< cityArray.length; i++){
        console.log(cityArray[i]);
    }
}

displayCities();

//For Displaying HomeTown details.

function displayHometownData(){
    let hometownObject = instructorData.additionalData.moreDetails.hometown;
    for(let i in hometownObject){
        console.log(hometownObject[i]);
    }
}
displayHometownData()