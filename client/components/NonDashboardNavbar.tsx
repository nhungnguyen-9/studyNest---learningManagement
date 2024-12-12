'use client'

import { Bell, BookOpen } from "lucide-react"
import Link from "next/link"

export const NonDashboardNavbar = () => {
    return (
        <nav className="nondashboard-navbar">
            <div className="nondashboard-navbar__container">
                <div className="nondashboard-navbar__search">
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
            </div>
            <div className="nondashboard-navbar__actions">
                <button className="nondashboard-navbar__notification-button">
                    <span className="nondashboard-navbar__notification-indicator"></span>
                    <Bell className="nondashboard-navbar__notification-icon" />
                </button>

                {/* sign in button */}

            </div>
        </nav>
    )
}
