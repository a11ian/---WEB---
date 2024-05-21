document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;
    let messages = [];

    const studentName = document.getElementById('studentName');
    const birthDate = document.getElementById('birthDate');
    const gender = document.getElementById('gender');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const postalCode = document.getElementById('postalCode');
    const email = document.getElementById('email');
    const mobileNumber = document.getElementById('mobileNumber');
    const phoneNumber = document.getElementById('phoneNumber');
    const workNumber = document.getElementById('workNumber');
    const company = document.getElementById('company');
    const courses = document.getElementById('courses');
    const comments = document.getElementById('comments');

    if (studentName.value.trim() === '' || !/^[a-zA-Z ]{1,20}$/.test(studentName.value)) {
        valid = false;
        messages.push('Student Name is required, should be alphabets only, and up to 20 characters.');
    }

    if (birthDate.value.trim() === '' || !/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{4})$/.test(birthDate.value)) {
        valid = false;
        messages.push('Birth Date is required and should be in MM/DD/YYYY format.');
    } else {
        const birthYear = parseInt(birthDate.value.split('/')[2], 10);
        const currentYear = new Date().getFullYear();
        if (birthYear < currentYear - 50 || birthYear > currentYear) {
            valid = false;
            messages.push('Birth Date year should be within the last 50 years.');
        }
    }

    if (gender.value.trim() === '') {
        valid = false;
        messages.push('Gender is required.');
    }

    if (address.value.trim() === '' || address.value.length > 250) {
        valid = false;
        messages.push('Address is required and should be up to 250 characters.');
    }

    if (city.value.trim() === '' || city.value.length > 50) {
        valid = false;
        messages.push('City is required and should be up to 50 characters.');
    }

    if (state.value.trim() === '' || state.value.length > 50) {
        valid = false;
        messages.push('State is required and should be up to 50 characters.');
    }

    if (postalCode.value.trim() === '' || !/^\d{5}$/.test(postalCode.value)) {
        valid = false;
        messages.push('Postal Code is required and should be exactly 5 digits.');
    }

    if (email.value.trim() === '' || email.value.length > 250 || !/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        messages.push('Email is required, should be up to 250 characters, and in a valid email format.');
    }

    if (mobileNumber.value.trim() === '' || !/^\d{12}$/.test(mobileNumber.value)) {
        valid = false;
        messages.push('Mobile Number is required and should be exactly 12 digits.');
    }

    if (phoneNumber.value.trim() !== '' && !/^\d{12}$/.test(phoneNumber.value)) {
        valid = false;
        messages.push('Phone Number should be exactly 12 digits if provided.');
    }

    if (workNumber.value.trim() !== '' && !/^\d{12}$/.test(workNumber.value)) {
        valid = false;
        messages.push('Work Number should be exactly 12 digits if provided.');
    }

    if (company.value.trim() === '' || company.value.length > 150) {
        valid = false;
        messages.push('Company is required and should be up to 150 characters.');
    }

    if (courses.value.trim() === '') {
        valid = false;
        messages.push('Courses selection is required.');
    }

    if (comments.value.trim() !== '' && comments.value.length > 500) {
        valid = false;
        messages.push('Additional Comments should be up to 500 characters if provided.');
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Optionally, you can actually submit the form here or reset it
        document.getElementById('registrationForm').reset();
    } else {
        alert(messages.join('\n'));
    }
});

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('registrationForm').reset();
});
