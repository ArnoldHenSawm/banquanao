var btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    var ure = document.getElementById('username').value
   var pw = document.getElementById('password').value
   var pw2 = document.getElementById('password2').value
   if (ure != "" && pw != "" && pw2 != "") {
      alert('Đăng ký thành công')
      window.location.href="./dang-nhap/dang-nhap.html"
   } else {
      alert('Vui lòng nhập đầy đủ thông tin')
   }
})