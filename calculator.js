document.addEventListener("DOMContentLoaded", () => { 
        

    document.getElementById('add').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
        function add(number1, number2) {
            return number1 + number2;
        }  
        let result = add(number1, number2)
        document.getElementById('calculation-result').textContent = result;
        
    })
    

    document.getElementById('subtract').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
        function add(number1, number2) {
            return number1 - number2;
        }  
        let result = add(number1, number2)
        document.getElementById('calculation-result').textContent = result;
        
    })
   

    document.getElementById('multiply').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
        function add(number1, number2) {
            return number1 * number2;
        }  
        let result = add(number1, number2)
        document.getElementById('calculation-result').textContent = result;
        
    })
    

    document.getElementById('divide').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
        function add(number1, number2) {
            return number1 / number2;
        }  
        let result = add(number1, number2)
        document.getElementById('calculation-result').textContent = result;
        
    })
    
   
    
    

});