{% extends 'layout.swig' %}

{% block content%}
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>Micasa</title>

  <!-- CSS  -->
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
{% endblock %}

{% block content %}
<body>
 
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Serach</a></li>
      </ul>
    </div>
  </nav>
        
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">

      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <a id="filter-commercial" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud left"></i>Commercial</a>
      <a id="filter-residential" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud right"></i>Residential</a>
     

      <a id="filter-sale" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud left"></i>For Sale</a>
      <a id="filter-rent" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud right"></i>For Rent</a>



    </div>
    <br><br>

    <div class="section">

    </div>
  </div>

  <footer class="page-footer  grey lighten-4">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="grey-text">About us</h5>
          <p class="grey-text">We are a team of UBC students working on this project like it's our full time job. </p>





  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/main.js"></script>
  </body>
{% endblock %}
</html>
