const navbar=document.createElement('div');navbar.innerHTML=`
<!-- developed by Erwin C. Baluyot (https://www.linkedin.com/in/erwincbaluyot/) -->
<!-- navbar LG -->
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-none d-md-block">
        <div class="container-fluid d-flex">
            <a class="navbar-brand" href="https://rampver.com/realty">
                <img src="./home-assets/nav-logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto order-2">
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gs font-white" style="color: #ffffff;">About Us</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gs font-white" style="color: #ffffff;">Why Invest in Real Estate?</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">ENLIST Property</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">BUY Property</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">RENT Property</h5></a>
                    </li>
              
                    <li class="nav-item mt-1 newNavGoldSet d-none d-md-block" id="newNavGoldSetLG">
                        <h6 id="navGoldLG"><a class="nav-link gsBold font-white btn shadow inqSm-Gold"
                                href="https://go.rampver.com/X2z"
                                style="background-color:#cc942c; color: #ffffff;">Call Now</a></h6>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- navbar LG -->
    <!-- navbar SM -->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark sticky-top shadow d-md-none pl-0">
        <div class="container-fluid d-flex">
            <button class="navbar-toggler mr-2 border-0 ml-0" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand mr-auto" href="https://rampver.com/realty">
                <img src="./home-assets/nav-logo.png" style="width: 90px;">
            </a>
            <div class="inqSm-Gold newNavGoldSet d-md-none" id="newNavGoldSetSM">
                <h6 class="ml-5 inqSm-Gold" id="navGoldSM"><a class="nav-link mt-2 gsBold font-white btn sticky-top shadow"
                        href="https://go.rampver.com/X2z"
                        style="background-color:#cc942c; color: #ffffff;">Call Now</a></h6>
            </div>
            <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto order-2">
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gs font-white" style="color: #ffffff;">About Us</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gs font-white" style="color: #ffffff;">Why Invest in Real Estate?</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">ENLIST Property</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">BUY Property</h5></a>
                    </li>
                    <li class="nav-item mt-1 mr-2">
                        <a href=""
                        > <h5 class="nav-link gsBold font-white" style="color: #cc942c;">RENT Property</h5></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<!-- navbar SM -->
	`;document.getElementById('navbarSet').appendChild(navbar);