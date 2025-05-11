function SearchBar( { 
    value, 
    onChange, 
    onSubmit,
    searchLabel = "What word are you looking up, today?",
    buttonLabel = "Look Up"
 }) {
    const inputName = "search";
    return (
        <form 
        role = "form"
        onSubmit={e => { e.preventDefault(); onSubmit(); }}>
            <label htmlFor={inputName}>{searchLabel}</label>
            <input 
                type="text"
                name={inputName}
                id={inputName}
                value={value}
                onChange={e => onChange(e.target.value)}
                aria-label="search-input"
            />
            {/* Use aria-label if using an icon instead of text as button label */}
            <button type="submit">{buttonLabel}</button> 
        </form>
    );
}

export default SearchBar;