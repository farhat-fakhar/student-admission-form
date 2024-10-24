import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  password: "",
  confirm_password: "",
  gender: "",
  program: "",
  file: null,
  dob: "",
  comments: "",
};

const Main = () => {
  const { errors, values, handleBlur, handleChange, handleSubmit, setFieldValue, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm();
    },
  });
console.log(values);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="title d-flex justify-content-center align-items-center">
              <h1>Application Form For Admission</h1>
            </div>
            <div className="basic_info">
              <form onSubmit={handleSubmit}>
                <Row>
                  {/* First Name */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="Enter Your First Name"
                      />
                    </div>
                    {errors.firstName && touched.firstName ? <p>{errors.firstName}</p> : null}
                  </Col>

                  {/* Last Name */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                    {errors.lastName && touched.lastName ? <p>{errors.lastName}</p> : null}
                  </Col>

                  {/* Email */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                    {errors.email && touched.email ? <p>{errors.email}</p> : null}
                  </Col>

                  {/* Phone Number */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="number">Phone Number</label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.number}
                        placeholder="Enter Your Phone Number (+92XXXXXXXXXX)"
                      />
                    </div>
                    {errors.number && touched.number ? <p>{errors.number}</p> : null}
                  </Col>

                  {/* Password */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter Your Password"
                      />
                    </div>
                    {errors.password && touched.password ? <p>{errors.password}</p> : null}
                  </Col>

                  {/* Confirm Password */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="confirm_password">Confirm Password</label>
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirm_password}
                        placeholder="Enter Confirm Password"
                      />
                    </div>
                    {errors.confirm_password && touched.confirm_password ? <p>{errors.confirm_password}</p> : null}
                  </Col>

                  {/* Gender */}
                  <Col lg={12}>
                    <div className="input">
                      <label>Gender</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.gender === "male"}
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.gender === "female"}
                          />
                          Female
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.gender === "other"}
                          />
                          Other
                        </label>
                      </div>
                    </div>
                    {errors.gender && touched.gender ? <p>{errors.gender}</p> : null}
                  </Col>

                  {/* Date of Birth */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                      />
                    </div>
                    {errors.dob && touched.dob ? <p>{errors.dob}</p> : null}
                  </Col>

                  {/* Program Selection */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="program">Choose Program</label>
                      <select
                        name="program"
                        id="program"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.program}
                      >
                        <option value="" label="Select Program" />
                        <option value="Bachelors">Bachelors</option>
                        <option value="Masters">Masters</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>
                    {errors.program && touched.program ? <p>{errors.program}</p> : null}
                  </Col>

                  {/* File Upload */}
                  <Col lg={6}>
                    <div className="input">
                      <label htmlFor="file">Upload Document</label>
                      <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                      />
                    </div>
                    {errors.file && touched.file ? <p>{errors.file}</p> : null}
                  </Col>

                  {/* Comments Section */}
                  <Col lg={12}>
                    <div className="input">
                      <label htmlFor="comments">Additional Comments</label>
                      <textarea
                        name="comments"
                        id="comments"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                        placeholder="Enter any additional comments here..."
                      />
                    </div>
                    {errors.comments && touched.comments ? <p>{errors.comments}</p> : null}
                  </Col>

                  {/* Submit Button */}
                  <Col lg={12}>
                    <div className="submit_btn">
                      <button type="submit">Submit</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 50px;
  .title {
    padding-top: 15px;
  }
  p {
    padding: 5px 0;
    margin: 0;
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightPurpul};
  }
  .basic_info {
    margin-top: 30px;
    padding: 30px 50px;
    color: ${({ theme }) => theme.colors.whiteColor};
    background-color: ${({ theme }) => theme.colors.darkPurpul};
    border-radius: 6px;
  }
  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    
    input,
    select,
    textarea {
      padding: 7px 15px;
      font-size: 17px;
      font-weight: 600;
      border: 2px solid ${({ theme }) => theme.colors.lightPurpul};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 4px;
      outline: none;
    }
    label {
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 6px;
    }
    
    .radio-group {
      display: flex;
      gap: 15px;
      label {
        display: flex;
        align-items: center;
        input {
          margin-right: 5px;
        }
      }
    }
  }
  .input select {
  padding: 10px;
  font-size: 17px;
  border-radius: 4px;
  background-color: transparent;
  transition: border-color 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.lightPurpul};
 
option{
  background-color:transparent ;
  color: ${({ theme }) => theme.colors.lightPurpul};
  font-size: 17px;
  font-weight: 700;

}
}

.input select:focus {
  border: 2px solid ${({ theme }) => theme.colors.lightPurpul};
  outline: none;
}
  .submit_btn {
    button {
      width: 100%;
      padding: 10px;
      border: none;
      background-color: ${({ theme }) => theme.colors.blueColor};
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${({ theme }) => theme.colors.lightBlue};
      }
    }
  }
`;

export default Main;
