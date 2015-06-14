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


      <div id='results-table-cs' class="section" style="display: none;">

        <table id="adv-results-cs" class="bordered striped hoverable responsive-table">
          <thead>
            <tr>
              <th data-field="price">Price (Thousands)</th>
              <th data-field="aptNumber">Apartment Number</th>
              <th data-field="houseNumber">Building Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="offices">Office Count</th>
              <th data-field="storage">Storage Space (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>



      <div id='results-table-cr' class="section" style="display: none;">

        <table id="adv-results-cr" class="bordered striped hoverable responsive-table">
          <thead>
            <tr>
              <th data-field="price">Monthly Rent</th>
              <th data-field="aptNumber">Apartment Number</th>
              <th data-field="houseNumber">Building Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="offices">Office Count</th>
              <th data-field="storage">Storage Space (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="petsAllowed">Pets Allowed?</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>



      <div id='results-table-rs' class="section" style="display: none;">

        <table id="adv-results-rs" class="bordered striped hoverable responsive-table">
          <thead>
            <tr>
              <th data-field="price">Price (Thousands)</th>
              <th data-field="aptNumber">Apartment Number</th>
              <th data-field="houseNumber">Building Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="hasGarage">Has Garage?</th>
              <th data-field="hasGarden">Has Garden?</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>


      <div id='results-table-rr' class="section" style="display: none;">

        <table id="adv-results-rr" class="bordered striped hoverable responsive-table">
          <thead>
            <tr>
              <th data-field="price">Monthly Rent</th>
              <th data-field="aptNumber">Apartment Number</th>
              <th data-field="houseNumber">Building Number</th>
              <th data-field="street">Street</th>
              <th data-field="city">City</th>
              <th data-field="age">Age (years)</th>
              <th data-field="area">Area (sq. metres)</th>
              <th data-field="isFurnished">Is Furnished?</th>
              <th data-field="hasGarage">Has Garage?</th>
              <th data-field="hasGarden">Has Garden?</th>
              <th data-field="petsAllowed">Pets Allowed?</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>

    <div class="row" id="commercial-sale" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cs-min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cs-max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cs-min-office" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cs-max-office" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-storage" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-storage" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="cs-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <button id="cs-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>

    </form>
  </div> 

   
    <div class="row" id="commercial-rent" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="cr-min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="cr-max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cr-min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cr-max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cr-min-office" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cr-max-office" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-min-storage" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-max-storage" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="cr-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Pets Must Be Allowed</h5>  
        <select id="cr-pets">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Pets are a necessity.</option>
          <option value="N">No. I hate pets.</option>
        </select>
      </div>

      <button id="cr-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
    </form>
  </div> 


    <div class="row" id="residential-sale" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="rs-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garage Required</h5>  
        <select id="rs-garage">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes I need a garage</option>
          <option value="N">No I hate cars</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garden required</h5>  
        <select id="rs-garden">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Gardening is my favourite pastime</option>
          <option value="N">No I hate nature</option>
        </select>
      </div>

      <button id="rs-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
    </form>
  </div> 


    <div class="row" id="residential-rent" style="display: none;">
    <form class="col s12">
      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-min-price" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-max-price" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-min-age" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-max-age" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-min-space" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-max-space" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row">
        <h5>Furnishing Required</h5>  
        <select id="rr-furnishing">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes it must be furnished</option>
          <option value="N">No I hate furniture</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garage Required</h5>  
        <select id="rr-garage">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes I need a garage</option>
          <option value="N">No I hate cars</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Garden required</h5>  
        <select id="rr-garden">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Gardening is my favourite pastime</option>
          <option value="N">No I hate nature</option>
        </select>
      </div>

      <br><br>

      <div class="row">
        <h5>Pets Must Be Allowed</h5>  
        <select id="rr-pets">
          <option value="D">Doesn't Matter</option>
          <option value="Y">Yes. Pets are a necessity.</option>
          <option value="N">No. I hate pets.</option>
        </select>
      </div>

      <button id="rr-submit" class="btn waves-effect waves-light" type="submit" name="action">Submit
        <i class="mdi-content-send right"></i>
      </button>
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
