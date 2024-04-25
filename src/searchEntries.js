import { useState, useEffect } from "react";

function SearchEntries({ EntryList }) {
    const [searchEntries, setSearchEntries] = useState('');
    const [entryResult, setEntryResult] = useState([]);

    useEffect(() => {
        // Function to handle search when searchEntries changes
        const handleSearch = () => {
            const filteredEntry = EntryList.filter((entry) =>
                entry.title.toLowerCase().includes(searchEntries.toLowerCase())
            );
            setEntryResult(filteredEntry);
        };

        // Execute handleSearch when the component mounts and searchEntries changes
        handleSearch();
    }, [searchEntries, EntryList]);

    const handleClick = () => {
        // Call handleSearch when the button is clicked
        // handleSearch();
    };

    return (
        <div>
            {SearchEntries}
            <input
                type="text"
                value={searchEntries}
                onChange={(e) => setSearchEntries(e.target.value)}
            />
           
            <button onClick={handleClick}>Search</button>
            
            {EntryList}
            <div>
                {entryResult.map((entry, index) => (
                    <div key={index}>
                        <p>{entry.title}</p>
                        <p>{entry.date} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchEntries;
