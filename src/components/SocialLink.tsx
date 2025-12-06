export const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      <svg className="w-6 h-6">{icon}</svg>
    </a>
  );
};
