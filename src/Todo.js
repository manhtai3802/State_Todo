import { useState } from "react";

function Todo() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  // const [jobs, setJobs] = useState(() => {
  //   // const storageJobs = JSON.parse(localStorage.getItem("jobs")) ?? [];
  //   // return storageJobs;
  // });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      // const jsonJobs = JSON.stringify(newJob);
      // localStorage.setItem("jobs", jsonJobs);

      return newJob;
    });
    setJob("");
  };

  function handleDelete(index) {
    setJobs(() => {
      const newJobs = jobs.filter((value, indexValue) => indexValue !== index);

      // const jsonJobs = JSON.stringify(newJobs);
      // localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
  }
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
