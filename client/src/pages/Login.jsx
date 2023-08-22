import { Canvas } from "./"
import { useForm, useApiData } from "../hooks"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const submitData = {
        method: "POST",
        baseurl: "http://localhost:5273",
        url: "/api/login",
    }

    const { data, error, isLoading, fetchData } = useApiData(submitData)

    const initialValue = {
        username: "",
        password: ""
    }

    const onSubmit = async (formData) => {
        await fetchData(formData)
        if (data) {
            localStorage.setItem('token', data.token)
            navigate('/')
        }

        console.log(data)
    }

    const { handleInputChange, useHandleSubmit } = useForm(initialValue, onSubmit)

    return ( 
        <>
            <Canvas>
                <h2 className="mt-8 text-4xl text-center"> Login Page</h2>
                <form className="flex flex-col w-full h-auto p-8 bg-shadow gap-y-4 " onSubmit={useHandleSubmit}>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="username" className="capitalize">username</label>
                        <input id="username" name="username" type="text" className="px-3 py-2 text-deep" onChange={handleInputChange}/>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="password" className="capitalize">password</label>
                        <input id="password" name="password" type="text" className="px-3 py-2 text-deep" onChange={handleInputChange}/>
                    </div>
                    <button className="w-full px-3 py-2 mt-4 text-2xl bg-silver text-deep" type="submit">SUBMIT</button>
                </form>
                {error && <h4 className="">{error}</h4>}
            </Canvas>
        </>
     );
}
 
export default Login;