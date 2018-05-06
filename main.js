
function getFormInfo() {
    let x = document.getElementById("form");
    let txt = "";
    let formRes = [];
    
    for (let i = 0; i < x.length; i++) {
       // txt = txt + x.elements[i].value + "<br>";
       formRes.push(x[i].value);
      // console.log(x[i].value);
    }  
    console.log(formRes.slice(1,3));
    console.log(formRes);
    return formRes;
}

let Questions = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Questions.prototype.displayQuestion = function(){
    let qStr = "<div class='question'>"+this.question;
    //let answers = getFormInfo.slice(1,4);
   // $('.col-md-10').append("<div class='question'>"+this.question);
    for (let i = 0; i < this.answers.length; i++) {
        qStr+= "<div class='form-check'>"+
        "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
        "<label class='form-check-label' for='exampleRadios1'>"+
         this.answers[i]+"</label>"+"</div>"    
    }
    qStr += "</div>";
    $('.col-md-10').append(qStr);
}

function createQuestion() {
   let form =  getFormInfo();
    let question = new Questions(form[0], form.slice(1,5), form[5]);
    question.displayQuestion();
}












/*
let question = prompt('Въпрос');

let a = prompt('Отг А');

let b = prompt('Отг Б');
let c = prompt('Отг В');
let d = prompt('Отг Г');

*/

/*
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

                                        

                                        */










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