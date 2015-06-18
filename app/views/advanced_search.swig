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
        <li class="ylog" ><a href="/profile">Profile</a></li>
        <li class="ylog" ><a href="/" id="logout">Logout</a></li>
        <li><a href="search">Search</a></li>
      </ul>
    </div>
  </nav>
  <br> <center><img src="images/micasa.png" style = "width:300px;height:300x;"></center><br>
        
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">

      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">
<center>
      <a id="filter-commercial" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud left"></i>Commercial</a>
      <a id="filter-residential" class="waves-effect waves-light btn-large" style="display: visible;"><i class="mdi-file-cloud right"></i>Residential</a>
     

      <a id="filter-sale" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud left"></i>For Sale</a>
      <a id="filter-rent" class="waves-effect waves-light btn-large" style="display: none;"><i class="mdi-file-cloud right"></i>For Rent</a>

</center>
      <div id='results-table-cs' class="section" style="display: none;">

        <table id="adv-results-cs" class="bordered striped hoverable responsive-table">
          <thead>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>



      <div id='results-table-cr' class="section" style="display: none;">

        <table id="adv-results-cr" class="bordered striped hoverable responsive-table">
          <thead>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>



      <div id='results-table-rs' class="section" style="display: none;">

        <table id="adv-results-rs" class="bordered striped hoverable responsive-table">
          <thead>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>


      <div id='results-table-rr' class="section" style="display: none;">

        <table id="adv-results-rr" class="bordered striped hoverable responsive-table">
          <thead>
          </thead>

          <tbody>
          </tbody>
        </table>

      </div>

    <div class="row" id="commercial-sale" style="display: none;">
    <form class="col s12">
      <div class="row">
      <h5>Choose which fields to display in the result.</h5>    
      <div id='checkbox-cs' class="section">
        <table border="0" id="checkbox-table-cs" class="responsive-table" style="display: none">
          <tbody>
            <tr>
              <th data-field="checkbox1">
              <input type="checkbox" class="filled-in" id="checkbox-cs1" checked="checked" />
              <label for="checkbox-cs1">Price</label>
              </th>
              <th data-field="checkbox2">
              <input type="checkbox" class="filled-in" id="checkbox-cs2" checked="checked" />
              <label for="checkbox-cs2">Apartment Number</label>
              </th>
              <th data-field="checkbox3">
              <input type="checkbox" class="filled-in" id="checkbox-cs3" checked="checked" />
              <label for="checkbox-cs3">Building Number</label>
              </th>
              <th data-field="checkbox4">
              <input type="checkbox" class="filled-in" id="checkbox-cs4" checked="checked" />
              <label for="checkbox-cs4">Street</label>
              </th>
              <th data-field="checkbox5">
              <input type="checkbox" class="filled-in" id="checkbox-cs5" checked="checked" />
              <label for="checkbox-cs5">City</label>
              </th>
            </tr>
            <tr>
              <th data-field="checkbox6">
              <input type="checkbox" class="filled-in" id="checkbox-cs6" checked="checked" />
              <label for="checkbox-cs6">Age (years)</label>
              </th>
              <th data-field="checkbox7">
              <input type="checkbox" class="filled-in" id="checkbox-cs7" checked="checked" />
              <label for="checkbox-cs7">Area (sq. meters)</label>
              </th>
              <th data-field="checkbox8">
              <input type="checkbox" class="filled-in" id="checkbox-cs8" checked="checked" />
              <label for="checkbox-cs8">Office Count</label>
              </th>
              <th data-field="checkbox9">
              <input type="checkbox" class="filled-in" id="checkbox-cs9" checked="checked" />
              <label for="checkbox-cs9">Storage Space (sq. meters)</label>
              </th>
              <th data-field="checkbox10">
              <input type="checkbox" class="filled-in" id="checkbox-cs10" checked="checked" />
              <label for="checkbox-cs10">Is Furnished?</label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="cs-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="cs-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s12">
          <input id="cs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>

      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cs-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cs-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-space" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cs-min-office" value="0" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cs-max-office" value="1000" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-min-storage" value="0" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cs-max-storage" value="1000" min="0" max="1000" />
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
      <h5>Choose which fields to display in the result.</h5>
        <div id='checkbox-cr' class="section">
        <table border="0" id="checkbox-table-cr" class="responsive-table" style="display: none">
          <tbody>
            <tr>
              <th data-field="checkbox1">
              <input type="checkbox" class="filled-in" id="checkbox-cr1" checked="checked" />
              <label for="checkbox-cr1">Price</label>
              </th>
              <th data-field="checkbox2">
              <input type="checkbox" class="filled-in" id="checkbox-cr2" checked="checked" />
              <label for="checkbox-cr2">Apartment Number</label>
              </th>
              <th data-field="checkbox3">
              <input type="checkbox" class="filled-in" id="checkbox-cr3" checked="checked" />
              <label for="checkbox-cr3">Building Number</label>
              </th>
              <th data-field="checkbox4">
              <input type="checkbox" class="filled-in" id="checkbox-cr4" checked="checked" />
              <label for="checkbox-cr4">Street</label>
              </th>
              <th data-field="checkbox5">
              <input type="checkbox" class="filled-in" id="checkbox-cr5" checked="checked" />
              <label for="checkbox-cr5">City</label>
              </th>
            </tr>
            <tr>
              <th data-field="checkbox6">
              <input type="checkbox" class="filled-in" id="checkbox-cr6" checked="checked" />
              <label for="checkbox-cr6">Age (years)</label>
              </th>
              <th data-field="checkbox7">
              <input type="checkbox" class="filled-in" id="checkbox-cr7" checked="checked" />
              <label for="checkbox-cr7">Area (sq. meters)</label>
              </th>
              <th data-field="checkbox8">
              <input type="checkbox" class="filled-in" id="checkbox-cr8" checked="checked" />
              <label for="checkbox-cr8">Office Count</label>
              </th>
              <th data-field="checkbox9">
              <input type="checkbox" class="filled-in" id="checkbox-cr9" checked="checked" />
              <label for="checkbox-cr9">Storage Space (sq. meters)</label>
              </th>
              <th data-field="checkbox10">
              <input type="checkbox" class="filled-in" id="checkbox-cr10" checked="checked" />
              <label for="checkbox-cr10">Is Furnished?</label>
              </th>
              <th data-field="checkbox11">
              <input type="checkbox" class="filled-in" id="checkbox-cr11" checked="checked" />
              <label for="checkbox-cr11">Pets Allowed?</label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="cr-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="cr-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s12">
          <input id="cr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>

      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="cr-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="cr-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cr-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="cr-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-max-space" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cr-min-office" value="0" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Office Count</h5>
        <p class="range-field">
          <input type="range" id="cr-max-office" value="1000" min="0" max="1000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-min-storage" value="0" min="0" max="1000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Storage Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="cr-max-storage" value="1000" min="0" max="1000" />
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
      <h5>Choose which fields to display in the result.</h5>
        <div id='checkbox-rs' class="section">
        <table border="0" id="checkbox-table-rs" class="responsive-table" style="display: none">
          <tbody>
            <tr>
              <th data-field="checkbox1">
              <input type="checkbox" class="filled-in" id="checkbox-rs1" checked="checked" />
              <label for="checkbox-rs1">Price</label>
              </th>
              <th data-field="checkbox2">
              <input type="checkbox" class="filled-in" id="checkbox-rs2" checked="checked" />
              <label for="checkbox-rs2">Apartment Number</label>
              </th>
              <th data-field="checkbox3">
              <input type="checkbox" class="filled-in" id="checkbox-rs3" checked="checked" />
              <label for="checkbox-rs3">Building Number</label>
              </th>
              <th data-field="checkbox4">
              <input type="checkbox" class="filled-in" id="checkbox-rs4" checked="checked" />
              <label for="checkbox-rs4">Street</label>
              </th>
              <th data-field="checkbox5">
              <input type="checkbox" class="filled-in" id="checkbox-rs5" checked="checked" />
              <label for="checkbox-rs5">City</label>
              </th>
            </tr>
            <tr>
              <th data-field="checkbox6">
              <input type="checkbox" class="filled-in" id="checkbox-rs6" checked="checked" />
              <label for="checkbox-rs6">Age (years)</label>
              </th>
              <th data-field="checkbox7">
              <input type="checkbox" class="filled-in" id="checkbox-rs7" checked="checked" />
              <label for="checkbox-rs7">Area (sq. meters)</label>
              </th>
              <th data-field="checkbox8">
              <input type="checkbox" class="filled-in" id="checkbox-rs8" checked="checked" />
              <label for="checkbox-rs8">Is Furnished?</label>
              </th>
              <th data-field="checkbox9">
              <input type="checkbox" class="filled-in" id="checkbox-rs9" checked="checked" />
              <label for="checkbox-rs9">Has Garage?</label>
              </th>
              <th data-field="checkbox10">
              <input type="checkbox" class="filled-in" id="checkbox-rs10" checked="checked" />
              <label for="checkbox-rs10">Has Garden?</label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>


        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="rs-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="rs-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s12">
          <input id="rs-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>


      <div class="row"> 
        <h5>Minimum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Price (Thousands)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rs-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rs-max-space" value="10000" min="0" max="10000" />
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
      <h5>Choose which fields to display in the result.</h5>
        <div id='checkbox-rr' class="section">
        <table border="0" id="checkbox-table-rr" class="responsive-table" style="display: none">
          <tbody>
            <tr>
              <th data-field="checkbox1">
              <input type="checkbox" class="filled-in" id="checkbox-rr1" checked="checked" />
              <label for="checkbox-rr1">Price</label>
              </th>
              <th data-field="checkbox2">
              <input type="checkbox" class="filled-in" id="checkbox-rr2" checked="checked" />
              <label for="checkbox-rr2">Apartment Number</label>
              </th>
              <th data-field="checkbox3">
              <input type="checkbox" class="filled-in" id="checkbox-rr3" checked="checked" />
              <label for="checkbox-rr3">Building Number</label>
              </th>
              <th data-field="checkbox4">
              <input type="checkbox" class="filled-in" id="checkbox-rr4" checked="checked" />
              <label for="checkbox-rr4">Street</label>
              </th>
              <th data-field="checkbox5">
              <input type="checkbox" class="filled-in" id="checkbox-rr5" checked="checked" />
              <label for="checkbox-rr5">City</label>
              </th>
            </tr>
            <tr>
              <th data-field="checkbox6">
              <input type="checkbox" class="filled-in" id="checkbox-rr6" checked="checked" />
              <label for="checkbox-rr6">Age (years)</label>
              </th>
              <th data-field="checkbox7">
              <input type="checkbox" class="filled-in" id="checkbox-rr7" checked="checked" />
              <label for="checkbox-rr7">Area (sq. meters)</label>
              </th>
              <th data-field="checkbox8">
              <input type="checkbox" class="filled-in" id="checkbox-rr8" checked="checked" />
              <label for="checkbox-rr8">Is Furnished?</label>
              </th>
              <th data-field="checkbox9">
              <input type="checkbox" class="filled-in" id="checkbox-rr9" checked="checked" />
              <label for="checkbox-rr9">Has Garage?</label>
              </th>
              <th data-field="checkbox10">
              <input type="checkbox" class="filled-in" id="checkbox-rr10" checked="checked" />
              <label for="checkbox-rr10">Has Garden?</label>
              </th>
              <th data-field="checkbox11">
              <input type="checkbox" class="filled-in" id="checkbox-rr11" checked="checked" />
              <label for="checkbox-rr11">Pets Allowed?</label>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

        <h5>Location </h5>
        <div class="input-field col s6">
          <input id="rr-city" type="text" class="validate">
          <label for="city">City</label>
        </div>
        <div class="input-field col s6">
          <input id="rr-province" type="text" class="validate">
          <label for="province">Province</label>
        </div>
      </div>  

      <div class="row">
        <div class="input-field col s12">
          <input id="rr-country" type="text" class="validate">
          <label for="country">Country</label>
        </div>
      </div>

      <div class="row"> 
        <h5>Minimum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-min-price" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Monthly Rent</h5>
        <p class="range-field">
          <input type="range" id="rr-max-price" value="10000" min="0" max="10000" />
        </p>
      </div>

      <br><br>

      <div class="row"> 
        <h5>Minimum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-min-age" value="0" min="0" max="100" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Property Age</h5>
        <p class="range-field">
          <input type="range" id="rr-max-age" value="100" min="0" max="100" />
        </p>
      </div>
   
      <br><br>

      <div class="row"> 
        <h5>Minimum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-min-space" value="0" min="0" max="10000" />
        </p>
      </div>

      <div class="row"> 
        <h5>Maximum Floor Space (sq. metres)</h5>
        <p class="range-field">
          <input type="range" id="rr-max-space" value="10000" min="0" max="10000" />
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
