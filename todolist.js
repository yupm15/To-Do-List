function add(e)
{
    var text=document.getElementsByTagName('input')[0];
    var nd=document.createElement('li');
    var nb=document.createElement('button');
    
    nb.setAttribute('style','margin-left: 10px;');
    nd.innerText=text.value;
    nb.innerText="Delete"
    nd.append(nb);
    document.getElementById('u1').append(nd); 
    nb.addEventListener("click",remove)
    text.value="";
}
function remove(e)
{
    var li=e.target.parentNode;
    li.parentNode.removeChild(li);
}
var btnA = document.getElementsByClassName('add')[0];
btnA.addEventListener("click",add)



