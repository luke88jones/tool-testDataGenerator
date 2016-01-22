var getCheckPoint= function (rdmnum) {

    var subTotal,
        intCheckpoint;

    subTotal =  (10 * Number(rdmnum.substring(1, 1))) +
                (9 * Number(rdmnum.substring(2, 1))) +
                (8 * Number(rdmnum.substring(3, 1))) +
                (7 * Number(rdmnum.substring(4, 1))) +
                (6 * Number(rdmnum.substring(5, 1))) +
                (5 * Number(rdmnum.substring(6, 1))) +
                (4 * Number(rdmnum.substring(7, 1))) +
                (3 * Number(rdmnum.substring(8, 1))) +
                (2 * Number(rdmnum.substring(9, 1)));

    intCheckpoint = 11 - subTotal % 11;

    if (intCheckpoint = 11) {
        intCheckpoint = 0
    }

    // 10 will be an error, so we'll do a length check in createNHSnumbers. 10 = valid, >10 = invalid
    return intCheckpoint
};

var getNhsNumber = function() {
    var rdm9
    var chck

    // 1st random digit (must not be 0)
    rdm9 = String(Math.floor((9 - 1 + 1) * Math.random() + 1))
    // Get remainder random digits up to 9 chars
    while (rdm9.length < 9) {
        rdm9 = rdm9 + String(Math.floor((9 - 0 + 1) * Math.random()))
    }

    chck = getCheckPoint(rdm9);
    return rdm9 + chck;
};


module.exports = {
    getNhsNumber: getNhsNumber
};