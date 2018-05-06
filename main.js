

let question = prompt('Въпрос');

let a = prompt('Отг А');
/*
let b = prompt('Отг Б');
let c = prompt('Отг В');
let d = prompt('Отг Г');

*/


$('.col-md-10').append("<div class='question'>"
                                        +question+
                                        "<div class='form-check'>"+
                                        "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                        "<label class='form-check-label' for='exampleRadios1'>"+
                                         a+"</label>"+"</div>"+
                                         "<div class='form-check'>"+
                                         "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                         "<label class='form-check-label' for='exampleRadios1'>"+
                                          a+"</label>"+"</div>"+
                                          "<div class='form-check'>"+
                                          "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                          "<label class='form-check-label' for='exampleRadios1'>"+
                                           a+"</label>"+"</div>"+
                                        "</div>");

function getFormInfo() {
    let x = document.getElementById("form");
    let txt = "";
    let formRes = [];
    
    for (let i = 0; i < x.length; i++) {
       // txt = txt + x.elements[i].value + "<br>";
       formRes.push(x[i].value);
       console.log(x[i].value);


    }
    
    return formRes;
}

let form = getFormInfo();
console.log(form);




















/*function createQuestion( name, checked ) {
    var radioInput;
    try {
        var radioHtml = '<input type="radio" name="' + name + '"';
        if ( checked ) {
            radioHtml += ' checked="checked"';
        }
        radioHtml += '/>';
        radioInput = document.createElement(radioHtml);
    } catch( err ) {
        radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', name);
        if ( checked ) {
            radioInput.setAttribute('checked', 'checked');
        }
    }

    return radioInput;
}*/