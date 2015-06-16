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
 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>
  <h4 class="header center orange-text">Welcome Buyer</h4></center>
<br><br>
 <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a href="interested_in">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">See anything intersting?</h5>

            <p class="light">Click on the icon to make a new interested in request</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="makeofferpurchase">
            <h2 class="center teal-text"><i class="mdi-content-add-circle"></i></h2></a>
            <h5 class="center">New purchase offer   </h5>

            <p class="light">click on the icon to make a new purchase offer</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="makeofferrental">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">New rental offer</h5>

            <p class="light">Click on the icon to make a new rental offer</p>
          </div>
        </div>
      </div>


<h5 align="left" class="header center teal-text">Your Purchase Offer</h6>
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
              <th data-field="offerDate">OfferDate</th>
              <th data-field="purcaseAmount">Offer Amount</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

      <br><br><h5 align="left" class="header center teal-text">Your Rental Offer</h6>
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
              <th data-field="offerDate">OfferDate</th>
              <th data-field="rentAmount">Rental Amount</th>
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