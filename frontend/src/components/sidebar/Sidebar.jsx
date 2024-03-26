import { SearchContextProvider } from "../../context/SearchContext";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchContextProvider>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </SearchContextProvider>
    </div>
  );
};

export default Sidebar;
