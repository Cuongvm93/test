// BÀI 1
/* 
let a= prompt("nhap vào 1 chuoi bat ky");
let b=a.split("")
let str=""
for (let index= b.length-1; index >=0; index--) {
    
    str=str.concat(b[index].toString())
}

alert(str);
*/

 

// BÀI 2
// let str= prompt("nhap vao string");
// let array= str.split(" ")  //  tư duy đưa chuỗi vào array -> xử lý từng phần tử=> duyệt mảng-> ghép chuỗi
// let newstr="";
// for (let i = 0; i < array.length; i++) {
//     array[i]=array[i].substring(0,1).toUpperCase() + array[i].substring(1,array[i].length)
//     newstr=newstr.concat(array[i].toString()," ")
// }
// alert(newstr)

// Bài 3
/*
let a=prompt("nhap vao 1 mảng bất kỳ")
let arr=a.split(" ")
let newarr= [];
for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i])==-1) {
        newarr.push(arr[i])
    }
}
  
console.log(newarr);
*/


// BÀI 4
/*
let arr= [1,55,7,14,12,8,50,96]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
        if (arr[j]>arr[j+1]) {
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]    
        }
    
        
    }
   
    
}
console.log(arr);
*/

// BÀI 5
/*let arr=["Cuong","Thao", "Trang"]
while (true) {
    let nhap=prompt("nhap chuc nang ma ban muon (R,C,U,D)").toLowerCase();
    if (nhap=="r") {
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[i]);
            
        }
    } else if(nhap ="c"){
        let them=prompt("them nhan vien ma ban muon")
        arr.push(them);
        console.log(arr);
    } else if(nhap == "u"){
        let update= +prompt("ban muon update nhan vien so may")
        let update2= prompt("dien moi ten nhan vien")
        arr[update-1]=update2
        console.log(arr);
    } else if (nhap == "d") {
        let xoa= +prompt("ban muon xoa nhan vien so may")
        let xoa2= prompt("dien moi ten nhan vien")
        delete arr[xoa-1]
        console.log(arr);
    }
    let check=confirm("ban co muon thao tac nua ko");
    if (check==false) {
        alert("Goodbye!")
        break;
    }
}
*/

// BÀI 6
let ngay= 31
let thang=12
let nam=1990
let arr1=[1,3,5,7,8,10,12]
let arr2=[4,6,9,11]
if (ngay<=0&&ngay>31) {
    console.log("bạn nhập sai ngày");
}
if (thang<=0&& thang>12) {
    console.log("bạn nhập sai tháng");
}
if (ngay=31 && arr1.indexOf(thang)==-1) {
    console.log("bạn nập sai tháng");
    
} if (ngay>28 && thang==2) {
    console.log("bạn nhập sai ngày");
}
console.log(`${ngay}/${thang}/${nam} là hợp lệ`);
if (ngay==30&&arr2.indexOf(thang)!=-1) {
    console.log(`ngay tiep theo la 1/${thang+1}/${nam}`);
} else {
     console.log(`ngay tiep theo la ${ngay+1}/${thang}/${nam}`);
}
if (ngay ==31&&arr1.indexOf(thang)!=-1&&thang!=7&& thang!=12) {
    console.log(`ngay tiep theo la 1/${thang+1}/${nam}`) 
}
if (ngay==31&&thang==7) {
    console.log(`ngay tiep theo la 1/8/${nam}`);
    
}if (ngay==31&&thang==12){
   console.log(`ngay tiep theo la 1/1/${nam+1}`);
}



// BÀI 7
/*
let store = ["Tôi thấy hoa vàng trên cỏ xanh","Đắc nhân tâm"];
let cart = [];

while (true) {
    let task=prompt("Nhập thao tác bạn muốn?(C,R,U,D)").toLowerCase();
   
   if(task=="c"){

    let product = prompt("Nhập tên Sản phẩm");
    if (store.indexOf(product) === -1) {
        console.log("Sản phẩm không có trong store")
    } else {
        let number = +prompt("nhập số lượng");
        let findIndex = -1;
        for (let i = 0; i <= cart.length - 1; i++) {
            if (cart[i][0] === product) {
                findIndex = i;
            }
        }
        // Neu chua ton tai trong cart
        if (findIndex === -1) {
            let buyItem = [product, number];
            cart.push(buyItem)
        } else {

            // Neu da ton tai trong cart => tang len 1
            cart[findIndex][1] = cart[findIndex][1] + number
        }

        console.log(cart)
   }
    
    
} else if (task=="r") {
    console.log(cart);
} else if (task=="u") {
    let update=+prompt("bạn muốn update sản phẩm số mấy?")
    let update2=prompt("tên sản phẩm muốn thay")
    let update3=prompt("số lượng muốn thay");
    cart[update-1]=[update2,update3]
    console.log(cart);
} else if (task=="d") {
    let xoa=+prompt("bạn muốn update sản phẩm số mấy?")
    delete cart[xoa-1];
    console.log(cart);
    
}

        let answer = prompt("Bạn muốn tiếp tục mua sắm không? (Y/N)")
        if(answer === "N") {
            break;
        }
    

}
*/
