<script setup></script>

<template>
		<!--HEADER-->
		<header id="top-head" class="uk-position-fixed">
			<div class="uk-container uk-container-expand uk-background-primary">
				<nav class="uk-navbar uk-light" data-uk-navbar="mode:click; duration: 250">
					<div class="uk-navbar-left">
						<div class="uk-navbar-item uk-hidden@m">
							<a class="uk-logo" href="#"><img class="custom-logo" src="img/dashboard-logo-white.svg" alt=""></a>
						</div>
						<ul class="uk-navbar-nav uk-visible@m">
              <li>
                <img class="uk-icon-image uk-margin-top" src="public/favicon.ico">
              </li>
							<li><a href="#">Accounts</a></li>
							<li>
								<a href="#">Settings <span data-uk-icon="icon: triangle-down"></span></a>
								<div class="uk-navbar-dropdown">
									<ul class="uk-nav uk-navbar-dropdown-nav">
										<li class="uk-nav-header">YOUR ACCOUNT</li>
										<li><a href="#"><span data-uk-icon="icon: info"></span> Summary</a></li>
										<li><a href="#"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
										<li><a href="#"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
										<li class="uk-nav-divider"></li>
										<li><a href="#"><span data-uk-icon="icon: image"></span> Your Data</a></li>
										<li class="uk-nav-divider"></li>
										<li><a href="#"><span data-uk-icon="icon: sign-out"></span> Logout</a></li>
									</ul>
								</div>
							</li>
						</ul>
						<div class="uk-navbar-item uk-visible@s">
							<form action="dashboard.html" class="uk-search uk-search-default">
								<span data-uk-search-icon></span>
								<input class="uk-search-input search-field" type="search" placeholder="Search">
							</form>
						</div>
					</div>
					<div class="uk-navbar-right">
						<ul class="uk-navbar-nav">
							<li><a href="#" data-uk-icon="icon:user" title="Your profile" data-uk-tooltip></a></li>
							<li><a href="#" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip></a></li>
							<li><a href="#" data-uk-icon="icon:  sign-out" title="Sign Out" data-uk-tooltip></a></li>
							<li><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" title="Offcanvas" data-uk-tooltip></a></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<!--/HEADER-->

		<!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
				<ul class="uk-nav uk-nav-default">
					<li class="uk-active"><a href="#">Active</a></li>
					<li class="uk-parent">
						<a href="#">Parent</a>
						<ul class="uk-nav-sub">
							<li><a href="#">Sub item</a></li>
							<li><a href="#">Sub item</a></li>
						</ul>
					</li>
					<li class="uk-nav-header">Header</li>
					<li><a href="#js-options"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
					<li class="uk-nav-divider"></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
				</ul>
				<h3>Title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
		<!-- /OFFCANVAS -->

  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

            <div class="uk-slideshow-items" uk-slideshow="autoplay: true">
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" uk-cover>
                </div>
                <div>
                    <img src="data:image/jpeg;base64,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" alt="" uk-cover>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" uk-cover>
                </div>
            </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>

        </div>



</template>

<style scoped>
/* -- Top navigation -- */
#top-head {
	z-index: 9;
	top: 0;
	left:0;
	right:0;
}
/* Smaller Header */
.uk-navbar-nav > li > a,
.uk-navbar-item,
.uk-navbar-toggle {
	/* navbar height */
  min-height: 52px;
  padding: 0 8px;
  font-size: 0.85rem;
}
.custom-logo {
	height: 32px;
}
#top-head [class*="uk-navbar-dropdown-bottom"] {
	margin-top: 0;
}

/* Search nav */
.search-field {
	width: 140px;
	-webkit-transition: all 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);
	transition: all 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);
}
.search-field:focus {
	width: 200px;
	border-color: #fff !important;
}


</style>
