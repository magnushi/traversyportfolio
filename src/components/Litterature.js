import React, { useEffect, useState } from "react";
import sanityClient from "../client.js"

export default function Litterature() {
    const [litteratureData, setLitteratureData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "litterature"]{
                title,
                author,
                description,
                litteratureType,
                link
            }`
        )
        .then((data) => setLitteratureData(data))
        .catch(console.error);
    }, []);

    return (
        <main className ="bg-green-100 min-h-screen p-12">
            <section className="contrainer mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Reading List</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Litterature I recommend</h2>
                <section className="grid grid-cols-2 gap-8">
                    {litteratureData && litteratureData.map((litterature, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                href={litterature.link}
                                alt={litterature.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                >{litterature.title}
                                </a>
                            </h3>
                            <div className="text-grey-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Author</strong>:
                                    {litterature.author}
                                </span>                            
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {litterature.litteratureType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {litterature.description}
                                </p>
                                <a href={litterature.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover_underline hover:text-red-400"
                                >
                                    Read{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
}