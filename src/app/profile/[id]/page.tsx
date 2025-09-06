import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2>It is a profile</h2>
      <hr />
      <h3>
        Profile page is:{" "}
        <span className="text-white font-semibold bg-orange-500">
          {params.id}
        </span>
      </h3>
    </div>
  );
};

export default UserProfile;
