export default function ErrorBlock({ msg }) {
  return (
    <p className="tw-block tw-text-red-400 tw-text-sm tw-mt-2" role="alert">
      {msg}
    </p>
  );
}