var btn = document.getElementById('btn')

btn.addEventListener('click',function(){
   var ure = document.getElementById('username').value
   var pw = document.getElementById('password').value
   if (ure != "" && pw != "") {
      alert('Đăng nhập thành công')
      window.location.href="../main/index.html"
   } else {
      alert('Vui lòng nhập đầy đủ thông tin')
   }
})