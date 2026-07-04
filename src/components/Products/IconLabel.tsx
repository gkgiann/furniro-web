import clsx from "clsx";

export function IconLabel({ label }: { label: "new" | number }) {
  return (
    <div
      className={clsx(
        "absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full leading-[150%] font-medium text-white",
        {
          "bg-green-new": label === "new",
          "bg-red-discount": typeof label === "number",
        },
      )}
    >
      {label === "new" ? "New" : `-${label}%`}
    </div>
  );
}
