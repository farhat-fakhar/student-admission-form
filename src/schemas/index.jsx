import * as Yup from "yup";

export const signUpSchema = Yup.object({
  // First Name Validation
  firstName: Yup.string()
    .min(2, "First name should be at least 2 characters")
    .max(15, "First name should not exceed 15 characters")
    .required("Enter your first name"),

  // Last Name Validation
  lastName: Yup.string()
    .min(2, "Last name should be at least 2 characters")
    .max(15, "Last name should not exceed 15 characters")
    .required("Enter your last name"),

  // Phone Number Validation (Pakistan-specific format)
  number: Yup.string()
    .matches(/^\+92\d{10}$/, "Phone number must be in the format +92XXXXXXXXXX")
    .required("Enter your phone number"),

  // Email Validation
  email: Yup.string()
    .email("Invalid email address")
    .required("Enter your email"),

  // Password Validation
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
    .required("Enter your password"),

  // Confirm Password Validation
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),

  // Gender Validation (Dropdown)
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Please select a valid gender")
    .required("Please select your gender"),

  // Program Selection (Dropdown)
  program: Yup.string()
    .oneOf(["Bachelors", "Masters", "PhD"], "Please select a valid program")
    .required("Please select your program"),

  // Date of Birth Validation
  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Enter your date of birth"),

  // File Upload Validation (e.g., profile picture or document upload)
  file: Yup.mixed()
    .required("Please upload a file")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      value => value && value.size <= 5242880 // 5MB
    )
    .test(
      "fileType",
      "Unsupported file format. Only jpg, jpeg, png, pdf are allowed.",
      value => value && ["image/jpg", "image/jpeg", "image/png", "application/pdf"].includes(value.type)
    ),

  // Comments Validation (Optional text box)
  comments: Yup.string()
    .max(500, "Comments cannot exceed 500 characters")
    .optional()
});
