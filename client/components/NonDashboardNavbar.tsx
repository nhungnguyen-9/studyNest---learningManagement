'use client'

import { BookOpen } from "lucide-react"
import Link from "next/link"

export const NonDashboardNavbar = () => {
    return (
        <nav className="nondashboard-navbar">
            <div className="nondashboard-navbar__container">
                <Link href='/' className="nondashboard-navbar__brand">
                    STUDY NEST
                </Link>
                <div className="flex items-center gap-4">
                    <div className="nondashboard-navbar__search-cont group">
                        <Link href='/search' className="nondashboard-navbar__search-input">
                            <span className="hidden sm:inline">
                                Tìm kiếm khóa học
                            </span>
                        </Link>
                        <BookOpen
                            className="nondashboard-navbar__search-icon"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
