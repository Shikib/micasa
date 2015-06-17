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

{% block content%}
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </div>
  </nav>



 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>
  <h4 class="header center orange-text">Welcome Seller!</h4></center>


<!--   Icon Section   -->
<body>
  <div class="container">
    <div class="col s12 m4">
      <div class="icon-block"><a href="seller">
        <h2 class="center teal-text"><i class="mdi-navigation-arrow-back"></i></h2></a>
        <h5 class="center">Back to Seller</h5>
      </div>
     </div>

     <div class="row">
       <div class="col s12 m4">
         <div class="icon-block"><a href="commercialforsale">
           <h2 class="center teal-text"><i class="mdi-communication-business"></i></h2></a>
           <h5 class="center">Post your Commercial Property for Sale</h5>
         </div>
       </div>
       
        <div class="col s12 m4">
          <div class="icon-block"><a href="commercialforrent">
            <h2 class="center teal-text"><i class="mdi-communication-business"></i></h2></a>
            <h5 class="center">Post your Commercial Property for Rent</h5>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a href="residentialforsale">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">Post your Residential Property for Sale</h5>

          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="residentialforrent">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">Post your Residential Property for Rent</h5>

          </div>
        </div>
      </div>
    </div>  

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/postproperty.js"></script>
</body>
{% endblock %}
