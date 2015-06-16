{% extends 'layout.swig' %}

{% block content%}
<nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo right">Micasa</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Serach</a></li>
      </ul>
    </div>
  </nav>

 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"></center><br>
  <h4 class="header center orange-text">Welcome Agent! </h4>

  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <div class="row center">
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

            <p class="light">Click on the icon to view expressions of interest.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block"><a href="agent_appointments">
            <h2 class="center teal-text"><i class="mdi-action-assignment-ind"></i></h2></a>
            <h5 class="center">I want to view and approve viewing appointments.</h5>

            <p class="light">Click on the icon to view, and approve viewing appointments.</p>
          </div>
        </div>
      </div>

    </div>

    </div>
  </div>

    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3">Micasa</a>
      </div>
    </div>
  </footer>


{% endblock %}