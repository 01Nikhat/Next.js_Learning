"use client";

import { loginAction } from "../actions/auth";

const LoginForm = () => {


return (

<form 
action={loginAction}
className="space-y-5"
>


<div>

<label
htmlFor="email"
className="
block
text-sm
font-medium
text-gray-700
mb-1
"
>
Email Address
</label>


<input

id="email"

type="email"

name="email"

placeholder="example@gmail.com"

required

className="
w-full
px-4
py-3
border
border-gray-300
rounded-lg
text-gray-900
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-transparent
transition
"

/>

</div>




<div>

<label
htmlFor="password"
className="
block
text-sm
font-medium
text-gray-700
mb-1
"
>
Password
</label>


<input

id="password"

type="password"

name="password"

placeholder="Enter password"

required

className="
w-full
px-4
py-3
border
border-gray-300
rounded-lg
text-gray-900
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-transparent
transition
"

/>


</div>




<button

type="submit"

className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
font-semibold
hover:bg-blue-700
active:scale-95
transition
duration-200
"

>

Login

</button>



</form>

)

}


export default LoginForm;