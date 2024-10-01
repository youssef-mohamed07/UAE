import { createContext, useContext, useEffect, useRef, useState } from "react";

const AccordionContext = createContext();

/* eslint-disable react/prop-types */
export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export function AccordionItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;

  const ref = useRef();

  return (
    <li
      {...props}
      className="border-[1px] font-[800] rounded-md px-2 py-4 mb-4 md:w-[80%] border-white"
    >
      <header role="button" onClick={() => setSelected(open ? null : value)}>
        {trigger}
      </header>
      <div
        className="overflow-hidden"
        // className={`overflow-hidden transition-all duration-300 ${
        //   open ? "max-h-[100px]" : "max-h-0"
        // }`}
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-2  border-t-[1px] mt-2 border-white" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
