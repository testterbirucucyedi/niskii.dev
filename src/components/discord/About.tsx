export default function About() {
  return (
    <div className="mb-3">
      <h2 className="font-bold text-xs text-slate-300 leading-4 mb-2 uppercase">About Me</h2>
      <div className="whitespace-pre-line text-normal">
        {'he/they, brazilian\n\n'}

        <a href="/" className="text-link hover:underline underline-offset-2">
          https://niskii.dev/
        </a>
      </div>
    </div>
  );
}
