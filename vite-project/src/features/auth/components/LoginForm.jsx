import React from 'react';

function LoginForm() {
  return (
    <form>
      <label>
        Username
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;
