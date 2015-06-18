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
  <h4 class="header center orange-text">Welcome Seller!</h4></center>
<br><br>

<div class="ylog">
<!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a href="viewoffer">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">View offers on your properties</h5>

          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="postproperty">
            <h2 class="center teal-text"><i class="mdi-content-add-circle"></i></h2></a>
            <h5 class="center">Post your property</h5>

          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="editproperty">
            <h2 class="center teal-text"><i class="mdi-editor-mode-edit"></i></h2></a>
            <h5 class="center">Edit your property</h5>

          </div>
        </div>
      </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="rateagent">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">Pleasant experience? Rate your agent!</h5>

          </div>
        </div>
        </div>
      

  <body>

      <div class="container">

<div class="ylog">
<br><h5 align="left" class="header center teal-text">Your Properties for Sale</h6>
 <table id="forsale" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="houseNumber">House Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="agentID">Agent</th>
              <th data-field="salePrice">salePrice</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

  <br><br><h5 align="left" class="header center teal-text">Your Properties for Rent</h6>
 <table id="forrent" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="propertyID">PropertyID</th>
              <th data-field="houseNumber">House Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="agentID">Agent</th>
              <th data-field="rentPrice">rentPrice</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

    </div>
  </div>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/seller.js"></script>
  <script src="js/main.js"></script>
  <script src="loginModule.js"></script>
{% endblock %}