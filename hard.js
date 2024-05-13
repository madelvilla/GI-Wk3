// Personal information: name and SSN. Access to SSN info should be denied 

function personalInfo(name, ssn) {
    //object PII
    const pII = {
        name: name,
        ssn: ssn
    };

    //accessible information - method
    function getName() {
        return pII.name;
    }

    //private information - method
    function getSSN(){
        //if they try to get the SSN information "RESTRICTED" will be the output
        return (`SSN: RESTRICTED`)

        // if they had access to this information this is what would be used to return it 
        // return pII.ssn;
    }

    //returning an object with personal information-- ssn will be restricted
    return {
        getName: getName,
        getSSN: getSSN
    };
}

//trying to get the personal information of: John (example)
//will be able to retrieve functions from above objects and functions
//creeating John information
const infoRowan = personalInfo('Rowan', '324-19-3473')
const infoJace = personalInfo('Jace', '118-16-5683')

console.log(infoRowan.name); //output undefined because the name property is not directly accessible
console.log(infoRowan.ssn); //output undefined because the ssn property is not directly accessible
console.log(infoRowan.getName()); //output available because we are accessing it through the getName method
console.log(infoRowan.getSSN()); //output restricted because we are accessing it through the getSSN method

console.log(infoJace.name); 
console.log(infoJace.ssn); 
console.log(infoJace.getName()); 
console.log(infoJace.getSSN()); 
