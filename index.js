// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(function(elem, idx, arr) {
        return elem.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(drivers, name) {
    return drivers.filter((elem, idx, arr) => elem.slice(0, name.length) === name);
}

function matchName(drivers, name) {
    return drivers.filter((elem, idx, arr) => elem.name === name);
}
