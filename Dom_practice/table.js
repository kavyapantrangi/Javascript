Index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="button" value="Generate a table" onclick="generateTable()" />

    
</body>
<script src="index.js"></script>
</html>


js file:
function generateTable()
{
    //creates a <table>
    const tbl=document.createElement("table");
    const tblbody=document.createElement("tbody");
    //creaetiing cell
    for(let i=0;i<2;i++)
    {
        const row=document.createElement("tr");
        for(let j=0;j<2;j++)
        {
            const cell=document.createElement("td");
            const cellText=document.createTextNode(`hello from ${i},${j}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border","2");

    
}
