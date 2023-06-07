var input=document.getElementById('input')
var result=document.getElementById('result')
var inputType=document.getElementById('inputType')
var resultType=document.getElementById('resultType')
var inputTypeValue,resultTypeValue;

//now add listener

input.addEventListener("keyup",myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function myResult(){
    
  inputTypeValue=inputType.value;
  resultTypeValue=resultType.value;

  if(inputTypeValue==='meter'&& resultTypeValue==='kilometer'){
     result.value=Number(input.value)*0.001;
  }
  else if(inputTypeValue==='meter'&&resultTypeValue==='Centimeter'){
    result.value=Number(input.value)*100;
  }
  else if(inputTypeValue==='meter'&&resultTypeValue==='meter'){
    result.value=input.value;
  }

  if(inputTypeValue==='kilometer'&& resultTypeValue==='meter'){
    result.value=Number(input.value)*1000;
  }
  else if(inputTypeValue==='kilometer'&&resultTypeValue==='Centimeter'){
    result.value=Number(input.value)*100000;
  }
  else if(inputTypeValue==='kilometer'&&resultTypeValue==='kilometer'){
    result.value=input.value;
  }
  
  if(inputTypeValue==='Centimeter'&& resultTypeValue==='meter'){
    result.value=Number(input.value)*0.01;
  }
  else if(inputTypeValue==='Centimeter'&&resultTypeValue==='Centimeter'){
    result.value=input.value;
  }
  else if(inputTypeValue==='Centimeter'&&resultTypeValue==='kilometer'){
    result.value=Number(input.value)*0.00001;
  }
  
}

//second
var input1=document.getElementById('input1')
var result1=document.getElementById('result1')
var inputType1=document.getElementById('inputType1')
var resultType1=document.getElementById('resultType1')
var inputTypeValue1,resultTypeValue1;

//now add listener

input1.addEventListener("keyup",myReesult);
inputType1.addEventListener('change',myReesult);
resultType1.addEventListener('change',myReesult);

inputTypeValue1=inputType1.value;
resultTypeValue1=resultType1.value;

function myReesult(){
  inputTypeValue1=inputType1.value;
   resultTypeValue1=resultType1.value;
      if(inputTypeValue1==='kilogram'&& resultTypeValue1==='gram'){
           result1.value=Number(input1.value)*1000;
      }
      else if(inputTypeValue1==='kilogram'&&resultTypeValue1==='Pound'){
           result1.value=Number(input1.value)*2.2046226218;
      }
      else if(inputTypeValue1==='kilogram'&&resultTypeValue1==='kilogram'){
            result1.value=input1.value;
      }
    
      if(inputTypeValue1==='gram'&& resultTypeValue1==='gram'){
          result1.value=input1.value;
      }
      else if(inputTypeValue1==='gram'&&resultTypeValue1==='Pound'){
        result1.value=Number(input1.value)*0.0022046226;
      }
      else if(inputTypeValue1==='gram'&&resultTypeValue1==='kilogram'){
        result1.value=Number(input1.value)*0.001;
      }
 
    if(inputTypeValue1==='Pound'&& resultTypeValue1==='gram'){
        result1.value=Number(input1.value)*453.59237;
    }
    else if(inputTypeValue1==='Pound'&&resultTypeValue1==='kilogram'){
       result1.value=Number(input1.value)*0.45359237;
    }
    else if(inputTypeValue1==='Pound'&&resultTypeValue1==='Pound'){
      result1.value=input1.value;
    }

}


