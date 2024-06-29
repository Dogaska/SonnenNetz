interface SocialButtonProps {
  logo: string; // Path to the logo image
  altText: string; // Alternative text for the logo
  buttonText: string; // Text to display on the button
  onClick: () => void; // Function to execute on button click
}

const SocialButton: React.FC<SocialButtonProps> = ({
  logo,
  altText,
  buttonText,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
    >
      <img src={logo} alt={altText} className="h-6" />
      {buttonText}
    </button>
  );
};

const SocialLogin: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log("Log in with Google");
    // Integration with Google Login API
  };

  const handleMicrosoftLogin = () => {
    console.log("Log in with Microsoft");
    // Integration with Microsoft Login API
  };

  const handleAppleLogin = () => {
    console.log("Log in with Apple");
    // Integration with Apple Login API
  };

  return (
    <div className="space-y-3">
      <SocialButton
        logo="src/assets/images/gmail.svg"
        altText="Google"
        buttonText="Continue with Google"
        onClick={handleGoogleLogin}
      />
      <SocialButton
        logo="src/assets/images/Microsoft_logo.svg"
        altText="Microsoft"
        buttonText="Continue with Microsoft"
        onClick={handleMicrosoftLogin}
      />
      <SocialButton
        logo="src/assets/images/apple.svg"
        altText="Apple"
        buttonText="Continue with Icloud"
        onClick={handleAppleLogin}
      />
    </div>
  );
};

export { SocialLogin };
