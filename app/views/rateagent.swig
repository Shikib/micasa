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
   <body>
      <div class="container">
 <br><center><img src="images/micasa.png" style = "width:300px;height:300x;"><br>

<div class="ylog">
<h4 class="header left teal-text">Rate an agent!</h4></left>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="mdi-action-account-circle prefix"></i>
          <input id="agentid" type="text" class="validate">
          <label for="agentid">AgentID</label>
        </div>

         <div class="input-field col s6">
          <i class="large mdi-editor-insert-chart prefix"></i>
          <input id="agentrating" type="tel" class="validate">
          <label for="agentrating">Rating</label>
        </div>

      <button id="seller-rate-submit" class="btn waves-effect waves-light" type="submit" name="action">Update
      <i class="mdi-content-send right"></i>
    </button>

      </div>
    </form>
  </div>
</div>

<!--   Icon Section   -->


<h5 align="left" class="header center teal-text">Agents</h6>
 <table id="agents" class="bordered striped hoverable responsive-table">
        <thead>
          <tr>
              <th data-field="agentID">AgentID</th>
              <th data-field="sellerRating">Avg Agent Rating</th>
              <th data-field="agentName">Agent Name</th>
              <th data-field="agentPhone">Agent Phone</th>
              <th data-field="agentEmail">Agent Email</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="materialize/js/materialize.js"></script>
  <script src="materialize/js/init.js"></script>
  <script src="js/rateagent.js"></script>
  <script src="js/main.js"></script>
  <script src="loginModule.js"></script>
{% endblock %}