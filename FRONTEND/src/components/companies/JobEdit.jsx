import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { JOBS_URL } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";


function JobEditPage() {
  const navigation = useNavigate();
  const params = useParams();
  const jobId = params.id;
  const deleteJobHandler = async () => {
    try {
      const response = await axios.delete(`${JOBS_URL}/delete/${jobId}`, {
        withCredentials: true,
      });
      if (response.status === 204) {
        // console.log("Job deleted successfully");
        toast.success("Job deleted successfully");
        navigation("/admin/jobs");
      }
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };  
  return (
    <>
      <div className="flex gap-4 mt-6">
        <Button
          onClick={deleteJobHandler}
          variant="destructive"
          className="bg-red-600"
        >
          Delete Job
        </Button>
      </div>
    </>
  );
}
export default JobEditPage;
