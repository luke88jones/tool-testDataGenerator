var faker = require('faker/locale/en_GB'),
    getNhsNumber = require("../util/nhs-number-generator").getNhsNumber,
    getPostCode = require("../util/post-code-generator").getPostCode,
    moment = require("moment");

module.exports = function () {
    var patientId = faker.random.uuid();
    var nhsNumber = getNhsNumber();
    var effectiveFrom = moment(faker.date.between("2000-01-01", "2010-01-01")).format("YYYY-MM-DD");
    var effectiveToMax = new Date();
    effectiveToMax.setFullYear(effectiveToMax.getFullYear() + 2);
    var effectiveTo = moment(faker.date.between(effectiveFrom, effectiveToMax)).format("YYYY-MM-DD");
    var forename = faker.name.firstName();
    var surname = faker.name.lastName();
    var gender = faker.helpers.randomize(["Male", "Female", "Not Known", "Not Specified"]);
    var dob = moment(faker.date.past()).format("DD-MMM-YYYY");
    var additionalForname, 
        additionalSurname, 
        additionalPhone = null;
    if (faker.helpers.randomize([true, false, false, false])) {
        additionalForname = faker.name.firstName();
        additionalSurname = faker.name.lastName();
        additionalPhone = faker.phone.phoneNumberFormat(1);
    }
    
    var getNames = function() {
        return (additionalForname && additionalSurname) ? 
            ''.concat(forename, " ", surname, "|", additionalForname, " ", additionalSurname) :
            ''.concat(forename, " ", surname);
    };
    
    var homePhone = faker.phone.phoneNumberFormat(1);
    var getPhones = function() {
        return (additionalPhone) ? 
            ''.concat(homePhone, "|", additionalPhone) :
            homePhone;
    }
    
    var getPostCodes = function() {
        var numberOfPostCodes = faker.helpers.randomize([1, 1, 1, 2, 3,]);
        
        var postCodes = "";
        for (var i = 0; i < numberOfPostCodes; i++) {
            if (postCodes.length) {
                postCodes += "|" + getPostCode();
            } else {
                postCodes += getPostCode();
            }
        }
        
        return postCodes;
    };
    
    var address = faker.address.streetAddress();
    
    var getSearchResult = function() {
        return {
            patientId: patientId,
            forename: forename,
            surname: surname,
            gender: gender,
            dob: dob,
            address: address,
            nhsNumber: nhsNumber
        }
    };
    
    return {
        "patientId": patientId,
        "effectiveFrom": effectiveFrom,
        "effectiveTo": effectiveTo,
        "dob": dob,
        "gender": gender,
        "nhsNumber": nhsNumber,
        "names": getNames(),
        "phones": getPhones(),
        "postCodes": getPostCodes(),
        "searchResult": JSON.stringify(getSearchResult()),        
        "xforename": forename,
        "xsurname": surname,
        "xaddForname": additionalForname,
        "xaddSurname": additionalSurname,
        "xtelephoneNumber": homePhone,
        "xaddTelephone": additionalPhone,
        "xaddress": address
    };
}