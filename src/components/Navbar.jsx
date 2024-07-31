import React from 'react'

const Navbar = () => {
    return (
        <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-transparent py-2 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-center">
                <div>
                    <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
                        <img
                            className="mr-3 h-6 sm:h-9"
                            src="https://icons.veryicon.com/png/o/business/black-blue-linear-business-icon/password-33.png"
                            alt="Logo"
                            loading="lazy" />
                        <span className="text-white font-bold underline text-2xl">PassWala</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
