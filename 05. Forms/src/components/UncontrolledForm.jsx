

export default function UncontrolledForm() {

    const submitHandler = (event) => {
        event.preventDefault();

        console.log(event.currentTarget);

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('username'));
        console.log(formData.get('password'));
    }

    return (
        <>
        <h1>Uncontrolled Form</h1>

        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" />
            </div>
            <div>
            <input type="submit" value="Register"/>
         
            </div>
        </form>
        </>
    );
}