const phoneArray = {FR: '02 31 30 44 85', GB: '07 563 213 789', US: '04 52 36 29 46'};

let country = 'FR';

phoneNumber.onclick = function () {
    country = countryName.value;
    console.log(country);
    let cleaverPhone = new cleave('.input-phoneNumber', {
        phone: true,
        phoneRegionCode: country
    });
    phoneNumber.placeholder = phoneArray[country];
}

let cleaveDate = new cleave('.input-date', {
    date: true,
    delimiter: '/',
    datepattern: ['d', 'm', 'y']
});

let cleaveCB = new cleave('.input-cb', {
    creditCard: true,
    onCreditCardTypeChanged: Function (type) {
        cardType.innerHTML = type
    }
});

function nameRegexCheck() {
    let idName = document.getElementById('name');
    let nameformat = /^[a-zA-Zéèàùçêëï" "\-]+$/;
 console.log(idName.value);
 if (!nameformat.test(idName.value)) {
     let nameValue = idName.value;
     idName.value = nameValue.slice(o, -1);
 }
}

function lastNameRegexCheck() {
    let idLastName = document.getElementById('lastName');
    let lastNameformat = /^[a-zA-Zéèàùçêëï" "\-]+$/;
 console.log(idLastName.value);
 if (!nameformat.test(idName.value)) {
     let lastNameValue = idLastName.value;
     idLastName.value = lastNameValue.slice(o, -1);
 }
}