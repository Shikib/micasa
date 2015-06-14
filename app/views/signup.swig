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
        <li><a href="search">Serach</a></li>
      </ul>
    </div>
  </nav>
  <br><center><img src="images/micasa.png" style = "width:400px;height:400x;"></center><br>
 <h4 class="header center orange-text">Sign Up</h4><br><br>
  <center>
<p>  Page not working propely will fix please fill out the following infromation and we will email you a ID that you will use to log in with</p><br>

<form action="#">
    <p>
      <input name="group1" type="radio" id="test1" />
      <label for="test1">Agent </label>
    </p>

       <p>
      <input name="group1" type="radio" id="test1" />
      <label for="test1">Seller</label>
    </p>

   <p>
      <input name="group1" type="radio" id="test1" />
      <label for="test1">Buyer </label>
    </p>


 <div class="row">
    <form class="col s6">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text" class="validate">
          <label for="Name">!Name </label>
        </div>

     <div class="input-field col s6">
          <input id="phone" type="text" class="validate">
          <label for="phone">Phone</label>
        </div>

         <div class="input-field col s6">
          <input id="email" type="text" class="validate">
          <label for="email">Email</label>
        </div>

<div class="input-field col s6">
          <input placeholder="For agent use only" id="agency" type="text" class="validate">
          <label for="agency" >Agency </label>
        </div>


      </div>
    </form>
  </div>


  <button class="btn waves-effect waves-light" type="submit" name="action">!Submit
    <i class="mdi-content-send right"></i>
  </button>
</center>

<br><br><br><br><br>
{% endblock %}
