//https://dinfree.com/lecture/frontend/123_js_exam.html
//생성자, 클래스
//2-6-3.html

window.onload = function(){
   function Product(name, price)
   {
       this.name = name;
       this.price = price;
       this.getInfo = function()
       {
           return this.name + ", " + this.price;
       }
   }
    
   var a = new Product();
      a = {
            name : "갤럭시", 
            price : 10
        }
       // console.log(a.name + ", " + a.price);
       
       // a.name, a.price에 대입되는건 맞는데 왜 getInfo()가 함수가 아니라는걸까
       
    // a.name = "삼성 갤럭시"
    // a.price = 1100000;
    console.log(a.getInfo());


    var b = new Product("아이폰", 20);
    console.log(b.getInfo());

}
