import React from "react";
import { UserContext } from "./context";
import Card from "./context";

export default function CreateAccount(){
  const[show,setShow] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [warn, setWarn] = React.useState('');
  const ctx = React.useContext(UserContext)

  function validate (field, label) {
    if (!field) {
      setWarn(label.toUpperCase() + ' IS A REQUIRED FIELD');
      setTimeout(() => setWarn(''), 3000);
      return false;
    }
    return true;
  }

  function chkAccount(email) {
    let act = ctx.users.filter(item => item.email === email);
    return act.length;
  }

  function handleCreate(){
      if(!validate(name, 'name')) return;
      if(!validate(email,'email')) return;
      if(!validate(password, 'password')) return;
      if(chkAccount(email) > 0) {
        setWarn('A user account already exists for this Email address');
        setTimeout(() => setWarn(''), 3000);
        return;
      } 

      if (password.length < 8) {
        setWarn('PASSWORD MUST BE A MIN OF 8 CHARACTERS');
        setTimeout(() => setWarn(''), 3000);
        return;
      } 
      ctx.actions.push({name,email,action:"Create Account",stamp: new Date().toString()});
      ctx.users.push({name,email,password,balance: 100});
      setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor= "secondary"
      txtcolor = "light"
      header="Create Account"
      warn = {warn}
      body={show ? (
        <>
        <h1>Open an account with the Bad Bank and Recieve $100!</h1>
        <div style={{maxWidth: "30rem"}}>
        <div>Name</div>
        <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e =>setName(e.currentTarget.value)} required/>
        <div>Email</div>
        <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e =>setEmail(e.currentTarget.value)} required/>
        <div>Password</div>
        <input type="input" minLength="8" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} required />
        <div id="passError" value="test"></div>
         <button type="submit" disabled={!name && !email && !password} id="create" className="btn btn-dark" onClick={handleCreate} style={{margin: "10px"}}>Create Account</button>  
         </div>  
        </>
      ):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Another Account</button>
        <button type="submit" className="btn btn-dark" onClick={event => window.location.href='#/login/'} style={{margin: "10px"}}>Login</button>
        </>
      )}
    />
  )
}