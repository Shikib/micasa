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
 
 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="images/micasa.png" style = "width:50px;height:50x;"></a>
     <form>
        <div class="input-field">
          <input id="basic-search" type="search" placeholder="Enter the city that you are interested in..." required>
          <label for="search"><i class="mdi-action-search"></i><label>
        </div>
      </form> 
     </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center  blue-grey lighten-1-text">Welcome to micasa</h1>
      <img src="images/micasa.png" style = "width:50px;height:50x;">
      <div class="row center">
        <h5 class="header col s12 light">We can help you buy sell and rent houses</h5>
      </div>

      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a hef="/seller">
            <h2 class="center light-blue-text"><i class="mdi-action-home"></i></h2>
            <h5 class="center">I have a house for sale or rent</h5>

            <p class="light">Do you want ot sell or rent a house, click on the icon above so we can connect you with .</p></a>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="mdi-content-add-circle"></i></h2>
            <h5 class="center">I want to buy a house or rent  </h5>

            <p class="light">We can help you find your dream house and connect you with an agent to tour houses</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="mdi-action-assignment-ind"></i></h2>
            <h5 class="center">Im an agent </h5>

            <p class="light">Are you an agent? you can use our site to find potnetial buys and sellers to create a great relationship</grea>
          </div>
        </div>
      </div>

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
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>

  </body>
{% endblock %}
</html>
