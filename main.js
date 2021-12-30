/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let SanPham = JSON.parse(localStorage.getItem('Product'));

localStorage.setItem('locgiasp',JSON.stringify({tugia:"",dengia:""}));

window.onload = function(){
    creatProduct();
    creatUser();
    creatGH();
    inLoaiSP();
    temp = SanPham;
    LocHang(SanPham);
    checkvotk();
};

//Gioithieu,Lienhe
function HienthiGioithieu(){
    
    document.getElementById('qc2').innerHTML='<h3>Giới thiệu</h3><p style="font-size:110%;">BanaShop được xây dựng dựa trên các nguyên tắc:</p><p>- Hỗ trợ việc mua sắm, sửa chữa bảo hành sản phẩm cho người sử dụng</p><p>- Nhân viên chăm sóc khách hàng tận tình, nhẹ nhàng, cảm mến</p><h4>Chân thành cảm ơn Quý khách hàng đã ủng hộ BanaShop trong thời gian vừa qua và ước mong tiếp tục nhận được sự ủng hộ trong thời gian tới.</h4>';
}

function HienthiLH(){
    
    document.getElementById('qc2').innerHTML='<div class="lienhe"><h3>Thông tin liên hệ</h3><p>- Điện Thoại: 0934008844 - 0888004444</p><p>- Email: abc123@gmail.com</p><p>- Facebook: Bana Shop</p></div>';
}




//TaoSanPham
function creatProduct(){
    if(localStorage.getItem('Product') === null){
        let product = [
            {
                id: "0",
                img: "./img/xiaomi11lite.jpg",
                Name: "Xiaomi Mi 11 Lite",
                type: "Xiaomi",
                price: 335
            },
            {
                id: "1",
                img: "./img/galaxya52.jpg",
                Name: "Samsung Galaxy A52",
                type: "Samsung",
                price: 499
            },
            {
                id: "2",
                img: "./img/xiaomi11t.jpg",
                Name: "Xiaomi 11T",
                type: "Xiaomi",
                price: 599
            },
            {
                id: "3",
                img: "./img/redminote11.jpg",
                Name: "Xiaomi Redmi Note 11 Pro",
                type: "Xiaomi",
                price: 330
            },
            {
                id: "4",
                img: "./img/galaxya72.jpg",
                Name: "Samsung Galaxy A72",
                type: "Samsung",
                price: 499
            },
            {
                id: "5",
                img: "./img/xiaomipocox3.jpg",
                Name: "Xiaomi POCO X3 PRO",
                type: "Xiaomi",
                price: 299
            },
            {
                id: "6",
                img: "./img/iphone11promax.jpg",
                Name: "iPhone 11 Pro Max",
                type: "Apple",
                price: 799
            },
            {
                id: "7",
                img: "./img/iphone13promax.jpg",
                Name: "iPhone 13 Pro Max",
                type: "Apple",
                price: 1149
            },
            {
                id: "8",
                img: "./img/iphone13mini1.jpg",
                Name: "iPhone 13 Mini",
                type: "Apple",
                price: 830
            },
            {
                id: "9",
                img: "./img/iphone12pro.jpg",
                Name: "iPhone 12 Pro",
                type: "Apple",
                price: 999
            },
            {
                id: "10",
                img: "./img/oppoa54.jpg",
                Name: "OPPO A54",
                type: "Oppo",
                price: 175
            },
            {
                id: "11",
                img: "./img/oppoa74.jpg",
                Name: "OPPO A74",
                type: "Oppo",
                price: 220
            },
            {
                id: "12",
                img: "./img/oppoa55.jpg",
                Name: "OPPO A55",
                type: "Oppo",
                price: 195
            },
            {
                id: "13",
                img: "./img/redminote10.jpg",
                Name: "Xiao Redmi Note 10 Pro",
                type: "Xiaomi",
                price: 330
            },
            {
                id: "14",
                img: "./img/galaxym52.jpg",
                Name: "Samsung Galaxy M52 5G",
                type: "Samsung",
                price: 465
            },
            {
                id: "15",
                img: "./img/redminote10s.jpg",
                Name: "Xiaomi Redmi Note 10S",
                type: "Xiaomi",
                price: 259
            },
            {
                id: "16",
                img: "./img/redmi-10.jpg",
                Name: "Xiaomi Redmi 10",
                type: "Xiaomi",
                price: 280
            },
            {
                id: "17",
                img: "./img/redmi9a.jpg",
                Name: "Xiaomi Redmi 9A",
                type: "Xiaomi",
                price: 169
            },

            {
                id: "18",
                img: "./img/redmi9c.jpg",
                Name: "Xiaomi Redmi 9C",
                type: "Xiaomi",
                price: 199
            },
            {
                id: "19",
                img: "./img/redminote8.jpg",
                Name: "Xiaomi Redmi Note 8",
                type: "Xiaomi",
                price: 199
            }
            
        ];
        localStorage.setItem("Product",JSON.stringify(product));
        SanPham =JSON.parse(localStorage.getItem('Product'));
    }
}


//login,logout
//creat user
var UserArray=[];
function creatUser(){
    if(localStorage.getItem('user')===null)
    {
        var admin={taikhoan:'admin',matkhau:'admin',username:'Dương Trần Nguyễn Đạt',phone:'9999999999',thuoctinh:'0'};
        var user1={taikhoan:'user',matkhau:'123456',username:'Nguyễn Hải Dương',phone:'6969696969',thuoctinh:'1'};
        UserArray.push(admin);
        UserArray.push(user1);
        localStorage.setItem('user',JSON.stringify(UserArray));
    }
    else UserArray=JSON.parse(localStorage.getItem('user'));
    console.log(UserArray);
}

function closelogin(){
    document.getElementById('modal_login').style.display ='none';
}
function openlogin(){
    document.getElementById('modal_login').style.display = 'block';
}

function dk(){
    var s = document.getElementById('giaodien');
    s.innerHTML = '<h2>REGISTER</h2> <div onclick="closelogin();" class="btn_close"><i class="fas fa-times-circle " ></i></div><p>Username</p><input class="in" type="text" placeholder="Enter your Username..." id="tk"/><div style="color: red;" id="loitaikhoan"></div><p>Password</p><input class="in" type="text" placeholder="Enter your Password..." id="mk"/><div style="color: red;" id="loimatkhau"></div><p>Name</p><input class="in" type="text" placeholder="Enter your Name..." id="name"/><div style="color: red;" id="loiten"></div><p>Phone</p><input class="in" type="text"  placeholder="Enter your Phone..." id="ph"/> <div style="color: red;" id="loiphone"></div><a href="#"><input type="button" class="dangnhap" onclick="register();" value="Đăng Kí" /></a> <div class="footerfrom">Bạn đã có tài khoản? <a href="#" style="color: darkgreen; cursor: pointer; text-decoration:none " onclick="dn()">Đăng nhập</a></div>';
}
function dn(){
    var s = document.getElementById('giaodien');
    s.innerHTML = '<h2>LOGIN</h2><div class="btn_close" onclick="closelogin();"><i class="fas fa-times-circle " ></i></div><div><p>Username</p><input type="text" value="" id="tk" class="in" placeholder="Enter your Username..."/><p>Password</p><input type="password" value="" id="mk" class="in" placeholder="Enter your Password..."/><div><i class="fab fa-facebook icon" style="color: blue;"></i><i class="fab fa-twitter icon" style="color:dodgerblue;"></i><i class="fab fa-tumblr-square icon" style="color: darkslategray;"></i></div></div><div><input type="button" value="Đăng Nhập" onclick="login();"/></div><div>Bạn đã có tài khoản chưa ? <a href="#" style="color: darkgreen; cursor: pointer; text-decoration: none" onclick="dk();">Đăng ký</a></div>';
}

//register
function register(){
    var kt = true;
    var temp = document.getElementsByTagName('input');
    var tk = temp[0].value;
    var mk = temp[1].value;
    var nm = temp[2].value;
    var ph = temp[3].value;
    console.log(tk);
    if(tk.length <5){
        document.getElementById('loitaikhoan').textContent="Tài khoản phải từ 5 kí tự";
        kt = false;
    } else document.getElementById('loitaikhoan').textContent="";
    if(mk.length <5){
        document.getElementById('loimatkhau').textContent="Mật khẩu phải từ 5 kí tự";
        kt = false;
    } else document.getElementById('loimatkhau').textContent="";
    if(nm === ""){
        document.getElementById('loiten').textContent="Không được để trống tên";
        kt = false;
    } else document.getElementById('loiten').textContent="";
    if(ph.length !== 10){
        document.getElementById('loiphone').textContent="Số điện thoại phải là 10 số";
        kt = false;
    } else document.getElementById('loiphone').textContent="";
    if(isNaN(ph)){
        alert('Số điện thoại phải là dạng số');
        kt = false;
    }
    if(tk.length<5||mk.length<5||nm.length===""||ph.length!==10 || isNaN(ph)){
        kt = false;
    }
    
    for(var index in UserArray){
        if(tk === UserArray[index].taikhoan){
            kt = false;
            alert('Tên tài khoản đã được sử dụng');
            break;
        }
        if(ph === UserArray[index].phone){
            kt = false;
            alert('Số điện thoại đã được sử dụng');
            break;
        }
    }
    if(kt){
        var user={taikhoan:tk, matkhau:mk, username:nm, phone:ph, thuoctinh:'1'};
        UserArray.push(user);
        localStorage.setItem('user',JSON.stringify(UserArray));
        alert('Đăng ký thành công');
        dn();
    }
}

function login(){
    var TK = document.getElementById('tk').value;
    var MK = document.getElementById('mk').value;
    if(TK ===""){
        alert('Chưa nhập tài khoản');
        tk.focus();
    } else if(MK ===""){
        alert('Chưa nhập mật khẩu');
        mk.focus();
    }
    else {
        var Array = UserArray;
        var InputName = document.getElementById('tk').value;
        var InputPass = document.getElementById('mk').value;
        for(i=0;i<Array.length;i++){
            if(Array[i].taikhoan == InputName && Array[i].matkhau != InputPass){
                alert("Sai mật khẩu");
                return;
            }
            if(Array[i].taikhoan == InputName && Array[i].matkhau == InputPass){
                localStorage.setItem('Name',JSON.stringify(InputName));
                closelogin();
                alert("Đăng nhập thành công");
                if(Array[i].thuoctinh == '0'){
                    localStorage.setItem('trangthai','2');
                    checkvotk();
                    return;
                }
                if(Array[i].thuoctinh == '1'){
                    localStorage.setItem('trangthai','1');
                    checkvotk();
                    return;
                }
            }
            if(Array[i].taikhoan != InputName && Array[i].matkhau !=  InputPass )
            {
                var d=0;
                d++;
            }
        }
        if(d>0)
        {
            alert('Sai tài khoản hoặc mật khẩu');
            return;
        }
    }
}

function checkvotk(){
    var kt=JSON.parse(localStorage.getItem('trangthai'));
    if(kt == 0){
        document.getElementById('dangnhap').innerHTML = '<i class="far fa-user-circle" onclick="openlogin();"></i>';
    }
    else if(kt == 1){
        document.getElementById('nutGH').style.display = 'flex';
        document.getElementById('dangnhap').innerHTML = '<i class="fas fa-sign-out-alt" onclick="logout();"></i>';
        var ten=JSON.parse(localStorage.getItem('Name'));
        document.getElementById('tenuser').innerHTML= ten;
    }
    else if(kt == 2){
        document.getElementById('nutadmin').innerHTML = '<i class="fas fa-users-cog"></i>';
        document.getElementById('dangnhap').innerHTML = '<i class="fas fa-sign-out-alt" onclick="logout();"></i>';
    }
    else {
        localStorage.setItem('trangthai',0);
    }
}

//logout
function logout(){
    document.getElementById('nutadmin').innerHTML ="";
    document.getElementById('nutGH').style.display = 'none';
    document.getElementById('tenuser').innerHTML = '';
    document.getElementById('dangnhap').innerHTML = '<i class="far fa-user-circle" onclick="openlogin();"></i>';
    localStorage.setItem('trangthai','0');
}



//InnerSP
function innerSP(ST,SanPham){
    var s="";
    var j=ST-1;
        console.log(SanPham);
    for(i=(j*8);i<(j*8)+8;i++){
        if(i<SanPham.length)
            s+='<div class="SP" id="'+i+'" onclick="HienThiTTSP(this.id);"><img src="'+SanPham[i].img+'"/><div>'+SanPham[i].Name+'</div><div>'+SanPham[i].price+'$</div></div>';
    }
    document.getElementById('content1').innerHTML=s;
}
function innerTrang(SanPham){
    max = Math.ceil(SanPham.length/8);
    if(max>1){
        for(i=1;i<=max;i++){
        document.getElementById('Sotrang').innerHTML +='<input type="button" value="'+i+'" onclick="innerSP('+i+',temp)"/>';
        }
    }
}


//Hang
class LoaiSP{
    idSP;
    tenSP;
    constructor(idSP,tenSP){
        this.idSP=idSP;
        this.tenSP=tenSP;
    }
}
var HangSP = [
    new LoaiSP("Xiaomi", "Xiaomi"),
    new LoaiSP("Samsung", "Samsung"),
    new LoaiSP("Apple", "Apple"),
    new LoaiSP("Oppo", "Oppo")
];
function inLoaiSP(){
    var c="";
    for(i=0;i<HangSP.length;i++){
        c+='<a href="?SP='+HangSP[i].idSP+'"><li>'+HangSP[i].idSP+'</li></a>';
    }
    c= '<ul>'+c+'<ul>';
    document.getElementById('menuleft').innerHTML = c;
}

var temp;
function LocHang(SanPham){
    var url = window.location.href;
    var id = url.split("=");
    console.log(id[1]);
    if(id[1]!==undefined){
        if(id[1] !== "TimKiem")
        temp= SanPham.filter(function(a){
            return a.type === id[1];
        });
    else {
        temp = JSON.parse(localStorage.getItem('mangtk'));
    }
    var s=JSON.parse(localStorage.getItem('locgiasp'));
    if(s.tugia!=="" && s.dengia!=="" || s.tugia > s.dengia) {
    var tkt=parseInt(s.tugia);
    var tkc=parseInt(s.dengia);
    temp = temp.filter(function(e){
        return parseInt(e.price)>=tkt && parseInt(e.price)<=tkc;
        });
    }
        innerSP(1,temp);
        innerTrang(temp);
    }
    else{
        innerSP(1,temp);
        innerTrang(temp);
    }
    
}



//TimKiem
function tim(){
    var productArr = SanPham;
    var timkiem = document.getElementById('tktxt');
    let Arrayfind = [];
    var r=0;
    for(i=0;i<productArr.length;i++){
        var tensp=productArr[i].Name.toLowerCase();
        var tentk=timkiem.value.toLowerCase();
        if(tensp.indexOf(tentk)!== -1){
            Arrayfind[r]=productArr[i];
            r++;
        }
    }
    return Arrayfind;
}
function timkiemsp(){
    localStorage.setItem('mangtk',JSON.stringify(tim()));
    window.location.href="?SP=TimKiem";
}

//Theogia
function Locgiasp(){
    var tgt=document.getElementById('tkt');
    var tgc=document.getElementById('tkc');
    if(tgt.value===""){
        alert('Để trống giá từ ...');
        tkt.focus();
    }
    else if(tgc.value===""){
        alert("Để trống giá đến");
        tkc.focus();
    }
    else if(parseInt(tgt.value)>parseInt(tgc.value) ||parseInt(tgt.value)===parseInt(tgc.value)){
        alert("Mời nhập lại giá ");
        tkt.focus();
    }
    else {
        var locgia={tugia:tgt.value,dengia:tgc.value};
        localStorage.setItem('locgiasp',JSON.stringify(locgia));
    }
    document.getElementById('Sotrang').innerHTML="";
    temp=giasp(SanPham);
    LocHang(SanPham);
}
function giasp(SanPham){
    var temp;
    var s=JSON.parse(localStorage.getItem('locgiasp'));
    if(s.tugia!=="" && s.dengia!=="" || s.tugia > s.dengia) {
    var tkt=parseInt(s.tugia);
    var tkc=parseInt(s.dengia);
    temp = SanPham.filter(function(e){
        return parseInt(e.price)>=tkt && parseInt(e.price)<=tkc;
    });
    }
    else temp = SanPham;
    return temp;
}



//HienCTSP
function HienThiTTSP(id){
    document.getElementById('CTSP').style.display = "block";
    var index=parseInt(id);
    document.getElementById('TTSP').innerHTML = '<div class="HinhSP"><img src="'+temp[index].img+'"/></div><div class="ttsp"><div class="chitietsp"><p>'+temp[index].Name+'</p><p>'+temp[index].price+'$</p></div><div class=mua><input class="TSL" type="button" value="-" onclick="TangSL(this.value);"/><input id="soluongSP" type="text" value="1"><input class="TSL" type="button" value="+" onclick="TangSL(this.value);"/><input id="order" type="button" value="Order" onclick="check();LaySP('+index+')" /></div></div>';
    
}
function TatTTSP(){
    document.getElementById('CTSP').style.display = "none";
}

function TangSL(value){
    if(value === "+")
        document.getElementById('soluongSP').value++;
    if(value === "-")
        if((document.getElementById('soluongSP').value)!= 1)
            document.getElementById('soluongSP').value--;
}

function check(){
    var kt = JSON.parse(localStorage.getItem('trangthai'));
    if(kt == "0"){
        openlogin();
    }
    if(kt == "1"){
        if(document.getElementById('soluongSP').value <=0){
            document.getElementById('soluongSP').focus();
            alert("Nhập sai số lượng");
            return false;
        }
    }
}



//GioHang
//creatGH
let GioHang =JSON.parse(localStorage.getItem('giohang'));
function creatGH(){
    if(localStorage.getItem('giohang') === null){
        GioHang =[];
        localStorage.setItem('giohang',JSON.stringify(GioHang));
    }
    else GioHang = JSON.parse(localStorage.getItem('giohang'));
}

//Muahang
function LaySP(id){
    if(JSON.parse(localStorage.getItem('trangthai')) == "1"){
        var index = parseInt(id);
        var tendangnhap = JSON.parse(localStorage.getItem('Name'));
        var img = temp[index].img;
        var tensp = temp[index].Name;
        var giasp = temp[index].price;
        var SL = document.getElementById('soluongSP').value;
        if(SL <=0){
            return false;
        }
        var GH ={ tendangnhap, img , tensp , giasp , SL };
        GioHang.push(GH);
        localStorage.setItem('giohang',JSON.stringify(GioHang));
        alert("Đã thêm vào giỏ hàng");
    }
}

//GioHang
function displayGH(){
    document.getElementById('layerGH').style.display="none";
}

function gopGH(a){
    var ten= JSON.parse(localStorage.getItem('Name'));
    for(i=0;i<a.length-1;i++){
        if(ten == a[i].tendangnhap)
            for(j=(i+1);j<a.length;j++){
                if(ten == a[i].tendangnhap)
                    if(a[i].tensp == a[j].tensp){
                        var slsp = parseInt(a[i].SL)
                        var slsp1 = parseInt(a[j].SL)
                        slsp += slsp1;
                        a[i].SL = slsp;
                        a.splice(j,1);
                        j--;
                    }
            }
    }
    localStorage.setItem('giohang',JSON.stringify(a));
}
/*function showGH(){
    document.getElementById('layerGH').style.display="flex";
    var tendangnhap = JSON.parse(localStorage.getItem('Name'));
    GioHang = JSON.parse(localStorage.getItem('giohang'));
    var vt = document.getElementById('contentGH');
    for(i=0;i<GioHang.length;i++){
        if(GioHang[i].tendangnhap == tendangnhap)
            vt.innerHTML+='<div class="DSGH"><div class="TTGH"><img src="'+GioHang[i].img+'"/><p>'+GioHang[i].tensp+'</p></div><div></div></div>';
    }
}*/
function showGH(){
    document.getElementById('layerGH').style.display="flex";
    document.getElementById('TGH').innerHTML='<div>Thông tin sản phẩm</div><div>Giá</div><div>Số lượng</div>';
    var tendangnhap = JSON.parse(localStorage.getItem('Name'));
    GioHang = JSON.parse(localStorage.getItem('giohang'));
    gopGH(GioHang);
    var arr=[];
    var d=0;
    var vt = document.getElementById('contentGH');
    vt.innerHTML="";
    for(i=0;i<GioHang.length;i++){
        if(GioHang[i].tendangnhap == tendangnhap){
            vt.innerHTML+='<div class="DSGH">'+xuatcontentGH(i,GioHang[i].img,GioHang[i].tensp,GioHang[i].giasp,GioHang[i].SL)+'</div>';
            arr[d]=GioHang[i];
            d++;
        }            
    }
    xuatTTGH(arr);
}
function xuatcontentGH(id,img,ten,gia,sl){
    var s;
    s='<div class="TTGH"><div class="imgTTGH"><img src="'+img+'" /></div><div>'+ten+'</div></div><div><div class="GiaSpGH">'+gia+'$</div></div><div><input id="GH'+id+'" class="SLGH" type="number" value="'+sl+'" /><div class="chinhsuaGH" onclick="chinhSL('+id+');"><i class="fas fa-exchange-alt"></i></div></div><div class="nutxoaGH" onclick="xoaSPGH('+i+');"><i class="far fa-trash-alt"></i></div>';
    return s;
}

function xuatTTGH(arr){
    var b = document.getElementById('bottomGH');
    var tt =0;
    console.log(arr);
    for(i=0;i<arr.length;i++){
        tt+= parseFloat(arr[i].giasp)*parseFloat(arr[i].SL);
    }
    console.log(tt);
    b.innerHTML = '<div>Tổng giá: </div><div id="TongTienGH">'+tt+'$</div><div class="inthanhtoan"><input type="button" value="Thanh toán" onclick="muahang(layGHcan(GioHang));" /></div>';
}

function layGHcan(arr){
    var a=[];
    var r=0;
    var tendangnhap = JSON.parse(localStorage.getItem('Name'));
    for(i=0;i<arr.length;i++){
        if(arr[i].tendangnhap == tendangnhap){
            a[r]=arr[i];
            r++;
        }
    }
    return a;
}
function chinhSL(val){
    if(document.getElementById('GH'+val).value <1){
        alert("Nhập sai số lượng");
        document.getElementById('GH'+val).focus();
    }
    else{
        GioHang[val].SL = document.getElementById('GH'+val).value;
        localStorage.setItem('giohang',JSON.stringify(GioHang));
        xuatTTGH(layGHcan(GioHang));
    }
}

function xoaSPGH(val){
    var GioHang = JSON.parse(localStorage.getItem('giohang'));
    GioHang.splice(val,1);
    localStorage.setItem('giohang',JSON.stringify(GioHang));
    showGH();
}


//creatDH
let DonHang=[];
if(JSON.parse(localStorage.getItem('donhang'))==null){
    localStorage.setItem('donhang',JSON.stringify(DonHang));
}
else DonHang = JSON.parse(localStorage.getItem('donhang'));

var SLhoadon;
if(localStorage.getItem('SLHoaDon')===null)
{
    SLhoadon=0;
    localStorage.setItem('SLHoaDon',JSON.stringify(SLhoadon));
}
else
SLhoadon=JSON.parse(localStorage.getItem('SLHoaDon'));

//muahang
function muahang(array){
    if(array.length!==0){
        var tongtien=0;
        for(i=0;i<array.length;i++){
            tongtien+= parseFloat(array[i].giasp)*parseFloat(array[i].SL);
        }
        var tendangnhap = JSON.parse(localStorage.getItem('Name'));
        SLhoadon = JSON.parse(localStorage.getItem('SLHoaDon'));
        var mahoadon = parseInt(SLhoadon);
        mahoadon++;
        console.log(mahoadon);
        localStorage.setItem('SLHoaDon',JSON.stringify(mahoadon));
        var DH={mahoadon,tendangnhap,array,tongtien};
        DonHang.push(DH);
        localStorage.setItem('donhang',JSON.stringify(DonHang));
        alert("Đã thanh toán thành công, chờ xử lý");
        localStorage.setItem('giohang',JSON.stringify([]));
        showGH();
    }
    else {
        alert("Bạn chưa có mua gì cả");
        return false;
    }
}

//Don Hang
function showDH(){
    document.getElementById('bottomGH').innerHTML="";
    document.getElementById('TGH').innerHTML="";
    DonHang = JSON.parse(localStorage.getItem('donhang'));
    var vt = document.getElementById('contentGH');
    var tendangnhap = JSON.parse(localStorage.getItem('Name'));
    vt.innerHTML = "";
    for(i=0;i<DonHang.length;i++){
        if(DonHang[i].tendangnhap === tendangnhap){
            console.log(DonHang[i].tendangnhap);
            var abc='';
            for(f=0;f<DonHang[i].array.length;f++){
                abc+='<div class="TTSPDH"><div>Tên sản phẩm:'+DonHang[i].array[f].tensp+'</div><div>Giá:'+DonHang[i].array[f].giasp+'$</div><div>Số lượng:'+DonHang[i].array[f].SL+'</div></div>';
            }
            vt.innerHTML+='<div class="DSHDon"><div class="ThongtinHD"><div>Mã hóa đơn: '+DonHang[i].mahoadon+'</div><div>Tổng tiền:'+DonHang[i].tongtien+'</div></div>'+abc+'</div>';
        }
    }
}