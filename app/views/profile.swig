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
        <li class="ylog" ><a href="/" id="logout">Logout</a></li>
        <li><a href="search">Serach</a></li>
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

  <h5 class="center">Update your info by filling out the blanks and pressing update, or PERMANENTLY delete your account with the delete button.</h5>

<div id="agent-update" class="row ylog agento" style="display: none;">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-account-circle prefix"></i>
        <input id="agent-update-name" type="text" class="validate" />
        <label for="agent-update-name">Name</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-communication-phone prefix"></i>
        <input id="agent-update-phone" type="tel" class="validate" />
        <label for="agent-update-phone">Phone</label>
      </div>
    </div>

    <div class="input-field col s12">
      <i class="mdi-social-domain prefix"></i>
      <select id="agency-update">
        <option value="null" selected>None</option>
      </select>
      <label>Agency</label>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-communication-email prefix"></i>
        <input id="agent-update-email" type="email" class="validate" />
        <label for="agent-update-email">Email</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-social-person prefix"></i>
        <input id="agent-update-uname" type="text" class="validate" />
        <label for="agent-update-uname">Username</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-lock prefix"></i>
        <input id="agent-update-password" type="password" class="validate">
        <label for="agent-update-password">Password</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-action-lock-outline prefix"></i>
        <input id="agent-update-confirm-password" type="password" class="validate">
        <label for="agent-update-confirm-password">Confirm Password</label>
      </div>
    </div>

    <button id="agent-update-submit" class="btn waves-effect waves-light" type="submit" name="action">Update
      <i class="mdi-content-send right"></i>
    </button>

  </form>
</div>

<div id="default-update" class="row ylog defo" style="display: none;">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-account-circle prefix"></i>
        <input id="name-update" type="text" class="validate" />
        <label for="name-update">Name</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-communication-phone prefix"></i>
        <input id="phone-update" type="tel" class="validate" />
        <label for="phone-update">Phone</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-communication-email prefix"></i>
        <input id="email-update" type="email" class="validate" />
        <label for="email-update">Email</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-social-person prefix"></i>
        <input id="uname-update" type="text" class="validate" />
        <label for="uname-update">Username</label>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s6">
        <i class="mdi-action-lock prefix"></i>
        <input id="password-update" type="password" class="validate">
        <label for="password-update">Password</label>
      </div>
      <div class="input-field col s6">
        <i class="mdi-action-lock-outline prefix"></i>
        <input id="confirm-password-update" type="password" class="validate">
        <label for="confirm-password-update">Confirm Password</label>
      </div>
    </div>

    <button id="update-submit" class="btn waves-effect waves-light" type="submit" name="action">Update
      <i class="mdi-content-send right"></i>
    </button>


  </form>
</div>

<div class="ylog">
  <button id="delete-account" class="btn waves-effect waves-light" type="submit" name="action">Delete Account
    <i class="mdi-content-send right"></i>
  </button>
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

  </body>
{% endblock %}
</html>
