"use client";

import { useFetchBlog } from "@/lib/hooks/useBlogFetcher";
import { useBlogStore } from "@/lib/store/useBlogStore";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingState from "@/components/LoadingState";
import Image from "next/image";
import Link from "next/link";
import BlogSideBar from "./BlogSideBar";
import { ArrowRight } from "lucide-react";

const MOCK_BLOG_POSTS = [
  {
    id: "mock-1",
    slug: "getting-started-with-the-community",
    title: "Getting started with the community",
    image_url: null,
    image_caption: "Team collaboration",
    createdAt: "Mar 1, 2025",
    tags: ["Onboarding", "Guide"],
  },
  {
    id: "mock-2",
    slug: "how-rewards-work",
    title: "How rewards and rDAO work",
    image_url: null,
    image_caption: "Rewards",
    createdAt: "Feb 28, 2025",
    tags: ["Rewards", "rDAO"],
  },
  {
    id: "mock-3",
    slug: "latest-updates-march-2025",
    title: "Latest updates — March 2025",
    image_url: null,
    image_caption: "Updates",
    createdAt: "Feb 25, 2025",
    tags: ["News", "Product"],
  },
  {
    id: "mock-4",
    slug: "contrib-best-practices",
    title: "Contrib best practices for contributors",
    image_url: null,
    image_caption: "Best practices",
    createdAt: "Feb 20, 2025",
    tags: ["Tips", "Contrib"],
  },
];

const BlogList = ({ theme = "black", variant }) => {
  const { blog, loading } = useBlogStore();
  useFetchBlog();

  const blogPost = blog.map((item) => ({
    id: item.id,
    slug: item.contents[0].title,
    title: item.contents[0].title,
    image_url: item.contents[0].imageUrl,
    image_caption: item.contents[0].imageCaption,
    createdAt: item.createdAt,
    tags: item.contents[0].blogPostTags,
  }));

  const isHomepage = variant === "homepage";
  const textColor = theme === "white" ? "tw-text-white" : "tw-text-slate-900";
  const backgroundColor = theme === "white" ? "tw-bg-transparent" : "tw-bg-white";

  const postsToShow = isHomepage && blog.length === 0 && !loading ? MOCK_BLOG_POSTS : blogPost;
  const showMockNote = isHomepage && blog.length === 0 && !loading;

  if (isHomepage) {
    return (
      <div className="tw-max-w-5xl tw-mx-auto">
        {loading ? (
          <div className="tw-flex tw-justify-center tw-py-12">
            <LoadingState />
          </div>
        ) : (blog.length > 0 || showMockNote) ? (
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              {postsToShow.map((post, index) => (
              <article
                key={index}
                className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-overflow-hidden tw-flex tw-flex-col hover:tw-shadow-xl hover:tw-shadow-slate-200/50 tw-transition-shadow"
              >
                <Link
                  href={post.id?.toString().startsWith("mock-") ? "#" : `/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                  className="tw-block tw-flex-1 tw-flex tw-flex-col group"
                >
                  <div className="tw-aspect-video tw-bg-slate-100 tw-relative tw-overflow-hidden">
                    {post.image_url ? (
                      <Image
                        src={post.image_url}
                        alt={post.image_caption || post.title}
                        fill
                        className="tw-object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div
                        className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-slate-200 tw-to-slate-300"
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="tw-p-6 tw-flex tw-flex-col tw-flex-1">
                    <h3 className="tw-font-display tw-font-bold tw-text-xl tw-text-slate-900 tw-mb-2 tw-leading-snug tw-line-clamp-2">
                      {post.title}
                    </h3>
                    {post.tags?.length > 0 && (
                      <ul className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-4 tw-list-none tw-pl-0">
                        {post.tags.map((tag, i) => (
                          <li
                            key={i}
                            className="tw-px-2.5 tw-py-1 tw-rounded-lg tw-bg-slate-100 tw-text-slate-600 tw-text-xs tw-font-medium"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="tw-mt-auto tw-flex tw-items-center tw-justify-between tw-gap-3">
                      <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-slate-500 tw-text-sm">
                        <FontAwesomeIcon icon={faCalendar} className="tw-w-3.5 tw-h-3.5" />
                        {post.createdAt}
                      </span>
                      <span className="tw-inline-flex tw-items-center tw-gap-1 tw-text-indigo-600 tw-text-sm tw-font-semibold group-hover:tw-gap-2 tw-transition-all">
                        Read more
                        <ArrowRight className="tw-w-4 tw-h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="tw-text-center tw-text-slate-600 tw-py-12">No blog posts yet.</p>
        )}
      </div>
    );
  }

  return (
    <section className={`tw-py-24 ${backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className={`tw-font-bold tw-text-3xl mb-4 text-center ${textColor}`}>
              Latest Blogs
            </h2>
          </div>
          <div className="col-lg-12">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {loading ? (
                  <LoadingState />
                ) : blog.length > 0 ? (
                  blogPost.map((post, index) => (
                    <div
                      key={index}
                      className={`card !tw-border-l-0 !tw-border-r-0 !tw-border-t-0 !tw-border-gray-200 !tw-rounded-none ${backgroundColor}`}
                      style={{ backgroundColor: theme === "white" ? "transparent" : "white" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body !tw-px-0 !tw-py-4 tw-flex tw-flex-col">
                            <h5 className="card-title mb-3">
                              <a
                                href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                className={textColor}
                              >
                                {post.title}
                              </a>
                            </h5>
                            <div
                              className={`tw-font-semibold tw-text-sm ${
                                theme === "white" ? "tw-text-gray-300" : "tw-text-gray-600"
                              }`}
                            >
                              Tags
                            </div>
                            <ul className="tw-w-full tw-inline-flex tw-flex-wrap tw-gap-2 tw-list-none tw-pl-0 mb-3">
                              {post.tags.map((tag, index) => (
                                <li
                                  key={index}
                                  className={`tw-bg-gray-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs ${textColor}`}
                                  style={{
                                    backgroundColor: theme === "white" ? "transparent" : "#f3f4f6",
                                    border: theme === "white" ? "1px solid white" : "none",
                                  }}
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                            <div className="tw-w-full mt-auto tw-flex tw-justify-between tw-items-center mb-2">
                              <a
                                className="btn btn-secondary"
                                href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                                style={{ cursor: "pointer", textDecoration: "none" }}
                              >
                                Read More
                              </a>
                              <div className="tw-bg-blue-100 tw-px-2 tw-py-1 tw-rounded-md tw-text-xs tw-gap-2 tw-inline-flex tw-items-center tw-text-blue-500/80">
                                <div>
                                  <FontAwesomeIcon icon={faCalendar} />
                                </div>
                                <div>{post.createdAt}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 text-end">
                          <a
                            href={`/blog/${post.id}/${post.slug.replace(/\s+/g, "-")}`}
                            style={{ cursor: "pointer", textDecoration: "none" }}
                            className="tw-inline-flex tw-py-4 tw-pl-4"
                          >
                            <Image
                              src={post.image_url}
                              alt={post.image_caption}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="tw-h-[200px] tw-w-full tw-object-contain"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No blog posts available</p>
                )}
              </div>
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
