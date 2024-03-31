export const Validate = (email, password,name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
  if (!isEmailValid) return "Email is not a valid email";
  if (!isPasswordValid)
    return "Password is not a valid password It Should contain one Upper Case, one Lower Case, one Digit, Should be 8 Characters Long, atleast One digit";
//   if (!isNameValid)
//     return "The username must start with a letter (either uppercase or lowercase), can consist of letters (uppercase or lowercase), digits, or underscores, and must be between 8 and 30 characters long.";
  return null;
};
