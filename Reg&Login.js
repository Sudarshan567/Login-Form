function regin()
{
    var register=document.getElementById('register')
    var login=document.getElementById('login')

    if(register.classList.contains('hidden'))
    {
        register.classList.remove('hidden')
        login.classList.add('hidden')
    }
    else{
        register.classList.add('hidden')
        login.classList.remove('hidden')
    }
}