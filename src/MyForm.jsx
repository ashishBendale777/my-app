
const MyForm = () => {


    const handleForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const studemt = Object.fromEntries(formData.entries())
        console.log("DATA", studemt)
    }
    return (
        <div>
            <h4>Student Information</h4>
            <form onSubmit={handleForm}>
                <div>
                    <label>Student Name</label>
                    <input type="text" name="sname" id="" />
                </div>
                <div>
                    <label>Student Email</label>
                    <input type="email" name="semail" id="" />
                </div>
                <div>
                    <label>Student Mobile</label>
                    <input type="tel" name="smobno" id="" />
                </div>

                <div>
                    <label>Student Gender</label>
                    <input type="radio" name="sgender" id="m" value="Male" />
                    <label htmlFor="m">Male</label>

                    <input type="radio" name="sgender" id="f" value="Female" />
                    <label htmlFor="f">Female</label>
                </div>
                <div>
                    <label>Select Course</label>
                    <select name="scourse" id="">
                        <option>Select</option>
                        <option value="MCA">MCA</option>
                        <option value="BCA">BCA</option>
                        <option value="Msc">Msc</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}

export default MyForm