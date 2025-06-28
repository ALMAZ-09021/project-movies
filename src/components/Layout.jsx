import {Link, Outlet, useLocation} from 'react-router-dom'
import {useMemo} from "react";

export function Layout(){
    const {pathname} = useLocation()
    const isHomePage = useMemo(()=> pathname==='/',[pathname])

    return (
        <div>
            {!isHomePage && (
                <header className="mb-10 flex items-center justify-between">
                    <Link to="/">
                    <img
                    src="/netflix.png"
                    alt="Netflix"
                    className="h-8 w-auto"
                    />
                     </Link>
                </header>
            )}
            <Outlet/>
    </div>
    )
}