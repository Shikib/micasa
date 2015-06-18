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
        <li class="nlog" style="display: none;" ><a href="login">Login</a></li>
        <li class="nlog" style="display: none;"><a href="signup">Sign up</a></li>
        <li class="ylog" ><a href="/profile">Profile</a></li>
        <li class="ylog" ><a href="/" id="logout">Logout</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </div>
  </nav>
   <body>
      <div class="container">
 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>

<div class="ylog">
<h4 class="header left teal-text">Rate an agent!</h4></left>
  <div class="row">
    <form id ="form" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="agentID" type="text" class="validate">
            <label for="agentID">agent ID</label>
          </div>

          <div class="row">
            <div class="row">
              <div class="input-field col s12">
                <textarea id="sellerRating" class="materialize-textarea"></textarea>
                <label for="sellerRating">Rating</label>
              </div>
            </div>
          </div>


        </div>
      </form>
        </div>
      <button id="in-submit" class="btn waves-effect waves-light" type="submit" name="action">Update
      <i class="mdi-content-send right"></i>
    </button>
</div>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
   <script src="js/main.js"></script>
  <script src="loginModule.js"></script>
  <script src="js/rateagent.js"></script>
{% endblock %}