export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About This Website
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    This website uses the
                    <span className="font-semibold text-indigo-600"> REST Countries API {" "}
                    </span> 
                    to provide information about countries around the world. You can explore details such as country names, capitals, regions, populations, and flags.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Explore our data and discover interesting facts about different countries. Whether you're a student, traveler, or just curious, this website is designed to help you learn more about the world we live in.
                </p>
                <p className="text-lg text-gray-700 leading relaxed"> Our goal is to build a fully responsive and modern web application using the latest technologies, including React Router V7 for seamleass routing and Tailwind CSS for a styling and responsive user interface.
                </p>
            </div>
        </div>
    )

}