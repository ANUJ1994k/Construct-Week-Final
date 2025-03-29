import React, { useState } from "react";
import { Box, Container, Image, Input, Button, Text, Stack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import "./LoginSignup.css";


// API configuration - replace this URL with your actual deployment URL
const API_BASE_URL = "https://backend-server-side.onrender.com/api";

const LoginSignup = () => {
  const [value, setValue] = useState("first");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [interestedIn, setInterestedIn] = useState("MEN");
  // Adding new fields required by your backend schema
  const [dob, setDob] = useState("");

  // Form errors
  const [errors, setErrors] = useState({});

  // Handle signup submission
  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    // Add validation for new required fields
    if (!dob) newErrors.dob = "Date of Birth is required";
    if (!interestedIn) newErrors.interestedIn = "Please select your interest";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Create full name from first and last name
      const name = `${firstName} ${lastName}`;

      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, // Combined name as per your schema
          email,
          password,
          DOB: dob, // Matching the exact field name from your schema
          interestedIn // Using the exact field name from your schema
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Account created successfully!");

      // Redirect to dashboard or home page
      window.location.href = "/Home";

    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");

      // Redirect to dashboard or home page
      window.location.href = "/dashboard";

    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social auth
  const handleSocialAuth = (provider) => {
    window.location.href = `${API_BASE_URL}/auth/${provider}`;
  };

  // Handle password reset
  const handleForgotPassword = () => {
    // Navigate to forgot password page or open modal
    window.location.href = "/forgot-password";
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxW="xl" centerContent m="55px">
      {/* Logo Container */}
      <Box mb="30px">
        <Image
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          width="50px"
          alt="ASOS Logo"
        />
      </Box>

      {/* Tabs */}
      <Box display="flex" width="100%" mb="20px">
        <Box
          flex="1"
          textAlign="center"
          p="15px"
          fontWeight="bold"
          cursor="pointer"
          borderBottom={value === "first" ? "2px solid #4A5568" : "none"}
          onClick={() => setValue("first")}
        >
          JOIN
        </Box>
        <Box width="1px" height="35px" bg="grey" my="auto" />
        <Box
          flex="1"
          textAlign="center"
          p="15px"
          fontWeight="bold"
          cursor="pointer"
          borderBottom={value === "second" ? "2px solid #4A5568" : "none"}
          onClick={() => setValue("second")}
        >
          SIGN IN
        </Box>
      </Box>

      {/* Tab Content */}
      <Box width="100%" p="20px" bg="white" borderRadius="md" boxShadow="md">
        {value === "first" ? (
          <form onSubmit={handleSignup}>
            <Box display="flex" gap="4" mb="4">
              <Box flex="1">
                <Text as="label" display="block" mb="2">FIRST NAME:</Text>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  size="md"
                />
                {errors.firstName && (
                  <Text color="red.500" fontSize="sm">{errors.firstName}</Text>
                )}
              </Box>

              <Box flex="1">
                <Text as="label" display="block" mb="2">LAST NAME:</Text>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  size="md"
                />
                {errors.lastName && (
                  <Text color="red.500" fontSize="sm">{errors.lastName}</Text>
                )}
              </Box>
            </Box>

            <Box mb="4">
              <Text as="label" display="block" mb="2">EMAIL ADDRESS:</Text>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                size="md"
              />
              {errors.email && (
                <Text color="red.500" fontSize="sm">{errors.email}</Text>
              )}
            </Box>

            {/* Date of Birth field */}
            <Box mb="4" color={"grey"}>
              <Text as="label" display="block" mb="2">DATE OF BIRTH:</Text>
              <Input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                size="md"
              />
              {errors.dob && (
                <Text color="red.500" fontSize="sm">{errors.dob}</Text>
              )}
            </Box>

            {/* Interested In field */}
            {/* Interested In field */}
            <Box mb="4">
              <Text as="label" display="block" mb="2">
                INTERESTED IN:
              </Text>
              <div style={{ display: "flex", gap: "10px" }}>
                <label>
                  <input
                    type="radio"
                    name="interestedIn"
                    value="MEN"
                    checked={interestedIn === "MEN"}
                    onChange={(e) => setInterestedIn(e.target.value)}
                  />
                  Men
                </label>
                <label>
                  <input
                    type="radio"
                    name="interestedIn"
                    value="WOMEN"
                    checked={interestedIn === "WOMEN"}
                    onChange={(e) => setInterestedIn(e.target.value)}
                  />
                  Women
                </label>
              </div>
              {errors.interestedIn && (
                <Text color="red.500" fontSize="sm">
                  {errors.interestedIn}
                </Text>
              )}
            </Box>



            <Box mb="4">
              <Text as="label" display="block" mb="2">PASSWORD:</Text>
              <Box position="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password (8+ characters)"
                  size="md"
                />
                <Button
                  h="1.75rem"
                  size="sm"
                  position="absolute"
                  right="8px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Box>
              {errors.password && (
                <Text color="red.500" fontSize="sm">{errors.password}</Text>
              )}
            </Box>

            <Box mb="6">
              <Text as="label" display="block" mb="2">CONFIRM PASSWORD:</Text>
              <Box position="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  size="md"
                />
                <Button
                  h="1.75rem"
                  size="sm"
                  position="absolute"
                  right="8px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Box>
              {errors.confirmPassword && (
                <Text color="red.500" fontSize="sm">{errors.confirmPassword}</Text>
              )}
            </Box>

            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              p="15px"
              isLoading={isLoading}
            >
              JOIN
            </Button>

            <Text fontSize="sm" textAlign="center" mt="4" color="gray.500">
              By creating an account, you agree to our Terms & Conditions and Privacy Policy
            </Text>

            <Box my="6">
              <Box display="flex" alignItems="center" my="4">
                <Box flex="1" h="1px" bg="gray.300" />
                <Text mx="4" fontWeight="medium" color="gray.500">
                  OR JOIN WITH
                </Text>
                <Box flex="1" h="1px" bg="gray.300" />
              </Box>

              <Box display="flex" gap="4" justifyContent="center">
                <Button leftIcon={<FcGoogle />} variant="outline" onClick={() => handleSocialAuth("google")}>
                  Google
                </Button>
                <Button leftIcon={<FaMicrosoft />} variant="outline" onClick={() => handleSocialAuth("microsoft")}>
                  Facebook
                </Button>
                <Button leftIcon={<FaApple />} variant="outline" onClick={() => handleSocialAuth("apple")}>
                  Apple
                </Button>
              </Box>
            </Box>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <Box mb="4">
              <Text as="label" display="block" mb="2">EMAIL ADDRESS:</Text>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                size="md"
              />
              {errors.email && (
                <Text color="red.500" fontSize="sm">{errors.email}</Text>
              )}
            </Box>

            <Box mb="6">
              <Text as="label" display="block" mb="2">PASSWORD:</Text>
              <Box position="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  size="md"
                />
                <Button
                  h="1.75rem"
                  size="sm"
                  position="absolute"
                  right="8px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Box>
              {errors.password && (
                <Text color="red.500" fontSize="sm">{errors.password}</Text>
              )}
            </Box>

            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              p="15px"
              isLoading={isLoading}
            >
              SIGN IN
            </Button>

            <Button
              variant="ghost"
              width="100%"
              mt="4"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </Button>

            <Box my="6">
              <Box display="flex" alignItems="center" my="4">
                <Box flex="1" h="1px" bg="gray.300" />
                <Text mx="4" fontWeight="medium" color="gray.500">
                  OR SIGN IN WITH
                </Text>
                <Box flex="1" h="1px" bg="gray.300" />
              </Box>

              <Box display="flex" gap="4" justifyContent="center">
                <Button leftIcon={<FcGoogle />} variant="outline" onClick={() => handleSocialAuth("google")}>
                  Google
                </Button>
                <Button leftIcon={<FaMicrosoft />} variant="outline" onClick={() => handleSocialAuth("microsoft")}>
                  Facebook
                </Button>
                <Button leftIcon={<FaApple />} variant="outline" onClick={() => handleSocialAuth("apple")}>
                  Apple
                </Button>
              </Box>
            </Box>

            <Text fontSize="xl" cursor="pointer" color="black" _hover={{ color: "gray.400", textDecoration: "underline" }}>
              Where Has Twitter Gone?
            </Text>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default LoginSignup;