function addGoldRate() {
  var goldrate = document.getElementById("goldrate").value;
  document.getElementById("goldratevalue").innerHTML = goldrate;
  document.getElementById("goldrateincard").innerHTML = goldrate;
}
function resetGold() {
  var resetgold = null;
  document.getElementById("goldrate").value = resetgold;
  document.getElementById("goldrateincard").innerHTML = resetgold;
  document.getElementById("goldratevalue").innerHTML = resetgold;
}
var dt = new Date();
document.getElementById("datetime").innerHTML =
  ("0" + dt.getDate()).slice(-2) +
  "." +
  ("0" + (dt.getMonth() + 1)).slice(-2) +
  "." +
  dt.getFullYear();
function Calfunc() {
  var goldrate = document.getElementById("goldrate").value;
  var labour = document.getElementById("labour").value;
  var wieght = document.getElementById("weight").value;
  var totalLabour = wieght * labour;
  var totalGoldprice = (goldrate * wieght) / 10;
  var totalprice = totalLabour + totalGoldprice;
  var GST = ((totalprice * 3) / 100);
  var sgst = GST / 2;
  var cgst = GST / 2;
  var totalAmmount = totalprice + GST;
  document.getElementById("totalLabour").innerHTML = totalLabour;
  document.getElementById("totalGold").innerHTML = totalGoldprice;
  document.getElementById("totalprice").innerHTML = totalprice;
  document.getElementById("sgst").innerHTML = sgst.toFixed(1);
  document.getElementById("cgst").innerHTML = cgst.toFixed(1);
  document.getElementById("gst").innerHTML = GST.toFixed(1);
  document.getElementById("totalammount").innerHTML = totalAmmount;
}
function resetcalc() {
  document.getElementById("totalLabour").innerHTML = 0;
  document.getElementById("totalGold").innerHTML = 0;
  document.getElementById("totalprice").innerHTML = 0;
  document.getElementById("sgst").innerHTML = 0;
  document.getElementById("cgst").innerHTML = 0;
  document.getElementById("gst").innerHTML = 0;
  document.getElementById("totalammount").innerHTML = 0;
   document.getElementById("labour").value =0;
  document.getElementById("weight").value=0;
}
// Direct GST Calculator
 function directGSTfunc()
 {
     var directAmm = document.getElementById("directAmm").value;
     var directGST = ((directAmm*3)/100);
     var dirSGST = directGST/2;
     var dirCGST =directGST/2;
     var totaldirAmm = Number(directAmm) + directGST;
   document.getElementById("directsgst").innerHTML = dirSGST.toFixed(1);
   document.getElementById("directcgst").innerHTML = dirCGST.toFixed(1);
   document.getElementById("directgst").innerHTML = directGST.toFixed(1);
   document.getElementById("directTotal").innerHTML=totaldirAmm;
 }

//  Girvi Calculator

function girvicalfunc()
{
    var girviammount = document.getElementById("girviamm").value;

 var date1 =document.getElementById("date1").value;
 var date2 = document.getElementById("date2").value;
 var dateob1= new Date(date1);
 var dateob2= new Date(date2);
 var time_difference = dateob2.getTime()-dateob1.getTime();
 var resultmonths =  time_difference/(1000*60*60*24);
//  var result = resultmonths.toFixed(2);
var months = resultmonths/30;
  var remmonths = months%10;
  var onlymonths = months.toFixed();
//   if(remmonths>=0.5)
//   {
//       onlymonths=onlymonths-1;
// }
// else
 


 var rem = resultmonths%30;
 var yr = months/12;
 var years = yr.toFixed(2);
 var intrest = ((girviammount*3)/100);
 var totalinterest = intrest*onlymonths;
 var totalAmmount = Number(girviammount) + totalinterest;
document.getElementById("rem").innerHTML = rem;
 document.getElementById("months").innerHTML=onlymonths;
 document.getElementById("resultmonths").innerHTML=resultmonths;
 document.getElementById("years").innerHTML=years;
 document.getElementById("interest").innerHTML=totalinterest;
 document.getElementById("totalAmmount").innerHTML=totalAmmount;

}