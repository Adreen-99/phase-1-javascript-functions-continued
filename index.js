//lab 1
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//lab 2
const mondayWork= function(activity1 = "go to the office"){
    return `This Monday, I will ${activity1}.`;
} 

//lab 3
function wrapAdjective(wrapper = "*"){
    return function(adjective = "special"){
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
