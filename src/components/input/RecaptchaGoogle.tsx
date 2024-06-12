export default function RecaptchaGoogle() {
  return (
    <div
      className="g-recaptcha"
      data-sitekey={process.env.NEXT_PUBLIC_API_GOOGLE}
      data-action="LOGIN"
    ></div>
  );
}
