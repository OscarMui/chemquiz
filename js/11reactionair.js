<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="js/11reactionair.js" ></script>
    <title>Ch11 Reaction With Air</title>

    <meta charset="UTF-8" />
    <meta name="copyright" content="&copy; 2018 Oscar Mui" />

    <meta name="viewport" content="width=320, initial-scale=1" />
    <link rel="stylesheet" href="css/all.css" media="only screen and (min-device-width:481px)"/>
    <link rel="stylesheet" href="css/all_mobile.css" media="screen and (max-device-width:480px)"/>
    <link rel="stylesheet" href="css/auto_quiz.css" media="only screen and (min-device-width:481px)"/>
    <link rel="stylesheet" href="css/auto_quiz_mobile.css" media="screen and (max-device-width:480px)"/>

    <style>
        body{
            background-color:#9FF;
        }
        a{
            color:#0000FF;
            text-decoration: none;
        }
        #top_div{
            background-color:#555;
            color:#FFF;
        }
        #status_div{
            background-color:#555;
            color:#FFF;
        }
        table{
            table-layout: fixed;
        }
        p:empty{
            display:none;
        }
    </style>
</head>
<body onload="start()">
    <a href="index.html">Back to homepage</a>

    <div id="top_div">
        <h4 id="html_score">Score: </h4>
        <h4 id="html_iscorrect">Quiz starts!</h4>
    </div>

    <h3 id="html_question"></h3>
    <div><p style="display: inline-block;">This metal &nbsp;</p><select id="html_input0" style="display: inline-block;" onchange="majoronchange()"><option>reacts</option><option>does not react</option></select><p style="display: inline-block;">&nbsp; with air.</p></div>
    <p id="html_iscorrect0"></p>
    <p id="html_correct0"></p>

    <div id="group_minor_answers">
        <div><p style="display: inline-block;" >Name of product: &nbsp;</p><input id="html_input1" style="display: inline-block;" /></div>
        <p id="html_iscorrect1" ></p>
        <p id="html_correct1" ></p>
        <div><p style="display: inline-block;">Formula of product: &nbsp;</p><input id="html_input2" style="display: inline-block;"/></div>
        <p id="html_iscorrect2" ></p>
        <p id="html_correct2" ></p>
        <div><p style="display: inline-block;">Observable changes: &nbsp;</p><textarea id="html_input3" cols="40" rows="5" style="display: inline-block;" ></textarea></div>
        <p id="html_correct3" ></p>
        <div><select id="html_check3" style="display: inline-block;" ><option>0 marks</option><option>1 mark</option></select><p style="display: inline-block;"> &nbsp; out of 1 mark</p><br /></div>
    </div>


    <br />
    <button id="html_check" onclick="check()">Check answers</button>
    <button id="html_next" onclick="next()" style="display:none;">next</button>
    <div id="status_div">
        <h5>Instructions: After the mentioned metal reacted with air, write down the chemical name and formula of the product and state its observable change.</h5>
        <h5>Mark the third blank yourself.</h5>
        <h5>e.g.: Question: Potassium --> Answer: reacts, Potassium Oxide, K2O, Potassium burns with ..., ... forms.</h5>
    </div>
</body>
</html>
