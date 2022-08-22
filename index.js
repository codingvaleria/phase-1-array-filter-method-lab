// Code your solution here

function findMatching(driverNames, string) {
    const result = driverNames.filter(function (driverName) {
        if (driverName.toLowerCase() === string.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    })

    return result;
}

// function findMatching(driverNames, string) {
//     return driverNames.filter(driverName => {
//         if (driverName.toLowerCase() === string.toLowerCase()) {
//             return true;
//         }

//         return false;

//     })

// }

function fuzzyMatch(driverNames, string) {
    const result = driverNames.filter(function (driverName) {
        if (driverName.startsWith(string)) {
            return true;
        }
        else {
            return false;
        }
    }
    )
    return result;
}

function matchName(driverArray, string) {

    const result = driverArray.filter(function (driverName) {
        if (driverName.name === string) {
            return true;
        }
    }
    )
    return result;
}






