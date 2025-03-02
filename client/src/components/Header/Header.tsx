import {
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <a href="/">
          <div className="flex items-center gap-2">
            <img src="/tao.png" className="h-8" alt="logo" />
            <span className="font-semibold text-white text-sm">
              The Anon Operation
            </span>
          </div>
        </a>
        <a
          href="/settings"
          className="text-neutral-300 inline-flex gap-4 items-center"
        >
          <button>
            <QuestionMarkCircleIcon className="h-5 w-5" />
          </button>
          <button>
            <Cog6ToothIcon className="h-5 w-5" />
          </button>
        </a>
      </div>
    </header>
  );
}
