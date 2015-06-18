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

<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="advanced_search">Advanced Search</a></li>
      </ul>
    </div>
  </nav>

  <body>

      <div class="container">

<body>
 
 <nav class="white lighten-1" role="navigation">
    <div class="nav-wrapper container">
     <form id="search-field">
        <div class="input-field">
          <input id="search" type="search" placeholder="Enter the city that you are interested in..." required>
          <label for="search"><i class="mdi-action-search"></i><label>
        </div>
      </form> 
     </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
    </div>
  </div>


  <div class="container">
    <div class="section">

      <table id="results" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="aptNumber">Apartment Number</th>
              <th data-field="houseNumber">Building Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

    </div>
    <br><br>

    <div class="section">

    </div>
  </div>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/main.js"></script>
  </body>
{% endblock %}
</html>
