import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormTitle from "../components/Elements/FormTitle";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import Select from "react-select";
import {
  certificationOptions,
  educationOptions,
  industryOptions,
  sectorOptions,
  skillOptions,
} from "../utils/SelectOptions";
import { toast } from "react-toastify";
import { applyForJob } from "../redux/features/jobSlice";
import { uploadApplication } from "../redux/features/cvSlice";

function ApplyJob() {
  const { jobId } = useParams();
  const [data, setData] = useState({});
  const [cv, setCv] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputFile = (e) => {
    setCv(e.target.files[0]);
  };

  const handleSelectChangeForIndustry = (option) => {
    setData((prev) => ({ ...prev, industry: option.value }));
  };

  const handleSelectChangeForSector = (option) => {
    setData((prev) => ({ ...prev, sector: option.value }));
  };

  const handleSelectChangeForSkill = (options) => {
    setData((prev) => ({
      ...prev,
      skills: options.map((option) => option.value),
    }));
  };

  const handleSelectChangeForEducation = (option) => {
    setData((prev) => ({ ...prev, education: option.value }));
  };

  const handleSelectChangeForCertification = (options) => {
    setData((prev) => ({
      ...prev,
      certifications: options.map((option) => option.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, JSON.stringify(data[key]));
    }
    formData.append("cv", cv);
    // console.log(formData);
    dispatch(uploadApplication(formData));
    formData.append("jobId", JSON.stringify(jobId));
    dispatch(applyForJob(formData));
    toast.success("Submitted successfully!");
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-10 mb-32">
      <form onSubmit={handleSubmit}>
        <FormTitle title={"Apply for the job"} />
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
          id={"currentSalary"}
          name={"currentSalary"}
          label={"Current salary"}
          required={true}
          type={"text"}
          onChange={handleInputChange}
        />
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
            Education
          </label>
          <Select
            name="education"
            options={educationOptions}
            className="basic-single"
            classNamePrefix="select"
            placeholder="Degree"
            onChange={handleSelectChangeForEducation}
          />
        </div>
        <Input
          id={"major"}
          name={"major"}
          label={"Major"}
          required={true}
          type={"text"}
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-center">
          <Button
            bgColor={"bg-blue-500"}
            hoverColor={"hover:bg-blue-600"}
            text={"Apply"}
            textColor={"text-white"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
}

export default ApplyJob;
