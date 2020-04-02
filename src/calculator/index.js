export default {
  add : function(num1, num2){
    return parseFloat((parseFloat(num1) + parseFloat(num2)).toFixed(2))
  },
  subtract : function(num1,num2){
    return parseFloat((parseFloat(num1) - parseFloat(num2)).toFixed(2))
  },
  multiply : function(num1,num2){
    return parseFloat((parseFloat(num1) * parseFloat(num2)).toFixed(2))
  },
  divide : function(num1,num2){
    return parseFloat(((parseFloat(num1) / parseFloat(num2))).toFixed(2))
  }
}
