import clsx from "clsx";

export function IconLabel({ label }: { label: "new" | number }) {
  return (
    <div
      className={clsx(
        "absolute top-6 right-6 w-12 h-12 flex justify-center items-center text-white rounded-full font-medium leading-[150%]",
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
