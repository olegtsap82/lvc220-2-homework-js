//var userName = prompt('Enter your name');
//var greet = 'Hello ' + userName;
//document.write(greet);
//var userAge = Number(prompt('Enter your age'));
//if (isNaN(userAge)) {
//    document.write('<br>Please enter a number')
//} else {
//    var nextAge = addOne(userAge);
//  document.write('<br>you will be soon ' + nextAge);
//}

//function addOne(someNum) {
//   var result = someNum + 1;
// return result;
//}
//document.write('<br>' +  Math.sqrt(25));

var coefA = Number(prompt('Enter coefficient a'));
var coefB = Number(prompt('Enter coefficient b'));
var coefC = Number(prompt('Enter coefficient c'));
document.write('(' + coefA + ')x^2 + ', '(' + coefB + ')x + ', '(' + coefC + ') = 0');
var resultx1x2 = quadraticEquationSolution(coefA, coefB, coefC);
document.write('<br>' + resultx1x2);

function quadraticEquationSolution(a, b, c) {
    if (a !== 0) {
        var D = b * b - 4 * a * c;
        var result
        if (D === 0) {
            var x = -b / (2 * a);
            result = 'x1 = x2 = ' + x;
        }
        else {
            if (D > 0) {
                var x1 = (-b + Math.sqrt(D)) / (2 * a);
                var x2 = (-b - Math.sqrt(D)) / (2 * a);
                result = 'x1 = ' + x1 + '; x2 = ' + x2;
            }
            else {
                result = 'There is no solution';
            }
        }
    } else {
        if(b === 0){
            result = 'There is no solution';
        } else {
            x = -c/b;
            result = 'x1 = x2 = ' + x;
        }
    }
    
    return result;
}
