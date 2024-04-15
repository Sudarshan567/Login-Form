function darkmode()
{
    var dark=document.getElementById('blackbox')
    var theme=document.getElementById('theme')

    if(dark.classList.contains('hidden'))
    {
        dark.classList.remove('hidden')
        theme.classList.add('hidden')
    }
    else{
        dark.classList.add('hidden')
        theme.classList.remove('hidden')
    }
}