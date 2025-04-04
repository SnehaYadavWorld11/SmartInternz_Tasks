import React from "react";
import TextUpdater from "./TextUpdater";
import Form from "./Form";
import UserCard from "./UserCard";
import Button from "./Button";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <div className="p-6 space-y-6 max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-900">React.js Assignment</h1>
      <TextUpdater />
      <Form />
      <UserCard name="Sneha Yadav" email="snehayadav@gmail.com" />
      <Button />
      <LoginForm />
    </div>
  );
};

export default App;