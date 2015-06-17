{% extends 'layout.swig' %}

{% block content%}
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>Micasa</title>

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

<body>

  <div class="container">
    <div class="section">

      <h5 class="header center orange-text">Not Approved Appointments</h5>
      <table id="notapproved" class="bordered hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="appointmentID">Appointment ID</th>
              <th data-field="propertyID">Property ID</th>
              <th data-field="buyerPhone">Buyer Phone</th>
              <th data-field="buyerName">Buyer Name</th>
              <th data-field="appointmentTime">Appointment Time</th>
              <th data-field="appDuration">Appointment Duration</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>
      <br>

      <h5 class="header center orange-text">Approve an Appointment</h5>
     <form id="approve-field">
        <div class="input-field">
          <input id="approve" type="search" placeholder="Input the appointmentID you want to approve, press enter, then refresh the page" required>
        </div>
      </form> 

      <h5 class="header center orange-text">Approved Appointments</h5>
      <table id="approved" class="bordered hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="appointmentID">Appointment ID</th>
              <th data-field="propertyID">Property ID</th>
              <th data-field="buyerPhone">Buyer Phone</th>
              <th data-field="buyerName">Buyer Name</th>
              <th data-field="appointmentTime">Appointment Time</th>
              <th data-field="appDuration">Appointment Duration</th>
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

       
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3">Micasa</a>
      </div>
    </div>
  </footer>


  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="js/main.js"></script>
  <script src="js/agent_get_not_approved_appointments.js"></script>
  <script src="js/agent_get_approved_appointments.js"></script>
  <script src='js/agent_approve_appointment.js'></script>
  </body>
{% endblock %}
</html>