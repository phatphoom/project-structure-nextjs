// import InputForm from "@/materials/InputForm";
// import TextLink from "@/materials/TextLink";
// import ButtonForm from "@/materials/ButtonForm";
// import Divider from "@/materials/Divider";
import { InputForm, TextLink, ButtonForm, Divider } from "@/materials";
import React from "react";
function LoginForm() {
  return (
    <div className="border w-100 h-100">
      <h2 className="text-2xl font-semibold">Login To your Account</h2>
      <TextLink
        label={"don't have an Account"}
        link={"/regsiter"}
        word="Resiger"
      />
      <TextLink link={"/"} word="back to home" />
      <InputForm label="email" type="email" placeholder="enter email" />
      <InputForm
        label="password"
        type="password"
        placeholder="enter password"
        showPasswordToggle={true}
      />
      <TextLink link={"/forgetpassword"} word="forgot password?" />
      <ButtonForm />
      <Divider text="OR" />
      <ButtonForm />
    </div>
  );
}

export default LoginForm;
