import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export async function clientLoader() {
    const rest = await fetch("https://restcountries.com/v3.1/all");
    const data = await rest.json();
    return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
    const [search, setSearch] = useState<string>("");
    const [region, setRegion] = useState<string>("");
    
    const filteredCountries = loaderData.filter((country: any) => {
        const matchesRegion =
            !region ||
            country.region.toLowerCase() === region.toLowerCase();
        const matchesSearch =
            !search ||
            country.name.common.toLowerCase().includes(search.toLowerCase());
        return matchesSearch && matchesRegion;
    });
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900"> Countries </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6"> 
                <input 
                    type="text"
                    placeholder="Search by name..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
                />
                <select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value)}
                    className="border border-gray-399 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"    
                >
                    <option value="">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            {filteredCountries.length === 0 ? (
                <div> No countries match your filters.</div>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {" "}
                    {filteredCountries.map((country: any, key: number) => (
                        <li 
                            key={key}
                            className="bg-white border border-gray-299 rounded-xl p-4 shadow hover:shadow-lg transition"   
                        >
                            <Link 
                            to={`/countries/${country.name.common}`}
                            className="text-indigo-600 hover:underline text-lg font-semibold"
                            > 
                            {" "}
                            {country.name.common} 
                            </Link>
                            <div className="text-gray-600 text-sm mt-1">
                                Region: {country.region} | Population: {country.population}
                            </div>
                        </li>
                    ))}
                    
                </ul>
            )}
        </div>
    )

}