import { getDomain } from "@/lib/data";
import Link from "next/link";
import Footer from "@/components/Footer";
import BlogList from "@/modules/blog/BlogList";

const page = () => {
  const domain = getDomain();
  return (
    <>
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
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-8tw-mb-8">
        <BlogList />
      </div>
      <Footer domain={domain} />
    </>
  );
};

export default page;
