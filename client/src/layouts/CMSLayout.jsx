import { Outlet } from "react-router-dom"
import Sidebar from "../components/cms/Sidebar"



const CMSLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default CMSLayout