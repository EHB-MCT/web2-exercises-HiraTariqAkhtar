// EX 1 Inputs
const Cleave = 
require("../node_modules/cleave.js/dist/cleave.js");
require("../node_modules/cleave.js/dist/addons/cleave-phone.be");

const name = new Cleave('.name',{
    prefix: 'STUDENT-',
    uppercase: true
});

const bdate = new Cleave('.dob',{
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y'],
});

const RRN = new Cleave('.rrn',{
    delimiter: ['.','.','-','.'],
    blocks: [2,2,2,3,2],
});

const age = new Cleave('.age',{
    numeral: true,
    numeralPositiveOnly: true
});

const phone = new Cleave('.phone',{
    phone: true,
    phoneRegionCode: 'BE'
});