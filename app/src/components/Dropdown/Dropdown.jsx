function Dropdown() {
    return (
        <div>
        <button
            onClick="toggleDropdown()">
        <span id="dropdown"></span>
        </button>
            <div id="dropdownMenu" className="dropdownMenu">
                <button>
                    Option 1
                </button>
                <button>
                    Option 2
                </button>
                <button>
                    Option 3
                </button>
    </div>
        </div>

    );
}

export default Dropdown