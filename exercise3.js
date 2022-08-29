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

//Removing the keys 


function removeDetail(key){
    let detailsObject = instructorData.additionalData.moreDetails;
    //let valueToBeRemoved = detailsObject[key];
    delete detailsObject[key];
    return detailsObject;
}
console.log(removeDetail('citiesLivedIn'));
console.log(removeDetail('hometown'));