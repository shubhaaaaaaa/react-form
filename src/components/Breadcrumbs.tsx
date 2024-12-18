import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Breadcrumbs = () => {
    const location = useLocation()
    
    let currentLink = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += ` /${crumb}`
            
            return (
                <div className="crumb text-white text-center" key={crumb}>
                    <Link to='/'>home/ </Link> <span className="cursor-pointer">{crumb}</span>
                </div>
            )
        })

    
    return (
        <div>{crumbs}</div>
  )
}
