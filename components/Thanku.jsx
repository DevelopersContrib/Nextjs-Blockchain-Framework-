const Thanku = ({ domain }) => {
  const follow_link = "https://www.contrib.com/signup/follow/" + domain;
  return (
    <div className="tw-text-center">
      <h3 className="tw-font-display tw-font-bold tw-text-xl tw-text-slate-900 tw-mb-2">
        Thanks, your spot is reserved!
      </h3>
      <p className="tw-text-slate-600 tw-mb-4">
        Share {domain} with your friends to move up in line and reserve your username.
      </p>
      <a
        href={follow_link}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-inline-flex tw-items-center tw-gap-2 tw-py-3 tw-px-6 tw-rounded-xl tw-bg-indigo-600 hover:tw-bg-indigo-500 tw-text-white tw-font-semibold tw-text-sm tw-no-underline tw-transition-colors"
      >
        Continue to Follow {domain} Brand
      </a>
    </div>
  );
};
export default Thanku;