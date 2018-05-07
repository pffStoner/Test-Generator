
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
    let qStr = "<div class='question row'>"+this.question;
    let correctId = "";
    //let answers = getFormInfo.slice(1,4);
   // $('.col-md-10').append("<div class='question'>"+this.question);
    for (let i = 0; i < this.answers.length; i++) {
        if (i === parseInt(this.correct)) {
            correctId = "correct";
            console.log(i +" and "+ this.correct );

        }else{
            console.log(i +" fand "+ this.correct );
            correctId = "false";
            
        }
        qStr+= "<div class='form-check col-md-12'>"+
        "<input class='form-check-input' type='radio' name='"+this.question.slice(1,10)+"' id="+correctId+" value='option1' checked>"+
        "<label class='form-check-label "+correctId+"' for='exampleRadios1'>"+
         this.answers[i]+"</label>"+"</div>"    
    }
    qStr += "</div>";
    $('.col-md-10').append(qStr);
}

function createQuestion() {
   let form =  getFormInfo();
    let question = new Questions(form[0], form.slice(1,5), form[5]);
    question.displayQuestion();
    
    return question;
}

$('#checkBtn').click(function(){
    $('.false').css("color", "red" );
    $( '.correct' ).css("color","green");
});











/*
let question = prompt('Въпрос');

let a = prompt('Отг А');

let b = prompt('Отг Б');
let c = prompt('Отг В');
let d = prompt('Отг Г');

*/


/*
$('.col-md-10').append("<div class='question'>"
                                        +"dsds"+
                                        "<div class='form-check'>"+
                                        "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                        "<label class='form-check-label' for='exampleRadios1'>"+
                                        "dsds"+"</label>"+"</div>"+
                                         "<div class='form-check'>"+
                                         "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                         "<label class='form-check-label' for='exampleRadios1'>"+
                                         "dsds"+"</label>"+"</div>"+
                                          "<div class='form-check'>"+
                                          "<input class='form-check-input' type='radio' name='exampleRadios' id='exampleRadios1' value='option1' checked>"+
                                          "<label class='form-check-label' for='exampleRadios1'>"+
                                          "dsds"+"</label>"+"</div>"+
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