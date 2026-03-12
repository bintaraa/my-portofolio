import clsx from "clsx";

interface BreaklineProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed";
}

const Breakline = ({
    className,
    orientation = "horizontal",
    variant = "solid",
    ...props
}: BreaklineProps) => {
    return (
        <div
            className={clsx(
                "border-neutral-300 dark:border-neutral-700",

                orientation === "horizontal" && "w-full border-t my-4",
                orientation === "vertical" && "h-full border-l mx-4",

                variant === "dashed" && "border-dashed",
                variant === "solid" && "border-solid",

                className
            )}
            {...props}
        />
    );
};

export default Breakline;