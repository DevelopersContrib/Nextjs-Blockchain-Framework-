import HeaderWidget from "../components/HeaderWidget";
import BlogList from "@/modules/blog/BlogList";
import Image from "next/image";
import Container from "../components/Container";
import Script from "next/script";
import Footer from "../components/Footer";
import Link from "next/link";
import { getData, getDomain } from "../lib/data";
import Logo from "../components/logo";
export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const learn_link = "https://www.contrib.com/signup/follow/" + domain;

  return (
    <>
      <HeaderWidget
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <section className="tw-bg-black tw-fixed tw-w-full tw-px-4 tw-py-2 text-white tw-z-10">
        <div className="container text-center tw-space-x-2">
          <strong className="tw-text-base">
            Contribute and become a DAO member, earn crypto rewards!
          </strong>
          <Link
            href="/inquire"
            className="btn btn-success btn-sm lg:tw-py-[0.10rem!important] lg:tw-font-[500!important]"
          >
            Inquire
          </Link>
          <Link
            href="/partner"
            className="btn btn-danger btn-sm lg:tw-py-[0.10rem!important] lg:tw-font-[500!important]"
          >
            Partner
          </Link>
        </div>
      </section>
      <section className="tw-min-h-[calc(100vh-43px)] tw-py-14 tw-flex tw-w-full tw-items-center tw-justify-center tw-relative">
        <video
          className="tw-object-cover tw-w-[100vw] tw-h-[100vh] tw-fixed tw-top-0 tw-left-0"
          src="https://cdn.vnoc.com/videos/video-blockchain6.mp4"
          autoPlay
          loop
          playsInline
          muted
        ></video>
        <div className="tw-bg-[rgba(6,13,19,.83)] tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"></div>
        <div className="container tw-relative text-white">
          <div className="row">
            <div className="col-xl-12 text-center">
              <Logo
                domain={domain}
                logo={c.data.logo}
              />

              <h1 className="tw-font-medium tw-text-base lg:tw-text-6xl tw-break-words mb-3">
                Join our exclusive community of like minded people on {domain}
              </h1>
              <h3 className="tw-text-white/75 tw-text-2xl tw-font-medium">
                Help us build out {domain} with other great people around the world and earn
                Eshares, compensation and experience with other like minded people.
              </h3>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="tw-bg-[rgba(0,0,0,0.75)] tw-p-8 tw-rounded-lg">
                    <Container domain={domain} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-white tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center mb-3">
              <h5 className="tw-font-bold tw-text-2xl">
                This domain is backed by{" "}
                <a
                  className="tw-no-underline"
                  href="https://realtydao.com/"
                  target="_blank"
                >
                  RealtyDao.com
                </a>
              </h5>
              <h1 className="tw-font-extrabold tw-text-5xl">rDAO Token Usage Info</h1>
            </div>
            <div className="col-xl-12 text-center">
              <Image
                src="https://cdn.vnoc.com/icons/realtydao/rdao-usage-feat.png"
                width={0}
                height={0}
                className="img-fluid tw-w-full"
                sizes="100vw"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-[#ECF6FB] tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 tw-text-center">
              <h1 className="tw-font-extrabold tw-text-5xl tw-capitalize mb-5">
                {domain} Latest Tasks
              </h1>
            </div>
            <div className="col-xl-12 col-widget-tasks">
              <Script src="https://tools.contrib.com/eservice/blockchaintasks?d={domain}&container=blockchain-tasks" />
              <div id="blockchain-tasks"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-white tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center mb-3">
              <h5 className="tw-font-bold tw-text-2xl">
                Contributions Management by{" "}
                <a
                  className="tw-no-underline"
                  href="https://www.contrib.com/"
                  target="_blank"
                >
                  Contrib.com
                </a>
              </h5>
              <h1 className="tw-font-extrabold tw-text-5xl">Get Rewarded for Every Contribution</h1>
              <p>
                Every time you complete a task, you do a little bit of good creating added value to
                the ecosystem, so it’s only right that you get something back.
              </p>
            </div>
          </div>
          <div className="row justify-content-center gy-3 gy-xl-0">
            <div className="col-md-3 text-center">
              <div className="tw-bg-[#F8F0E6] tw-p-8 tw-rounded-3xl">
                <div className="mb-4 text-center">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/file-check-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-800"> Join {domain} Community </h5>
                <p> Get involved is simple. Join our growing community. </p>
                <a
                  href="#joincomm"
                  className="btn btn-success"
                >
                  Join Our Community
                </a>
              </div>
            </div>
            <div className="col-md-1 d-none d-xl-flex p-0 tw-flex tw-items-end">
              <Image
                src="https://cdn.vnoc.com/desc/line-1.svg"
                width={170}
                height={170}
                alt=""
                className=" line-1"
              />
            </div>
            <div className="col-md-3 text-center">
              <div className="tw-bg-[#F0E4FD] tw-p-8 tw-rounded-3xl">
                <div className="mb-4 text-center">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/checklist-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-800"> Complete Tasks and Challenges </h5>
                <p> Join the challenge today and test how well you stack up. </p>
                <a
                  href="#comtasks"
                  className="btn btn-primary"
                >
                  Complete Tasks
                </a>
              </div>
            </div>
            <div className="col-md-1 d-none d-xl-flex p-0 tw-flex tw-items-end">
              <Image
                src="https://cdn.vnoc.com/desc/line-2.svg"
                width={170}
                height={170}
                alt=""
                className="line-2"
              />
            </div>
            <div className="col-md-3 text-center">
              <div className="tw-bg-[#E7F0F0] tw-p-8 tw-rounded-3xl">
                <div className="mb-4 text-center">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/ribbon-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-800"> Get Tokens and Cash Rewards </h5>
                <p> The more tokens you have. The more rewards you'll earn. </p>
                <a
                  href="#buytoks"
                  className="btn btn-danger"
                >
                  Get Tokens
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-[#ECF6FB] tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <Image
                src="https://cdn.vnoc.com/desc/why-us.png"
                width={0}
                height={0}
                alt=""
                sizes="100vh"
                className="tw-w-full img-fluid"
              />
            </div>
            <div className="col-xl-6 tw-flex tw-justify-center tw-flex-col">
              <h1 className="tw-font-extrabold tw-text-5xl mb-4">Follow, Build, and Help Launch</h1>
              <p>Follow {domain} and other great ventures on the Contrib platform.</p>
              <p>Build {domain} and Help cofound a relevant new Startup, Part-Time.</p>
              <p>
                Launch {domain} and you could be front and center in the process. Launch {domain}{" "}
                with us today!
              </p>
              <a
                href={learn_link}
                className="btn btn-lg btn-primary"
              >
                Learn About {domain}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 bg-light tw-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="title-center-circle">
                <h2 className="tw-font-extrabold tw-text-5xl text-uppercase text-center">
                  <span className="text-capitalize">{domain}</span> team
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-xl-4">
              <h3 className="tw-font-extrabold mb-3">
                Our Awesome Team that Help You to Make Right Choice
              </h3>
              <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-4 tw-mt-8">
                <div className="tw-d-block mb-3">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/lightbulb-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="text-secondary">
                  <strong>
                    <span className="text-capitalize">{domain}</span>
                  </strong>{" "}
                  is a bit different than most startups. We are small, diverse team working remotely
                  and loving what we do. We only cowork with others who also have this same passion.
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-8 tw-mt-8">
                    <div className="tw-d-block mb-3">
                      <Image
                        src="https://cdn.vnoc.com/icons/contrib/user-search-flaticon.png"
                        width={48}
                        height={48}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-secondary">
                      <strong>
                        <span className="text-capitalize">{domain}</span>
                      </strong>{" "}
                      seeks to contract and hire the best people and then trust them: it&ampos;s the
                      thinking behind the work at their own time policy.
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-4">
                    <div className="tw-d-block mb-3">
                      <Image
                        src="https://cdn.vnoc.com/icons/contrib/grabhand-flaticon.png"
                        width={48}
                        height={48}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-secondary">
                      The{" "}
                      <strong>
                        <span className="text-capitalize">{domain}</span>
                      </strong>{" "}
                      team loves building things and focus on being the most productive individual,
                      not the amount of time spent in the office.
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-secondary">
                We put a lot of effort into making <span className="text-capitalize">{domain}</span>{" "}
                a fun place to work for people who like getting things done. So if you&apos;re game
                with this then enter your email address and be a part of the global team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 bg-light tw-relative">
        <div className="container">
          <div className="row mb-3">
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/marketplace-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Contrib Marketplace</h5>
                  <p className="mb-0">Browse Jobs, Ideas and Micro Tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/mobile-user-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Contribute</h5>
                  <p className="mb-0">
                    Contribute using your skills, services, apps and/or capital.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <Image
                    src="https://cdn.vnoc.com/icons/contrib/mobile-dollar-flaticon.png"
                    width={48}
                    height={48}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Crypto Marketplace</h5>
                  <p className="mb-0">Contribute to blockchain projects on premium urls today</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tw-shadow-[-4px_49px_79px_0px_rgba(0,0,0,0.15)] tw-p-14 tw-rounded-md tw-bg-white">
                <div className="row gy-3">
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">5250</h2>
                    <div>NO. OF MEMBERS</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">310</h2>
                    <div>NO. OF CAMPAIGNS</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">395</h2>
                    <div>REWARDS GIVEN</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">3599072</h2>
                    <div>TOTAL IMPRESSIONS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-24 tw-bg-white tw-relative">
        <BlogList />
      </section>
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
