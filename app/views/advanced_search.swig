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
        <li><a href="login">Login</a></li>
        <li><a href="signup">Sign up</a></li>
        <li><a href="search">Serach</a></li>
      </ul>
    </div>
  </nav>
        
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">

      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <a id="filter-commercial" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud left"></i>Commercial</a>
      <a id="filter-residential" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud right"></i>Residential</a>
     

      <a id="filter-sale" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud left"></i>For Sale</a>
      <a id="filter-rent" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud right"></i>For Rent</a>

    <div class="row" id="commercial-sale" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="min-office" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="max-office" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="min-storage" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="max-storage" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select>
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

    </form>
  </div> 

   
    <div class="row" id="commercial-rent" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="min-office" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="max-office" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="min-storage" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="max-storage" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select>
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Pets Must Be Allowed</h5>  
        <select>
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Pets are a necessity.</option>
          <option value="N">No. I hate pets.</option>
        </select>
      </div>


    </form>
  </div> 

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
