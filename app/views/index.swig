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
        <li class="nlog" style="display: none;" ><a href="login">Login</a></li>
        <li class="nlog" style="display: none;"><a href="signup">Sign up</a></li>
        <li class="ylog" ><a href="/profile">Profile</a></li>
        <li class="ylog" ><a href="/" id="logout">Logout</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </div>
  </nav>
        
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br><center><img src="images/micasa.png" style = "width:400px;height:400x;"></a></center>
      <h1 class="header center orange-text">Welcome to Micasa</h1>
      <div class="row center">

      </div>

      <br><br>

    </div>
  </div>

  <div class="container">
    <div class="section ylog" style="display: none;">

      <!--   Icon Section   -->
      <div class="row">
        <div class="center col s12 m4 sellero">
          <div class="icon-block"><a href="seller">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">I have a house for sale or rent</h5>

            <p class="light">If you want to sell or rent a house, click on the icon above so we can connect you with buyers</p>
          </div>
        </div>

        <div class="center col s12 m4 buyero">
          <div class="icon-block"><a href="buyer">
            <h2 class="center teal-text"><i class="mdi-content-add-circle"></i></h2></a>
            <h5 class="center">I want to buy or rent a house</h5>

            <p class="light">We can help you find your dream house and connect you with an agent to tour houses</p>
          </div>
        </div>

        <div class="center col s12 m4 agento">
          <div class="icon-block"><a href="agent">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">I am an agent </h5>

            <p class="light">Are you an agent? You can use our site to find potential buyers and sellers to create a great relationship</p>
          </div>
        </div>
      </div>

    </div>

    <div class="section ylog">
      <h3 class="center">Fun Facts About Cities and Agencies</h3>
     
      <br><br>
       
      <h5 class="center">List of Cities in Order of Most Expensive Average Residential Home Sale Price</h5>
      <table id="rs-ordered-price" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="city">City</th>
              <th data-field="avg-price">Average Home Price (Thousands)</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
    
      <br><br>       

      <h5 class="center">List of Cities with Maximum Price, Minimum Price and Count for Residential Homes</h5>
      <table id="rs-mm-price" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="city">City</th>
              <th data-field="max-price">Max Home Price (Thousands)</th>
              <th data-field="min-price">Min Home Price (Thousands)</th>
              <th data-field="house-count">Number of Properties</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
      
      <br><br>       

      <h5 class="center">List of Agencies that are Selling Properties in All Cities</h5>
      <table id="diverse-agency-list" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="agemcy-name">Agency Name</th>
              <th data-field="agency-rating">Agency Rating</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

      <br><br>       

      <h5 class="center">List of Cities that have Properties Being Sold by all Agencies</h5>
      <table id="popular-city-list" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="city">City</th>
              <th data-field="province">Province</th>
              <th data-field="country">Country</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

      <br><br>       

      <h5 class="center"><a href="#" id="switch-agency-list">Best</a> Agency in every City (based on properties selling)</h5>
      <table id="bw-agency-list" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="city">City</th>
              <th data-field="province">Province</th>
              <th data-field="country">Country</th>
              <th data-field="agencyName">Agency Name</th>
              <th data-field="count">Property Count</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

      <br><br>       

      <h5 class="center"><a href="#" id="switch-city-list">Best</a> City for every Agency (based on properties selling)</h5>
      <table id="bw-city-list" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="agencyName">Agency Name </th>
              <th data-field="city">City</th>
              <th data-field="province">Province</th>
              <th data-field="country">Country</th>
              <th data-field="count">Property Count</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
    </div>

    <div class="section nlog" style="display: none;">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a href="seller">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">I have a house for sale or rent</h5>

            <p class="light">If you want to sell or rent a house, click on the icon above so we can connect you with buyers</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="buyer">
            <h2 class="center teal-text"><i class="mdi-content-add-circle"></i></h2></a>
            <h5 class="center">I want to buy or rent a house</h5>

            <p class="light">We can help you find your dream house and connect you with an agent to tour houses</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="agent">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">I am an agent </h5>

            <p class="light">Are you an agent? You can use our site to find potential buyers and sellers to create a great relationship</p>
          </div>
        </div>
      </div>

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
  <script src="js/home.js"></script>

  </body>
{% endblock %}
</html>
