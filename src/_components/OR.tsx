import React from "react";
import cn from "classnames";

const OR = ({ color }: { color?: string }) => {
  return (
    <div>
      <div
        className={cn(
          `flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300`,
          {
            "before:border-red-300 after:border-red-300": color === "red",
          }
        )}
      >
        <p className="text-center font-semibold mx-4">OR</p>
      </div>
    </div>
  );
};

export default OR;
