import { ReactNode } from "react";

interface AddProjectButtonProps {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

export default function AddProjectButton({
  children,
  className,
  onClick,
}: AddProjectButtonProps) {
  return (
    <button
      className={
        className +
        " ml-3 grow shrink basis-0 h-12 rounded-lg cursor-pointer relative z-10 transition flex items-center justify-center active:scale-90"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
