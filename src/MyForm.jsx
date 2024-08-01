import { useState } from "react"

const MyForm = () => {

    const [studName, setstudName] = useState("")
    const [studEmail, setstudEmail] = useState(" ")
    const [studMob, setstudMob] = useState("")
    const [stidGender, setstidGender] = useState("")
    const [studCourse, setstudCourse] = useState("")

    const handleForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const studemt = Object.fromEntries(formData.entries())
        console.log("DATA", studemt)
        ressetForm()
    }

    function ressetForm() {
        setstudName("")
        setstudEmail("")
        setstudMob("")
    }

    return (
        <div>
            <h4>Student Information</h4>
            <form onSubmit={handleForm}>
                <div>
                    <label>Student Name</label>
                    <input type="text"
                        value={studName}
                        onChange={(e) => setstudName(e.target.value)}
                        name="sname" id="" />
                </div>
                <div>
                    <label>Student Email</label>
                    <input type="email"
                        value={studEmail}
                        onChange={(e) => setstudEmail(e.target.value)}
                        name="semail" id="" />
                </div>
                <div>
                    <label>Student Mobile</label>
                    <input type="tel"
                        value={studMob}
                        onChange={(e) => setstudMob(e.target.value)}
                        name="smobno" id="" />
                </div>

                <div>
                    <label>Student Gender</label>
                    <input type="radio" name="sgender" onChange={(e) => setstidGender(e.target.value)} id="m" value="Male" />
                    <label htmlFor="m">Male</label>

                    <input type="radio" name="sgender"
                        onChange={(e) => setstidGender(e.target.value)}
                        id="f" value="Female" />
                    <label htmlFor="f">Female</label>
                </div>
                <div>
                    <label>Select Course</label>
                    <select onChange={(e) => setstudCourse(e.target.value)} name="scourse" id="">
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