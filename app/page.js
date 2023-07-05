import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="bcframeHolder">
      <div className="alertTop text-center">
        <div className="navJoin">
          Contribute and become a DAO member, earn crypto rewards!
          <a href="/inquire" className="badger bg-secondary">Inquire</a>
          <a href="/partner" className="badger bg-success">Partner</a>
          <a href="/" className="badger bg-dark" id="connectnow">Connect To Metamask</a>
        </div>       
      </div>
      <div className="bctopSection">
        <video src="https://cdn.vnoc.com/videos/video-blockchain6.mp4" autoplay="" loop="" playsinline="" muted=""></video>
        <div className="layer"></div>
        <div className="container">
          <div className='row'>
              <div className='col-md-12 text-center'>
                <div className='bcTopinner'>
                  <h3>hnsfund.com</h3>
                  <h1>
                  Virtual Real Estate for the Digital Economy
                  </h1>
                  <p className="header-title-text">
                    Help us build out hnsfund.com with other great people around the world and earn Eshares, compensation and experience with other like minded people.
                  </p>
                  <div className="learn-more-btn-section mb-3" id="joincomm">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div className="input-group mb-1" id="input-form-wrapper">									  
                            <input type="email" className="form-control form-control-lg form-control-blockchain" placeholder="Add Valid Email Address" id="email" />
                            <a href="" className="text-white btn btn-danger btn-lg" id="btnJoin">
                            <span className="loading-spin d-none"><i className="fa fa-spinner fa-spin"></i>&nbsp;</span>Join The Waitlist
                            </a>
                        </div>
                      </div>							
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="bcTokenDetailsSection">
        <div className="container">
          <div className='row'>
            <div className='col-md-6'>
              <h2>Latest Contributors</h2>
              <div className='contriSlider'>
                <div className="col d-flex align-items-start">
                  <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <img className="rounded-circle img-latest-contributor" src="https://manage.vnoc.com/uploads/picture/image1651198240_1" alt="" width="50" height="50" />
                  </div>
                  <div>
                    <h5 className="text-body-emphasis">Kareen Castaños</h5>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
              <h2>Latest Proposals</h2>
              <div className='contriSlider'>
                <div className="col d-flex align-items-start">
                  <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <img className="rounded-circle img-latest-contributor" src="https://cdn-icons-png.flaticon.com/64/6831/6831818.png" alt="" width="50" height="50" />
                  </div>
                  <div>
                    <h5 className="text-body-emphasis"><a href="">Ventureblock.com Project governance</a></h5>
                    <p>DNA By Maida Barrientos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <h2>Token Sale Details </h2>
              <div className="list-group cus-li mb-4 mt-2">
                <li className="list-group-item">
                  <div className="row cus-row-intro">
                    <div className="col-md-7">
                      <div className="cri-desc">
                          TV
                      </div>
                    </div>
                    <div className="col-md-5 text-end">
                      <div className="cri-value">
                        000
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row cus-row-intro">
                    <div className="col-md-7">
                      <div className="cri-desc">
                          APY
                      </div>
                    </div>
                    <div className="col-md-5 text-end">
                      <div className="cri-value" id="apy-rme">
                        000
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row cus-row-intro">
                    <div className="col-md-7">
                      <div className="cri-desc">
                          ESH Value
                      </div>
                    </div>
                    <div className="col-md-5 text-end">
                      <div className="cri-value" id="eshValue-rme">
                        000
                      </div>
                    </div>
                  </div>
                </li>						
                <li className="list-group-item">
                  <div className="row cus-row-intro">
                    <div className="col-md-7">
                      <div className="cri-desc">
                          Contributors
                      </div>
                    </div>
                    <div className="col-md-5 text-end">
                      <div className="cri-value">
                          000
                      </div>
                    </div>
                  </div>
                </li>	
                <li className="list-group-item">
                  <div className="row cus-row-intro">
                    <div className="col-md-7">
                      <div className="cri-desc">
                        22 % PERCENTAGE ACQUIRED
                      </div>
                    </div>
                    <div className="col-md-5 text-end">
                      <div className="cri-value">
                      000
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item"></li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcTokenEconomySection" id="buytoks">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="section-title-1 text-center">
                <h2 className="sec-title fw-800 text-capitalize">hnsfund.com Token Economy</h2>
              </div>
              <div className="dytok-outer" id="buytoken">
              <script class="dytok-script" src="https://tools.contrib.com/cwidget/buyeshtoken?d=<?php echo $info['domain']; ?>&t=1646282837"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcTokenInfoSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <div className="section-title-1 text-center">
                <h5>This domain is backed by <a href="https://realtydao.com" target="_blank">RealtyDao.com</a></h5>
                <h2 className="sec-title fw-800 ">rDAO Token Usage Info </h2>
              </div>
              <div className="ufs-image">
                <img src="https://cdn.vnoc.com/icons/realtydao/rdao-usage-feat.png" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcLatestTaskSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="sec-title fw-800 text-capitalize mb-5">hnsfund.com Latest Tasks</h2>
              <div className="row">
                <div className="col-md-12 col-widget-tasks">
                  <script src="https://tools.contrib.com/eservice/blockchaintasks?d=<?=$info['domain']?>"></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcContributionSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-5">
              <div className="section-title-1 text-center">
                <h4>Contributions Management by <a href="https://www.contrib.com/" target="_blank">Contrib</a></h4>
                <h2 className="sec-title fw-800 ">Get Rewarded for Every Contribution</h2>
                <p>
                Every time you complete a task, you do a little bit of good creating added value to the ecosystem, so it’s only right that you get something back.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center">
              <div className="col-contribute col-contribute-bg1">
                <div className="contribute-icon text-start">
                  <img src="https://cdn-icons-png.flaticon.com/64/6302/6302230.png" />
                </div>
                <h5 className="fw-800">
                  Join hnsfund.com Community
                </h5>
                <p>
                  Get involved is simple. Join our growing community.
                </p>
                <a href="#joincomm" className="btn btn-success">Join Our Community</a>
              </div>
            </div>
            <div className="col-md-1 p-0"><img src="https://cdn.vnoc.com/desc/line-1.svg" className="line-1" /></div>
            <div className="col-md-3 text-center">
              <div className="col-contribute col-contribute-bg2">
                <div className="contribute-icon text-start">
                  <img src="https://cdn-icons-png.flaticon.com/64/6302/6302665.png" />
                </div>
                <h5 className="fw-800">
                  Complete Tasks and Challenges
                </h5>
                <p>
                  Join the challenge today and test how well you stack up.
                </p>
                <a href="#comtasks" className="btn btn-primary">Complete Tasks</a>
              </div>
            </div>
            <div className="col-md-1 p-0"><img src="https://cdn.vnoc.com/desc/line-2.svg" className="line-2" /></div>
            <div className="col-md-3 text-center">
              <div className="col-contribute col-contribute-bg3">
                <div className="contribute-icon text-start">
                  <img src="https://cdn-icons-png.flaticon.com/64/6302/6302260.png" />
                </div>
                <h5 className="fw-800">
                  Get Tokens and Cash Rewards
                </h5>
                <p>
                  The more tokens you have. The more rewards you'll earn.
                </p>
                <a href="#buytoks" className="btn btn-danger">Get Tokens</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcFollowSection">
        <div className="container">
          <div className="row p-80px-t sm-p-50px-t feature-bottom align-items-center">
            <div className="col-md-6 col-sm-12"><img className="img-fluid" src="https://cdn.vnoc.com/desc/why-us.png" alt="" /></div>
            <div className="col-md-6 col-sm-12">
              <h2 class="sec-title fw-800 mb-4">Follow, Build, and Help Launch</h2>
              <h5><span className="fw-600">Follow <span className="text-default">hnsfund.com</span></span> and other great ventures on the Contrib platform.</h5>
              <h5><span className="fw-600">Build <span className="text-default">hnsfund.com</span></span> and Help cofound a relevant new Startup, Part-Time.</h5>
              <h5><span className="fw-600">Launch <span className="text-default">hnsfund.com</span></span> and you could be front and center in the process. Launch 
              <span className="text-default">hnsfund.com</span> with us today!</h5>
              <div className="mt-4"><a href="https://www.contrib.com/signup/follow/" target="_blank" className="btn btn-primary btn-lg" rel="noopener noreferrer">Learn About hnsfund.com</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcAwesomeSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-5">
              <div className="section-title-1 text-center">
                <h2 className="sec-title fw-800 text-capitalize">hnsfund.com</h2></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="service-description">
                <h3 className="fw-800">Our Awesome Team that Help You to Make Right Choice</h3></div>
              <div className="single-service mt-5"><img src="https://cdn-icons-png.flaticon.com/128/2010/2010820.png" />
                <p className="mt-3"><span className="fw-600 text-default">hnsfund.com</span> is a bit different than most startups. We are small, diverse team working remotely and loving what we do. We only cowork with others who also have this same passion. </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="single-service mt-5 mb-5"><img src="https://cdn-icons-png.flaticon.com/128/2010/2010826.png" />
                    <p className="mt-3"><span className="fw-600 text-default">hnsfund.com</span> seeks to contract and hire the best people and then trust them: it's the thinking behind the work at their own time policy. </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="single-service"><img src="https://cdn-icons-png.flaticon.com/128/1189/1189206.png" />
                    <p className="mt-3">The <span className="fw-600 text-default">hnsfund.com</span> team loves building things and focus on being the most productive individual, not the amount of time spent in the office. </p>
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="mt-3 font-lora">We put a lot of effort into making <span className="text-default">hnsfund.com</span> a fun place to work for people who like getting things done. So if you're game with this then enter your email address and be a part of the global team. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bcBottomSection">
        <div className="main-sec-container">
          <div className="sec-container sec-follow">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="media">
                    <div className="ts-icon mr-3">
                      <img src="https://cdn-icons-png.flaticon.com/128/1674/1674848.png" height="48" />
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0 fw-600">Contrib Marketplace</h5>
                      <p>Browse Jobs, Ideas and Micro Tasks.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="media">
                    <div className="ts-icon mr-3">
                      <img src="https://cdn-icons-png.flaticon.com/128/1674/1674852.png" height="48" />
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0 fw-600">Contribute</h5>
                      <p>Contribute using your skills, services, apps and/or capital.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="media">
                    <div className="ts-icon mr-3">
                      <img src="https://cdn-icons-png.flaticon.com/128/1674/1674865.png" height="48" />
                    </div>
                    <div className="media-body">
                      <h5 className="mt-0 fw-600">Crypto Marketplace</h5>
                      <p>Contribute to blockchain projects on premium urls today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-feat-intro sec-stats">
            <div className="container feat-intro shadow-1 p-60px">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="row">
                    <li className="col">
                      <div className="no-of-stats">5250</div>
                      <div>NO. OF MEMBERS</div>
                    </li>
                    <li className="col">
                      <div className="no-of-stats">310</div>
                      <div>NO. OF CAMPAIGNS</div>
                    </li>
                    <li className="col">
                      <div className="no-of-stats">395</div>
                      <div>REWARDS GIVEN</div>
                    </li>
                    <li className="col">
                      <div className="no-of-stats">3599072</div>
                      <div>TOTAL IMPRESSIONS</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-footer">
        <div className="footer-holder">
          <div className="sec-footer-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="text-uppercase footer--title">hnsfund.com</h3>
                  <p>Join our exclusive community of like minded people on hnsfund.com</p>
                </div>
                <div className="col-md-3">
                  <h3 className="text-uppercase footer--title">get started</h3>
                  <ul className="list-unstyled f-a-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/partner">Partner With Us</a></li>
                    <li><a href="/apply">Apply</a></li>
                    <li><a href="https://www.contrib.com/to/<?=$info['domain']?>">Contribute</a></li>
                    <li><a href="/invest">Invest</a></li>
                    <li><a href="/invest">Apps</a></li>
                    <li><a href="/developer">Developers</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h3 className="text-uppercase footer--title">company</h3>
                  <ul className="list-unstyled f-a-links f-a-links-mrgBtm">
                    <li><a href="/about">About</a></li>								
                    <li><a href="/terms">Terms</a></li>
                    <li><a href="/policy">Cookie Policy</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="https://www.domaindirectory.com/policypage/unsubscribe?domain=hnsfund.com" target="blank">Unsubscribe</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h3 className="text-uppercase footer--title">partners</h3>
                  <a href="https://contrib.com" target="_blank"><img className="img-fluid ctb-banner" src="https://cdn.vnoc.com/logos/logo-new-contrib-06-wyt.png" alt="Contrib" title="Contrib" /></a>
                  <h3 className="text-uppercase footer--title mt-3">Socials</h3>
                  <ul className="list-inline socials-ul mt-3 pl-2">
                    <li className="list-inline-item"><a target="_blank" title="twitter" className="icon-button twitter" href="https://twitter.com/contrib"><i className="fab fa-twitter" aria-hidden="true"></i><span></span></a></li>
                    <li className="list-inline-item"><a target="_blank" title="facebook" className="icon-button facebook" href="https://www.facebook.com/Contrib.Official"><i className="fab fa-facebook-f" aria-hidden="true"></i><span></span></a></li>
                    <li className="list-inline-item"><a target="_blank" title="google-plus" className="icon-button google-plus" href="https://plus.google.com/u/1/105733839510740941811/posts"><i className="fab fa-google-plus-g" aria-hidden="true"></i><span></span></a></li>
                    <li className="list-inline-item"><a target="_blank" title="linkedin" className="icon-button linkedin" href="http://www.linkedin.com/company/contrib-com"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 f-a-links">© 2022 <span className="text-capitalize">hnsfund.com</span>. All Rights Reserved.</div>
                    <div className="col-md-6">
                      <ul className="list-inline text-end f-a-links">
                        <li className="list-inline-item"><a href="/about">About</a></li>
                        <li className="list-inline-item"><a href="/terms">Terms</a></li>
                        <li className="list-inline-item"><a href="/privacy">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
