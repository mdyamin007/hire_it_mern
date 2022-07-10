import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllCompanies } from "../../../redux/features/companiesSlice";
import { createAJobPost } from "../../../redux/features/jobSlice";
import Button from "../../Elements/Button";
import FormTitle from "../../Elements/FormTitle";
import Input from "../../Elements/Input";
import Select from "react-select";
import { certificationOptions, industryOptions, sectorOptions, skillOptions } from "../../../utils/SelectOptions";

const AddNewJob = ({ setOpenAddModal }) => {
    const [newJobPost, setNewJobPost] = useState();
    const [companiesOptions, setCompaniesOptions] = useState();

    const dispatch = useDispatch();
    const { companies } = useSelector((state) => state.companies);

    useEffect(() => {
        dispatch(getAllCompanies());
    }, []);

    useEffect(() => {
        if (companies) {
            setCompaniesOptions(
                companies.map((company) => ({
                    label: company.companyName,
                    value: company._id,
                }))
            );
        }
    }, [companies]);

    const handleInputChange = (e) => {
        if (e.target.value) {
            setNewJobPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const handleSelectChangeForCompany = (option) => {
        setNewJobPost((prev) => ({ ...prev, companyId: option.value }));
    };

    const handleSelectChangeForIndustry = (option) => {
        setNewJobPost((prev) => ({ ...prev, industry: option.value }));
    };

    const handleSelectChangeForSector = (option) => {
        setNewJobPost((prev) => ({ ...prev, sector: option.value }));
    };

    const handleSelectChangeForSkill = (options) => {
        setNewJobPost((prev) => ({ ...prev, skills: options.map(option => option.value) }))
    }

    const handleSelectChangeForCertification = (options) => {
        setNewJobPost(prev => ({...prev, certifications: options.map(option => option.value)}))
    }

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
                <div className="my-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2">
                        Company name
                    </label>
                    <Select
                        options={companiesOptions}
                        name={"companyId"}
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={handleSelectChangeForCompany}
                    />
                </div>
                <Input
                    id={"location"}
                    label={"Location"}
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
                <div className="my-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2">
                        Industry
                    </label>
                    <Select
                        options={industryOptions}
                        name={"industry"}
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={handleSelectChangeForIndustry}
                    />
                </div>
                <div className="my-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2">
                        Sector
                    </label>
                    <Select
                        options={sectorOptions}
                        name={"sector"}
                        className="basic-single"
                        classNamePrefix="select"
                        onChange={handleSelectChangeForSector}
                    />
                </div>
                <Input
                    id={"subSector"}
                    label={"Sub sector"}
                    name={"subSector"}
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

                <div className="my-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2">
                        Skills
                    </label>
                    <Select
                        isMulti
                        name="skills"
                        options={skillOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder="Communication, Management, Leadership..."
                        onChange={handleSelectChangeForSkill}
                    />
                </div>
                <div className="my-4">
                    <label className="block text-gray-900 text-sm font-bold mb-2">
                        Certifications
                    </label>
                    <Select
                        isMulti
                        name="certifications"
                        options={certificationOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder=""
                        onChange={handleSelectChangeForCertification}
                    />
                </div>
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
