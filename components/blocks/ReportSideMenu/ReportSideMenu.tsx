import classNames from "classnames";

const ReportSideMenu = ({ links, activeSection }) => {
 
  return (
    <aside className="bg-gray-100 fixed hidden md:block w-[300px] z-1 right-[10%] top-[20%] p-4">
      <ul>
        <span className="font-bold">On this page:</span>
        {links.map((link, index) => {
           let header = link.text;
           let isActive = activeSection === header;
           const style = classNames({
            "font-bold":isActive,
          });
         return (
          <li key={`report_side_menu_${index}`} className="pt-xl">
            <a
              className={`text-sage-dark hover:text-sage-base ${style}`}
              href={`#${link.id}`}
            >
              {link.text}
            </a>
          </li>
        )})}
      </ul>
    </aside>
  );
};

export default ReportSideMenu;
