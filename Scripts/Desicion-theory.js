var i=0
var j=0
var r
var c
var arr1
var arr
function writeNumber(){
  r=document.getElementById("row").value // NO of row  Alternative
  c=document.getElementById("column").value // NO of col  Nature
 arr1=matrix(Number(r),c);  //creatte 2D empty array


 cartona =''  // create dynamic table 
 for (let i=-1;i<r;i++){
 cartona += `<tr>`
 for (let j=-1;j<c;j++){

 cartona+=`<td><input class="input_border border-0 w-100 form-control bg-transparent text-white text-center" onblur=addition(${i},${j}) id=${i}_${j} " type="text"></td>`
 }
 cartona +=`<td class="w-25 text-info text-center" id="max_${i}"></td>` // input static to result
 
 cartona += `</tr>`
 }
document.getElementById("table").innerHTML=cartona 
document.getElementById("-1_-1").value="Alternative/Nature" 
// document.getElementById("0_1").value="State of nature"
document.getElementById("Alt_factor").classList.remove('d-none')

}

function add_Alternative(){ // function to full Alternative

    var alternative=document.getElementById("add_Alternative").value
   document.getElementById(`${i}_-1`).value=alternative
   i++;
   document.getElementById("add_Alternative").value="" 

// console.log(alternative)
}

function add_Factor() {
    var factor=document.getElementById("addFactor").value
   document.getElementById(`-1_${j}`).value=factor
   j++;

   document.getElementById("addFactor").value=""

}
var alpha
function get_alpha(){
 alpha=document.getElementById("Alpha").value
 //document.getElementById("Alpha").value=""

}

function addition(i,j){
    let cell =  document.getElementById(`${i}_${j}`).value;
       arr1[i][j]=Number(cell)
       console.log(arr1)

}


function matrix( rows, cols){

    var arr = [];
//   console.log(rows)
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
       
    }
  return arr;
  }

function get_Average(){

    let sum=0
    var avg=[] // array ll avg ll last col 
    for(var i=0; i<r ; i++){
        for(j=0;j<c;j++){
            sum=sum+Number(arr1[i][j])

        }
        // console.log(sum/c)
        document.getElementById(`max_${i}`).innerText=sum/c
        avg.push(sum/c)
       sum=0
    } 
    // console.log(Math.max(...avg))
    document.getElementById("avg").innerText=Math.max(...avg)

}

function get_Maximax(){
    var max=[]
    for(var i=0; i<r ; i++){
        for(j=0;j<c;j++){
max.push(arr1[i][j])
}
// console.log(Math.max(...max))
document.getElementById(`max_${i}`).innerText=Math.max(...max)

var max=[]

    }
    var maxRow = arr1.map(function(row){ return Math.max.apply(Math, row); });
    console.log(maxRow)//[50,90]
    console.log(Math.max(...maxRow))

    document.getElementById("maxmax").innerText=Math.max(...maxRow)

}
function get_Minimax(){
 
    var min=[]
for (var i=0;i<r;i++ ){
    for (var j=0;j<c ;j++ ){
min.push(arr1[i][j])
    }
    // console.log(Math.min(...min))
    document.getElementById(`max_${i}`).innerText=Math.min(...min)

    var min=[]

}

var minRow = arr1.map(function(row){ return Math.min.apply(Math, row);});
// console.log(minRow)
    // console.log(Math.max(...minRow))

    document.getElementById("minmax").innerText=Math.max(...minRow)

}

function get_Criterion(){
var criterion=[]
var  maxAlpha=[]
for (var i=0;i<r;i++ ){
    for (var j=0;j<c ;j++ ){
criterion.push(arr1[i][j])
    }
    var max=Math.max(...criterion)
    var min=Math.min(...criterion)
    var max_alpha=max*alpha 
    var min_alpha=min*(1-alpha)
    var sum= max_alpha+min_alpha
  //console.log(max_alpha+"max")
    //console.log(min_alpha+"min")
    // console.log(sum)
    document.getElementById(`max_${i}`).innerText=sum

   criterion=[]
   
maxAlpha.push(sum)
Math.max(...maxAlpha)
console.log(Math.max(...maxAlpha))
document.getElementById("criterion").innerText=Math.max(...maxAlpha)


}
}
// Math.max(...maxAlpha)
// console.log(Math.max(...maxAlpha))
// document.getElementById("criterion").innerText=Math.max(...maxAlpha)
// 