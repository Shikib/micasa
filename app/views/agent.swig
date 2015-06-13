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

  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block"><a href="agent_offers">
            <h2 class="center teal-text"><i class="mdi-action-home"></i></h2></a>
            <h5 class="center">I want to view my offers</h5>

            <p class="light">Click on the icon to view your offers.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="agent_interest">
            <h2 class="center teal-text"><i class="mdi-content-add-circle"></i></h2></a>
            <h5 class="center">I want to view expressions of interest</h5>

            <p class="light">Click on the icon to view the expressions of interest.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="agent_appointments">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">I want to approve viewing appointments.</h5>

            <p class="light">Click on the icon to approve viewing appointments.</p>
          </div>
        </div>
      </div>

    </div>

    </div>
  </div>

{% endblock %}