class tractor{
    diesel(){
        console.log("it run by diesel")
    }
    oil(){
        console.log("it also take oil")
    } 
    speed(){
        console.log("it has maximum 25km/h speed"); 
    } 
    staring(){
        console.log("it has staring for turning")
    }
} 

var hmt=new tractor(); 
hmt.diesel(); 
hmt.staring();
hmt.speed();
hmt.oil(); 

var mahindra=new tractor();
mahindra.oil();
mahindra.diesel(); 

var eicher=new tractor();
eicher.speed(); 

// ***************************************************************************************

class humans{
    constructor(){
         console.log("eat sleep walk  ")
    } 
    study(){
        console.log("  human should study");
    } 
    drink(){
        console.log("human can drink")
    }
} 
var rohit=new humans();
rohit.study();
rohit.drink(); 

// ****************************************************************************************

class student_info{
constructor(name,age){
    console.log("student name is "+name + " student age is "+age);
} 
  test_marks(maths){
    console.log("maths marks is "+maths);
  } 

  sport(marks){
    console.log("sports marks is "+marks)
  } 

  hobbey(x){
    console.log("hobby of the student is "+x);
  }
} 

var  ashwani=new student_info("ashwani",21);
ashwani.test_marks(67);
ashwani.hobbey("chess"); 

var rohit=new student_info("rohit",32);
rohit.hobbey("cricket");
rohit.sport(45); 
// **************************************************************
class human_info{
    constructor(birthplace,distic){
        console.log("birth place is "+birthplace +" and distric is "+distic);
    } 
    
    post(x){
        console.log(x);
    } 
    pradesh(){
        console.log("madhya pradesh");
    }
}

var amar=new human_info("panna","katni");
amar.post("panagar"); 
amar.pradesh(); 

// ***********************************************************************

var arr=[12,13,14,15,16,]; 
class read_arr{
    constructor(x){
        // console.log(x);
        this.value=x;
    }
    even(){
        var ans1=this.value.filter(function(z){
            return z%2==0;
            
        }) 
        console.log(ans1);
    } 
    odd(){
   var ans2= this.value.filter(function(b){
           return b%2!=0;
        }) 
        console.log(ans2);
    } 

    multiplication(){
      var ans3=this.value.map((mul)=>{
            return mul*6;
        })
        console.log(ans3);
    }
}
var a=new read_arr(arr); 
a.even();
a.odd()
a.multiplication()