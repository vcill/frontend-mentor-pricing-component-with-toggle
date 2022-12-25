import { useState } from "react";

export const Toggle = ({ labelLeft, labelRight, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <div className="flex flex-row text-lightGrayishBlue my-10">
      <p className="mx-4">{labelLeft}</p>
      <label className="relative w-[60px] h-[30px]">
        <input
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
          className="hidden"
        />
        <span
          className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer bg-gradient-to-r 
        from-primaryStart text-[15px] to-primaryEnd rounded-[30px] transition hover:from-primaryStart hover:to-primaryStart"
        />
      </label>
      <p className="mx-4">{labelRight}</p>
    </div>
  );
};
