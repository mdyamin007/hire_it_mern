import { useState } from "react";
import Input from "../Elements/Input";
import FormTitle from "../Elements/FormTitle";
import Button from "../Elements/Button";
import Select from "react-select";
import { useDispatch } from "react-redux"
import { uploadApplication } from "../../redux/features/cvSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const ApplicationForm = () => {

    const [data, setData] = useState({})
    const [cv, setCv] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const industryOptions = [
        { value: "business_services", label: "Business Services" },
        {
            value: "energy_and_natural_resources",
            label: "Energy & Natural Resources",
        },
        { value: "financial_services", label: "Financial Services" },
        { value: "fmcg", label: "FMCG (Fast Moving Consumer Goods)" },
        { value: "healthcare", label: "Healthcare" },
        { value: "industrial_manufacturing", label: "Industrial / Manufacturing" },
        { value: "insurance", label: "Industrial / Manufacturing" },
        { value: "leisure_travel_tourism", label: "Leisure, Travel & Tourism" },
        { value: "life_science", label: "Life Science" },
        { value: "media_and_agency", label: "Media & Agency" },
        { value: "not_for_profit", label: "Not For Profit" },
        { value: "professional_services", label: "Professional Services" },
        { value: "property", label: "Property" },
        { value: "public_sector", label: "Public Sector" },
        { value: "retail", label: "Retail" },
        { value: "technology_and_telecoms", label: "Technology & Telecoms" },
        { value: "transport_and_distribution", label: "Transport & Distribution" },
    ];

    const handleInputChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleInputFile = (e) => {
        setCv(e.target.files[0])
    }

    const handleSelectChange = (e) => {
        setData(prev => ({ ...prev, industry: e.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        const formData = new FormData()
        for (let key in data) {
            formData.append(key, data[key])
        }
        formData.append("cv", cv);
        dispatch(uploadApplication(formData))
        toast.success("Submitted successfully!")
        navigate("/")
    }

    return (
        <div className="container mx-auto mt-10 mb-32">
            <form onSubmit={handleSubmit}>
                <FormTitle title={"Application form"} />
                <Input
                    id={"firstName"}
                    name={"firstName"}
                    label={"First name"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"lastName"}
                    name={"lastName"}
                    label={"Last name"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"email"}
                    name={"email"}
                    label={"Email"}
                    required={true}
                    type={"email"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"phone"}
                    name={"phone"}
                    label={"Phone"}
                    required={true}
                    type={"phone"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"cv"}
                    name={"cv"}
                    label={"CV"}
                    required={true}
                    type={"file"}
                    onChange={handleInputFile}
                />
                <Input
                    id={"country"}
                    name={"country"}
                    label={"Country"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"city"}
                    name={"city"}
                    label={"City"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"nationality"}
                    name={"nationality"}
                    label={"Nationality"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <div className="my-4">
                    <label
                        className="block text-gray-900 text-sm font-bold mb-2">Industry</label>
                    <Select
                        options={industryOptions}
                        name={"industry"}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleSelectChange}
                    />
                </div>
                <Input
                    id={"subIndustry"}
                    name={"subIndustry"}
                    label={"Sub Industry"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"sector"}
                    name={"sector"}
                    label={"Sector"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"subSector"}
                    name={"subSector"}
                    label={"Sub sector"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"currentSalary"}
                    name={"currentSalary"}
                    label={"Current salary"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <Input
                    id={"certifications"}
                    name={"certifications"}
                    label={"Certifications"}
                    required={true}
                    type={"text"}
                    onChange={handleInputChange}
                />
                <div className="flex items-center justify-center">
                    <Button bgColor={"bg-blue-500"} hoverColor={"hover:bg-blue-600"} text={"Apply"} textColor={"text-white"} type={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
