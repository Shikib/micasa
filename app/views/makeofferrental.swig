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
  <h4 class="header center orange-text">Make Rental Offer </h4></center>
  <div class="row">
    <form id="form" class="col s12">
      <div class="row">

          <div class="input-field col s6">
          <i class="mdi-action-home prefix"></i>
          <input id="propertyID" type="text" class="validate">
          <label for="propertyID">Property ID</label>
        </div>

          <div class="input-field col s6">
          <i class="mdi-device-access-time prefix"></i>
          <input id="amount" type="text" class="validate">
          <label for="amount">Offer amount </label>
        </div>
        <div class="input-field col s6">
          <i class ="mdi-action-perm-contact-cal prefix"></i>
          <input id="offerdate" type="text" class="validate">
          <label for="offerdate">Offer Date please input as yyyy/mm/dd</label>
        </div>

        <div class="row">
        <div class="input-field col s12">
          <i class="mdi-action-question-answer prefix"></i>
          <textarea id="message" class="materialize-textarea"></textarea>
          <label for="message">Message</label>
        </div>
      </div>

      </div>
    </form>
  </div>

  <button id= "rental-offer-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="mdi-content-send right"></i>
  </button>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/main.js"></script>
  <script src="js/rentaloffer.js"></script>
<br><br>
 </div>
    </body>