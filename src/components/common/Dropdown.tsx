import React, { cloneElement, useRef, useState } from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";

interface Props {
  trigger: (open: boolean) => React.ReactElement;
  menu: React.ReactElement[];
}

const Dropdown: React.FC<Props> = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClickOutside = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative" ref={ref}>
      <div onClick={handleOpen}>{trigger(open)}</div>
      {open ? (
        <ul className="absolute z-30 right-0 top-full divide-y divide-[rgba(255,255,255,0.15)] shadow-xl text-sm">
          {menu.map((menuItem, index) => (
            <li
              key={index}
              className="whitespace-nowrap py-2 px-6 bg-gray text-white hover:underline"
            >
              {cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
