const repeatString = function(stringArg, repeatTimes) {

    if (repeatTimes<0)
    {return "ERROR"}
    let stringTemp = ""
    for (let i=0 ;i <repeatTimes; i++ ){
      
            stringTemp+=stringArg;
    }

    return stringTemp
};

// Do not edit below this line
module.exports = repeatString;



