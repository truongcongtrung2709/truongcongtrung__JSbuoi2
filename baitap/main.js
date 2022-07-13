//Bài 1 : Tính Lương Nhân Viên
document.getElementById("btnTinhLuong").onclick = function(){
//Đầu vào
  var luongNgay = document.getElementById("luongNgay").value*1;
  var ngayLam = document.getElementById("ngayLam").value*1;
//Xử lý
var total = luongNgay * ngayLam ;
var curentFormat = new Intl.NumberFormat("vn-VN");

var result = "<p>Lương của Nhân Viên: "+ curentFormat.format(total) +"</p>";
//Đầu ra
document.getElementById("luongNV").innerHTML= result;
document.getElementById("luongNV").classList.add("text-center");
document.getElementById("luongNV").classList.add("bg-success");
document.getElementById("luongNV").classList.add("text-white");
}
// Bài 2: Tính Trung Bình

document.getElementById("btnTrungBinh").onclick = function(){
  //Đầu vào
  var number1 = document.getElementById("number1").value*1;
  var number2 = document.getElementById("number2").value*1;
  var number3 = document.getElementById("number3").value*1;
  var number4 = document.getElementById("number4").value*1;
  var number5 = document.getElementById("number5").value*1;

//Xử Lý: 
  var total = (number1 + number2 + number3 + number4 + number5)/5;
  var result = "<p>Trung bình của 5 số : "+ total +"</p>"

// Đầu ra:

  document.getElementById("showInfoTB").innerHTML = result;
  document.getElementById("showInfoTB").classList.add("bg-success");
  document.getElementById("showInfoTB").classList.add("text-center");
  document.getElementById("showInfoTB").classList.add("text-white");
};

//Bài 3: Quy Đổi Tiền 

document.getElementById("btnQuyDoi").onclick = function(){
//đầu vào
var soTienUSD = document.getElementById("soTienUSD").value*1;
//xử lý
var curentFormat = new Intl.NumberFormat('vn-VN'); 
var total = soTienUSD * 23500;
var result = "<p> Quy đổi sang VND: "+ curentFormat.format(total); +"</p>"
//đầu ra: 
document.getElementById("showInfoTien").innerHTML = result ;
document.getElementById("showInfoTien").classList.add("text-center")
document.getElementById("showInfoTien").classList.add("text-white")
document.getElementById("showInfoTien").classList.add("bg-success")
};
//Bài 4: Chu Vi, Diện tích HCN

document.getElementById("btnTinh").onclick = function(){
//Đầu vào:
var chieuDai = document.getElementById("chieuDai").value*1;
var chieuRong = document.getElementById("chieuRong").value*1;
//Xử lý:
var chuVi = (chieuDai + chieuRong) *2;
var dienTich = chieuDai * chieuRong;
var result ="";
result +="<div class='text-center text-white bg-success'>"
result += "<p>Chu Vi: "+ chuVi +"</p>"
result += "<p>Diện Tích: "+ dienTich +"</p>"
result += "</div>";
//Đầu ra:
document.getElementById("showInfoTinh").innerHTML = result;
};
// Bài 5: Tính tổng 2 ký số:

document.getElementById("btnTong").onclick = function(){
  //đầu vào:
  var chuSo = document.getElementById("chuSo").value*1;
  //xử lý
  var hangChuc = Math.floor(chuSo/10);
  var hangDv = chuSo%10;

  var total = hangDv + hangChuc;
  var result ="";
  result +="<div class='text-center bg-success text-white'>"
  result +="<p>Số hàng chục: "+ hangChuc +"</p>"
  result +="<p>Số hàng đơn vị: "+ hangDv +"</p>"
  result +="<p>Tổng của 2 ký số: "+ total +"</p>"
  result += "</div>"

  //Đầu ra:
  document.getElementById("showInfoTongKySo").innerHTML = result;
};
