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
