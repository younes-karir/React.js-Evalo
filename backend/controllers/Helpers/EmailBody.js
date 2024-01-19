
const EmailBody = (data) => `
<html>
<head>
</head>
<body>
    <div >
    <h4 style="${heaher1}">Bonjour ${data.elevename}.</h4>\n
    <h5 style="${heaher2}">Code d'activation : ${data.code}</h5>\n
    <h5 style="${heaher3}">Ouvrir le lien suivant pour commancer <a href="http://localhost:3000/questionnaire" >Lien</a></h5>
    </div>
</body>
</html>`;


const heaher1 = `
margin: 0;
padding: 0;
color: #575757;
font-size :16px;
margin-bottom: 10px;
`
const heaher2 = `
margin: 0;
padding: 0;
color:  #5d5d5d;
font-size :13px;
margin-left: 4px;
`
const heaher3 = `
margin: 0;
padding: 0;
color:  #5d5d5d;
font-size :13px;
margin-left: 4px;
`



module.exports = {
  EmailBody,
};
