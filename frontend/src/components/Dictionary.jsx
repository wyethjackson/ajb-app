import { useEffect, useState } from 'react';
import api from '../apiClient';

const Dictionary = () => {
    const [terms, setTerms] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTerms();
    }, []);

    const fetchTerms = async (query = '') => {
        const endpoint = query ? `/dictionary/search?q=${query}` : '/dictionary';
        const res = await api.get(endpoint);
        setTerms(res.data);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchTerms(searchQuery);
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dictionary Terms</h1>

            <form onSubmit={handleSearch} className="flex mb-6">
                <input
                    type="text"
                    placeholder="Search terms..."
                    className="border rounded-l-md px-4 py-2 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                    Search
                </button>
                <button
                    type="button"
                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    onClick={() => {
                        setSearchQuery('');
                        fetchTerms();
                    }}
                >
                    Reset
                </button>
            </form>

            {terms.length > 0 ? (
                terms.map(term => (
                    <div key={term.id} className="mb-4 p-6 bg-white shadow-md rounded-md">
                        <h2 className="text-2xl font-semibold">
                            {term.word_en} ({term.word_sanskrit})
                        </h2>
                        {term.pronunciation && <p className="text-gray-500 italic">Pronunciation: {term.pronunciation}</p>}
                        <p className="mt-2">{term.definition}</p>
                        {term.examples && <p className="mt-2 italic text-gray-700">Example: {term.examples}</p>}
                        {term.audio_url && (
                            <audio controls src={term.audio_url} className="mt-3"></audio>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No matching terms found.</p>
            )}
        </div>
    );
};

export default Dictionary;
