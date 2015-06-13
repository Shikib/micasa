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
 <h2 class="center teal-text"> <i class="large mdi-social-location-city"></i><br></h2>
 <h4 class="header center orange-text">Login </h4>
<br>
 
<center>
 <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="ID" type="text" class="validate">
          <label for="ID">!ID </label>
        </div>
      </div>
    </form>
  </div>

  <button class="btn waves-effect waves-light" type="submit" name="action">!Submit
    <i class="mdi-content-send right"></i>
  </button>
</center>

{% endblock %}