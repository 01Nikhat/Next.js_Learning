import Link from "next/link";
import LoginForm from "../../components/LoginForm";


const LoginPage = () => {


return (

<div 
className="
min-h-screen 
flex 
items-center 
justify-center 
bg-gradient-to-br 
from-blue-100 
to-purple-100
px-4
"
>


<div
className="
w-full
max-w-md
bg-white
rounded-2xl
shadow-xl
p-8
"
>


<h1
className="
text-3xl
font-bold
text-center
text-gray-800
mb-2
"
>
Welcome Back
</h1>


<p
className="
text-center
text-gray-500
mb-8
"
>
Login to your account
</p>



<LoginForm />



<p
className="
mt-6
text-center
text-gray-600
"
>

Don't have an account?{" "}


<Link
href="/register"
className="
text-blue-600
font-semibold
hover:underline
"
>

Register

</Link>


</p>


</div>


</div>


)

}


export default LoginPage;