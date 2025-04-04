import { LogOut } from "lucide-react"

export function NavUser({ user }: { user: { firstName: string; lastName: string } }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
        <div className="flex flex-col text-sm text-gray-700">
          <span>{user.firstName || "Lorem"}</span>
          <span>{user.lastName || "Lorem"}</span>
        </div>
      </div>
      <LogOut className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer" />
    </div>
  )
}