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
  <ul id="buyeractions" class="dropdown-content">
  <li><a href="interested_in">New Interested In</a></li>
  <li><a href="makeofferpurchase">New Purchase Offer</a></li>
  <li><a href="makeofferrental">New Rental offer</a></li>
  <li><a href="appointment">New Appointment</a></li>
</ul>
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Search</a></li>
        <li><a class="dropdown-button" href="#!" data-activates="buyeractions">Buyer Actions<i class="mdi-navigation-arrow-drop-down right"></i></a></li>
      
    </div>
  </nav>
    <body>
      <div class="container">
 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>
  <h4 class="header center orange-text">Welcome Buyer</h4></center>
<br><br>



<h5 align="left" class="header center teal-text">Your Purchase Offer</h5>
 <table id="purchaseoffer" class="bordered hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="houseNumber">House Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="offerID">offerID</th>
              <th data-field="offerDate">OfferDate</th>
              <th data-field="purcaseAmount">Offer Amount</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

     <br><br><h5 align="left" class="header center teal-text">Your Rental Offer</h5>
 <table id="rentoffer" class="bordered hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="houseNumber">House Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="offerID">offerID</th>
              <th data-field="offerDate">OfferDate</th>
              <th data-field="rentAmount">Rental Amount</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>


  <br><br><h5 class="header center teal-text">Delete an Appointment</h5>
     <form id="delete-app-field">
        <div class="input-field">
          <input id="approve" type="search" placeholder="Input the appointmentID you want to delete" required>
        </div>
      </form> 


<h5 align="left" class="header center teal-text">Your Appointments</h5>
 <table id="app" class="bordered hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="appointmentID">AppointmentID</th>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="houseNumber">House Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="appointmentTime">Appointment Time</th>
              <th data-field="appDuration">Appointment Duration</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/buyer.js"></script>
{% endblock %}