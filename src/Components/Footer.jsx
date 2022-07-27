import React from 'react'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//Custom CSS. Placed after Bootstrap import for precedence over default styles provided by bootstrap
import './Footer.css'

//Logos and images
import DamacLogo from '../images/damac-logo.svg'
import FacebookIcon from '../images/facebook-icon.svg'
import TwitterIcon from '../images/twitter-icon.svg'
import InstagramIcon from '../images/instagram-icon.svg'
import LinkedInIcon from '../images/linkedin-icon.svg'
import YoutubeIcon from '../images/youtube-icon.svg'
import DamacLivingLogo from '../images/damac-living-logo.svg'
import AppStoreLogo from '../images/App-Store-btn.png'
import GooglePlayStoreLogo from '../images/Google-Play-Store-btn.png'

function footer() {
  return (
    <footer className="footer">
		<div className="container footerContainer">
			<div className="row">
				<div className="col-12 col-md-6 col-lg-3">
					<div className="footerLogo"><img src={DamacLogo} alt="DAMAC" /></div>
				</div>
				<div className="col-12 col-md-6 col-lg-3">
					<div className="socialLinks">
						<span>Follow us on</span>
						<a href="#"><img src={FacebookIcon} alt="FACEBOOK" /></a>
						<a href="#"><img src={TwitterIcon} alt="TWITTER" /></a>
						<a href="#"><img src={InstagramIcon} alt="INSTAGRAM" /></a>
						<a href="#"><img src={LinkedInIcon} alt="LINKEDIN" /></a>
						<a href="#"><img src={YoutubeIcon} alt="YOUTUBE" /></a>
					</div>
				</div>
				<div className="col-12 col-lg-6">
					<div className="input-group subscribeOffers">
						<div className="txt">Subscribe to Offers</div>
						<input type="email" className="form-control" placeholder="Enter your email" />
						<span className="input-group-btn">
							<button className="btn" type="submit">Subscribe</button>
						</span>
					</div>
				</div>
			</div>
			
			<div className="d-none d-lg-block lgMenus">
				<div className="row">
					<div className="col-3">
						<span>WHY DAMAC</span>
						<ul>
							<li><a href="#">About DAMAC</a></li>
							<li><a href="#">Founder’s Message</a></li>
							<li><a href="#">Corporate Social Responsibility</a></li>
							<li><a href="#">Building Documentation</a></li>
							<li><a href="#">Sitemap</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>HOSPITALITY</span>
						<ul>
							<li><a href="#">Paramount Hotel - Dubai</a></li>
							<li><a href="#">Paramount Hotel - Midtown</a></li>
							<li><a href="#">DAMAC Maison Distinction</a></li>
							<li><a href="#">DAMAC Maison Cour Jardin</a></li>
							<li><a href="#">DAMAC Maison Canal Views</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>DAMAC ASSIST</span>
						<ul>
							<li><a href="#">Mortgage Assist</a></li>
							<li><a href="#">FAQS</a></li>
							<li><a href="#">Contact</a></li>
							<li><a href="#">Sale</a></li>
							<li><a href="#">Rent</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>MEDIA CENTER</span>
						<ul>
							<li><a href="#">Video Gallery</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Blogs</a></li>
							<li><a href="#">Industry News</a></li>
							<li><a href="#">DAMAC in the News</a></li>
						</ul>
					</div>
					<div className="col-12">&nbsp;</div>
					<div className="col-12">&nbsp;</div>
					<div className="col-3">
						<span>COMMUNITIES</span>
						<ul>
							<li><a href="#">DAMAC Lagoons</a></li>
							<li><a href="#">DAMAC Hills 2</a></li>
							<li><a href="#">DAMAC Hills</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>LATEST LAUNCHES</span>
						<ul>
							<li><a href="#">DAMAC Lagoons - Venice</a></li>
							<li><a href="#">DAMAC Lagoons - Malta</a></li>
							<li><a href="#">DAMAC Lagoons - Portofino</a></li>
							<li><a href="#">Cavalli Estates</a></li>
							<li><a href="#">Safa One</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>POPULAR AREAS</span>
						<ul>
							<li><a href="#">Apartments in DAMAC Hills</a></li>
							<li><a href="#">Villas in DAMAC Hills</a></li>
							<li><a href="#">Apartments in Marina</a></li>
							<li><a href="#">Apartments in Business Bay</a></li>
							<li><a href="#">Villas in DAMAC Hills 2</a></li>
						</ul>
					</div>
					<div className="col-3">
						<span>RECENT SEARCHES</span>
						<ul>
							<li><a href="#">2 Bedroom for Sale in Dubai</a></li>
							<li><a href="#">5 Bedroom for Sale in Dubai</a></li>
							<li><a href="#">Studio Apartment for Sale</a></li>
							<li><a href="#">4 Bedroom Villa for Sale</a></li>
							<li><a href="#">3 Bedroom apartment in Qatar</a></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="d-lg-none xsMenus">
				<div className="row accordion" id="accordionExample">
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingOne">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">WHY DAMAC</button>
						</h2>
						<div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">About DAMAC</a></li>
									<li><a href="#">Founder’s Message</a></li>
									<li><a href="#">Corporate Social Responsibility</a></li>
									<li><a href="#">Building Documentation</a></li>
									<li><a href="#">Sitemap</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">HOSPITALITY</button>
						</h2>
						<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">Paramount Hotel - Dubai</a></li>
									<li><a href="#">Paramount Hotel - Midtown</a></li>
									<li><a href="#">DAMAC Maison Distinction</a></li>
									<li><a href="#">DAMAC Maison Cour Jardin</a></li>
									<li><a href="#">DAMAC Maison Canal Views</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">DAMAC ASSIST</button>
						</h2>
						<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">Mortgage Assist</a></li>
									<li><a href="#">FAQS</a></li>
									<li><a href="#">Contact</a></li>
									<li><a href="#">Sale</a></li>
									<li><a href="#">Rent</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingFour">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">MEDIA CENTER</button>
						</h2>
						<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">Video Gallery</a></li>
									<li><a href="#">News</a></li>
									<li><a href="#">Blogs</a></li>
									<li><a href="#">Industry News</a></li>
									<li><a href="#">DAMAC in the News</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingFive">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">COMMUNITIES</button>
						</h2>
						<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">DAMAC Lagoons</a></li>
									<li><a href="#">DAMAC Hills 2</a></li>
									<li><a href="#">DAMAC Hills</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingSix">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">LATEST LAUNCHES</button>
						</h2>
						<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">DAMAC Lagoons - Venice</a></li>
									<li><a href="#">DAMAC Lagoons - Malta</a></li>
									<li><a href="#">DAMAC Lagoons - Portofino</a></li>
									<li><a href="#">Cavalli Estates</a></li>
									<li><a href="#">Safa One</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingSeven">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">POPULAR AREAS</button>
						</h2>
						<div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">Apartments in DAMAC Hills</a></li>
									<li><a href="#">Villas in DAMAC Hills</a></li>
									<li><a href="#">Apartments in Marina</a></li>
									<li><a href="#">Apartments in Business Bay</a></li>
									<li><a href="#">Villas in DAMAC Hills 2</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="accordion-item col-12 col-xl-3">
						<h2 className="accordion-header" id="headingEight">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">RECENT SEARCHES</button>
						</h2>
						<div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<ul>
									<li><a href="#">2 Bedroom for Sale in Dubai</a></li>
									<li><a href="#">5 Bedroom for Sale in Dubai</a></li>
									<li><a href="#">Studio Apartment for Sale</a></li>
									<li><a href="#">4 Bedroom Villa for Sale</a></li>
									<li><a href="#">3 Bedroom apartment in Qatar</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="damacLivingSection text-center text-lg-start">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-6 text-xl-start order-xl-last">
						<div className="row justify-content-start">
							<div className="col-12 col-xl-auto"><img src={DamacLivingLogo} alt="DAMAC LIVING" className="damacLivingLogo" /></div>
							<div className="col-12 col-xl-auto">
								<p className="downloadApp">DOWNLOAD THE APP. <b>UPGRADE YOUR ADVANTAGE</b></p>
								<div className="appIcons">
									<a href="https://apps.apple.com/us/app/hello-damac/id1446489552" target="_blank"><img src={AppStoreLogo} alt="Available on App Store" /></a>
									<a href="https://play.google.com/store/apps/details?id=com.eos.hellodamac&hl=en" target="_blank"><img src={GooglePlayStoreLogo} alt="Get it on Google Play" /></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-5">
						<div className="termsandpolicy">
							<a href="#">Terms and Conditions</a>
							<a href="#">Cookie Policy</a>
							<a href="#">Privacy Policy</a>
						</div>
						<p className="copyright">© 2022 DAMAC Properties. All Rights Reserved</p>
					</div>
				</div>
			</div>
			
		</div>
	</footer>
  )
}

export default footer