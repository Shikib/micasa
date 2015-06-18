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
    <div class ="container">
 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>
  <h4 class="header center orange-text">Welcome Seller!</h4></center>
<br><br>

<div class="ylog">

  <h5 align="left" class="header center teal-text">Offers on Your Properties for Sale</h6>
 <table id="viewforsale" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="offerID">OfferID</th>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="salePrice">Asking Sale Value</th>
              <th data-field="purchaseAmount">Sale Offer Value</th>
              <th data-field="offerMessage">Offer Message</th>
              <th data-field="offerDate">Offer Date</th>
              <th data-field="buyerName">Buyer Name</th>
              <th data-field="buyerPhone">Buyer Phone</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

<br><h5 align="left" class="header center teal-text">Offers on Your Properties for Rent</h6>
 <table id="viewforrent" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="offerID">OfferID</th>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="rentPrice">Asking Rent Value</th>
              <th data-field="rentAmount">Rent Offer Value</th>
              <th data-field="offerMessage">Offer Message</th>
              <th data-field="offerDate">Offer Date</th>
              <th data-field="buyerName">Buyer Name</th>
              <th data-field="buyerPhone">Buyer Phone</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
    </div>



  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/viewoffer.js"></script>
  <script src="js/main.js"></script>
  <script src="js/seller.js"></script>
  <script src="loginModule.js"></script>
{% endblock %}