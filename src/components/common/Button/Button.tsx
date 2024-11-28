interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-3xl font-bold text-lg transition-colors";
  const variants = {
    primary: "bg-primary/40 text-white hover:bg-primary/10 ",
    secondary: "bg-secondary text-gray-800 hover:bg-secondary/90",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
