
'use strict'

// element area

let questionsEl = document.getElementById('questions');
let formControleEl = document.getElementById('formControle');
let NoOfCorrectQnEl = document.getElementById('NoOfCorrectQn');
let NoOfWrongQnEl = document.getElementById('NoOfWrongQn');
let NoOfUnAnswerQnEl = document.getElementById('NoOfUnAnswerQn');
let TotalMarkEl = document.getElementById('TotalMark');
let markContainerEl = document.getElementById('markContainer')

// data area

const dataArr = [{
    questionNo: 1,
    question: 'The instrument that measures and records the relative humidity of air is:',
    option1: 'Hydrometer',
    option2: 'Hygrometer',
    option3: 'Lactometer',
    option4: 'Barometer',
    answer : 2
},
{
    questionNo: 2,
    question: 'The shape of our milky way galaxy is:',
    option1: 'Circular',
    option2: 'Elliptical',
    option3: 'Spiral',
    option4: 'None of the above',
    answer : 3
},
{
    questionNo: 3,
    question: 'The different stars are due to the variation of:',
    option1: 'Temperature',
    option2: 'Pressure',
    option3: 'Density',
    option4: 'Radiation from them',
    answer : 1
},
{
    questionNo: 4,
    question: 'The fundamental scientific principle in the operation of a battery is:',
    option1: 'Acid-base interaction',
    option2: 'Dialysis',
    option3: 'Dissociation of electrolytes',
    option4: 'Oxidation-reduction',
    answer : 3
},
{
    questionNo : 5,
    question: 'Instrument used to measure the force and velocity of the wind is:',
    option1: 'Ammeter',
    option2: 'Anemometer',
    option3: 'Altimeter',
    option4: 'Audiometer',
    answer : 2
},{
    questionNo : 6,
    question: 'Which combination of colours is the most convenient during day and night time?',
    option1: 'Orange and blue',
    option2: 'White and black',
    option3: 'Yellow and blue',
    option4: 'Red and green',
    answer : 2
},
{
    questionNo : 7,
    question: 'Wool clothes keep the body warm because:',
    option1: 'Wool increases the temperature',
    option2: 'Wool is a bad conductor',
    option3: 'Wool absorbs heat from outside',
    option4: 'Wool rejects heat from the outside',
    answer : 2
},
{
    questionNo : 8,
    question: 'If the length of a simple pendulum is halved then its period of oscillation is:',
    option1: 'Doubled',
    option2: 'Halved',
    option3: 'Increased by a factor',
    option4: 'Decreased by a factor',
    answer : 4
},
{
    questionNo : 9,
    question: 'Equilibrium is a condition that can:',
    option1: 'Never change',
    option2: 'Change, when External factor changes',
    option3: 'Change, when Internal factor changes',
    option4: 'Change,when government policies change',
    answer : 3
},
{
    questionNo : 10,
    question: 'While catching a ball, a player pulls down his hands to lower the:',
    option1: 'force',
    option2: 'momentum',
    option3: 'impulse',
    option4: 'catching time',
    answer : 2
}]

// global variable

let optionId = new Date().valueOf()
let correctAns = 0;
let wrongAns = 0;
let TotalMark = 0;
let unAnswerQn = 0;
let userAnswer = 'hi';

// function area

function selecting(optionID,selectedOption,qnNo,otherOption1,otherOption2,otherOption3) {
    document.getElementById(optionID).style.backgroundColor = 'rgb(197, 197, 247)'

    document.getElementById(otherOption1).style.backgroundColor = 'white'
    
    document.getElementById(otherOption2).style.backgroundColor = 'white'
    
    document.getElementById(otherOption3).style.backgroundColor = 'white'

    dataArr[qnNo-1].selectedAns = selectedOption;
}

function preview() {
    markContainerEl.style.display = 'none'
    formControleEl.style.display = 'flex'
    questionsEl.innerHTML = null;
    questionsEl.innerHTML = `<h2>Review</h2><h3>Your mark : ${TotalMark}<h3>`
    document.querySelector('.ulDiv').style.display = 'none';

    dataArr.forEach(objectData => {

        if (objectData.selectedAns !=undefined) {
            userAnswer = objectData.selectedAns;
        } else {
            userAnswer = 'has not been chosen';
        }

        // let userAnswer = objectData.selectedAns;
        

        let newLine = document.createElement('div');
        newLine.className = 'quetionContainer';
        questionsEl.appendChild(newLine)

        newLine.innerHTML = `<div class="qncontainer">
    
        <p>Question ${objectData.questionNo} of ${dataArr.length}</p>
        
        <hr>
        
        <div class="qn">${objectData.question}</div>
    
        <div class="optionContainer">
    
            <div class='optionRow'>${objectData.option1}</div>
    
            <div class='optionRow'>${objectData.option2}</div>
            
            <div class='optionRow'>${objectData.option3}</div>
            
            <div class='optionRow'>${objectData.option4}</div>

            <div class='answercomparison'>
                <div>Correct Answer: option ${objectData.answer}</div>
                <div>Your Answer: option ${userAnswer}</div>
            </div>
    
        </div>`
    })

    document.getElementById('submitAns').style.display='none';
}

// event listener area

formControleEl.addEventListener('submit', (e) => {
    e.preventDefault();
    dataArr.forEach(a => {


        if (a.selectedAns === undefined) {
            unAnswerQn += 1;
        } else if (a.selectedAns === a.answer) {
            correctAns += 1;
        } else {
            wrongAns += 1;
        }
    })

    markContainerEl.style.display = 'flex'
    formControleEl.style.display = 'none'

    NoOfCorrectQnEl.innerText = correctAns;
    NoOfWrongQnEl.innerText = wrongAns;
    NoOfUnAnswerQnEl.innerText = unAnswerQn;

    TotalMarkEl.innerText = ((correctAns * 4) - (wrongAns));
})

// running area

dataArr.forEach(objectData => {
    let option1Id = optionId+1
    let option2Id = optionId+2
    let option3Id = optionId+3
    let option4Id = optionId + 4
    optionId = option4Id;

    let newLine = document.createElement('div')
    questionsEl.appendChild(newLine)
    newLine.className = 'quetionContainer';
    newLine.innerHTML = `<div class="qncontainer">
    
    <p>Question ${objectData.questionNo} of ${dataArr.length}</p>
    
    <hr>
    
    <div class="qn">${objectData.question}</div>

    <div class="optionContainer">

        <div class='optionRow' onclick='selecting(${option1Id},1, ${objectData.questionNo},${option2Id},${option3Id},${option4Id})' id=${option1Id}>${objectData.option1}</div>

        <div class='optionRow' onclick='selecting(${option2Id},2, ${objectData.questionNo},${option1Id},${option3Id},${option4Id})' id=${option2Id}>${objectData.option2}</div>
        
        <div class='optionRow' onclick='selecting(${option3Id},3, ${objectData.questionNo},${option1Id},${option2Id},${option4Id})' id=${option3Id}>${objectData.option3}</div>
        
        <div class='optionRow' onclick='selecting(${option4Id},4, ${objectData.questionNo},${option1Id},${option2Id},${option3Id})' id=${option4Id}>${objectData.option4}</div>

    </div>`
})

