
import { Link } from 'react-router'

 function Home() {
    return (
         <div className="<div className= w-full min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <aside className="relative overflow-hidden rounded-lg mx-2 sm:mx-16 sm:py-16">

                {/* Text and Button */}
                <div className="relative z-10 max-w-screen-xl px-4 py-16 sm:py-24 mx-auto sm:px-6 lg:px-8">

                    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">
                                Lorem Ipsum
                            </span>
                        </h2>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>

                            Download now
                        </Link>

                    </div>
                </div>

                {/* First Image */}
                <div className="absolute inset-y-0 left-0 flex items-center pt-12 sm:pt-0">
                    <img
                        className="w-64 sm:w-96 object-contain"
                        src="https://cdn.pixabay.com/photo/2022/02/27/17/03/stones-7037638_1280.jpg"
                        alt="Balanced stones"
                    />
                </div>

            </aside>

            {/* Second Image */}
            <div className="grid place-items-center mt-12 sm:mt-20">
                <img
                    className="w-48 sm:w-96"
                    src="https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg"
                    alt="Clownfish"
                />
            </div>

            {/* Final Heading */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Lorem Ipsum Yojo
            </h1>

        </div>
    )
}
export default Home