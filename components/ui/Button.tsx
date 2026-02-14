type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600 transition-all shadow-sm hover:shadow-md",
  secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300",
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
