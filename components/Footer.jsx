import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import Link from "next/link";

const footerLink =
  "tw-text-slate-400 hover:tw-text-white tw-no-underline tw-inline-block tw-py-1 tw-transition-colors";

export default async function Footer({ domain, twitter_url, fb_url, linkedin_url }) {
  const contri_link = "https://www.contrib.com/to/" + domain;
  return (
    <footer className="tw-text-white tw-relative">
      <section className="tw-bg-slate-900 tw-py-12 md:tw-py-14 tw-border-t tw-border-slate-800">
        <div className="container">
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8 lg:tw-gap-10">
            <div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-white tw-mb-3 tw-uppercase tw-tracking-wide">
                {domain}
              </h3>
              <p className="tw-text-slate-400 tw-text-sm tw-leading-relaxed">
                Join our exclusive community of like-minded people on {domain}.
              </p>
            </div>
            <div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-white tw-mb-3 tw-uppercase tw-tracking-wide">
                Get started
              </h3>
              <ul className="tw-list-none tw-pl-0 tw-m-0 tw-space-y-2">
                <li><Link href="/" className={footerLink}>Home</Link></li>
                <li><Link href="/blog" className={footerLink}>Blog</Link></li>
                <li><Link href="/partner" className={footerLink}>Partner with us</Link></li>
                <li><Link href="/staffing" className={footerLink}>Apply</Link></li>
                <li><a href={contri_link} target="_blank" rel="noopener noreferrer" className={footerLink}>Contribute</a></li>
                <li><Link href="/apps" className={footerLink}>Apps</Link></li>
                <li><Link href="/developer" className={footerLink}>Developers</Link></li>
                <li><Link href="/referral" target="_blank" className={footerLink}>Referral</Link></li>
                <li><a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className={footerLink}>Build</a></li>
                <li><a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className={footerLink}>Invest</a></li>
                <li><a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className={footerLink}>Manage</a></li>
                <li><a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className={footerLink}>Monetize</a></li>
              </ul>
            </div>
            <div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-white tw-mb-3 tw-uppercase tw-tracking-wide">
                Company
              </h3>
              <ul className="tw-list-none tw-pl-0 tw-m-0 tw-space-y-2">
                <li><Link href="/about" className={footerLink}>About</Link></li>
                <li><Link href="/terms" className={footerLink}>Terms</Link></li>
                <li><Link href="/cookie" className={footerLink}>Cookie policy</Link></li>
                <li><Link href="/privacy" className={footerLink}>Privacy</Link></li>
                <li><Link href={`https://domaindirectory.com/policypage/unsubscribe?domain=${domain}`} target="_blank" className={footerLink}>Unsubscribe</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-white tw-mb-3 tw-uppercase tw-tracking-wide">
                Partners
              </h3>
              <a href="https://contrib.com" target="_blank" rel="noopener noreferrer" className="tw-inline-block tw-mb-6 hover:tw-opacity-90 tw-transition-opacity">
                <Image
                  src="https://cdn.vnoc.com/logos/logo-new-contrib-06-wyt.png"
                  alt="contrib.com"
                  width={140}
                  height={44}
                  className="tw-h-10 tw-w-auto"
                />
              </a>
              <h3 className="tw-font-display tw-font-bold tw-text-lg tw-text-white tw-mb-3 tw-uppercase tw-tracking-wide">
                Socials
              </h3>
              <div className="tw-flex tw-gap-4">
                <a href={twitter_url} className="tw-text-slate-400 hover:tw-text-white tw-transition-colors" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} className="tw-w-5 tw-h-5" />
                </a>
                <a href={fb_url} className="tw-text-slate-400 hover:tw-text-white tw-transition-colors" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="tw-w-5 tw-h-5" />
                </a>
                <a href={linkedin_url} className="tw-text-slate-400 hover:tw-text-white tw-transition-colors" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} className="tw-w-5 tw-h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-bg-slate-950 tw-py-4 tw-border-t tw-border-slate-800">
        <div className="container">
          <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-justify-between sm:tw-items-center tw-gap-3 tw-text-slate-500 tw-text-sm">
            <span>
              &copy; {new Date().getFullYear()} <span className="tw-capitalize tw-text-slate-400">{domain}</span>. All rights reserved.
            </span>
            <div className="tw-flex tw-gap-6">
              <Link href="/about" className={footerLink}>About</Link>
              <Link href="/terms" className={footerLink}>Terms</Link>
              <Link href="/policy" className={footerLink}>Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
