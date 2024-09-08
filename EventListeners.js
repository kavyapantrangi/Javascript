<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="conatiner">
        <button id="hi">Click me</button>
        
    </div>
</body>
<script >
const myButton=document.getElementById("hi");
myButton.addEventListener("click",()=>
{
    alert("button clicked");
})
</script>
</html>

//styling 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="conatiner">
        <p id="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, dignissimos!</p>
        <button id="hi">Click me</button>
        
    </div>
</body>
<script >
    // styling the content
const myButton=document.getElementById("hi");
const para=document.getElementById("p1");
myButton.addEventListener("click",()=>
{
    para.style.backgroundColor='red';
})
</script>
</html>

//Creating an element using js
//creating new paragraph element
const newParagraph=document.createElement('p');
//setting the text content
newParagraph.textContent='Hey kavya ,how r u??';
//appending to the body of the document
document.body.appendChild(newParagraph);






