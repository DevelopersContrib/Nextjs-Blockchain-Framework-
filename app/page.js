import Notification from "@/components/notification/Notification";
import BlogList from "@/modules/blog/BlogList";
import Image from "next/image";
import Link from "next/link";
import { Users, ListChecks, Award, Lightbulb, UserSearch, Handshake, Store, CircleDollarSign, Eye, Hammer, Rocket, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import HeaderWidget from "../components/HeaderWidget";
import Logo from "../components/logo";
import { getData, getDomain } from "../lib/data";
import CtaAdaoSection from "./home/CtaAdaoSection";
import HeroSection from "./home/HeroSection";
import FlashNewsBar from "@/components/FlashNewsBar";
import LatestTasksSection from "./home/LatestTasksSection";

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
      <section className="tw-bg-slate-900 tw-fixed tw-w-full tw-px-4 tw-py-2 text-white tw-z-50 tw-border-b tw-border-white/10 tw-min-h-[44px] tw-flex tw-items-center">
        <div className="container tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3">
          <span className="tw-text-xs sm:tw-text-sm tw-font-medium tw-text-slate-200">
            Contribute and become a DAO member, earn crypto rewards.
          </span>
          <div className="tw-flex tw-gap-2">
            <Link
              href="/inquire"
              className="tw-inline-flex tw-items-center tw-px-4 tw-py-1.5 tw-rounded-full tw-text-sm tw-font-semibold tw-bg-emerald-500 hover:tw-bg-emerald-400 tw-text-white tw-no-underline tw-transition-colors"
            >
              Inquire
            </Link>
            <Link
              href="/partner"
              className="tw-inline-flex tw-items-center tw-px-4 tw-py-1.5 tw-rounded-full tw-text-sm tw-font-semibold tw-bg-rose-500 hover:tw-bg-rose-400 tw-text-white tw-no-underline tw-transition-colors"
            >
              Partner
            </Link>
          </div>
        </div>
      </section>
      <div>
        <FlashNewsBar />
        <HeroSection domain={domain} logo={c.data.logo} />
      <CtaAdaoSection />
      <section className="tw-py-16 md:tw-py-24 tw-bg-gradient-to-b tw-from-white tw-to-slate-50/80 tw-relative" id="buytoks">
        <div className="container">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-center">
            <a
              href="https://realtydao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-4 tw-px-4 tw-py-2 tw-rounded-full tw-bg-slate-100 tw-text-slate-700 tw-text-sm tw-font-semibold hover:tw-bg-slate-200 hover:tw-text-slate-900 tw-transition-colors tw-no-underline tw-border tw-border-slate-200/80"
            >
              <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-emerald-500" aria-hidden />
              This domain is backed by RealtyDao.com
            </a>
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-6">
              rDAO Token Usage Info
            </h2>
            <p className="tw-text-slate-600 tw-text-lg tw-mb-10 tw-max-w-2xl tw-mx-auto">
              Learn how rDAO tokens power this community and the RealtyDao ecosystem.
            </p>
          </div>
          <div className="tw-mt-10 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-bg-white tw-max-w-5xl tw-mx-auto">
            <Image
              src="https://cdn.vnoc.com/icons/realtydao/rdao-usage-feat.png"
              width={0}
              height={0}
              className="tw-w-full tw-h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
              alt="rDAO token usage and RealtyDao ecosystem overview"
            />
          </div>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-[#ECF6FB] tw-relative" id="comtasks">
        <div className="container">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-center tw-mb-10">
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-3">
              Latest Tasks
            </h2>
            <p className="tw-text-slate-600 tw-text-lg">
              Complete tasks, earn rewards, and help grow the community.
            </p>
          </div>
          <div className="tw-max-w-5xl tw-mx-auto tw-relative">
            <LatestTasksSection domain={domain} />
          </div>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-gradient-to-b tw-from-slate-50/50 tw-to-white tw-relative" id="joincomm">
        <div className="container">
          <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-14">
            <a
              href="https://www.contrib.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-4 tw-px-4 tw-py-2 tw-rounded-full tw-bg-indigo-50 tw-text-indigo-700 tw-text-sm tw-font-semibold hover:tw-bg-indigo-100 hover:tw-text-indigo-800 tw-transition-colors tw-no-underline tw-border tw-border-indigo-200/80"
            >
              Contributions Management by Contrib.com
            </a>
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-4">
              Get Rewarded for Every Contribution
            </h2>
            <p className="tw-text-slate-600 tw-text-lg tw-leading-relaxed">
              Every time you complete a task, you create value for the ecosystem—so it’s only right that you get something back.
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-max-w-5xl tw-mx-auto">
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-text-center tw-flex tw-flex-col tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-slate-200/70">
              <div className="tw-w-14 tw-h-14 tw-mx-auto tw-mb-5 tw-rounded-2xl tw-bg-emerald-50 tw-flex tw-items-center tw-justify-center">
                <Users className="tw-w-7 tw-h-7 tw-text-emerald-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-xl tw-text-slate-900 tw-mb-2">
                Join {domain} Community
              </h3>
              <p className="tw-text-slate-600 tw-text-sm tw-mb-6 tw-flex-1">
                Getting involved is simple. Join our growing community.
              </p>
              <a
                href="#joincomm"
                className="tw-inline-block tw-w-full tw-py-3 tw-px-4 tw-rounded-xl tw-bg-emerald-600 hover:tw-bg-emerald-500 tw-text-white tw-font-semibold tw-text-sm tw-no-underline tw-transition-colors"
              >
                Join Our Community
              </a>
            </div>

            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-text-center tw-flex tw-flex-col tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-slate-200/70">
              <div className="tw-w-14 tw-h-14 tw-mx-auto tw-mb-5 tw-rounded-2xl tw-bg-indigo-50 tw-flex tw-items-center tw-justify-center">
                <ListChecks className="tw-w-7 tw-h-7 tw-text-indigo-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-xl tw-text-slate-900 tw-mb-2">
                Complete Tasks and Challenges
              </h3>
              <p className="tw-text-slate-600 tw-text-sm tw-mb-6 tw-flex-1">
                Join the challenge today and test how well you stack up.
              </p>
              <a
                href="#comtasks"
                className="tw-inline-block tw-w-full tw-py-3 tw-px-4 tw-rounded-xl tw-bg-indigo-600 hover:tw-bg-indigo-500 tw-text-white tw-font-semibold tw-text-sm tw-no-underline tw-transition-colors"
              >
                Complete Tasks
              </a>
            </div>

            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-text-center tw-flex tw-flex-col tw-transition-shadow hover:tw-shadow-xl hover:tw-shadow-slate-200/70">
              <div className="tw-w-14 tw-h-14 tw-mx-auto tw-mb-5 tw-rounded-2xl tw-bg-amber-50 tw-flex tw-items-center tw-justify-center">
                <Award className="tw-w-7 tw-h-7 tw-text-amber-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-xl tw-text-slate-900 tw-mb-2">
                Get Tokens and Cash Rewards
              </h3>
              <p className="tw-text-slate-600 tw-text-sm tw-mb-6 tw-flex-1">
                The more tokens you have, the more rewards you’ll earn.
              </p>
              <a
                href="#buytoks"
                className="tw-inline-block tw-w-full tw-py-3 tw-px-4 tw-rounded-xl tw-bg-amber-500 hover:tw-bg-amber-400 tw-text-white tw-font-semibold tw-text-sm tw-no-underline tw-transition-colors"
              >
                Get Tokens
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-white tw-relative">
        <div className="container">
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center tw-max-w-6xl tw-mx-auto">
            <div className="tw-order-2 lg:tw-order-1">
              <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-shadow-slate-300/40 tw-border tw-border-white tw-bg-white/50 tw-p-2">
                <Image
                  src="https://cdn.vnoc.com/desc/why-us.png"
                  width={0}
                  height={0}
                  alt="Follow, build, and launch with Contrib platform"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="tw-w-full tw-h-auto tw-rounded-2xl"
                />
              </div>
            </div>
            <div className="tw-order-1 lg:tw-order-2">
              <span className="tw-inline-block tw-text-indigo-600 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-4">
                Your journey with Contrib
              </span>
              <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-10">
                Follow, Build, and Help Launch
              </h2>
              <div className="tw-space-y-5 tw-mb-10">
                <div className="tw-flex tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/80 tw-border tw-border-white tw-shadow-sm hover:tw-shadow-md tw-transition-shadow">
                  <div className="tw-w-12 tw-h-12 tw-shrink-0 tw-rounded-xl tw-bg-indigo-100 tw-flex tw-items-center tw-justify-center">
                    <Eye className="tw-w-6 tw-h-6 tw-text-indigo-600" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-lg tw-mb-1">Follow</h3>
                    <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0">
                      Follow <span className="tw-font-semibold tw-text-slate-800">{domain}</span> and other great ventures on the Contrib platform.
                    </p>
                  </div>
                </div>
                <div className="tw-flex tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/80 tw-border tw-border-white tw-shadow-sm hover:tw-shadow-md tw-transition-shadow">
                  <div className="tw-w-12 tw-h-12 tw-shrink-0 tw-rounded-xl tw-bg-emerald-100 tw-flex tw-items-center tw-justify-center">
                    <Hammer className="tw-w-6 tw-h-6 tw-text-emerald-600" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-lg tw-mb-1">Build</h3>
                    <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0">
                      Build {domain} and help cofound a relevant new startup—part-time.
                    </p>
                  </div>
                </div>
                <div className="tw-flex tw-gap-4 tw-p-4 tw-rounded-xl tw-bg-white/80 tw-border tw-border-white tw-shadow-sm hover:tw-shadow-md tw-transition-shadow">
                  <div className="tw-w-12 tw-h-12 tw-shrink-0 tw-rounded-xl tw-bg-amber-100 tw-flex tw-items-center tw-justify-center">
                    <Rocket className="tw-w-6 tw-h-6 tw-text-amber-600" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-lg tw-mb-1">Launch</h3>
                    <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0">
                      Launch {domain} and you could be front and center. Launch with us today!
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={learn_link}
                target="_blank"
                rel="noopener noreferrer"
                className="tw-inline-flex tw-items-center tw-gap-2 tw-py-4 tw-px-6 tw-rounded-xl tw-bg-indigo-600 hover:tw-bg-indigo-500 tw-text-white tw-font-semibold tw-text-base tw-no-underline tw-transition-colors tw-shadow-lg tw-shadow-indigo-900/20"
              >
                Learn About {domain}
                <ArrowRight className="tw-w-5 tw-h-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-gradient-to-b tw-from-slate-50 tw-to-slate-100/80 tw-relative" id="team">
        <div className="container">
          <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-14">
            <p className="tw-text-slate-500 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wider tw-mb-3">
              The people behind it
            </p>
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight">
              The <span className="tw-text-slate-600 tw-font-medium tw-normal-case">{domain}</span> team
            </h2>
            <p className="tw-text-slate-600 tw-text-lg tw-mt-3">
              A small, diverse team that cares about building the right thing—and working with people who share that passion.
            </p>
          </div>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-6 tw-max-w-5xl tw-mx-auto">
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col">
              <div className="tw-w-12 tw-h-12 tw-mb-4 tw-rounded-xl tw-bg-amber-50 tw-flex tw-items-center tw-justify-center">
                <Lightbulb className="tw-w-6 tw-h-6 tw-text-amber-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-slate-900 tw-mb-2">Different by design</h3>
              <p className="tw-text-slate-600 tw-leading-relaxed tw-flex-1">
                <span className="tw-font-semibold tw-text-slate-900">{domain}</span> isn't your typical startup. We're a small, remote-first team that only works with people who love what they do.
              </p>
            </div>
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col">
              <div className="tw-w-12 tw-h-12 tw-mb-4 tw-rounded-xl tw-bg-indigo-50 tw-flex tw-items-center tw-justify-center">
                <UserSearch className="tw-w-6 tw-h-6 tw-text-indigo-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-slate-900 tw-mb-2">Trust & flexibility</h3>
              <p className="tw-text-slate-600 tw-leading-relaxed tw-flex-1">
                We hire and contract the best people, then trust them. That's why we have a work-at-your-own-time policy—results matter more than clocked hours.
              </p>
            </div>
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col">
              <div className="tw-w-12 tw-h-12 tw-mb-4 tw-rounded-xl tw-bg-emerald-50 tw-flex tw-items-center tw-justify-center">
                <Handshake className="tw-w-6 tw-h-6 tw-text-emerald-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-slate-900 tw-mb-2">Outcomes over hours</h3>
              <p className="tw-text-slate-600 tw-leading-relaxed tw-flex-1">
                The <span className="tw-font-semibold tw-text-slate-900">{domain}</span> team focuses on building and shipping—productivity over presence in an office.
              </p>
            </div>
          </div>
          <p className="tw-text-slate-600 tw-text-center tw-mt-10 tw-max-w-2xl tw-mx-auto tw-text-base tw-leading-relaxed">
            We’ve built {domain} to be a place where people who like getting things done can do their best work. Join the waitlist above to be part of the global team.
          </p>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-slate-50 tw-relative">
        <div className="container">
          <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-14">
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-3">
              How Contrib Works
            </h2>
            <p className="tw-text-slate-600 tw-text-lg">
              Discover opportunities, contribute your skills, and earn from the crypto marketplace.
            </p>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-16 tw-max-w-5xl tw-mx-auto">
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-md tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col tw-transition-all hover:tw-shadow-lg hover:tw-shadow-slate-200/50 hover:tw-border-indigo-200/60">
              <div className="tw-w-14 tw-h-14 tw-mb-5 tw-rounded-2xl tw-bg-indigo-50 tw-flex tw-items-center tw-justify-center">
                <Store className="tw-w-7 tw-h-7 tw-text-indigo-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-xl tw-mb-2">Contrib Marketplace</h3>
              <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0 tw-flex-1">
                Browse jobs, ideas, and micro tasks in one place.
              </p>
            </div>
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-md tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col tw-transition-all hover:tw-shadow-lg hover:tw-shadow-slate-200/50 hover:tw-border-emerald-200/60">
              <div className="tw-w-14 tw-h-14 tw-mb-5 tw-rounded-2xl tw-bg-emerald-50 tw-flex tw-items-center tw-justify-center">
                <Users className="tw-w-7 tw-h-7 tw-text-emerald-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-xl tw-mb-2">Contribute</h3>
              <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0 tw-flex-1">
                Use your skills, services, apps, and/or capital to contribute and earn.
              </p>
            </div>
            <div className="tw-bg-white tw-p-6 md:tw-p-8 tw-rounded-2xl tw-shadow-md tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-flex tw-flex-col tw-transition-all hover:tw-shadow-lg hover:tw-shadow-slate-200/50 hover:tw-border-amber-200/60">
              <div className="tw-w-14 tw-h-14 tw-mb-5 tw-rounded-2xl tw-bg-amber-50 tw-flex tw-items-center tw-justify-center">
                <CircleDollarSign className="tw-w-7 tw-h-7 tw-text-amber-600" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="tw-font-display tw-font-bold tw-text-slate-900 tw-text-xl tw-mb-2">Crypto Marketplace</h3>
              <p className="tw-text-slate-600 tw-text-sm tw-leading-relaxed tw-mb-0 tw-flex-1">
                Contribute to blockchain projects on premium URLs and get rewarded.
              </p>
            </div>
          </div>

          <div className="tw-max-w-4xl tw-mx-auto">
            <p className="tw-text-center tw-text-slate-500 tw-text-sm tw-font-medium tw-mb-6 tw-uppercase tw-tracking-wider">
              Community by the numbers
            </p>
            <div className="tw-bg-white tw-rounded-2xl tw-border tw-border-slate-200/80 tw-shadow-xl tw-shadow-slate-200/50 tw-overflow-hidden">
              <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-divide-y md:tw-divide-y-0 md:tw-divide-x tw-divide-slate-200/80">
                <div className="tw-p-6 md:tw-p-8 tw-text-center">
                  <div className="tw-font-display tw-font-bold tw-text-3xl md:tw-text-4xl tw-text-indigo-600 tw-mb-1">5,250</div>
                  <div className="tw-text-slate-600 tw-text-sm tw-font-semibold">Members</div>
                </div>
                <div className="tw-p-6 md:tw-p-8 tw-text-center">
                  <div className="tw-font-display tw-font-bold tw-text-3xl md:tw-text-4xl tw-text-emerald-600 tw-mb-1">310</div>
                  <div className="tw-text-slate-600 tw-text-sm tw-font-semibold">Campaigns</div>
                </div>
                <div className="tw-p-6 md:tw-p-8 tw-text-center">
                  <div className="tw-font-display tw-font-bold tw-text-3xl md:tw-text-4xl tw-text-amber-600 tw-mb-1">395</div>
                  <div className="tw-text-slate-600 tw-text-sm tw-font-semibold">Rewards given</div>
                </div>
                <div className="tw-p-6 md:tw-p-8 tw-text-center">
                  <div className="tw-font-display tw-font-bold tw-text-3xl md:tw-text-4xl tw-text-slate-800 tw-mb-1">3.6M</div>
                  <div className="tw-text-slate-600 tw-text-sm tw-font-semibold">Impressions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-16 md:tw-py-24 tw-bg-slate-50/50 tw-relative">
        <div className="container">
          <div className="tw-max-w-3xl tw-mx-auto tw-text-center tw-mb-12">
            <p className="tw-text-slate-500 tw-text-sm tw-font-medium tw-mb-3 tw-uppercase tw-tracking-wider">
              From the blog
            </p>
            <h2 className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-text-slate-900 tw-tracking-tight tw-mb-3">
              Latest updates
            </h2>
            <p className="tw-text-slate-600 tw-text-lg">
              News, guides, and updates from the community.
            </p>
          </div>
          <BlogList variant="homepage" />
        </div>
      </section>
      <Notification />
      </div>
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
