import Logo from "components/wrapper/Navbar/Logo";


const ReportNavbar = ({ entry }) => {
    return (
      <div className="w-full h-[70px] bg-white sticky top-0  z-30  pt-md">
        <div className="responsive-container flex justify-between">
         <Logo/>
          <div className="text-white">Menu</div>
         
        </div>
      </div>
    );
  };

export default ReportNavbar;