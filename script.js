// JavaScript code for the Amazon-like website

// Function to handle search input
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchValue = searchInput.value;
    
    // Perform search functionality here
    console.log('Searching for:', searchValue);
  }
  
  // Event listener for search icon click
  const searchIcon = document.querySelector('.search-icon');
  searchIcon.addEventListener('click', handleSearch);
  
  // Event listener for Enter key press in search input
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
  
  // Function to handle clicking on "Click here to go to amazon.com" link
  function goToAmazon() {
    // Perform action to redirect to amazon.com
    console.log('Redirecting to amazon.com');
  }
  
  // Event listener for "Click here to go to amazon.com" link
  const amazonLink = document.querySelector('.hero-msg a');
  amazonLink.addEventListener('click', goToAmazon);
  
  // Additional JavaScript code can be added here for further functionality
  