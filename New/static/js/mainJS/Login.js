document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    const username = document.getElementById('user_name').value;
    const password = document.getElementById('password').value;
    const isAdminCheckbox = document.getElementById('check');  // Check if "Admin?" checkbox is selected

    // Retrieve existing account data from local storage
    const accountsString = localStorage.getItem('accountCollection');
    const existingAccounts = accountsString ? JSON.parse(accountsString) : [];

    // Check if the provided username and password match any account in the collection
    const matchingAccount = existingAccounts.find(account => 
      account.username === username && account.password === password
    );

    if (matchingAccount) {
      if (matchingAccount.isAdmin) {
        // The account has admin privileges
        if (isAdminCheckbox.checked) {
          // Successful admin login
          window.location.href = '/admino/';  // Redirect to admin page
          console.log("Admin login successful!");
        } else {
          // Admins cannot log in as regular users
          alert("Admins cannot log in as regular users.");
          console.log("Admin login denied.");
        }
      } else {
        // Successful login as a regular user
        if (!isAdminCheckbox.checked) {
          window.location.href = './User';  // Redirect to user page
          console.log("User login successful!");
        } else {
          // Regular users cannot log in as admin
          alert("Only admins can log in with admin privileges.");
          console.log("User login denied.");
        }
      }
    } else {
      // Incorrect login credentials
      alert("Invalid username or password. Please try again.");
      console.log("Login failed.");
    }
  });
});
