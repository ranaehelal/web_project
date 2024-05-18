document.addEventListener('DOMContentLoaded', function () {
    // Attach an event listener to the Sign-Up form
    const signUpForm = document.querySelector('.signup-form');
  
    signUpForm.addEventListener('submit', function (event) {
      event.preventDefault();  // Prevent default form submission
  
      // Retrieve the input values
      const username = document.getElementById('username-input').value;
      const email = document.getElementById('email-group').querySelector('input').value;
      const password = document.getElementById('password-input').value;
      const confirmPassword = document.getElementById('confirm-password-input').value;
  
      // Validate the form inputs
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      // Retrieve the existing account collection from local storage
      const accountsString = localStorage.getItem('accountCollection');
      const existingAccounts = accountsString ? JSON.parse(accountsString) : [];
  
      // Check for existing usernames and emails
      const existingUsername = existingAccounts.some(account => account.username === username);
      const existingEmail = existingAccounts.some(account => account.email === email);
  
      if (existingUsername) {
        alert("Username already exists. Please choose a different one.");
        return;
      }
  
      if (existingEmail) {
        alert("Email already registered. Please use a different email.");
        return;
      }
  
      // Determine if the form was submitted as admin or regular user
      const submitAsAdmin = event.submitter.formAction.includes('admin');
  
      // Create a new account object
      const newAccount = {
        username,
        email,
        password,  // Note: Storing passwords in plain text is insecure
        isAdmin: submitAsAdmin  // Set isAdmin based on submission type
      };
  
      // Add the new account to the collection and store in local storage
      existingAccounts.push(newAccount);
      localStorage.setItem('accountCollection', JSON.stringify(existingAccounts));
  
      console.log("Account created successfully!");
  
      // Redirect to the appropriate page based on submission type
      const redirectUrl = submitAsAdmin ? '{% url \'admin_HomePage\' %}' : '{% url \'user\' %}';  // Admin or user
      window.location.href = redirectUrl;  // Redirect to the appropriate page
    });
  });
  