
/**
 *  Problem: 01
 */
 function seerToMon(seer) {
    // 1 mon = 40 seer
    const mon = 40;

    // Handle unexpected input
    if (typeof seer != 'number') {
        return 'Please, provide a number!'
    } else if (seer < 0) {
        return 'Please, provide positive number!'
    } else
        // calculation
        return (result = seer / mon);
}

let seerValue = 40;
let seerToMonOutput = console.log(seerToMon(seerValue), '\n');


/**
 *  Problem: 02
 */

function totalSales(shirtQty, pantQty, shoeQty) {
    // Assign product price as constant
    const singleShirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoePrice = 500;

    // Handle unexpected input
    if (typeof shirtQty != 'number' || typeof pantQty != 'number' || typeof shoeQty != 'number') {
        return 'Please, provide a number!'
    } else if (shirtQty < 0 || pantQty < 0 || shoeQty < 0) {
        return 'Quantity should be positive number!'
    }


    // Calculation total sales
    let totalsale =
        singleShirtPrice * shirtQty +
        singlePantPrice * pantQty +
        singleShoePrice * shoeQty;

    return totalsale;
}

let shirtQtyValue = 1;
let pantQtyValue = 1;
let shoeQtyValue = 1;

let totalSalesOutput = console.log(totalSales(shirtQtyValue, pantQtyValue, shoeQtyValue), '\n');



/**
 *  Problem: 03
 */

function deliveryCost(tShirtQty) {

    // Handle unexpected input
    if (typeof tShirtQty != 'number') {
        return 'Please, provide a number!'
    } else if (tShirtQty < 0) {
        return 'Quantity should be positive number!'
    }

    // if t-shirt quantity is equal or less than one hundred
    if (tShirtQty <= 100) {
        return (totaLdeliveryCost = tShirtQty * 100);
    }

    // if t-shirt quantity is greater than 100 and less than 200
    else if (tShirtQty > 100 && tShirtQty < 200) {

        let qtyOverHundred = tShirtQty - 100;
        let qtyFirstHundred = tShirtQty - qtyOverHundred;
        let totaLdeliveryCost = (qtyFirstHundred * 100) + (qtyOverHundred * 80)
        return (totaLdeliveryCost);

    }

    // if t-shirt quantity is equal or greater than two hundred
    else if (tShirtQty >= 200) {

        let qtyWithInTwoHundre = tShirtQty - 100;
        let qtyFirstHundred = tShirtQty - qtyWithInTwoHundre;
        let qtyOverTwoHundred = qtyWithInTwoHundre - qtyFirstHundred;
        let qtyOneToTwoHundred = tShirtQty - (qtyFirstHundred + qtyOverTwoHundred)
        totaLdeliveryCost = (qtyFirstHundred * 100) + (qtyOneToTwoHundred * 80) + (qtyOverTwoHundred * 50)

        return (totaLdeliveryCost);
    }
}

let tShirtQtyValue = 300;
let deliveryCostOutput = console.log(deliveryCost(tShirtQtyValue), '\n');


/**
 *  Problem: 04
 */


function perfectFriend(firendsNames) {
    // Handle unexpected input
    if (typeof firendsNames != 'object') {
        return 'Please, provide an Array!'
    } else if (firendsNames.length === 0) {
        return 'Please, provide an Array with element!'
    }
    // loops through the values of an iterable object
    for (const name of firendsNames) {
        if (name.length == 5) {
            return name;
        }
    }
    return 'No element found with length of 5 characters!'
}

let perfectFriendArray = ['faysal', 'fahad', 'rahman', 'okay'];
let perfectFriendOutput = console.log(perfectFriend(perfectFriendArray));

