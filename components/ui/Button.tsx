type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-700",
  secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700",
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={`rounded-xl px-5 py-3 font-medium transition-colors ${variants[variant]}`}
      type="button"
    >
      {children}
    </button>
  );
}
