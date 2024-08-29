Dom:document Object model(DOM) is an application programming interface (API) for manipulating HTML Documents.
  It allows to add ,modify the part of the document effectively.
                                        #####################getElementById()########################
  Retrieves the elemnent by the same ids.

*********  Example:***********
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="message">get element by id Here we can access the element in html document by getEleementById()</p>
</body>
<script>
    let msg=document.getElementById("message");
    console.log(msg);
    
</script>
</html>

                                                       ################getElementByName()#########


  It will return a nodelist sharing the same name:
  **********Example******
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<input type="radio" name="name">cse
<input type="radio" name="name">Ece
</body>
<script>
    let msg=document.getElementsByName("name");
    console.log(msg);
    
</script>
</html>

Output:
NodeList(2)
0: input
1 :input
length:2
  ################    getElementByclassName()        #############
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body class="message">
<input type="radio" name="name">cse
<input type="radio" name="name">Ece
<div class="message">
    Hello world
</div>
</body>
<script>
    let msg=document.getElementsByClassName("message");
    console.log(msg);
    
</script>
</html>

################QuerySelector()#########
The Queryselector() method allows you to select the first element that matches one or more css selectors
###travsering the parent nodes####
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="title">
    <p class="text">Welcome to Greatstack</p>
</div>
</body>
<script>
    let msg=document.querySelector(".text");
    console.log(msg.parentNode);
    
</script>
</html>
###############Previous Element Sibling########
  let msg=document.querySelector(".text");
    console.log(msg.previousElementSibling);
#########createElement()#############
The Document.createElemnt() accepts an HTML tag and name and returns a new node of its type.





