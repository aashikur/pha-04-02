function calculateVAT( price ) {
    if(typeof price !== 'number')
        return "Invalid";
    if(price < 1)
        return "Invalid";
    const result = (price * 7.5 )/100 ;
    return result;
}


function  validContact( contact ) {
    if(typeof contact !== 'string')
        return "Invalid";
    if(contact.length !== 11)
        return false;
    if(!(contact[0] == '0' && contact[1] == '1'))
        return false;
    if(contact.includes(' '))
        return false;

    return true;
}



function  willSuccess( marks ) {
    if(Array.isArray(marks) != true) 
       return "Invalid";

    for(let i = 0; i<marks.length; i++){
        if(typeof marks[i] == 'object')
            return "Invalid";
    }

    let fail = 0;
    let pass = 0;
    for(let i of marks)
    {
        if(i >= 50){
            pass++;
        } else {
            fail++;
        } 
    }
    return (pass > fail)? true : false;
}





function  validProposal( person1 , person2 ) {

    function isObj(o){
        if(typeof o == 'object' && Array.isArray(o) == false)
                return true;}
    
    if(!isObj(person2) || !isObj(person1))
        return "Invalid";

    let ageGap = Math.abs(person1.age - person2.age);
    if(!(ageGap <= 7))
        return false;

    if(person1.gender == person2.gender)
        return false;

    return true;  
}




function  calculateSleepTime( times ) {
    let t = 0;
    for (const num of times) {
        t+=num;
        if( typeof num != 'number')
            return "Invalid";
    }

    let h = parseInt(t/(3600));
    let m = parseInt((t - (h*3600))/60);
    let s = parseInt( t - h*3600 - m*60);

    const obj = {
        hour:   h,
        minute: m,
        second: s
    }
    return obj;
}

