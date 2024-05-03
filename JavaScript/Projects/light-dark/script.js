let btnText=document.getElementById('btn')
function changeMode()
{
    document.body.classList.toggle('dark')
    if(btnText.textcount == "🌙")
    {
        btnText.textContent = "🔆"
    }
    else
    {
        btnText.textContent = "🌙"
    }
}
const x= document.getElementById('inp')
function MyFun()
{
    if(x.type == "password")
    {
        x.type = "text"
        document.getElementById('btn2').textContent="hide"

    }
    else
    {
        x.type="password"
        document.getElementById("btn2").textContent="show"
    }
}