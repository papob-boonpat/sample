import { createContext, useContext, useState } from "react";
type Context = {
  value: string;
  setValue: (val: string) => void;
};
const FirstContext = createContext<Context>({
  value: "title",
  setValue: () => {},
});

const FirstProvider = (props: React.PropsWithChildren) => {
  const [value, setValue] = useState("title");
  return (
    <FirstContext.Provider value={{ value, setValue }}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FirstProvider;
export const useFirst = () => useContext(FirstContext);
