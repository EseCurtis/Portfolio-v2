import { Download, Mail } from "lucide-react";
import Link from "next/link";

import { contactsUrl } from "@/src/utils/shared/constants.util.shared";
import { ThemeSwitch } from "../shared/common/theme-switch.shared";

export function NavbarSection(): React.JSX.Element {
  return (
    <header className="grid grid-cols-1 gap-8 border-b border-[var(--line)] pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <h1 className="text-4xl font-black tracking-[-.06em] sm:text-5xl">
          Ese Curtis
        </h1>
        <p className="mt-2 text-xs font-bold tracking-[.12em] text-[var(--muted)]">
          SOFTWARE ENGINEER &amp; PRODUCT BUILDER
        </p>
        <p className="mt-2 text-xs text-[var(--faint)]">aka EseSzn</p>
      </div>

      <div className="flex flex-col items-start gap-1.5 text-xs text-[var(--muted)] sm:items-end">
        <Link className="resume-link" href={contactsUrl.phone}>
          +234 813 604 6862
        </Link>
        <Link className="resume-link" href={contactsUrl.email}>
          curtisese52@gmail.com
        </Link>
        <span>Lagos, Nigeria · Remote</span>
        <Link className="resume-link" href={contactsUrl.github} target="_blank">
          github.com/EseCurtis
        </Link>

        <div className="screen-actions mt-4 flex flex-wrap items-center gap-2 sm:justify-end">
          <a
            className="primary-action hover:bg-[var(--accent)]"
            download
            href="/ese-curtis-resume.pdf"
          >
            <Download aria-hidden="true" size={15} />
            Download PDF
          </a>
          <Link className="secondary-action" href={contactsUrl.email}>
            <Mail aria-hidden="true" size={15} />
            Email
          </Link>
    <ThemeSwitch/>
        </div>
      </div>
    </header>
  );
}
