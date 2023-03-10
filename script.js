
function appendToResult(val) {
  document.getElementById('result').value += val;
  }
  function calculateResult() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }


  function calculateResult() {
    var result = $('#result').val();
    try {
      result = eval(result.replace(/[^-()\d/*+.]/g, ''));
      $('#result').val(result);
    } catch (e) {
      alert('Invalid mathematical expression');
    }
  }
  
  
// Add event listener for 'keydown' event on document object
document.addEventListener('keydown', handleKeyDown);

// Function to handle keydown event
function handleKeyDown(event) {
  // Get key code from event object
  const keyCode = event.keyCode;
  
  // Call corresponding function based on key code
  switch (keyCode) {
    case 48: // 0
      appendToResult('0');
      break;
    case 49: // 1
      appendToResult('1');
      break;
    case 50: // 2
      appendToResult('2');
      break;
    case 51: // 3
      appendToResult('3');
      break;
    case 52: // 4
      appendToResult('4');
      break;
    case 53: // 5
      appendToResult('5');
      break;
    case 54: // 6
      appendToResult('6');
      break;
    case 55: // 7
      appendToResult('7');
      break;
    case 56: // 8
      appendToResult('8');
      break;
    case 57: // 9
      appendToResult('9');
      break;
    case 96: // numpad 0
      appendToResult('0');
      break;
    case 97: // numpad 1
      appendToResult('1');
      break;
    case 98: // numpad 2
      appendToResult('2');
      break;
    case 99: // numpad 3
      appendToResult('3');
      break;
    case 100: // numpad 4
      appendToResult('4');
      break;
    case 101: // numpad 5
      appendToResult('5');
      break;
    case 102: // numpad 6
      appendToResult('6');
      break;
    case 103: // numpad 7
      appendToResult('7');
      break;
    case 104: // numpad 8
      appendToResult('8');
      break;
    case 105: // numpad 9
      appendToResult('9');
      break;
    case 106: // numpad *
      appendToResult('*');
      break;
    case 107: // numpad +
      appendToResult('+');
      break;
    case 109: // numpad -
      appendToResult('-');
      break;
    case 110: // numpad .
      appendToResult('.');
      break;
    case 111: // numpad /
      appendToResult('/');
      break;
    case 13: // enter
      calculateResult();
      break;
    case 27: // escape
      clearResult();
      break;
    default:
      // Do nothing if key is not a number or symbol
      break;
  }
}



















