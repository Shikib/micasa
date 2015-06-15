{% extends 'layout.swig' %}
{% block content%}
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="">!Serach</a></li>
      </ul>
    </div>
  </nav>

  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h2 class="center teal-text"> <i class="large mdi-social-location-city"></i><br></h2>
      <h4 class="header center orange-text">Welcome Agent!</h4>
      <div class="row center">
      <br><br>
      </div>
    </div>
  </div>
  
{% endblock %}

{% block content%}
<body>

<nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="images/micasa.png" style = "width:50px;height:50x;"></a>
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

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">About us</h5>
          <p class="grey-text text-lighten-4">We are a team of UBC students working on this project like it's our full time job. </p>


       
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3">Micasa</a>
      </div>
    </div>
  </footer>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/main.js"></script>
  <script src="js/agent_get_interested.js"></script>
  </body>
{% endblock %}
+</html>
