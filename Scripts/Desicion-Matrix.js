var i=0
var j=1
var c
var r
var arr1=[];
let array_of_weights = [];
function writeNumber(){
    c =document.getElementById("column").value
    r =document.getElementById("row").value
    arr1=matrix(Number(r)+1,c);
    // i For row j For column
 cartona =''
 for (let i=-1;i<=r;i++){
 cartona += `<tr>`
 for (let j=0;j<=c;j++){
 cartona+=`<td><input class="input_border border-0 w-100 form-control bg-transparent text-white text-center  " onblur="addition(${i},${j})" id=${i}_${j} " type="text"></td>`
 }
 cartona +=`<td class="w-25 text-center text-white" id="max_${i}"></td>`
 
 cartona += `</tr>`
 
 }
document.getElementById("table").innerHTML=cartona
document.getElementById("-1_0").value="Alternative / Factors"
document.getElementById("0_0").value="Weights"

document.getElementById("Alt_factor").classList.remove('d-none')
}

function add_Alternative(){
    var alternative=document.getElementById("add_Alternative").value
   document.getElementById(`${i+1}_0`).value=alternative
   i++;
   document.getElementById("add_Alternative").value=""

console.log(alternative)
}

function add_Factor() {
    var factor=document.getElementById("addFactor").value
    document.getElementById("addFactor").value=""
    document.getElementById(`-1_${j}`).value=factor

    console.log(factor)
}

function add_Weight(){
    var weight = document.getElementById("addWeight").value
    document.getElementById(`0_${j}`).value = weight;
    document.getElementById("addWeight").value=""
    array_of_weights.push(parseInt(weight));
    console.log(weight)
    console.log(array_of_weights);
    j++;
}

   
function addition(i,j){
         let cell =  document.getElementById(`${i}_${j}`).value;
            arr1[i][j]=cell
            console.log(arr1)
}


function matrix( rows, cols){
    var arr = [];
  console.log(rows)
    // Creates all lines:
    for(var i=0; i < rows; i++){
        // Creates an empty line
        arr.push([]);
    }
  return arr;
  }
  function multiply(){

    let product = []
    let max=[]
    for (let i = 1; i < arr1.length; i++) {
      let x = 0;
      for (let j = 1; j < arr1[i].length; j++) {
        product.push(array_of_weights[x++] * arr1[i][j])
      }
      console.log(product)
      var sum = 0
      for (var m = 0; m < product.length; m++) {

        sum = sum + product[m]
      }
      console.log(sum)
   document.getElementById(`max_${i}`).innerText=sum
      max.push(sum)
      console.log(max)
      Math.max(...max)
      console.log(Math.max(...max))
      document.getElementById(`final_result`).innerHTML=Math.max(...max)
      product = []
    }

  

    // product(Math.max());
    console.log("product", product)
    return product;


}

//helper
// arr1[row][column] --> array for rates
// array_of_weights --> array for weights


//5li balk fl arr1[][] htbd2 mn 1,1 3shan 0 m7tot for weights w alternative f lma t3ml loop ebd2 mn 1 fl 2 arrays 
 
