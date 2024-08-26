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





