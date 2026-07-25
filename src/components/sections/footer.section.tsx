export function FooterSection(): React.JSX.Element {
  return <footer className="flex items-center justify-between border-t border-[var(--line)] pt-7 font-mono text-[10px] tracking-[.08em] text-[var(--faint)]"><span>Ese Curtis · Résumé</span><span>{new Date().getFullYear()}</span></footer>;
}
