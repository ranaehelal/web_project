// The provided account data
const accounts = [
    { username: "Ahmed", email: "Ahmed@gmail.com", password: "1234@Ahmed", isAdmin: false },
    { username: "Sarah", email: "sarah@gmail.com", password: "5678@Sarah", isAdmin: false },
    { username: "John", email: "john@gmail.com", password: "abcd@John1234", isAdmin: true },
    { username: "Emily", email: "emily@gmail.com", password: "1234@Emily", isAdmin: false },
    { username: "Robert", email: "robert@gmail.com", password: "7890@Robert", isAdmin: true }
  ];
  
  // Function to save account data to local storage
  function saveAccountsToLocalStorage(newAccounts) {
    // Retrieve the existing account collection from local storage
    const existingAccountsString = localStorage.getItem('accountCollection');
    const existingAccounts = existingAccountsString ? JSON.parse(existingAccountsString) : [];
  
    // Append the new accounts to the existing collection
    const updatedAccounts = existingAccounts.concat(newAccounts);
  
    // Store the updated collection in local storage
    localStorage.setItem('accountCollection', JSON.stringify(updatedAccounts));
  
    console.log('Accounts added to local storage successfully!');
  }
  
  // Add the provided accounts to local storage
  saveAccountsToLocalStorage(accounts);  // Save the provided account data to local storage
  