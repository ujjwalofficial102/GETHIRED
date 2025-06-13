import { motion } from "framer-motion";
import LatestjobCards from "./LatestjobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5 ">
        {allJobs?.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs?.slice(0, 6).map((job) => (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={job?._id}
            >
              <LatestjobCards key={job?._id} job={job} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
