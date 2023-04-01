import classNames from "classnames";

type Props = {
  placeholder?: string;
  cols?: number;
  rows?: number;
  className?: string;
};

export function Textarea({ placeholder, cols, rows, className }: Props) {
  return (
    <textarea
      className={classNames(
        "bg-transparent border border-[rgba(255,255,255,.3)] w-full rounded-lg p-4 text-white font-lato font-medium",
        className
      )}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
    ></textarea>
  );
}
