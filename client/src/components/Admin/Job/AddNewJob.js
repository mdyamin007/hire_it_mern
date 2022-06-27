import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCompanies } from "../../../redux/features/companiesSlice";
import { createAJobPost } from "../../../redux/features/jobSlice";
import Button from "../../Elements/Button";
import FormTitle from "../../Elements/FormTitle";
import Input from "../../Elements/Input";

const AddNewJob = ({ setOpenAddModal }) => {
    const [newJobPost, setNewJobPost] = useState();

    const dispatch = useDispatch();
    const { companies } = useSelector((state) => state.companies);

    useEffect(() => {
        dispatch(getAllCompanies())
    }, []);

    const handleInputChange = (e) => {
        if (e.target.value) {
            setNewJobPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const handleSubmit = async () => {
        if (newJobPost) {
            try {
                await dispatch(createAJobPost(newJobPost));
                window.location.reload();
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
            }
        }
    };

    return (
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }}>
            <div className="relative container mx-auto bg-white p-20 rounded z-40">
                <p
                    className="absolute top-2 right-3 text-2xl cursor-pointer"
                    onClick={() => setOpenAddModal(false)}
                >
                    X
                </p>
                <FormTitle title={"Add new job post"} />
                <Input
                    id={"position"}
                    label={"Position"}
                    name={"position"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"location"}
                    label={"Company address"}
                    name={"location"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"jobType"}
                    label={"Job type"}
                    name={"jobType"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"jobDescription"}
                    label={"Job description"}
                    name={"jobDescription"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"sector"}
                    label={"Sector"}
                    name={"sector"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"subSector"}
                    label={"Sub sector"}
                    name={"subSector"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"industry"}
                    label={"Industry"}
                    name={"industry"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"consultantName"}
                    label={"Consultant/HR name"}
                    name={"consultantName"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"email"}
                    label={"Email"}
                    name={"email"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"salaryRange"}
                    label={"Salary range"}
                    name={"salaryRange"}
                    required={false}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Button
                    bgColor={"bg-green-500"}
                    hoverColor={"bg-green-600"}
                    text={"Create"}
                    textColor={"text-white"}
                    type={"button"}
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};
export default AddNewJob;
