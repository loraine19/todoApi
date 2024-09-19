import React from "react";
import Router from "next/router";

const UserForm = () => {
  return (
    <form>
      <input type="text" name="user-userName" placeholder="Name..." />
      <input type="email" name="user-email" placeholder="Email..." />
      <input type="submit" value="Enregistrer" />
    </form>
  );
};

export default UserForm;