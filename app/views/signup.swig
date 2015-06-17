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
<body>
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
<br>

<center>
  <h4 class="header center orange-text">Sign up</h4><br>
<a id="agent-button" class="waves-effect waves-light btn-large"><i class="mdi-file-cloud left"></i>Agent</a>
<a id="seller-button" class="waves-effect waves-light btn-large"><i class="mdi-file-cloud left"></i>Seller</a>
<a id="buyer-button" class="waves-effect waves-light btn-large"><i class="mdi-file-cloud right"></i>Buyer</a>
</center>

<div id="agent-signup" class="row" style="display: none;">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-account-circle prefix"></i>
        <input id="agent-name" type="text" class="validate" />
        <label for="agent-name">Name</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-communication-phone prefix"></i>
        <input id="agent-phone" type="tel" class="validate" />
        <label for="agent-phone">Phone</label>
      </div>
    </div>

    <div class="input-field col s12">
      <i class="mdi-social-domain prefix"></i>
      <select id="agency">
        <option value="null" selected>None</option>
      </select>
      <label>Agency</label>
    </div> 

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-communication-email prefix"></i>
        <input id="agent-email" type="email" class="validate" />
        <label for="agent-email">Email</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-social-person prefix"></i>
        <input id="agent-uname" type="text" class="validate" />
        <label for="agent-uname">Username</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-lock prefix"></i>
        <input id="agent-password" type="password" class="validate">
        <label for="agent-password">Password</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-action-lock-outline prefix"></i>
        <input id="agent-confirm-password" type="password" class="validate">
        <label for="agent-confirm-password">Confirm Password</label>
      </div>
    </div>

    <button id="agent-signup-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
      <i class="mdi-content-send right"></i>
    </button>

  </form>
</div> 


<div id="default-signup" class="row" style="display: none;">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-account-circle prefix"></i>
        <input id="name" type="text" class="validate" />
        <label for="name">Name</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-communication-phone prefix"></i>
        <input id="phone" type="tel" class="validate" />
        <label for="phone">Phone</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-communication-email prefix"></i>
        <input id="email" type="email" class="validate" />
        <label for="email">Email</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-social-person prefix"></i>
        <input id="uname" type="text" class="validate" />
        <label for="uname">Username</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-lock prefix"></i>
        <input id="password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-action-lock-outline prefix"></i>
        <input id="confirm-password" type="password" class="validate">
        <label for="confirm-password">Confirm Password</label>
      </div>
    </div>

    <button id="signup-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
      <i class="mdi-content-send right"></i>
    </button>
  </form>
</div> 


<br><br><br><br><br>
  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/main.js"></script>

</body>

{% endblock %}
