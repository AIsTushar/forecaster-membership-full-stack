import SideNav from "@/components/profile/SideNav";

export default function layout({ children }) {
  return (
    <div className="min-h-screen flex ">
      <div className="px-12">
        <SideNav />
      </div>

      <div className="border-b-[1px] border-white/10 w-full pr-16">
        {children}
      </div>
    </div>
  );
}
