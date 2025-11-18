module.exports = {
  validateEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  validatePassword: (password) => {
    return password.length >= 6;
  },

  validateListingData: (data) => {
    const { title, description, price, location } = data;
    return (
      title && title.length > 0 &&
      description && description.length > 0 &&
      price && !isNaN(price) && price > 0 &&
      location && location.length > 0
    );
  },

  validateUserRegistration: (user) => {
    const { email, password } = user;
    return this.validateEmail(email) && this.validatePassword(password);
  }
};