{% extends 'layout.swig' %}
{% block content%}
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
        <li><a href="search">Serach</a></li>
      </ul>
    </div>
  </nav>
 <br> <center><img src="images/micasa.png" style = "width:400px;height:400x;"></center><br>
 <h4 class="header center orange-text">Login </h4>
<br>
 
<div id="login" class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s12">
        <i class="mdi-social-person prefix"></i>
        <input id="uname" type="text" class="validate" />
        <label for="uname">Username</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <i class="mdi-action-lock prefix"></i>
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
    </div>

    <button id="login-submit" class="btn waves-effect waves-light" type="submit" name="action">Login
      <i class="mdi-content-send right"></i>
    </button>


  </form>
</div>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/main.js"></script>

</body>
{% endblock %}
