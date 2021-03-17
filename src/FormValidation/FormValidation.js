import { useForm } from 'react-hook-form'


export default function FormValidation() {

    const { register, errors, handleSubmit } = useForm()
    const Onsubmission = val => {
        // e.preventDefault()
        // console.log(e.target['fname'].value)
        console.log(val ,'value')

    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(Onsubmission)}>
                <div>
                    <label>First Name</label>
                    <span><input type='text' name='fname' ref={register({ required: { value: true, message: 'Firts Name is required' }, maxLength: { value: 5, message: 'max length exceded' }, minLength: { value: 2, message: 'min lenghth is 2' } })} /></span>
                    {errors.fname && (<span style={{ color: 'red' }}>{errors.fname.message}</span>)}
                </div>
                <div>
                    <label>Last Name</label>
                    <span><input type='text' name='sname' ref={register({ required: { value: true, message: 'Last Name is required' }, maxLength: { value: 5, message: 'max length exceded' }, minLength: { value: 2, message: 'min lenghth is 2' } })} /></span>
                    {errors.sname && (<span style={{ color: 'red' }}>{errors.sname.message}</span>)}
                </div>

                <div>
                    <label>Email</label>
                    <span><input type='text' name='email' ref={register({ required: { value: true, message: 'Email is required' }, pattern: { value: /^[\w\.-]+@[a-zA-z]+\.([a-zA-Z\.]{2,4})*[a-zA-Z]{2,4}$/, message: 'Email is Not valid' } })} /></span>
                    {errors.email && (<span style={{ color: 'red' }}>{errors.email.message}</span>)}
                </div>
                <div>
                    <label>Password</label>
                    <span><input type='password' name='password' ref={register({ required: { value: true, message: 'password is required' }, maxLength: { value: 5, message: 'max length exceded' }, minLength: { value: 2, message: 'min lenghth is 2' } })} /></span>
                    {errors.password && (<span style={{ color: 'red' }}>{errors.password.message}</span>)}
                </div>

                <div>
                    <label>Gender</label>
                    <select name='gender' ref={register({ required: { value: true, message: 'this is needed' } })}>
                        <option value=''></option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>

                    {errors.gender && (<span style={{ color: 'red' }}>{errors.gender.message}</span>)}
                </div>

                <div>
                    <label>Available</label>
                    <input type='radio' name='available' value='Yes' ref={register({ required: { value: true, message: 'this is needed' } })}/> Yes
                    <input type='radio' name='available' value='No' ref={register({ required: { value: true, message: 'this is needed' } })}/> No

                    {errors.available && (<span style={{ color: 'red' }}>{errors.available.message}</span>)}
                </div>

                <div>
                    <label>Checkbox</label>
                    <input type='checkbox' name='check' value='Yes' ref={register({ required: { value: true, message: 'this is needed' } })}/> Yes
                    <input type='checkbox' name='check' value='No' ref={register({ required: { value: true, message: 'this is needed' } })}/> No

                    {errors.check && (<span style={{ color: 'red' }}>{errors.check.message}</span>)}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}