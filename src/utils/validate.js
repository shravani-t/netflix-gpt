export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email ID is not valid";
  }

  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};

export const checkValidSignupData = (email, password, fullName) => {
  const validIdPassword = checkValidData(email, password);
  if (validIdPassword === null) {
    const isFullNameValid =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        fullName
      );

    if (!isFullNameValid) {
      return "Full Name is not valid";
    }
    return null;
  }
  return validIdPassword;
};
