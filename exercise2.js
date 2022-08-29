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

//Adding key and values to the moreDetails


function addDetail(key,value){
    let detailsObject = instructorData.additionalData.moreDetails;
    detailsObject[key] = value;
    return detailsObject;
}
console.log(addDetail("isHilarous",true))

console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]))


