import React, { useState, useEffect } from "react";
import sanityClient from "../client.js"

export default function Book() {
    const [bookData, setBook] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "litterature"]{
                title,
                author,
                description
            }`)
            .then((data) => setBook(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Reading list</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Books and other litterature I find worthwhile</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {bookData && bookData.map((book, index) => (
                    <article>
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                            <h3 className="text-greay-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bc-opacity-75 rounded">{book.title}</h3>
                        </span>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}