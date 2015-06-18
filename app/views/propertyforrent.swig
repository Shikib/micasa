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
  <body>
      <div class="container">

<div class="ylog">
   <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>
  <h4 class="header center orange-text">Make Purchase Offer </h4></center>
  <div class="row">
    <form id="form" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="mdi-action-account-circle prefix"></i>
          <input id="buyername" type="text" class="validate">
          <label for="buyername">Buyer name</label>
        </div>

        <div class="input-field col s6">
          <i class="mdi-communication-phone prefix"></i>
          <input id="buyerphone" type="tel" class="validate">
          <label for="buyerphone">Telephone</label>
        </div>

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
          <input id="offerdate" type="date" class="datepicker">
          <label for="offerdate">Offer Date</label>
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
</div>
        
<a id ="purchase-offer-submit" class="btn" onclick="Materialize.toast('Your purchase offer has been submitted thanks!', 4000)">Submit</a>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/purchaseoffer.js"></script>
  <script src="js/main.js"></script>
  <script src="loginModule.js"></script>
<br><br>
 </div>
    </body>