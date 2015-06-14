{% extends 'layout.swig' %}

{% block content%}
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>Micasa</title>

  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
{% endblock %}

{% block content %}
<body>
 
 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="images/micasa.png" style = "width:50px;height:50x;"></a>
      
    </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
    </div>
  </div>


  <div class="container">
    <div class="section">

      <table id="results" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="propertyID">Property ID</th>
              <th data-field="buyerPhone">Buyer Phone</th>
              <th data-field="buyerName">Buyer Name</th>
              <th data-field="message">Message</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

    </div>
    <br><br>

    <div class="section">

    </div>
  </div>

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">About us</h5>
          <p class="grey-text text-lighten-4">We are a team of UBC students working on this project like it's our full time job. </p>


       
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3">Micasa</a>
      </div>
    </div>
  </footer>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="js/agent_get_interested.js"></script>
  </body>
{% endblock %}
</html>