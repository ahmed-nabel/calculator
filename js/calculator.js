// const actions = document.querySelector('.actions');
// const ans = document.querySelector('.ans');
// 	//console.log(actions);
// 	//console.log(ans);
// 	let expression = ''; // string
// 	//let a=0;
// 	actions.addEventListener('click', (e) => {
//        // target is the element that triggered the event (e.g., the user clicked on)
//        // currentTarget is the element that the event listener is attached to.		
//         // console.log(e.target);
        
// 		const value = e.target.dataset.value;

// 		if(value !== undefined) {
// 			// I'm good to go.
//             // to clear all
// 			if(value == 'c') {
// 				expression = '';
// 				ans.value = 0;
// 				return true;
// 			}else if(value == '=') {
// 				const answer = eval(expression);
// 				expression = answer;
                

//                 // to do backspace
//             }else if (value == 'ce'){
               
//                 //console.log(expression.length);
               
//                 ans.value = expression.substring(0 , expression.length-1);
//                 expression = ans.value ;
              
            
//                return true ;
                
//             }else if (value == "negate") {  
//                 ans.value = expression.charAt(expression.length-1);
//              expression = - Number(ans.value) ;
            
//             }else {
            
// 				expression += value;
               

// 			}

            
//                 if(expression == undefined) {
//                     expression = '';
//                     ans.value = 0;
                

                
//                 }else {
//                     if(value === '.' && ans.value.includes('.')) return
//                         ans.value = expression;

//                     }
			

        
//         }
//     });    


    // divide each button to a function

    // 1- get all my variables by DOM

    let previousOperandText = document.querySelector('[data-previous-operand]');
    let currentOperandText = document.querySelector('[data-current-operand]');
    let numberBtns = document.querySelectorAll('[data-number]');
    let operationBtns = document.querySelectorAll('[data-operation]');
    let deleteBtn = document.querySelector('[data-delete]');
    let allClearBtn = document.querySelector('[data-allClear]');
    let equalsBtn = document.querySelector('[data-equals');
    
    console.log(equalsBtn);

    // extra variables which are empty strings

    let currentOperand = '' ;
    let previousOperand = '';  
    let operation =  '' ; 



    let flag = 0;
    // 2- fucntion that u want :






    // this fn access the operands 
     function updateDisplay(){
        currentOperandText.textContent = currentOperand ;

        if(operation != null)
        previousOperandText.textContent = `${previousOperand}${operation}` ;
        else {
        previousOperandText.textContent = '';
    }
    

    };


    // this fn stores number in the current operand
    function appendNum(number){  
        if (number === '.' && currentOperand.includes('.')) return;

         else  {
        currentOperand += number;
        }
    };

    // this fn deletes the last element of string of the operands 
    function del(){
        
       
        currentOperand = currentOperand.substring(0 , currentOperand.length-1);
   
    };

    // this fn chooses the operation u want
    function chooseOperation (operation){
      
        if(currentOperand === '') return;

        if(previousOperand !== ''){
            evalutate();
        }

        previousOperand = currentOperand ;
        currentOperand = '';
        operation = undefined;
    };

    // this fn will evaluate according to chosen operation
    function evalutate(){
        let result ;
        const prev = parseFloat(previousOperand);
      //  console.log(prev);
        const curr = parseFloat(currentOperand); 
       // console.log(curr);
        if(isNaN(prev) || isNaN(curr)) return ;
        switch (operation) {
            case '+':
                result = prev + curr ;
               
            break;

            case '-':
                result = prev - curr ;
            break;
            case '×':
                result = prev * curr ;

            break;
            case '÷':
                result = prev / curr ;
                

            break;    
        
            default:
              return;
        }
        currentOperand = result;
        previousOperand = '';
        operation = undefined ;
        
       
    };

    numberBtns.forEach(button => {
        button.addEventListener('click',() => {
            appendNum(button.innerText);
            updateDisplay();
            
           // console.log(flag);
             
        })
    })

    operationBtns.forEach(button => {
        button.addEventListener('click',() => {
            
            chooseOperation(button.innerText);
            operation = button.innerText;
            // console.log(operation);
            updateDisplay();
        })
    })

    equalsBtn.addEventListener('click',()=> {
        evalutate();
        updateDisplay();
   
        
    });

  

    allClearBtn.addEventListener('click',() =>{
       clear();
       updateDisplay();
    });


     
function clear (){
    currentOperandText.textContent =    currentOperand  = '';
    previousOperandText.textContent=  previousOperand =  '' ;
    operation = undefined ;
    
};


deleteBtn.addEventListener('click',()=> {
    del();
    updateDisplay();
});

function getDisplayNumber (number){

};







 let myTable = document.querySelector(".calculator");
let myButton = document.querySelector(".button");



myButton.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle("active");
if (myButton.className == "button active") {
    
    window.localStorage.setItem("color","white");
    myTable.style.backgroundColor = window.localStorage.getItem("color");

}else {
    window.localStorage.setItem("color","black");

    myTable.style.backgroundColor = window.localStorage.getItem("color");
 
}

})

